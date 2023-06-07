import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const PopularInstructorsSection = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            {/* bg-gradient-to-l from-gray-500 via-white to-white  */}
            <h1 className='text-5xl text-center font-[Pacifico] uppercase'>Top Instructor</h1>
        </div>
    );
};

export default PopularInstructorsSection;