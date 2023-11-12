"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

import NavLink from './NavLink';


const navlinks = [
    { title: 'About', path: '#about' },
    { title: 'Projects', path: '#projects' },
    { title: 'Contact', path: '#contact' },
    { title: 'about', path: '#about' },

];

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const [screenWidth, setScreenWidth] = useState(768);

    // Function to update screenWidth state when the window is resized
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add an event listener to the window to update screenWidth on resize
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        if(screenWidth > 798) setNavbarOpen(false);
        
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, [screenWidth]);


    return (
        <nav className='fixed mx-auto border border-[#33353F]  top-0 left-0 right-0 p-4 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4 px-4'>
                <Link href={'/'} className='text-2xl text-white font-semibold '> BOLD </Link>

                <div className="mobile-menu block md:hidden ">
                    {
                        !navbarOpen ? (<button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><Bars3Icon className='h-5 w-5' /></button>) : (<button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><XMarkIcon className='h-5 w-5' /></button>)
                    }
                </div>


                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
                        {
                            navlinks.map((link, index) => (
                                <li key={index + "alsfd"}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navlinks} />}
        </nav>
    )
}

export default Navbar;