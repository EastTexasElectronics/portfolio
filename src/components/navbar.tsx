"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";


export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-md mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="mailto:rmhavelaar@gmail.com">Email Me</HoveredLink>
                        <HoveredLink href="https://github.com/EastTexasElectronics">GitHub</HoveredLink>
                    </div>
                </MenuItem>
                <div className="text-neutral-100">|</div>
                <MenuItem setActive={setActive} active={active} item="Free Tools">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="ZSH/Bash File Tree Generator"
                            href="https://github.com/EastTexasElectronics/FileTreeGenerator"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="A shell script that generates a file tree in a given directory."
                        />
                        <ProductItem
                            title="Go File Tree Generator"
                            href="https://github.com/EastTexasElectronics/File_Tree_Generator_GO"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="A Go program that generates a file tree in a given directory."
                        />
                        <ProductItem
                            title="Command Line Image Converter"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Coming Soon- A secure client side browser based image converter."
                        />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
