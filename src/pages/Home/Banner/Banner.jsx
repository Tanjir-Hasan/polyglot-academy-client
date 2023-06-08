import { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeContext } from '../../../providers/ThemeProvider';

const Banner = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Carousel>
            <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
                <img src="https://i.ibb.co/my6NdPZ/photo-1555431189-0fabf2667795.jpg" alt="" />
                <div className='py-3 px-20 space-y-1'>
                    <h4 className='text-2xl font-[Cinzel]'>Unlock Your Linguistic Potential</h4>
                    <p className='font-[Inconsolata]'>At Language Mastery, embark on an immersive journey into the world of languages. Our dynamic language school offers a diverse range of courses tailored to suit every learner's needs. Whether you're a beginner or advanced, our experienced instructors will guide you to fluency, empowering you to communicate confidently in any language. Don't be afraid. Let's do it together.</p>
                </div>
            </div>
            <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
                <img src="https://i.ibb.co/rffKGDN/photo-1546410531-bb4caa6b424d.jpg" alt="" />
                <div className='py-3 px-20 space-y-1'>
                    <h4 className='text-2xl font-[Cinzel]'>Explore the Joy of Language Acquisition</h4>
                    <p className='font-[Inconsolata]'>Indulge your love for learning at our vibrant language school. Discover the magic of acquiring new languages through interactive classes, engaging activities, and personalized guidance. Our dedicated team of educators will ignite your curiosity and fuel your desire to master languages, creating an inspiring and supportive environment for your educational journey.</p>
                </div>
            </div>
            <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>
                <img src="https://i.ibb.co/r5Wb6hh/photo-1568047571827-8c46fe611345.jpg" alt="" />
                <div className='py-3 px-20 space-y-1'>
                    <h4 className='text-2xl font-[Cinzel]'>Open the Doors to Multilingual Proficiency</h4>
                    <p className='font-[Inconsolata]'>Open new horizons by turning the page at our esteemed language school. Immerse yourself in a rich tapestry of languages and cultures, guided by our expert instructors. With a comprehensive curriculum, innovative teaching methods, and a focus on practical application, we empower learners to confidently navigate the diverse global landscape. Expand your linguistic repertoire and unlock endless opportunities with us.</p>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;