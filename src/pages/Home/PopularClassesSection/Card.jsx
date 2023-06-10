import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { useAdmin } from '../../../hooks/useAdmin';
import { useInstructor } from '../../../hooks/useInstructor';
import { AuthContext } from '../../../providers/AuthProviders';

const Card = ({ data, user }) => {

    const { theme } = useContext(ThemeContext);

    const { language, image, availableSeats, name } = data;
    // const isAvailable = availableSeats > 0;

    // const { isAdmin, isAdminLoading } = useAdmin();
    // const { isInstructor, isInstructorLoading } = useInstructor();
    // const { user } = useContext(AuthContext);

    const isAvailable = availableSeats > 0;
    // const isButtonDisabled = !isAvailable || isAdmin || isInstructor || !user;

    // if (isAdminLoading || isInstructorLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div>
                <img className="lg:rounded-2xl object-cover overflow-hidden" src={image} />
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
                        {name}
                    </p>
                </div>
                <div className="grid border-t border-b border-gray-200 mt-6 py-4">
                    <div className="flex justify-between">
                        <p className='text-xl font-bold'>Available Seats</p>
                        <p className="text-2xl font-bold text-[#ef476f]">
                            {availableSeats}
                        </p>
                    </div>
                </div>
                <div className="grid border-b border-gray-200 mb-12 py-4">


                    <button className={`bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded ${isAvailable ? '' : 'sold-out'} ${isAvailable ? '' : 'opacity-50'}`} disabled={!isAvailable}>
                        {isAvailable ? 'Get this Course' : 'Sold Out'}
                    </button>

                    
                </div>
            </div>
        </div>
    );
};

export default Card;