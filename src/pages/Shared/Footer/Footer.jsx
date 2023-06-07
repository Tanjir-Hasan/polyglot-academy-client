import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (

        <div className={`px-4 py-16 mx-auto sm:px-6 lg:px-8  
        my-component ${theme === 'dark' ? 'dark' : 'bg-gradient-to-t from-gray-500 via-white to-white'}
        `}>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <img src="logo.png" className="mr-5 h-20 rounded-full sm:h-9" alt="logo" />
                    <p className="max-w-xs mt-4 text-sm">
                        Be the one with us.
                    </p>
                    <div className='mt-8'>
                        <p className="font-medium">
                            Follow us on
                        </p>
                        <div className="flex mt-4 space-x-6 text-gray-600">
                            <Link className="hover:opacity-75" to="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Facebook </span>
                                <img src="https://i.ibb.co/R3yscFS/facebook.png" className='w-10' alt="" />
                            </Link>
                            <Link className="hover:opacity-75" to="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Instagram </span>
                                <img src="https://i.ibb.co/LCpkrq2/instagram.png" className='w-11' alt="" />
                            </Link>
                            <Link className="hover:opacity-75" to="https://twitter.com/" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Twitter </span>
                                <img src="https://i.ibb.co/m5vHK6z/twitter.png" className='w-10' alt="" />
                            </Link>
                            <Link className="hover:opacity-75" to="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Youtube </span>
                                <img src="https://i.ibb.co/r2K2Cxv/youtube.png" className='w-10' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="font-medium">
                            Company
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link className="hover:opacity-75" href> About </Link>
                            <Link className="hover:opacity-75" href> Meet the Team </Link>
                            <Link className="hover:opacity-75" href> History </Link>
                            <Link className="hover:opacity-75" href> Careers </Link>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium">
                            Services
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link className="hover:opacity-75" href> 1on1 Coaching </Link>
                            <Link className="hover:opacity-75" href> Company Review </Link>
                            <Link className="hover:opacity-75" href> Accounts Review </Link>
                            <Link className="hover:opacity-75" href> HR Consulting </Link>
                            <Link className="hover:opacity-75" href> SEO Optimization </Link>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium">
                            Helpful Links
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link className="hover:opacity-75" href> Contact </Link>
                            <Link className="hover:opacity-75" href> FAQs </Link>
                            <Link className="hover:opacity-75" href> Live Chat </Link>
                        </nav>
                    </div>
                    <div>
                        <p className="font-medium">
                            Legal
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                            <Link className="hover:opacity-75" href> Privacy Policy </Link>
                            <Link className="hover:opacity-75" href> Terms &amp; Conditions </Link>
                            <Link className="hover:opacity-75" href> Returns Policy </Link>
                            <Link className="hover:opacity-75" href> Accessibility </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <p className="text-center mt-8 text-xs">
                © 2023 Comany Name
            </p>
        </div>

    );
};

export default Footer;