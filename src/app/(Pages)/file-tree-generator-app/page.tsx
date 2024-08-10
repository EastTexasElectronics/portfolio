import React from 'react';
import Image from 'next/image';
import { FTGFeaturesGrid } from "@/components/ftg-features-grid";
import { FTGTroubleshootingSection } from "@/components/ftg-troubleshooting-section";
import { Button } from '@/components/ui/button';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'File Tree Generator',
  description: 'A tool for generating Markdown-formatted file trees from your directories with customizable exclusions',
  keywords: 'file tree, markdown, file structure, directory, generator, macOS app',
  openGraph: {
    title: 'File Tree Generator',
    description: 'A tool for generating Markdown-formatted file trees from your directories with customizable exclusions',
  },
}

const FTGApp = () => {
    return (
        <main className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg pt-20 max-w-5xl">
            <header className="text-center mb-16">
                <h1 className='text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600'>File Tree Generator</h1>
                <div className="mt-8">
                    <a href="https://apps.apple.com/app/file-tree-generator/id6621270239" target="_blank"
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
                    <FTGFeaturesGrid />
                </section>

                <section id="help" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Help Guide</h2>

                    {[
                        {
                            title: "Getting Started",
                            steps: [
                                "Launching the App: Open File Tree Generator from your Applications folder.",
                                "Selecting Input Directory: Click on the \"Select Directory\" button to choose a directory. The app will scan this directory to generate the file tree.",
                                "Selecting Output File: Choose the location and format for the output file where the file tree will be saved. By defailt, the file will be saved in the input directory."
                            ]
                        },
                        {
                            title: "Using Exclusion Patterns",
                            steps: [
                                "Pre-set Exclusions: Use the 'Select Languages/Frameworks' button to exclude common files and directories. You can select as many as you would like.",
                                "Custom Exclusions: Enter custom patterns in the 'Exclusion Patterns' text field to exclude specific files or directories. Using comma-separated patterns is requried ex.(node_modules,.vscode)."
                            ]
                        },
                        {
                            title: "Generating File Tree",
                            steps: [
                                "Starting Generation: Once all configurations are set, click the 'Generate File Tree' button. The app will generate the file tree in the selected format.",
                                "Viewing Results: Check the output directory for the generated Markdown or text file."
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
                    <FTGTroubleshootingSection />
                </section>

                <section id="contact" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Get Support</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Help Modal:</strong> Click on the &quot;Help&quot; button in the header to open the help modal. This contains detailed information about using the app.</li>
                        <li><strong>About Modal:</strong> Click on the &quot;About&quot; button to view information about the current app version and check for updates.</li>
                        <li>To contact support, please <a href="mailto:contact@easttexaselectronics.com"
                            className="text-blue-500 hover:underline">send us an email</a> with the issues you are experiencing.</li>
                    </ol>
                </section>

                <section id="report-issues" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Report Bugs and Issues</h2>
                    <p className="text-center">
                        If you encounter any bugs or issues, please report them on our {' '}

                        <a href="https://github.com/EastTexasElectronics/ftg-app/issues"
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

export default FTGApp;
