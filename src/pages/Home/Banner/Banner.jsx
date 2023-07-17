import { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Banner = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>

            <Carousel autoPlay>
                <div>
                    <img src="https://i.ibb.co/rffKGDN/photo-1546410531-bb4caa6b424d.jpg" />
                    <p className="legend font-[Inconsolata]">Indulge your love for learning at our vibrant language school. Discover the magic of acquiring new languages through interactive classes, engaging activities, and personalized guidance. Our dedicated team of educators will ignite your curiosity and fuel your desire to master languages, creating an inspiring and supportive environment for your educational journey.</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/my6NdPZ/photo-1555431189-0fabf2667795.jpg" className='h-1/2' />
                    <p className="legend font-[Inconsolata]">Indulge your love for learning at our vibrant language school. Discover the magic of acquiring new languages through interactive classes, engaging activities, and personalized guidance. Our dedicated team of educators will ignite your curiosity and fuel your desire to master languages, creating an inspiring and supportive environment for your educational journey. At Language Mastery, embark on an immersive journey into the world of languages. Our dynamic language school offers a diverse range of courses tailored to suit every learner's needs. Whether you're a beginner or advanced, our experienced instructors will guide you to fluency, empowering you to communicate confidently in any language. Don't be afraid. Let's do it together.</p>
                </div>

                <div>
                    <img src="https://i.ibb.co/r5Wb6hh/photo-1568047571827-8c46fe611345.jpg" />
                    <p className="legend font-[Inconsolata]">At Language Mastery, embark on an immersive journey into the world of languages. Our dynamic language school offers a diverse range of courses tailored to suit every learner's needs. Whether you're a beginner or advanced, our experienced instructors will guide you to fluency, empowering you to communicate confidently in any language. Don't be afraid. Let's do it together.</p>
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;