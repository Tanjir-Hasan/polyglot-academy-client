import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const InsCard = ({data}) => {

    const { instructor_name, instructor_picture, language } = data;

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`card w-96 bg-base-100 shadow-xl ml-4 {my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p className='font-thin text-lg'>{language} Instructor</p>
            </div>
            <figure><img src={instructor_picture} alt="instructor_picture" /></figure>
        </div>
    );
};

export default InsCard;