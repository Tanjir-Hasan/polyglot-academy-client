import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='flex flex-col align-middle h-screen justify-center items-center my-auto'>
            <img src="https://i.ibb.co/T1zLHgy/3747371.jpg" alt="" className='h-64' />
            <h3 className='text-5xl font-extrabold text-[#0F1D22] my-4'>Error: {status}</h3>
            <p className='text-xl mb-4 text-center'>{error.message}</p>
            <Link to='/'>
                <button className='flex items-center text-xl bg-[#ef476f] text-white border-none  gap-3 mx-auto p-3 rounded-lg  
                 hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent 
                '>
                    Back to Home
                    <FaHome className="h-6 w-6 text-white" />
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;