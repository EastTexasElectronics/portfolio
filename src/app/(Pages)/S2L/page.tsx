// src/app/(Pages)/S2L/page.tsx
import React from 'react';
import Image from 'next/image';
import { S2LFeaturesGrid } from "@/components/SVG2Liquid/s2l-features-grid";
import { S2lTroubleshootingSection } from "@/components/SVG2Liquid/s2l-troubleshooting-section";
import { Button } from '@/components/ui/button';

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SVG 2 Liquid',
  description: 'A tool for converting SVG files to Shopify Liquid templates',
  keywords: 'SVG, Shopify, Liquid, conversion, tool',
  openGraph: {
    title: 'SVG 2 Liquid',
    description: 'A tool for converting SVG files to Shopify Liquid templates',
    images: [{
      url: 'https://i.postimg.cc/K8KykhhX/s2l-Banner.png',
      width: 800,
      height: 200,
      alt: 'S2L Logo',
    }],
  },
}

const S2L = () => {
    return (
        <main className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg pt-20 max-w-5xl">
            <header className="text-center mb-16">
                <Image src="https://i.postimg.cc/K8KykhhX/s2l-Banner.png" alt="SVG2Liquid Banner Logo" width={800}
                    height={200} className="mx-auto" />
                <div className="mt-8">
                    <a href="https://apps.apple.com/us/app/svg2liquid/id123456789" target="_blank"
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
                        {['overview', 'features', 'help-guide', 'accessing-help', 'troubleshooting', 'report-issues'].map((item) => (
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
                    <S2LFeaturesGrid />
                </section>

                <section id="help-guide" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-300 text-center">Help Guide</h2>

                    {[
                        {
                            title: "Getting Started",
                            steps: [
                                "Launching the App: Open SVG2Liquid from your Applications folder.",
                                "Selecting Input Directory: Click on the \"Add Your SVG's\" section and use the \"Browse\" button to select a directory containing SVG files. The app will scan this directory and list all the SVG files found.",
                                "Selecting Output Directory: Click on the \"Select Output\" section and use the \"Browse\" button to choose a directory where the converted Liquid files will be saved."
                            ]
                        },
                        {
                            title: "Using the File List View",
                            steps: [
                                "Viewing Files: The main interface displays a list of all SVG files found in the input directory.",
                                "Editing Files: You can modify the viewport settings, add a class, change the fill settings, and add a prefix to the file name.",
                                "Removing Files: Use the \"Remove\" button next to any file to exclude it from the conversion process."
                            ]
                        },
                        {
                            title: "Bulk Editing",
                            steps: [
                                "Opening Bulk Edit: Click on the \"Bulk Edit\" button to open the bulk edit modal.",
                                "Applying Changes: Enter the desired attributes for viewport, class, fill, and prefix. Click \"Apply\" to update these attributes for all selected files.",
                                "Canceling Bulk Edit: Click \"Cancel\" to close the bulk edit modal without making changes."
                            ]
                        },
                        {
                            title: "Converting Files",
                            steps: [
                                "Starting Conversion: Once all files are configured, click the \"Convert\" button. The app will process each file, convert it to a Liquid file, and save it in the specified output directory.",
                                "Viewing Results: After conversion, a feedback modal will display the results, including any errors or successful conversions.",
                                "Check Results: After conversion, we suggest ensuring your new file is rendering correctly. Complicated SVG files might need more tweaking."
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
                    <S2lTroubleshootingSection />
                </section>

                <section id="accessing-help" className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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

                        <a href="https://github.com/EastTexasElectronics/S2L/issues"
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

export default S2L;
