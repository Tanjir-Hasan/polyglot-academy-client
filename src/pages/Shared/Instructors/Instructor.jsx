import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Instructor = ({ data }) => {

    const { theme } = useContext(ThemeContext);
    const { instructor_name, instructor_picture } = data;

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="">
                <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                    <div className="min-w-[340px] flex flex-col group">
                        <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                            <img
                                src={instructor_picture}
                                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                alt=""
                            />
                            <div className="absolute border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                        </div>
                        <p className="mb-4 text-lg text-center">
                            {instructor_name}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;