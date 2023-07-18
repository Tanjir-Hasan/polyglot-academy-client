import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import InsCard from './InsCard';
import { motion } from "framer-motion"

const PopularInstructorsSection = () => {

    const { theme } = useContext(ThemeContext);

    const [allData, setAllData] = useState([]);

    const [displayCount, setDisplayCount] = useState(3);
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
        setDisplayCount(3);
    };

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='headline'>Top Instructor</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12 mx-auto pb-10'>

                {allData.slice(0, displayCount).map(data => <InsCard key={data._id} data={data}></InsCard>)}

            </div>

            <div className='flex justify-center py-10'>
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