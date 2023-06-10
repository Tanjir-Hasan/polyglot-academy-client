import React from 'react';

const ClassCard = ({ data }) => {

    const { language, image, availableSeats, name } = data;
    const isAvailable = availableSeats > 0;

    return (
        <div className={`${isAvailable ? '' : 'bg-red-400'} mt-5 py-10 w-1/2 mx-auto rounded-xl`}>
            <h1 className='text-3xl text-center font-[Inconsolata]'>{language}</h1>
            <div className="">
                <div className="relative mt-3 flex flex-wrap mx-auto justify-center">
                    <div className="min-w-[340px] flex flex-col group">
                        <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
                            <img
                                src={image}
                                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                alt=""
                            />
                            <div className="absolute border-4 border-[#ef476f]  w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
                        </div>
                        <p className="mb-4 text-lg text-center">
                            By, {name}.
                        </p>
                        <div className="flex justify-between items-center gap-x-3">
                            <p className='text-lg font-semibold'>Available Seat: {availableSeats}</p>

                            <button className={`bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded ${isAvailable ? '' : 'sold-out'} ${isAvailable ? '' : 'opacity-50'}`} disabled={!isAvailable}>
                                {isAvailable ? 'Get this Course' : 'Sold Out'}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;