import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';

const PopularClassesSection = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`pt-10 my-component ${theme === 'dark' ? 'dark' : ''}`}>

            <div className='w-10/12 mx-auto'>
                <h1 className='text-5xl text-center font-[Pacifico] uppercase pb-20'>Popular Choices</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 pb-10'>

                    <div>
                        <div>
                            <img className="lg:rounded-2xl object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                        </div>
                        <div className="lg:-translate-y-16 transform lg:ml-32 lg:-mr-5 p-10 shadow-xl hover:shadow-2xl  rounded-bl-2xl border-b-8 border-[#ef476f] bg-white overflow-hidden">
                            <div className="space-y-4">
                                <p className="text-5xl font-bold text-black tracking-tight">
                                    In health and safety remain the priority
                                </p>
                                <p className="text-xl text-black">
                                    From the moment the threat of COVID‑19 emerged, Apple took action. Working closely with medical experts and our suppliers, we put the health and safety of the people in our supply chain first.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        2M+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                people in the Apple supply chain covered by our health and safety standards in 2020
                            </p> */}
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        170+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                member companies of the Responsible Business Alliance given access to our COVID response tools
                            </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:rounded-2xl object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                        </div>
                        <div className="lg:-translate-y-16 transform lg:ml-32 lg:-mr-5 p-10 shadow-xl hover:shadow-2xl  rounded-bl-2xl border-b-8 border-[#ef476f] bg-white overflow-hidden">
                            <div className="space-y-4">
                                <p className="text-5xl font-bold text-black tracking-tight">
                                    In health and safety remain the priority
                                </p>
                                <p className="text-xl text-black">
                                    From the moment the threat of COVID‑19 emerged, Apple took action. Working closely with medical experts and our suppliers, we put the health and safety of the people in our supply chain first.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        2M+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                people in the Apple supply chain covered by our health and safety standards in 2020
                            </p> */}
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        170+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                member companies of the Responsible Business Alliance given access to our COVID response tools
                            </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img className="lg:rounded-2xl object-cover overflow-hidden" src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                        </div>
                        <div className="lg:-translate-y-16 transform lg:ml-32 lg:-mr-5 p-10 shadow-xl hover:shadow-2xl  rounded-bl-2xl border-b-8 border-[#ef476f] bg-white overflow-hidden">
                            <div className="space-y-4">
                                <p className="text-5xl font-bold text-black tracking-tight">
                                    In health and safety remain the priority
                                </p>
                                <p className="text-xl text-black">
                                    From the moment the threat of COVID‑19 emerged, Apple took action. Working closely with medical experts and our suppliers, we put the health and safety of the people in our supply chain first.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        2M+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                people in the Apple supply chain covered by our health and safety standards in 2020
                            </p> */}
                                </div>
                                <div>
                                    <p className="text-4xl font-bold text-black">
                                        170+
                                    </p>
                                    {/* <p className="text-sm text-black">
                                member companies of the Responsible Business Alliance given access to our COVID response tools
                            </p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default PopularClassesSection;