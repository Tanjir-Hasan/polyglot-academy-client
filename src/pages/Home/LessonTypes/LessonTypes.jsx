import React, { useContext } from 'react';
import img1 from '../../../assets/images/hand.png';
import img2 from '../../../assets/images/link.png';
import img3 from '../../../assets/images/live-streaming.png';
import img4 from '../../../assets/images/meet.png';
import img5 from '../../../assets/images/play-button.png';
import img6 from '../../../assets/images/text-format.png';
import img7 from '../../../assets/images/vimeo.png';
import img8 from '../../../assets/images/zoom (1).png';
import img9 from '../../../assets/images/youtube.png';
import img10 from '../../../assets/images/giphy.gif';
import { ThemeContext } from '../../../providers/ThemeProvider';

const LessonTypes = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`py-20 space-y-10 my-component ${theme === 'dark' ? 'dark' : ''}`}>

            <div className='space-y-3'>
                <h1 className='text-5xl text-center font-[Pacifico]'>LESSON TYPES</h1>
                <p className='text-xl text-center md:px-28 px-6 font-[Inconsolata]'>Don’t stick to the one type of lesson. Take advantage of the options provided. We developed Masterstudy LMS with a well-defined approach in mind. And the main point of this was to make it diverse.</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 w-1/2 mx-auto gap-5 py-5'>
                <div className='flex flex-col items-center gap-3'>
                    <img src={img5} className='w-16' alt="" />
                    <p>VIDEO</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img src={img1} className='w-16' alt="" />
                    <p>SLIDES</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img src={img6} className='w-16' alt="" />
                    <p>TEXT</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img src={img3} className='w-16' alt="" />
                    <p>STREAMING</p>
                </div>
            </div>

            <img src={img10} className='w-8/12 h-[400px] mx-auto' alt="" />

            <div className='space-y-6'>
                <h1 className='text-5xl text-center font-[Pacifico] py-5'>5 TYPES OF VIDEO LESSONS</h1>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-1/4 lg:w-9/12 mx-auto gap-5'>
                        <div className='flex items-center gap-2'>
                            <img src={img9} className='w-16' alt="" />
                            <p>Youtube</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={img8} className='w-16' alt="" />
                            <p>Zoom</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={img4} className='w-16' alt="" />
                            <p>Google Meet</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={img7} className='w-16' alt="" />
                            <p>Vimeo</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={img2} className='w-16' alt="" />
                            <p>External Link</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonTypes;