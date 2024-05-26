'use client'
import { Button } from '@/components'
import React, { useEffect, useState } from 'react'
import ScrollDetector from '../../context/scrollDetector';
import { usePathname } from 'next/navigation';

const navbar = () => {

    const scroll = ScrollDetector();
    const pathname = usePathname();
    const [activePath, setActivePath] = useState('/');

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={`fixed z-50 bg-white border-gray-200 dark:bg-gray-900 w-full ${scroll.scrollingDown ? "opacity-0" : "opacity-100"} ${scroll.scrolling ? "bg-opacity-70" : "bg-opacity-100"}`} data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500">
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-16 lg:py-4'>
                <h1 className='text-yellow-primary text-lg md:text-xl lg:text-2xl font-extrabold' >Potret<span className='text-black'>Arsyi</span></h1>
                <div className='flex flex-wrap items-center justify-center' >
                    <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-transparant md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparant dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#home"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-primary md:p-0 dark:text-white md:dark:hover:text-yellow-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#project"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-primary md:p-0 dark:text-white md:dark:hover:text-yellow-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Project
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#softskill"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-primary md:p-0 dark:text-white md:dark:hover:text-yellow-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Personal Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tools"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-primary md:p-0 dark:text-white md:dark:hover:text-yellow-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Tools
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='ml-2 md:ml-5 lg:ml-8 mt-2 '>
                        <Button onClick={() => window.open('https://wa.me/6285171620044', '_blank')} isFull={false}>
                            Contact Me
                        </Button>

                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"
                } w-full md:hidden md:w-auto" id="navbar-default`}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a
                            href="#home"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            aria-current="page"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#project"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Project
                        </a>
                    </li>
                    <li>
                        <a
                            href="#softskill"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Personal Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tools"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Tools
                        </a>
                    </li>

                </ul>
            </div>

        </nav>

    )
}

export default navbar