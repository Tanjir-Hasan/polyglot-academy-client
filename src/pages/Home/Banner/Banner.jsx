import { useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ThemeContext } from '../../../providers/ThemeProvider';

const Banner = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (

        <>

            <div className={`my-component ${theme === 'dark' ? 'dark' : ''}`}>

            <div className="carousel w-full">
                    <div id="item1" className="item1 carousel-item w-full lg:flex items-center">
                        <div className='space-y-2 lg:px-20 px-5 py-3'>
                            <h4 className='text-2xl font-[Cinzel] lg:text-center sm:text-right'>
                                Unlock Your Linguistic Potential
                            </h4>
                            <p className='font-[Inconsolata] lg:text-center sm:text-right'>At Language Mastery, embark on an immersive journey into the world of languages. Our dynamic language school offers a diverse range of courses tailored to suit every learner's needs. Whether you're a beginner or advanced, our experienced instructors will guide you to fluency, empowering you to communicate confidently in any language. Don't be afraid. Let's do it together.</p>
                        </div>
                    </div>
                </div>

                <div className="carousel w-full" >
                    <div id="item1" className="carousel-item w-full lg:flex items-center">
                        <img src="https://i.ibb.co/my6NdPZ/photo-1555431189-0fabf2667795.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/rffKGDN/photo-1546410531-bb4caa6b424d.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/r5Wb6hh/photo-1568047571827-8c46fe611345.jpg" className="w-full" />
                    </div>
                </div>

                <div className="carousel w-full">
                    <div id="item1" className="item1 carousel-item w-full lg:flex items-center">
                        <div className='space-y-2 lg:px-20 px-5 py-3'>
                            <h4 className='text-2xl font-[Cinzel] lg:text-center sm:text-right'>
                                Explore the Joy of Language Acquisition, Open the Doors to Multilingual Proficiency
                            </h4>
                            <p className='font-[Inconsolata] lg:text-center sm:text-right'>Indulge your love for learning at our vibrant language school. Discover the magic of acquiring new languages through interactive classes, engaging activities, and personalized guidance. Our dedicated team of educators will ignite your curiosity and fuel your desire to master languages, creating an inspiring and supportive environment for your educational journey.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>

        </>
    );
};

export default Banner;