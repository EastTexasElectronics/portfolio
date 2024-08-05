'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

/**
 * Props for the Dropdown component.
 */
interface DropdownProps {
  label: string;
  items: string[];
}

/**
 * Dropdown component that renders a dropdown menu.
 *
 * @param {DropdownProps} props - Props for the Dropdown component.
 * @param {string} props.label - The label for the dropdown button.
 * @param {string[]} props.items - The items in the dropdown menu.
 * @returns {React.JSX.Element} The Dropdown component.
 */
const Dropdown = ({ label, items }: DropdownProps): React.JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="inline-flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-gray-600"
      >
        {label}
        <ChevronDown className="ml-1 w-4 h-4" />
      </button>
      {dropdownOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Navbar component that renders a navigation bar with dropdown menus.
 *
 * @returns {React.JSX.Element} The Navbar component.
 */
const Navbar = (): React.JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a className="text-2xl font-bold text-gray-800">MyWebsite</a>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Dropdown label="Active Projects" items={['Project 1', 'Project 2']} />
                <Dropdown label="Tools" items={['Tool 1', 'Tool 2']} />
                <Dropdown label="Connect with me" items={['LinkedIn', 'GitHub']} />
                <a href="https://support.me" className="text-gray-800 hover:text-gray-600">Support me</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Dropdown label="Active Projects" items={['Project 1', 'Project 2']} />
            <Dropdown label="Tools" items={['Tool 1', 'Tool 2']} />
            <Dropdown label="Connect with me" items={['LinkedIn', 'GitHub']} />
            <a href="https://support.me" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600">Support me</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
