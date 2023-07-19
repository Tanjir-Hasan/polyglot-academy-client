import React from 'react';

const Blog = ({ item }) => {

    const { title, author, date, excerpt, description, image } = item;

    return (
        <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl hover:text-[#edf2f4] duration-1000 hover:bg-[#14213d] mb-10 font-thin shadow-xl'>
            <div className='lg:flex justify-between items-center py-5'>
                <div className='lg:w-1/2'>
                    <h3>{title}</h3>
                    <p>Author: {author}</p>
                    <p>{excerpt}</p>
                </div>
                <img src={image} alt="" className='lg:w-1/3 lg:py-0 py-5' />
            </div>
            <p>{description}</p>
            <p><small>Posted on: {date}</small></p>
        </div>
    );
};

export default Blog;