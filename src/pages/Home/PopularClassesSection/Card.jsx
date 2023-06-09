import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Card = ({ data }) => {

    const { theme } = useContext(ThemeContext);

    const { language, picture, availableSeats, instructor_name } = data;

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div>
                <img className="lg:rounded-2xl object-cover overflow-hidden" src={picture} />
            </div>
            <div className="lg:-translate-y-6 transform lg:ml-32 lg:-mr-5 p-10 shadow-xl hover:shadow-2xl  rounded-bl-2xl border-b-8 border-[#ef476f] overflow-hidden">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold  tracking-tight">
                        {language}
                    </h1>

                    <p className="text-xl font-bold ">
                        Instructor Name
                    </p>
                    <p className="text-2xl font-bold text-[#ef476f]">
                        {instructor_name}
                    </p>
                </div>
                <div className="grid border-t border-b border-gray-200 my-12 py-4">
                    <p className="text-xl font-bold ">
                        Available Seats
                    </p>
                    <p className="text-2xl font-bold text-[#ef476f]">
                        {availableSeats}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;