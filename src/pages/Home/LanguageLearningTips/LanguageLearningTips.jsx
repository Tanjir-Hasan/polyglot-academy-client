import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const LanguageLearningTips = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h1 className='headline'>Language Learning Tips</h1>
        </div>
    );
};

export default LanguageLearningTips;