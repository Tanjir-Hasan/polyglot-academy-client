import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import ClassCard from './ClassCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {

    const { theme } = useContext(ThemeContext);
    const [allData, setAllData] = useState([]);

    // const [axiosSecure] = useAxiosSecure();

    // const { data: users = [] } = useQuery(['users'], async () => {
    //     const res = await axiosSecure.get('/users')
    //     return res.data;
    // });

    useEffect(() => {
        fetch('http://localhost:5000/classes')
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