import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import Card from './Card';
import Marquee from 'react-fast-marquee';

const InteractiveLanguageTools = () => {

    const { theme } = useContext(ThemeContext);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
            <h2 className='headline'>Interactive Language Tools</h2>

            <Marquee pauseOnHover={true} speed={100}>
                <div className='flex gap-5 px-3 py-3'>
                    {
                        items.map(item =>
                            <Card item={item} key={item.id}></Card>
                        )
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default InteractiveLanguageTools;