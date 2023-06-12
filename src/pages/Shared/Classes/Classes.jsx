import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ClassCard from './ClassCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {

    const { theme } = useContext(ThemeContext);
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        fetch('https://summer-camp-server-rouge.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
            {
                allData.map(data => <ClassCard key={data._id}  data={data}></ClassCard>)
            }
        </div>
    );
};

export default Classes;