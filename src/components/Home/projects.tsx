'use client';

import Image from 'next/image';
import React, { useEffect, useId, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';

/**
 * Type definition for a Card.
 */
type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    ctaOpenText?: string;
    content: () => React.JSX.Element;
};

/**
 * List of cards to display.
 */
const cards: Card[] = [
    {
        description: 'A macOS app to convert SVG files to Shopify Liquid templates',
        title: 'SVG 2 Liquid',
        src: 'https://i.postimg.cc/zGrsZpSg/s2l-Logo.png',
        ctaText: 'Explore',
        ctaOpenText: 'Learn More',
        ctaLink: 'https://roberthavelaar.com/S2L',
        content: () => (
            <p>
                Tired of manually converting SVG files to the Shopify Liquid template format manually? This is the app
                for you, it allows bulk conversion and editing of your SVG files.
            </p>
        ),
    },
    {
        description: "Shopify Liquid eCommerce",
        title: "Nerd Stuff of Alabama's Website",
        src: 'https://i.postimg.cc/p9y4fsSL/NSA-Logo.png',
        ctaText: 'Explore',
        ctaOpenText: 'Visit Site',
        ctaLink: 'https://alnerdstuff.com',
        content: () => (
            <p>
                Nerd Stuff of Alabama is a growing collectables eCommerce business. They are currently using the Minion
                theme, which is a paid and well-maintained theme. I have modified the source code to add custom features
                and functionality. I actively maintain their website and provide support when issues arise.
            </p>
        ),
    },
    {
        description: "iOS and Android eCommerce App",
        title: "Nerd Stuff of Alabama's Mobile App",
        src: 'https://i.postimg.cc/p9y4fsSL/NSA-Logo.png',
        ctaText: 'Explore',
        ctaOpenText: 'Repository',
        ctaLink: 'https://github.com/EastTexasElectronics/Nerd-Stuff-of-Alabama-Mobile-App/tree/main/nsa',
        content: () => (
            <p>
                Nerd Stuff of Alabama is a growing collectables eCommerce business. I am currently building their mobile
                application, the tech stack includes React Native, Expo, TailwindCSS, and the Shopify API. Once
                completed the template will be released as an open-source project, for any new Shopify Developers.
            </p>
        ),
    },
    {
        description: "A CLI File Tree Generator tool written in various languages",
        title: 'File Tree Generator Multiverse',
        src: 'https://i.postimg.cc/Wd5xqBXy/FTG-Logo.png',
        ctaText: 'Explore',
        ctaOpenText: 'Repository',
        ctaLink: '/file-tree-generator-app',
        content: () => (
            <p>
                The FTG project is a Command Line tool that generates a file tree in the specified directory. It has
                been written in many languages and is available on GitHub. I personally use the Golang version of the
                tool.
            </p>
        ),
    },
    {
        description: "Create visual representations of directory tree structures",
        title: 'File Tree Generator MacOS App',
        src: 'https://i.postimg.cc/8Pj31PkV/FTG-Icon.png',
        ctaText: 'Explore',
        ctaOpenText: 'Repository',
        ctaLink: '/file-tree-generator-app',
        content: () => (
            <p>
                The File Tree Generator is a macOS app that creates Markdown or TXT formatted file trees from your directories, with options for excluding specific patterns and formats. All in an easy to use interface.
            </p>
        ),
    },
];

/**
 * Projects component that displays a list of projects.
 * @returns {React.JSX.Element} The Projects component.
 */
export function Projects(): React.JSX.Element {
    const [active, setActive] = useState<Card | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setActive(null);
        }
    }, []);

    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', onKeyDown);
        } else {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', onKeyDown);
        }

        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active, onKeyDown]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <div className="max-w-5xl mx-auto p-4">
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
                                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-black rounded-full h-6 w-6 z-[110]"
                                    onClick={() => setActive(null)}
                                >
                                    <CloseIcon />
                                </motion.button>
                                <motion.div
                                    layoutId={`card-${active.title}-${id}`}
                                    ref={ref}
                                    className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                                >
                                    <motion.div layoutId={`image-${active.title}-${id}`}
                                        className="relative w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg">
                                        <Image
                                            src={active.src}
                                            alt={active.title}
                                            fill
                                            sizes="(max-width: 700px) 100vw, 700px"
                                            className="object-contain"
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
                                                className="px-4 py-3 text-sm text-neutral-100 rounded-full font-bold bg-gradient-to-bl from-fuchsia-600 via-violet-600 to-blue-600 cursor-pointer hover:opacity-90 transition-opacity duration-200 text-center"
                                            >
                                                {active.ctaOpenText ?? active.ctaText}
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
                                                {typeof active.content === 'function'
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
                            <div className="flex gap-4 flex-col md:flex-row w-full items-center">
                                <motion.div layoutId={`image-${card.title}-${id}`}
                                    className="relative h-40 w-40 md:h-14 md:w-14 rounded-lg">
                                    <Image
                                        src={card.src}
                                        alt={card.title}
                                        width={160}
                                        height={160}
                                        sizes="(max-width: 768px) 160px, 56px"
                                        className="object-contain"
                                        priority
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
                                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-gradient-to-bl from-blue-600 via-purple-700 to-fuchsia-700 hover:text-neutral-100 text-neutral-100 mt-4 md:mt-0"
                            >
                                {card.ctaText}
                            </motion.button>
                        </motion.div>
                    ))}
                </ul>
            </div>
        </>
    );
}

/**
 * CloseIcon component that renders an SVG close icon.
 * @returns {React.JSX.Element} The CloseIcon component.
 */
export const CloseIcon = (): React.JSX.Element => {
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
