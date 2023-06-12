import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FcFeedback } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProviders';

const MyClass = () => {

    const [byInsData, setByInsData] = useState([]);

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/instructors/${user?.email}`);
                // const response = await axiosSecure.get('all-classes');
                setByInsData(response.data);
            } catch (error) {
                console.log('Error fetching classes:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <h3 className='py-12 text-5xl font-[Pacifico] text-center'>All Classes By, {user.displayName}</h3>

            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            #
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Language Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hidden sm:block">
                            Action Taken By Admin
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            <div className='flex justify-center gap-3'>
                                <FcFeedback size={'1.5rem'} />
                                <p>Admin Feedback</p>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {/* <td></td>
                    <td className='text-center'>{byInsData.language}</td>
                    <td className='text-center'>{byInsData.status}</td>
                    <td className='text-center'>{byInsData.feedback}</td> */}

                    {
                        byInsData?.map((data, index) =>
                            <tr key={data._id}>
                                <td className='text-center font-medium'>{index + 1}</td>
                                <td className='text-center'>{data.language}</td>
                                <td className='text-center'>{data.status}</td>
                                <td className='text-center'>{data.feedback}</td>                                
                            </tr>
                        )
                    }

                </tbody>
            </table>




        </div>
    );
};

export default MyClass;