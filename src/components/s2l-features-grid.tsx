import {HoverEffect} from "@/components/ui/card-hover-effect";

export function S2LFeaturesGrid() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects}/>
        </div>
    );
}

export const projects = [
    {
        title: "Where Can I Get The App",
        description:
            "S2L is available on the Mac App Store! Download it from the App Store or on GitHub if you prefer to roll your own.",
        link: "https://apps.apple.com/us/app/svg2liquid/id123456789",
    },
    {
        title: "What is S2L",
        description:
            "S2L is a macOS app built with Swift. It simplifies converting SVG files into Liquid templates for Shopify themes by allowing you to edit the viewport, class, fill, and prefix attributes as well as the file name and extension.",
    },
    {
        title: "Who is S2L for",
        description:
            "S2L is for Shopify theme owners and developers who need to need to save time in their workflow.",
    },
    {
        title: "Why Did I Make S2L",
        description:
            "There are workarounds for Liquid not accepting .svg files, but they deviate from Shopify's design structure. Converting 150+ custom icons manually isn't ideal. S2L solves this problem!",
    },
    {
        title: "Public GitHub Repo",
        description:
            "If you prefer to roll your own or want to contribute to the project, the source code is available on GitHub.",
        link: "https://github.com/EastTexasElectronics/SVG-2-Liquid-Public",
    },
    {
        title: "How Do I Get Started?",
        description:
            "Visit our documentation to learn how to set up and use S2L effectively. You'll find step-by-step guides and tips.",
        link: "https://github.com/EastTexasElectronics/SVG-2-Liquid-Public/wiki",
    },
];
