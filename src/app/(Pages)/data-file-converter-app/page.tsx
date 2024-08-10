// src/app/(Pages)/data-file-converter-app/page.tsx
import React from 'react';
import Image from 'next/image';
import { DFCFeaturesGrid } from "@/components/DataFileConverter/dfc-features-grid";
import { DFCTroubleshootingSection } from "@/components/DataFileConverter/dfc-troubleshooting-section";
import { Button } from '@/components/ui/button';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data File Converter',
  description: 'A versatile tool for converting data files between multiple formats including JSON, CSV, YAML, and more.',
  keywords: 'data converter, JSON, CSV, YAML, macOS app, file conversion',
  openGraph: {
    title: 'Data File Converter',
    description: 'A versatile tool for converting data files between multiple formats including JSON, CSV, YAML, and more.',
  },
}

const DFCApp = () => {
    return (
        <main className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg pt-20 max-w-5xl">
            <header className="text-center mb-16">
                <h1 className='text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600'>Data File Converter</h1>
                <div className="mt-8">
                    <a href="https://apps.apple.com/app/data-file-converter/id1234567890" target="_blank"
                        rel="noopener noreferrer">
                        <Image src="https://i.postimg.cc/CLv92kV7/macapp-download.png" alt="Mac App Store Download Link"
                            width={400}
                            height={100} className="mx-auto" />
                    </a>
                </div>
            </header>

            <div className="bg-gray-800 p-8 shadow-2xl rounded-lg space-y-16">
                <nav aria-label="Table of contents" className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Table of Contents</h2>
                    <ul className="grid grid-cols-2 gap-4 list-none pl-0">
                        {['overview', 'features', 'help', 'contact', 'troubleshooting', 'report-issues'].map((item) => (
                            <li key={item}>
                                <Button asChild variant="link" size="lg" className="w-full bg-gray-600 hover:bg-gray-500 transition-colors duration-200">
                                    <a href={`#${item}`}>{item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section id="features" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Features</h2>
                    <DFCFeaturesGrid />
                </section>

                <section id="help" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Help Guide</h2>

                    {[
                        {
                            title: "Getting Started",
                            steps: [
                                "Launching the App: Open Data File Converter from your Applications folder.",
                                "Selecting Input File: Click on the \"Select File\" button to choose a data file. The app will scan this file for conversion.",
                                "Choosing Output Format: Select the format to which you wish to convert your file."
                            ]
                        },
                        {
                            title: "Conversion Options",
                            steps: [
                                "Trim Data: If converting to CSV, you can trim data fields for cleaner output.",
                                "Parse Types: Automatically parse and convert data types (e.g., numbers, dates).",
                                "Ignore Empty Fields: Choose whether to ignore or include empty fields in the conversion."
                            ]
                        },
                        {
                            title: "Starting Conversion",
                            steps: [
                                "Start Conversion: After setting your options, click the 'Convert' button. The app will process the conversion.",
                                "View Results: Upon completion, the converted file will be saved to the location you specify."
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-2xl font-semibold mb-4 text-center">{section.title}</h3>
                            <ol className="list-decimal pl-6 space-y-4">
                                {section.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </section>

                <section id="troubleshooting" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Troubleshooting &amp; FAQ</h2>
                    <DFCTroubleshootingSection />
                </section>

                <section id="contact" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Get Support</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Help Modal:</strong> Click on the &quot;Help&quot; button in the header to open the help modal. This contains detailed information about using the app.</li>
                        <li><strong>About Modal:</strong> Click on the &quot;About&quot; button to view information about the current app version and check for updates.</li>
                        <li>To contact support, please <a href="mailto:contact@roberthavelaar.dev"
                            className="text-blue-500 hover:underline">send us an email</a> with the issues you are experiencing.</li>
                    </ol>
                </section>

                <section id="report-issues" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Report Bugs and Issues</h2>
                    <p className="text-center">
                        If you encounter any bugs or issues, please report them on our {' '}
                        <a href="https://github.com/your-github-repo/issues"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub Issues
                        </a>
                        {' '} page.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default DFCApp;
