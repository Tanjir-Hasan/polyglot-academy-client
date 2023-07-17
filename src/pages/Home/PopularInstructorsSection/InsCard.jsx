import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const InsCard = ({data}) => {

    const { name, image, } = data;

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`card lg:w-10/12 w-11/12 mx-auto bg-base-100 shadow-xl ml-4 {my-component ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
            <figure><img src={image} alt="instructor_picture" /></figure>
        </div>
    );
};

export default InsCard;