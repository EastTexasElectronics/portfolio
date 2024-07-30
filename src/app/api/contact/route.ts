import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';

const prisma = new PrismaClient();

if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY is not set in the environment variables');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    reason?: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json() as ContactFormData;
        const { name, email, reason, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
        }

        // Save to database
        await prisma.contact.create({
            data: {
                name,
                email,
                reason: reason ?? 'Not specified',
                message,
            },
        });

        // Send email to user
        const userMsg: MailDataRequired = {
            to: email,
            from: 'contact@easttexaselectronics.com', // Your verified SendGrid sender
            subject: 'Thank you for contacting East Texas Electronics',
            text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nEast Texas Electronics Team`,
        };

        // Send email to admin
        const adminMsg: MailDataRequired = {
            to: 'contact@easttexaselectronics.com',
            from: 'contact@easttexaselectronics.com', // Your verified SendGrid sender
            subject: 'New Contact Form Submission',
            text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nReason: ${reason ?? 'Not specified'}\nMessage: ${message}`,
        };

        await sgMail.send(userMsg);
        await sgMail.send(adminMsg);

        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error processing form:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}