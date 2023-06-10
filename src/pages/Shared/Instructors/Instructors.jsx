import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Instructor from './Instructor';

const Instructors = () => {

    const { theme } = useContext(ThemeContext);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='text-6xl text-center font-[Pacifico] py-10'>Our Instructor</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {allData.map(data => <Instructor key={data._id} data={data}></Instructor>)}
            </div>
        </div>
    );
};

export default Instructors;