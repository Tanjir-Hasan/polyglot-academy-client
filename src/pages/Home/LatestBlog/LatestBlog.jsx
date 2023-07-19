import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Blog from './Blog';

const LatestBlog = () => {

    const { theme } = useContext(ThemeContext);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='headline'>Latest Blog</h1>

            <div className='w-10/12 mx-auto' style={{ height: '400px', overflowY: 'scroll' }}>
                {
                    items.map(item => <Blog key={item.id} item={item}></Blog>)
                }
            </div>
        </div>
    );
};

export default LatestBlog;