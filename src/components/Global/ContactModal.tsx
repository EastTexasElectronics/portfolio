'use client'

import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {zodResolver} from '@hookform/resolvers/zod'
import * as z from 'zod'
import {Button} from '../../components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../components/ui/form'
import {Input} from '../../components/ui/input'
import {Textarea} from '../../components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../components/ui/select'
import {X} from 'lucide-react'
import {toast} from '@/components/ui/use-toast'

/**
 * Zod schema for form validation
 */
const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    reason: z.string().optional(),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters.',
    }),
})

/**
 * Predefined reasons for contact
 */
const reasons = [
    'SVG 2 Liquid Support',
    'FTG Support',
    'General Inquiry',
    'Employment Opportunity',
    'Other',
] as const

/**
 * Props for the ContactModal component
 */
type ContactModalProps = {
    // Add any props if needed in the future
}

/**
 * ContactModal Component
 *
 * This component renders a button that, when clicked, opens a modal with a contact form.
 * The form includes fields for name, email, reason for contact, and a message.
 * On submission, it sends the form data to an API endpoint.
 */
const ContactModal: React.FC<ContactModalProps> = () => {
    // State to control the visibility of the modal
    const [isOpen, setIsOpen] = useState(false)
    // State to handle form submission status
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Initialize the form with react-hook-form and zod resolver
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            reason: '',
            message: '',
        },
    })

    /**
     * Handles form submission
     * @param values - The form values
     */
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        try {
            const response = await axios.post('/api/contact', values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log('Form submitted successfully', response.data);
            toast({
                title: "Success!",
                description: "Your message has been sent. I will get back to you as soon as possible.",
                variant: "default",
            });
            console.log('Toast called');
            setIsOpen(false);
            form.reset();
        } catch (error) {
            console.error('Error submitting form', error)
            toast({
                title: "Error",
                description: "There was a problem sending your message. Please try again or email me at Contact@EastTexasElectronics.com.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    /**
     * Closes the modal and resets the form
     */
    const handleModalClose = () => {
        setIsOpen(false)
        form.reset()
    }

    return (
        <>
            {/* Button to open the contact modal */}
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed right-4 bottom-4 bg-gradient-to-bl from-fuchsia-600 via-violet-600 to-blue-600 rounded-full cursor-pointer hover:opacity-90 transition-opacity duration-200 border-r-10 text-white font-extrabold shadow-lg z-40"
                aria-label="Open contact form"
            >
                Contact Me
            </Button>

            {/* Modal overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 z-50"
                    onClick={handleModalClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-modal-title"
                >
                    {/* Modal content */}
                    <div
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-neutral-200 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={handleModalClose}
                            className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-200"
                            aria-label="Close contact form"
                        >
                            <X size={24}/>
                        </button>

                        {/* Modal title */}
                        <h2 id="contact-modal-title"
                            className="text-2xl text-center font-bold mb-4 text-neutral-300">Contact Us</h2>

                        {/* Description with mailto link */}
                        <p className="text-neutral-300 mb-4 text-center">
                            Fill out this form or email me directly at{' '}
                            <a href="mailto:contact@easttexaselectronics.com" className="text-blue-400 hover:underline">
                                contact@easttexaselectronics.com
                            </a>
                        </p>

                        {/* Contact form */}
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                {/* Name field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-300">Name *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your Name"
                                                    {...field}
                                                    className="bg-gray-700 text-neutral-200 border-gray-600 rounded-md"
                                                    aria-required="true"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400"/>
                                        </FormItem>
                                    )}
                                />

                                {/* Email field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-300">Email *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your Email"
                                                    {...field}
                                                    className="bg-gray-700 text-neutral-200 border-gray-600 rounded-md"
                                                    aria-required="true"
                                                    type="email"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400"/>
                                        </FormItem>
                                    )}
                                />

                                {/* Reason for contact field */}
                                <FormField
                                    control={form.control}
                                    name="reason"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-300">Reason for Contact
                                                (Optional)</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger
                                                        className="bg-gray-700 text-neutral-200 border-gray-600 rounded-md">
                                                        <SelectValue placeholder="Select a reason"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="bg-gray-700 text-neutral-200 border-gray-600">
                                                    {reasons.map((reason) => (
                                                        <SelectItem key={reason} value={reason}
                                                                    className="focus:bg-gray-600">
                                                            {reason}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className="text-red-400"/>
                                        </FormItem>
                                    )}
                                />

                                {/* Message field */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-neutral-300">Message *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Your message"
                                                    {...field}
                                                    className="bg-gray-700 text-neutral-200 border-gray-600 rounded-md"
                                                    aria-required="true"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-400"/>
                                        </FormItem>
                                    )}
                                />

                                {/* Submit button */}
                                <div className="flex justify-center">
                                    <Button
                                        type="submit"
                                        className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactModal
