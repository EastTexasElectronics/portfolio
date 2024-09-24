'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Mail } from 'lucide-react'
import { track } from '@vercel/analytics'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const features = [
  {
    title: "Where Can I Get The App",
    description: "S2L is available on the Mac App Store! Download it from the App Store or on GitHub if you prefer to roll your own.",
    link: "https://apps.apple.com/us/app/svg2liquid/id123456789",
  },
  {
    title: "What is S2L",
    description: "S2L is a macOS app built with Swift. It simplifies converting SVG files into Liquid templates for Shopify themes by allowing you to edit the viewport, class, fill, and prefix attributes as well as the file name and extension.",
  },
  {
    title: "Who is S2L for",
    description: "S2L is for Shopify theme owners and developers who need to save time in their workflow.",
  },
  {
    title: "Why Did I Make S2L",
    description: "There are workarounds for Liquid not accepting .svg files, but they deviate from Shopify's design structure. Converting 150+ custom icons manually isn't ideal. S2L solves this problem!",
  },
  {
    title: "Public GitHub Repo",
    description: "If you prefer to roll your own or want to contribute to the project, the source code is available on GitHub.",
    link: "https://github.com/EastTexasElectronics/SVG-2-Liquid-Public",
  },
  {
    title: "How Do I Get Started?",
    description: "Visit our documentation to learn how to set up and use S2L effectively. You'll find step-by-step guides and tips.",
    link: "https://github.com/EastTexasElectronics/SVG-2-Liquid-Public/wiki",
  },
]

const faqItems = [
  {
    question: "No SVG files found:",
    answer: "Make sure the input directory contains SVG files and that they have the correct file .svg extension and the directory is accessible and writable.",
  },
  {
    question: "Conversion Errors:",
    answer: "Check the feedback modal for specific error messages. The most common error is when the SVG file cannot be found.",
  },
  {
    question: "Output Directory Issues:",
    answer: "By default, the output directory is set to the same directory as the input directory. Make sure the output directory is accessible and writable.",
  },
  {
    question: "What is Prefix for?",
    answer: "The prefix is used to add a prefix to the file name. For example, if you set the prefix to \"icon-\", the file name will be \"icon-arrow.svg\".",
  },
  {
    question: "What is Class for?",
    answer: "The class is used to add the CSS class to the SVG element. For example, you can set the class to \"icon icon-arrow\".",
  },
  {
    question: "What is Fill for?",
    answer: "To render an SVG file in Liquid format, it needs to have an attribute similar to fill inside the <path> tag.",
  },
  {
    question: "What is viewBox for?",
    answer: "The viewBox is used to size your image using the tag inside the <svg> tag. For example, you can set the viewport to \"0 0 24 24\".",
  },
]

const helpGuide = [
  {
    title: "Getting Started",
    steps: [
      "Launching the App: Open SVG2Liquid from your Applications folder.",
      "Selecting Input Directory: Click on the \"Add Your SVG's\" section and use the \"Browse\" button to select a directory containing SVG files. The app will scan this directory and list all the SVG files found.",
      "Selecting Output Directory: Click on the \"Select Output\" section and use the \"Browse\" button to choose a directory where the converted Liquid files will be saved.",
    ],
  },
  {
    title: "Using the File List View",
    steps: [
      "Viewing Files: The main interface displays a list of all SVG files found in the input directory.",
      "Editing Files: You can modify the viewport settings, add a class, change the fill settings, and add a prefix to the file name.",
      "Removing Files: Use the \"Remove\" button next to any file to exclude it from the conversion process.",
    ],
  },
  {
    title: "Bulk Editing",
    steps: [
      "Opening Bulk Edit: Click on the \"Bulk Edit\" button to open the bulk edit modal.",
      "Applying Changes: Enter the desired attributes for viewport, class, fill, and prefix. Click \"Apply\" to update these attributes for all selected files.",
      "Canceling Bulk Edit: Click \"Cancel\" to close the bulk edit modal without making changes.",
    ],
  },
  {
    title: "Converting Files",
    steps: [
      "Starting Conversion: Once all files are configured, click the \"Convert\" button. The app will process each file, convert it to a Liquid file, and save it in the specified output directory.",
      "Viewing Results: After conversion, a feedback modal will display the results, including any errors or successful conversions.",
      "Check Results: After conversion, we suggest ensuring your new file is rendering correctly. Complicated SVG files might need more tweaking.",
    ],
  },
]

export default function S2L() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://i.postimg.cc/K8KykhhX/s2l-Banner.png"
            alt="SVG2Liquid Banner Logo"
            width={800}
            height={200}
            className="mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Link
            href="https://apps.apple.com/us/app/svg2liquid/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('Link Clicked', { location: 'Header', link: 'Mac App Store' })}
          >
            <Image
              src="https://i.postimg.cc/CLv92kV7/macapp-download.png"
              alt="Mac App Store Download Link"
              width={400}
              height={100}
              className="mx-auto"
            />
          </Link>
        </motion.div>
      </header>

      <nav className="sticky top-0 bg-gray-900 shadow-md z-10">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            {['features', 'help-guide', 'faq', 'support'].map((item) => (
              <li key={item}>
                <Button
                  variant="ghost"
                  onClick={() => {
                    scrollToSection(item)
                    track('Button Clicked', { location: 'Navbar', button: item })
                  }}
                  className={`text-sm ${activeSection === item ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section id="features" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                    {feature.link && (
                      <Link
                        href={feature.link}
                        className="text-primary hover:underline mt-4 inline-flex items-center"
                        onClick={() => track('Link Clicked', { location: 'Features', link: feature.title })}
                      >
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="help-guide" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Help Guide
          </motion.h2>
          <div className="space-y-8">
            {helpGuide.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-primary">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-6 space-y-2">
                      {section.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-300">{step}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            FAQ
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-gray-800 border-gray-700 rounded-lg">
                  <AccordionTrigger
                    className="text-primary hover:text-primary-foreground px-4 py-2"
                    onClick={() => track('Accordion Trigger Clicked', { location: 'FAQ', question: item.question })}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-4 pb-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </section>

        <section id="support" className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-primary"
          >
            Support
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <p className="text-gray-300">
              If you need help or want to report an issue, you can reach out to us through the following channels:
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link
                  href="mailto:contact@easttexaselectronics.com"
                  className="inline-flex items-center"
                  onClick={() => track('Button Clicked', { location: 'Support', button: 'Email Support' })}
                >
                  <Mail className="mr-2 h-4 w-4" /> Email Support
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/EastTexasElectronics/S2L/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  onClick={() => track('Button Clicked', { location: 'Support', button: 'GitHub Issues' })}
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub Issues
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} East Texas Electronics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
