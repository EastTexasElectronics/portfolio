// src/app/(Pages)/FileTreeGenerator/page.tsx
import React from 'react';
import { Button } from '@/components/ui/button';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'File Tree Generator',
    description: 'A CLI tool for generating visual representations of directory tree structures in multiple programming languages.',
    keywords: 'file tree, directory structure, CLI tool, multiple programming languages',
    openGraph: {
      title: 'File Tree Generator',
      description: 'A CLI tool for generating visual representations of directory tree structures in multiple programming languages.',
      images: [{
        url: 'https://i.postimg.cc/K8KykhhX/s2l-Banner.png',
        width: 800,
        height: 200,
        alt: 'S2L Logo',
      }],
    },
  }

const FileTreeGenerator = () => {
    const languages = [
        { name: 'Bash', path: 'bash' },
        { name: 'C++', path: 'C%2B%2B' },
        { name: 'GoLang (Recommended Version)', path: 'Go' },
        { name: 'Lua', path: 'lua' },
        { name: 'Powershell', path: 'powershell' },
        { name: 'Python', path: 'python' },
        { name: 'Rust', path: 'rust_ftg' },
        { name: 'Swift', path: 'swift' },
        { name: 'TypeScript', path: 'typescript' },
        { name: 'ZSH', path: 'zsh' },
    ];

    const GitHubButton = ({ href, text }: { href: string; text: string }) => (
        <a href={href} className="inline-flex items-center justify-center text-white font-bold py-2 px-4  mx-auto bg-gradient-to-bl from-fuchsia-600 via-violet-600 to-blue-600 rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200 border-r-10" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            {text}
        </a>
    );

    return (
        <main className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg pt-20 max-w-5xl">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600">File Tree Generator Multiverse</h1>
                <p className="text-xl text-gray-300">Explore directory structures across multiple programming languages</p>
            </header>

            <div className="bg-gray-800 p-8 shadow-2xl rounded-lg space-y-16">
                <nav aria-label="Table of contents" className="bg-gray-700 p-6 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Table of Contents</h2>
                    <ul className="grid grid-cols-2 gap-4 mb-8 list-none pl-0">
                        {['overview', 'features', 'languages', 'installation', 'usage', 'contributing'].map((item) => (
                            <li key={item}>
                                <Button asChild variant="link" size="lg" className="w-full bg-gray-600 hover:bg-gray-500 transition-colors duration-200">
                                    <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {['overview', 'tldr', 'features', 'languages', 'installation', 'usage', 'contributing', 'license'].map((section) => (
                    <section key={section} id={section} aria-labelledby={`${section}-heading`} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 id={`${section}-heading`} className="text-3xl font-semibold mb-4 text-blue-300 text-center">{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                        {section === 'overview' && (
                            <>
                                <p className="mb-4 text-center">File Tree Generator (FTG) is a command-line utility written in several programming languages. It generates a visual representation of directory tree structures, serving as both a useful tool and an exercise in language exploration and experimentation.</p>
                                <div className="text-center">
                                    <GitHubButton href="https://github.com/EastTexasElectronics/File-Tree-Generator-Multiverse" text="View on GitHub" />
                                </div>
                            </>
                        )}
                        {section === 'tldr' && (
                            <>
                                <p className="mb-4 text-center">This CLI tool generates a visual representation of directory tree structures. For optimal performance and reliability, we recommend using either the Golang or ZSH version of the tool.</p>
                                <div className="text-center">
                                    <a href="https://github.com/EastTexasElectronics/File-Tree-Generator-Multiverse/tree/main/Go" className="inline-flex items-center justify-center text-white font-bold py-2 px-4  mx-auto bg-gradient-to-bl from-blue-600 via-violet-600 to-fuchsia-600 rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200 border-r-10" target="_blank" rel="noopener noreferrer">Go to Golang Version</a>
                                </div>
                            </>
                        )}
                        {section === 'features' && (
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Exclude specific files or directories</li>
                                <li>Specify a custom output location</li>
                                <li>Interactively select items to exclude</li>
                            </ul>
                        )}
                        {section === 'languages' && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {languages.map((lang) => (
                                    <a key={lang.name} href={`https://github.com/EastTexasElectronics/File-Tree-Generator-Multiverse/tree/main/${lang.path}`} target="_blank" rel="noopener noreferrer" className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors duration-200 text-center">
                                        {lang.name}
                                    </a>
                                ))}
                            </div>
                        )}
                        {section === 'installation' && (
                            <p className="text-center">To install a version of the tool, please select your desired language and follow the instructions in the corresponding README.md file for that version.</p>
                        )}
                        {section === 'usage' && (
                            <>
                                <p className="mb-4 text-center">Here&apos;s an example of how to use the Golang version of the File Tree Generator:</p>
                                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4">
                                    <code className="text-sm">
                                        {`ftg [-e pattern1,pattern2,...] [-o output_location] [-d input_directory] [-i] [-c] [-h] [-v]

Options:
  -e, --exclude      Exclude directories or files (comma-separated) (.git,node_modules,.vscode)
  -o, --output       Specify an output location; default output is in the pwd
  -d, --directory    Specify an input directory; default is the pwd
  -i, --interactive  Interactive mode to select items to exclude
  -c, --clear        Clear the exclusion list
  -h, --help         Show this help message and exit
  -v, --version      Show version information and exit

Example:
ftg -e .git,node_modules -o my_file_tree.md -d /path/to/my/project`}
                                    </code>
                                </pre>
                                <p className="text-center">This command will generate a markdown file named &apos;my_file_tree_HH_MM_SS.md&apos; containing the directory structure of &apos;/path/to/my/project&apos;, excluding the .git and node_modules directories.</p>
                            </>
                        )}
                        {section === 'contributing' && (
                            <>
                                <p className="text-center mb-4">This project is a work in progress, and we welcome contributions across all language implementations. However, please note that the Golang version is our primary focus due to its performance and ease of use. We encourage you to contribute by adding new features, improving existing implementations, or even adding support for new languages.</p>
                                <div className="text-center">
                                    <GitHubButton href="https://github.com/EastTexasElectronics/File-Tree-Generator-Multiverse" text="Contribute on GitHub" />
                                </div>
                            </>
                        )}
                        {section === 'license' && (
                            <p className="text-center">You are free to use this project for any purpose. We kindly request that you credit the author and consider submitting a pull request if you identify any bugs or have ideas for feature enhancements.</p>
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
};

export default FileTreeGenerator;
