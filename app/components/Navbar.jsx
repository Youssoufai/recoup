import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-[#171717] text-white flex items-center justify-between px-6 py-4 shadow-md">
            <div className="text-2xl font-bold tracking-wide">
                YM<span className="text-[#00FFA3]">.</span>
            </div>
            <ul className="flex gap-8 text-sm font-medium">
                <a href="#about">
                    <li className="cursor-pointer hover:text-[#00FFA3] transition duration-300">About</li>
                </a>
                <a href="#work">
                    <li className="cursor-pointer hover:text-[#00FFA3] transition duration-300">Work</li>
                </a>
                <a href="#contact">
                    <li className="cursor-pointer hover:text-[#00FFA3] transition duration-300">Contact</li>
                </a>
            </ul>
        </nav>
    );
};

export default Navbar;
