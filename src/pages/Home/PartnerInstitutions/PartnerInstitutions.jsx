import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const PartnerInstitutions = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} w-11/12 mx-auto`}>
            <h2 className='headline'>Partner Institutions</h2>

            <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 lg:pb-20 pb-10'>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/sPSWFFD/Black-And-White-Modern-Vintage-Retro-Brand-Logo.png" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>University of Language Studies</h3>
                    <p className='text-justify font-light'><small>A renowned university offering language programs in various disciplines. They provide academic courses and certifications in languages such as English, Spanish, French, German, and more.</small></p>
                </div>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/93RpMTd/Monochrome-Modern-Technology-Black-Logo.png" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>Global Language Academy</h3>
                    <p className='text-justify font-light'><small>An international language school with branches in major cities worldwide. They offer immersive language courses, cultural exchange programs, and international certifications.</small></p>
                </div>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/qJGsRwD/Rose-Gold-Brush-Glitter-Feminine-Boutique-Circle-Logo.png" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>Language Solutions Institute</h3>
                    <p ><small>A specialized institution focusing on language training for professionals. They provide customized language programs for corporate clients, including business communication, industry-specific vocabulary, and cross-cultural training.</small></p>
                </div>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/k3q2tHX/1.jpg" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>Language Learning Institute</h3>
                    <p className='text-justify font-light'><small>A nonprofit organization dedicated to promoting language learning and cultural understanding. They offer language courses for all age groups, including children, adults, and senior citizens.</small></p>
                </div>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/3BCMbnd/Black-and-Grey-Clean-Modern-Minimalist-Creative-Technology-Logo.png" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>International Education Center</h3>
                    <p className='text-justify font-light'><small>A language center affiliated with multiple universities. They offer intensive English programs for international students, as well as language support services for non-native English speakers enrolled in degree programs.</small></p>
                </div>
                <div className='bg-[#264653] bg-opacity-40 p-5 rounded-xl shadow-xl hover:text-[#edf2f4] hover:bg-[#14213d] duration-700'>
                    <img src="https://i.ibb.co/HBYFxRS/Black-and-Grey-Clean-Modern-Minimalist-Creative-Technology-Logo-1.png" alt="instruction image" className='h-32 rounded-full pb-5' />
                    <h3 className='text-xl font-mono'>Virtual Language Academy</h3>
                    <p className='text-justify font-light'><small>An online language learning platform that provides interactive courses and virtual classrooms. They offer a wide range of languages and flexible learning schedules to accommodate learners from around the world.</small></p>
                </div>
            </div>
        </div>
    );
};

export default PartnerInstitutions;