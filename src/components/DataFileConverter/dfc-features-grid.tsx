// src/components/dfc-features-grid.tsx
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function DFCFeaturesGrid() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={features} />
        </div>
    );
}

export const features = [
    {
        title: "Where Can I Get The App",
        description:
            "The Data File Converter is available on the Mac App Store!",
        link: "https://apps.apple.com/app/data-file-converter/id1234567890",
    },
    {
        title: "What is Data File Converter",
        description:
            "Data File Converter is a macOS app that allows you to convert data files between various formats like JSON, CSV, YAML, and more.",
    },
    {
        title: "Who is Data File Converter for",
        description:
            "This tool is ideal for developers, data scientists, and anyone who needs to work with different data formats.",
    },
    {
        title: "Why Did I Make This App",
        description:
            "Managing data in different formats can be challenging. This app was created to make it easier to convert files into the formats you need.",
    },
    {
        title: "Public GitHub Repo",
        description:
            "If you're interested in the source code or want to contribute to the project, the source code is available on GitHub.",
        link: "https://github.com/your-github-repo",
    },
    {
        title: "Can I Contribute?",
        description:
            "Yes we are open to contributions! If you're interested in contributing to the project, the source code is available on GitHub. Just fork the repository and submit a pull request.",
        link: "https://github.com/your-github-repo",
    },
];
