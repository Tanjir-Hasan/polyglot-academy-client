import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const LatestBlog = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='headline'>Latest Blog</h1>
        </div>
    );
};

export default LatestBlog;