'use client'

import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, Mail, ChevronDown, Code, Briefcase, Zap } from "lucide-react"

export function Hero() {
    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                >
                    <Badge variant="default" className="mb-6 text-neutral-100 text-lg px-4 py-2">
                        Welcome to My Portfolio 🚀
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-neutral-100 text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Robert Havelaar
                </motion.h1>

                <motion.p
                    className="text-neutral-100 text-xl md:text-2xl max-w-2xl mx-auto mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Full-Stack Software Engineer | Problem Solver | Innovation Enthusiast
                </motion.p>

                <motion.div
                    className="flex justify-center space-x-8 mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center">
                        <Code size={32} className="text-blue-500 mb-2" />
                        <span className="text-neutral-300">Clean Code</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Briefcase size={32} className="text-green-500 mb-2" />
                        <span className="text-neutral-300">Project Delivery</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Zap size={32} className="text-yellow-500 mb-2" />
                        <span className="text-neutral-300">Fast Learner</span>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Link href="https://github.com/EastTexasElectronics" passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-blue-600 text-neutral-100 rounded-full cursor-pointer hover:opacity-90 transition-opacity duration-200 flex items-center gap-2"
                            role="button"
                            aria-label="View my GitHub"
                        >
                            <Github size={20} />
                            <span>Explore My Work</span>
                        </motion.div>
                    </Link>
                    <Link href="mailto:rmhavelaar@gmail.com" passHref>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-neutral-800 text-neutral-100 rounded-full cursor-pointer hover:bg-neutral-700 transition-colors duration-200 flex items-center gap-2"
                            role="button"
                            aria-label="Opens email client to send me an email"
                            data-analytics-event="Email Link Clicked" // Plausible Analytics event
                        >
                            <Mail size={20} />
                            <span>Let&apos;s Connect</span>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Background animation */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"
                    initial={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 50%)" }} // Set initial background
                    animate={{
                        background: [
                            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(0,0,0,0) 50%)",
                            "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(0,0,0,0) 50%)",
                            "radial-gradient(circle, rgba(236,72,153,0.2) 0%, rgba(0,0,0,0) 50%)",
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                />
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <ChevronDown size={32} className="text-neutral-400" />
            </motion.div>
        </div>
    )
}
