// src/pages/index.tsx
import React from 'react';
import Image from 'next/image';

const S2L = () => {
    return (
        <div className="container mx-auto px-4 py-10 bg-gray-900 text-white">
            <div className="text-center mb-10">
                <Image src="https://i.postimg.cc/XvDDq8XD/s2l-Banner.png" alt="SVG2Liquid Banner Logo" width={800}
                       height={200} className="mx-auto"/>
            </div>
            <div className="text-center mb-10">
                {/* Add the "Download on the Mac App Store" SVG code here */}
                <a href="https://apps.apple.com/us/app/svg2liquid/id123456789" target="_blank"
                   rel="noopener noreferrer">
                    <Image src="https://i.postimg.cc/CLv92kV7/macapp-download.png" alt="Mac App Store Download Link"
                           width={800}
                           height={200} className="mx-auto"/>
                </a>
            </div>
            <div className="bg-gray-700 p-8 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-6 text-center" aria-label="SVG To Liquid App">SVG2Liquid App</h1>

                <nav aria-label="Table of contents" className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><a href="#overview" className="text-blue-500 hover:underline">Overview</a></li>
                        <li><a href="#features" className="text-blue-500 hover:underline">Features</a></li>
                        <li><a href="#help-guide" className="text-blue-500 hover:underline">Help Guide</a></li>
                        <li><a href="#accessing-help" className="text-blue-500 hover:underline">Get Support</a></li>
                        <li><a href="#troubleshooting" className="text-blue-500 hover:underline">Troubleshooting</a>
                        </li>
                        <li><a href="#report-issues" className="text-blue-500 hover:underline">Report Bugs and
                            Issues</a></li>
                    </ul>
                </nav>

                <h2 className="text-2xl font-semibold mb-4 text-center">Overview</h2>
                <section id="overview" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">What is SVG2Liquid?</h3>
                    <p className="mb-4">
                        S2L is a macOS application made with Swift designed to simplify the process of converting SVG
                        files into Liquid template files, commonly used in Shopify theme development.
                    </p>
                </section>

                <h2 className="text-2xl font-semibold mb-4 text-center">Features</h2>
                <section id="features" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-center">What Does it Do?</h3>
                    <ul className="list-disc pl-6 space-y-5">
                        <li><strong>Input and Output Directory Selection:</strong> Easily select directories containing
                            SVG files and specify an output directory for the converted Liquid files.
                        </li>
                        <li><strong>File List View:</strong> Displays a list of all SVG files to be processed, with
                            options to edit individual attributes.
                        </li>
                        <li><strong>Bulk Edit:</strong> Apply changes to multiple files simultaneously, such as updating
                            the viewport, adding classes, changing fill settings, and adding prefixes to file names.
                        </li>
                        <li><strong>Conversion:</strong> Convert selected SVG files to Liquid files, with automatic
                            handling of file name conflicts.
                        </li>
                        <li><strong>Feedback and Help:</strong> View detailed conversion results and access help
                            resources directly from the app interface.
                        </li>
                    </ul>
                </section>

                <h2 className="text-2xl font-semibold mb-4 text-center">Help Guide</h2>
                <section id="help-guide" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-5 text-center">Getting Started</h3>
                    <ol className="list-decimal pl-6 space-y-5 mt-5">
                        <li><strong>Launching the App:</strong> Open SVG2Liquid from your Applications folder.</li>
                        <li><strong>Selecting Input Directory:</strong> Click on the &quot;Add Your
                            SVG&apos;s&quot; section and use the &quot;Browse&quot; button to select a directory
                            containing SVG files. The app will scan this directory and list all the SVG files found.
                        </li>
                        <li><strong>Selecting Output Directory:</strong> Click on the &quot;Select Output&quot; section
                            and use the &quot;Browse&quot; button to choose a directory where the converted Liquid files
                            will be saved.
                        </li>
                    </ol>
                    <h3 className="text-xl font-semibold mb-5 mt-5 text-center">Using the File List View</h3>
                    <ol className="list-decimal pl-6 space-y-5 mb-5 mt-5">
                        <li><strong>Viewing Files:</strong> The main interface displays a list of all SVG files found in
                            the input directory.
                        </li>
                        <li><strong>Editing Files:</strong> You can modify the viewport settings, add a class, change
                            the fill settings, and add a prefix to the file name.
                        </li>
                        <li><strong>Removing Files:</strong> Use the &quot;Remove&quot; button next to any file to
                            exclude it from the conversion process.
                        </li>
                    </ol>
                    <h3 className="text-xl font-semibold mb-5 mt-5 text-center">Bulk Editing</h3>
                    <ol className="list-decimal pl-6 space-y-5 mt-5 mb-5">
                        <li><strong>Opening Bulk Edit:</strong> Click on the &quot;Bulk Edit&quot; button to open the
                            bulk edit modal.
                        </li>
                        <li><strong>Applying Changes:</strong> Enter the desired attributes for viewport, class, fill,
                            and prefix. Click &quot;Apply&quot; to update these attributes for all selected files.
                        </li>
                        <li><strong>Canceling Bulk Edit:</strong> Click &quot;Cancel&quot; to close the bulk edit modal
                            without making changes.
                        </li>
                    </ol>
                    <h3 className="text-xl font-semibold mb-2 mt-4 text-center">Converting Files</h3>
                    <ol className="list-decimal pl-6 space-y-5 mt-5">
                        <li><strong>Starting Conversion:</strong> Once all files are configured, click
                            the &quot;Convert&quot; button. The app will process each file, convert it to a Liquid file,
                            and save it in the specified output directory.
                        </li>
                        <li><strong>Viewing Results:</strong> After conversion, a feedback modal will display the
                            results, including any errors or successful conversions.
                        </li>
                        <li><strong>Check Results:</strong> After conversion, we suggest ensuring your new file is
                            rendering correctly. Complicated SVG files might need more tweaking.
                        </li>
                    </ol>
                </section>

                <h2 className="text-2xl text-center font-semibold mb-4">Troubleshooting</h2>
                <section id="troubleshooting" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-center">Common Issues</h3>
                    <ul className="list-disc pl-6 space-y-5">
                        <li className="mb-4"><strong>No SVG Files Found:</strong> Ensure the input directory contains
                            SVG files and that they have the correct file .svg extension.
                        </li>
                        <li className="mb-4"><strong>Conversion Errors:</strong> Check the feedback modal for specific
                            error messages and verify that the SVG files are not corrupted.
                        </li>
                        <li className="mb-4"><strong>Output Directory Issues:</strong> Make sure the output directory is
                            accessible and writable.
                        </li>
                    </ul>
                </section>

                <h2 className="text-xl text-center font-semibold mb-2">Get Support</h2>
                <section id="accessing-help" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <ol className="list-decimal pl-6 space-y-5">
                        <li><strong>Help Modal:</strong> Click on the &quot;Help&quot; button in the header to open the
                            help modal. This contains detailed information about using the app.
                        </li>
                        <li><strong>About Modal:</strong> Click on the &quot;About&quot; button to view information
                            about the current app version and check for updates.
                        </li>
                        <li>To contact support, please <a href="mailto:contact@easttexaselectronics.com"
                                                          className="text-blue-500 hover:underline">send us an
                            email</a> with the issues you are experiencing.
                        </li>
                    </ol>
                </section>

                <h2 className="text-2xl text-center font-semibold mb-4">Report Bugs and Issues</h2>
                <section id="report-issues" className="mb-8 bg-gray-800 p-8 shadow-lg rounded-lg">
                    <p>If you encounter any bugs or issues, please report them on our <a
                        href="https://github.com/EastTexasElectronics/S2L/issues"
                        className="text-blue-500 hover:underline">GitHub Issues</a> page.</p>
                </section>
            </div>
        </div>
    );
};

export default S2L;
