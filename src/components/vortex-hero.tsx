import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function VortexHero() {
    return (
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <Badge variant="secondary" className="mb-4">
                    Hi, I&apos;m Robert Havelaar 👋
                </Badge>
                <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
                    Full-Stack Software Engineer
                </h1>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Making your dream projects a reality
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Link href="#projects" passHref>
                        <div
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] cursor-pointer"
                            role="button"
                            aria-label="View my projects"
                        >
                            Projects
                        </div>
                    </Link>
                    <Link href="mailto:rmhavelaar@gmail.com" passHref>
                        <div
                            className="px-4 py-2 text-white cursor-pointer"
                            role="button"
                            aria-label="Email me"
                        >
                            Email Me
                        </div>
                    </Link>
                </div>
            </Vortex>
        </div>
    );
}
