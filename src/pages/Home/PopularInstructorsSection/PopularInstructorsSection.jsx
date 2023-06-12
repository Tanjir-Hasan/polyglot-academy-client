import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import InsCard from './InsCard';
import { motion } from "framer-motion"

const PopularInstructorsSection = () => {

    const { theme } = useContext(ThemeContext);

    const [allData, setAllData] = useState([]);

    const [displayCount, setDisplayCount] = useState(6);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('https://summer-camp-server-rouge.vercel.app/users/instructors')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    const handleShowMore = () => {
        setShowAll(true);
        setDisplayCount(allData.length);
    };

    const handleShowLess = () => {
        setShowAll(false);
        setDisplayCount(6);
    };

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='text-5xl text-center font-[Pacifico] uppercase pt-14'>Top Instructor</h1>

            <div className='md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16  py-14'>

                {allData.slice(0, displayCount).map(data => <InsCard key={data._id} data={data}></InsCard>)}

            </div>

            <div className='flex justify-center pb-10'>
                {!showAll && (
                    <motion.button 
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    className='bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded' onClick={handleShowMore}>Show More</motion.button>
                )}
                {showAll && (
                    <motion.button 
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    className='bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded' onClick={handleShowLess}>Show Less</motion.button>
                )}
            </div>

        </div>
    );
};

export default PopularInstructorsSection;