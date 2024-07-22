"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";


type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => JSX.Element;
};

const cards: Card[] = [
    {
        description: "Shopify Liquid eCommerce",
        title: "Nerd Stuff of Alabama's Website",
        src: "https://i.postimg.cc/p9y4fsSL/NSA-Logo.png",
        ctaText: "Explore",
        ctaLink: "https://alnerdstuff.com",
        content: () => {
            return (
                <p>
                    Nerd Stuff of Alabama is a growing collectables eCommerce buisness. They are currently using the Minion theme, which is a paid and well maintained theme.  I have modified the source code to add custom features and functionality. I activly maintain their website and provide support when issues arise.
                </p>
            );
        },
    },
    {
        description: "iOS and Android eCommerce App",
        title: "Nerd Stuff of Alabama's Mobile App",
        src: "https://i.postimg.cc/p9y4fsSL/NSA-Logo.png",
        ctaText: "Explore",
        ctaLink: "https://app.alnerdstuff.com",
        content: () => {
            return (
                <p>
                    Nerd Stuff of Alabama is a growing collectables eCommerce buisness. I am currently building their mobile application, the tech stack includes React Native, Expo, TailwindCSS, and the Shopify API. Once completed the template will be released as an open source project, for any new Shopify Developers.
                </p>
            );
        },
    },
    {
        description: "A CLI File Tree Generator tool written in many languages",
        title: "File Tree Generator Multiverse",
        src: "https://i.postimg.cc/Wd5xqBXy/FTG-Logo.png",
        ctaText: "Explore",
        ctaLink: "/",
        content: () => {
            return (
                <p>
                    The FTG project is a Command Line tool that generates a file tree in the specified directory. It has been written in many languages and is available on GitHub.  I personally use the Golang version of the tool.
                </p>
            );
        },
    },
    {
        description: "eCommerce Website",
        title: "East Texas Electronics LLC.",
        src: "https://i.postimg.cc/x13j0c9X/ETE-Logo.png",
        ctaText: "Explore",
        ctaLink: "/",
        content: () => {
            return (
                <p>
                    ETE is a small eCommerce and Electronics Repair shop in East Texas. I build, run, and maintain this website.
                </p>
            );
        },
    },
    {
        description: "A command line tool to bulk convert images to different formats",
        title: "Image Conversion Tool",
        src: "https://i.postimg.cc/hGYkgBQJ/IC-Logo.png",
        ctaText: "Explore",
        ctaLink: "/",
        content: () => {
            return (
                <p>
                    Coming Soon! An open source secure client side browser based image converter.
                </p>
            );
        },
    },
    {
        description: "A free Shopify theme for Shopify Liquid",
        title: "Shopify Liquid Theme",
        src: "https://i.postimg.cc/c1knSkXp/Shopify-Logo.png",
        ctaText: "Explore",
        ctaLink: "/",
        content: () => {
            return (
                <p>
                    Coming Soon! An open source Shopify theme for Shopify Liquid.
                </p>
            );
        },
    },
    {
        description: "Like this website?  Use it as a template for free!",
        title: "Free t3 Stack Portfolio Template",
        src: "https://i.postimg.cc/vTwHY9x6/Portfolio-Logo.png",
        ctaText: "Explore",
        ctaLink: "https://github.com/EastTexasElectronics/portfolio",
        content: () => {
            return (
                <p>
                    This website is built using the t3 stack, with heavily customized components from Shadcn/ui and Aceternity. View the source code on GitHub.
                </p>
            );
        },
    },
    {
        description: "Stay tuned something exciting is coming soon!",
        title: "Coming Soon",
        src: "https://i.postimg.cc/4x0G4trN/Coming-Soon.png",
        ctaText: "Explore",
        ctaLink: "/",
        content: () => {
            return (
                <p>
                    I have an exciting project in the works, stay tuned for updates!
                </p>
            );
        },
    },
];

export function Projects() {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setActive(null);
        }
    }, []);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", onKeyDown);
        } else {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", onKeyDown);
        }

        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active, onKeyDown]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        />
                        <div className="fixed inset-0 grid place-items-center z-[100]">
                            <motion.button
                                key={`button-${active.title}-${id}`}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6"
                                onClick={() => setActive(null)}
                            >
                                <CloseIcon />
                            </motion.button>
                            <motion.div
                                layoutId={`card-${active.title}-${id}`}
                                ref={ref}
                                className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                            >
                                <motion.div layoutId={`image-${active.title}-${id}`}>
                                    <Image
                                        priority
                                        width={200}
                                        height={200}
                                        src={active.src}
                                        alt={active.title}
                                        className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                    />
                                </motion.div>
                                <div>
                                    <div className="flex justify-between items-start p-4">
                                        <div>
                                            <motion.h3
                                                layoutId={`title-${active.title}-${id}`}
                                                className="font-bold text-neutral-200"
                                            >
                                                {active.title}
                                            </motion.h3>
                                            <motion.p
                                                layoutId={`description-${active.description}-${id}`}
                                                className="text-neutral-400"
                                            >
                                                {active.description}
                                            </motion.p>
                                        </div>
                                        <motion.a
                                            layoutId={`button-${active.title}-${id}`}
                                            href={active.ctaLink}
                                            target="_blank"
                                            className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-neutral-100"
                                        >
                                            {active.ctaText}
                                        </motion.a>
                                    </div>
                                    <div className="pt-4 relative px-4">
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                        >
                                            {typeof active.content === "function"
                                                ? active.content()
                                                : active.content}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
            <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer w-full"
                    >
                        <div className="flex gap-4 flex-col md:flex-row w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex-1">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-green-500 hover:text-neutral-100 text-neutral-100 mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-neutral-100"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
