import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const InteractiveLanguageTools = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h2 className='headline'>Interactive Language Tools</h2>
        </div>
    );
};

export default InteractiveLanguageTools;