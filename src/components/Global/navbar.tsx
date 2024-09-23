"use client";

import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, Coffee, Mail } from 'lucide-react';
import Link from 'next/link';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { track } from '@vercel/analytics';

interface DropdownItem {
    name: string;
    href: string;
}

interface DropdownProps {
    label: string;
    items: DropdownItem[];
    isMobile?: boolean;
}

/**
 * Dropdown component for displaying a collapsible menu.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The text to display on the dropdown button.
 * @param {Array<{name: string, href: string}>} props.items - An array of items to display in the dropdown.
 * @param {boolean} [props.isMobile=false] - Whether the dropdown is being rendered in a mobile view.
 *
 * @returns {React.ReactNode} A dropdown menu component.
 */
const Dropdown = ({ label, items, isMobile = false }: DropdownProps): React.ReactNode => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick(dropdownRef, () => setDropdownOpen(false));

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        track('Dropdown Toggled', { label, isOpen: !dropdownOpen });
    };

    /**
     * Returns the appropriate icon for a given menu item.
     *
     * @param {string} name - The name of the menu item.
     * @returns {React.ReactElement | null} The icon component or null if no icon is found.
     */
    const getIcon = (name: string): React.ReactElement | null => {
        switch (name) {
            case 'GitHub':
                return (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                );
            case 'LinkedIn':
                return (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                );
            case 'Support Email':
                return <Mail className="w-4 h-4 mr-2" />;
            default:
                return null;
        }
    };

    return (
        <div ref={dropdownRef} className={`relative z-50 ${isMobile ? 'w-full' : ''}`}>
            <button
                onClick={toggleDropdown}
                onKeyDown={(e) => e.key === 'Escape' && setDropdownOpen(false)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className={`inline-flex items-center px-3 py-2 rounded-md text-neutral-200 hover:text-gray-400 ${isMobile ? 'w-full justify-between' : ''}`}
            >
                {label}
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
                <div
                    className={`mt-2 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5 z-50 ${isMobile ? 'relative w-full' : 'absolute w-48'}`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="px-4 py-2 text-sm text-neutral-200 hover:bg-gray-700 hover:text-white flex items-center"
                                role="menuitem"
                                onClick={() => track('Link Clicked', { label: item.name, href: item.href })}
                            >
                                {getIcon(item.name)}
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * Navbar component for the main navigation of the website.
 *
 * @returns {React.ReactNode} A responsive navigation bar component.
 */
const Navbar = (): React.ReactNode => {
    const [menuOpen, setMenuOpen] = useState(false);

    const activeProjects = [
        { name: 'SVG 2 Liquid', href: '/S2L' },
        { name: 'File Tree Generator', href: '/file-tree-generator-app' },
        { name: 'ServeCommerce (Coming Soon)', href: '/' },
    ];

    const connectLinks = [
        { name: 'LinkedIn', href: 'https://linkedin.com/in/robert-havelaar' },
        { name: 'GitHub', href: 'https://github.com/EastTexasElectronics' },
        { name: 'Support Email', href: 'mailto:contact@easttexaselectronics.com' },
    ];

    return (
        <nav className="bg-transparent shadow-md relative w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-neutral-200" onClick={() => track('Link Clicked', { label: 'Home', href: '/' })}>
                            robert<span className="custom-underline">havelaar</span><span className="gradient-text">.dev</span>
                        </Link>
                    </div>
                    <div className="hidden md:block flex-grow">
                        <div className="ml-10 flex items-center justify-center space-x-4">
                            <Dropdown label="Active Projects & Tools" items={activeProjects} />
                            <Dropdown label="Connect with me" items={connectLinks} />
                            <Link href="https://buymeacoffee.com/rmhavelaar" className="text-neutral-200 hover:text-gray-400 flex items-center" onClick={() => track('Link Clicked', { label: 'Support Me', href: 'https://buymeacoffee.com/rmhavelaar' })}>
                                Support Me <Coffee className="ml-2" size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => {
                                setMenuOpen(!menuOpen);
                                track('Menu Toggled', { isOpen: !menuOpen });
                            }}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-200 hover:text-gray-400 focus:outline-none"
                        >
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Dropdown label="Active Projects & Tools" items={activeProjects} isMobile={true} />
                        <Dropdown label="Connect with Me" items={connectLinks} isMobile={true} />
                        <Link target='_blank' referrerPolicy='no-referrer' href="https://buymeacoffee.com/rmhavelaar" className="px-3 py-2 rounded-md text-base font-medium text-neutral-200 hover:text-gray-400 flex items-center" onClick={() => track('Link Clicked', { label: 'Support Me', href: 'https://buymeacoffee.com/rmhavelaar' })}>
                            Support Me <Coffee className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
