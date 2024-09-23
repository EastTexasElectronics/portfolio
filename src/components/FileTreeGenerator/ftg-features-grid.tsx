// src/components/ftg-features-grid.tsx

import {HoverEffect} from "@/components/ui/card-hover-effect";
import { track } from '@vercel/analytics';

export function FTGFeaturesGrid() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={features.map(feature => ({
                ...feature,
                onClick: () => track('Feature Clicked', { title: feature.title })
            }))} />
        </div>
    );
}

export const features = [
    {
        title: "Where Can I Get The App",
        description:
            "The File Tree Generator is available on the Mac App Store!",
        link: "https://apps.apple.com/app/file-tree-generator/id6621270239",
    },
    {
        title: "What is the File Tree Generator",
        description:
            "The File Tree Generator is a macOS app that creates Markdown or TXT formatted file trees from your directories, with options for excluding specific patterns and formats.",
    },
    {
        title: "Who is the File Tree Generator for",
        description:
            "This tool is ideal for developers, writers, and anyone who needs to document or visualize directory structures.",
    },
    {
        title: "Why Did I Make This App",
        description:
            "Managing large directory structures can be a hassle. This app was created to simplify the process of documenting file trees, especially when dealing with complex projects.",
    },
    {
        title: "Public GitHub Repo",
        description:
            "If you're interested in the source code or want to contribute to the project, the source code is available on GitHub.",
        link: "https://github.com/EastTexasElectronics/ftg-app",
    },
    {
        title: "Can I Contribute?",
        description:
            "Yes we are open to contributions! If you're interested in contributing to the project, the source code is available on GitHub. Just fork the repository and submit a pull request.",
        link: "https://github.com/EastTexasElectronics/ftg-app",
    },
];
