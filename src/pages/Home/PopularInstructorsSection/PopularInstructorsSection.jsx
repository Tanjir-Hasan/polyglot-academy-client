import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const PopularInstructorsSection = () => {
    
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='text-5xl text-center font-[Pacifico] uppercase'>Top Instructor</h1>

            <div className='md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16  py-14'>

                <div className="card w-96 bg-base-100 shadow-xl ml-4">
                    <div className="card-body">
                        <h2 className="card-title text-black">Shoes!</h2>
                        <p className="text-black">If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                    <figure><img src="https://i.ibb.co/tZBjVpW/pexels-hasan-albari-1102360.jpg" alt="Shoes" /></figure>
                </div>

            </div>
        </div>
    );
};

export default PopularInstructorsSection;