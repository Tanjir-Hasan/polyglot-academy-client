import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Card from './Card';

const PopularClassesSection = () => {

    const { theme } = useContext(ThemeContext);

    const [allData, setAllData] = useState([]);

    const [displayCount, setDisplayCount] = useState(6);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => { setAllData(data) })

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

            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl text-center font-[Pacifico] uppercase py-20'>Popular Choices</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pb-10'>

                    {
                        allData.slice(0, displayCount).map(data => <Card key={data._id} data={data}></Card>)
                    }

                </div>

                <div className='flex justify-center pb-10'>
                    {!showAll && (
                        <button className='bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded' onClick={handleShowMore}>Show More</button>
                    )}
                    {showAll && (
                        <button className='bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded' onClick={handleShowLess}>Show Less</button>
                    )}
                </div>


            </div>
        </div>
    );
};


export default PopularClassesSection;