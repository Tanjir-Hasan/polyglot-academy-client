import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Card from './Card';

const PopularClassesSection = () => {

    const { theme } = useContext(ThemeContext);

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>

            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl text-center font-[Pacifico] uppercase py-20'>Popular Choices</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pb-10'>

                    {
                        allData.map(data => <Card key={data._id} data={data}></Card>)
                    }

                </div>
            </div>
        </div>
    );
};


export default PopularClassesSection;