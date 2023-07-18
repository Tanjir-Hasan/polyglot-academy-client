import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Link } from 'react-router-dom';

const Contact = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <div className="relative lg:w-11/12 mx-auto bg-[url(https://i.ibb.co/QCpyvtV/contact.png)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#23323e] lg:h-screen bg-cover bg-top"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex justify-end lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-right ltr:sm:text-right rtl:sm:text-right">
                        <div className='text-black bg-white bg-opacity-40 rounded-lg p-5 shadow-2xl hover:scale-110 duration-700'>
                            <h1 className="text-3xl  font-extrabold sm:text-5xl">
                                Be creative with us.
                            </h1>

                            <p className="mt-4 font-medium text-right max-w-lg sm:text-xl/relaxed">
                                One language sets you in a corridor for life. Two languages open every door along the way.
                            </p>
                        </div>


                        <div className="mt-8 flex justify-end gap-4 text-center">
                            <button className='bg-white bg-opacity-40 hover:bg-[#ef476f] hover:scale-105 duration-1000 font-semibold hover:text-white py-2 px-4 border-4 border-[#23323e] hover:border-transparent rounded w-1/2'>
                                <Link to="/sign-up">Sign up now</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;