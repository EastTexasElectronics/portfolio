/**
 * Inspired by https://ui.aceternity.com/components/navbar-menu
 * Rewritten for better performance, type safety, modularity, and current standards.
 * Please ensure you update the aria-label on the links to match the content.
 */

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Transition settings for framer-motion animations
const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

interface MenuItemProps {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}

export const MenuItem = ({ setActive, active, item, children }: MenuItemProps) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-neutral-200 hover:opacity-[0.9]"
            >
                {item}
            </motion.p>
            {active === item && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                    className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
                >
                    <motion.div
                        transition={transition}
                        layoutId="active" // layoutId ensures smooth animation
                        className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                    >
                        <motion.div
                            layout // layout ensures smooth animation
                            className="w-max h-full p-4"
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

interface MenuProps {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}


export const Menu = ({ setActive, children }: MenuProps) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-white/[0.2] bg-black shadow-input flex justify-center space-x-4 px-8 py-6 opacity-90"
        >
            {children}
        </nav>
    );
};

interface ProductItemProps {
    title: string;
    description: string;
    href: string;
    src: string;
}

export const ProductItem = ({ title, description, href, src }: ProductItemProps) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-neutral-100">
                    {title}
                </h4>
                <p className="text-neutral-300 text-sm max-w-[10rem]">
                    {description}
                </p>
            </div>
        </Link>
    );
};

interface HoveredLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    children: React.ReactNode;
    href: string;
}

export const HoveredLink = ({ children, href, ...rest }: HoveredLinkProps) => {
    return (
        <Link
            href={href}
            {...rest}
            className="text-neutral-100 hover:text-neutral-200"
        >
            {children}
        </Link>
    );
};
