import React from 'react';
import Marquee from 'react-fast-marquee';

const Card = ({ item }) => {

    const { name, description } = item;

    return (
        
            <div className='-rotate-2 hover:rotate-0 bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl w-full hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                <h3 className='text-xl font-mono'>{name}</h3>
                <p className='text-justify font-light'><small>{description}</small></p>
            </div>
        
    );
};

export default Card;