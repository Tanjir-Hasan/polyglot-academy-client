import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const ClassCard = ({ data, users }) => {

    const { theme } = useContext(ThemeContext);

    // console.log(users)

    const { language, picture, availableSeats, instructor_name } = data;


    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='text-3xl text-center font-[Inconsolata]'>{language}</h1>
            <div className="">
                <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                    <div className="min-w-[340px] flex flex-col group">
                        <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                            <img
                                src={picture}
                                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                alt=""
                            />
                            <div className="absolute border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                        </div>
                        <p className="mb-4 text-lg text-center">
                            By, {instructor_name}.
                        </p>
                        <div className="flex justify-between items-center gap-x-3">
                            <p>Available Seat: {availableSeats}</p>

{/* {
    availableSeats.length === 0 && <button className="btn btn-outline ">Get this Course</button> || <button className="btn btn-primary">Get this Course</button>
} */}
                            <button className="btn btn-outline">Get this Course</button>

                            {/* <button className={`btn btn-outline ${users.role === 'admin' ? 'btn-primary' : ''}`}
                            disabled={users.role === 'admin'}
                            >Get this Course</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;