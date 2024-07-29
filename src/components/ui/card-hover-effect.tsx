/**
 * Inspired by https://ui.aceternity.com/components/card-hover-effect
 * Rewritten for better performance, type safety, modularity, and current standards.
 */
'use client';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, useCallback } from "react";
import type { ReactNode } from "react";

// Define the item and props interfaces
interface Item {
    title: string;
    description: string;
    link?: string; // Make link optional
}

interface HoverEffectProps {
    items: Item[];
    className?: string;
}

interface CardProps {
    className?: string;
    children: ReactNode;
}

interface CardTitleProps {
    className?: string;
    children: ReactNode;
}

interface CardDescriptionProps {
    className?: string;
    children: ReactNode;
}

export function HoverEffect({ items, className }: HoverEffectProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = useCallback((index: number) => {
        setHoveredIndex(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
            {items.map((item, idx) => (
                item.link ? (
                    <Link
                        href={item.link}
                        key={item.title}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        aria-label={item.title}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-500 block rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </Link>
                ) : (
                    <div
                        key={item.title}
                        className="relative group block p-2 h-full w-full"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        aria-label={item.title}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-500 block rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </div>
                )
            ))}
        </div>
    );
}

function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-900 border border-transparent  group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}

function CardTitle({ className, children }: CardTitleProps) {
    return (
        <h4 className={cn("text-neutral-200 text-center font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
}

function CardDescription({ className, children }: CardDescriptionProps) {
    return (
        <p
            className={cn("mt-8 text-neutral-400 tracking-wide leading-relaxed text-sm", className)}
        >
            {children}
        </p>
    );
}
