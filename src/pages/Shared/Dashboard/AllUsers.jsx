import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const [buttonDisabled, setButtonDisabled] = useState(false); 

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('users')
        return res.data;
    });

    // make admin
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setButtonDisabled(true);
                }
            })
    };

    // make instructor
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setButtonDisabled(true);
                }
            })
    };



    return (
        <div>
            <h2 className='my-5 text-2xl font-[Pacifico] text-center'>Total Users: 0{users.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    #
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Name
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hidden sm:block">
                                    Email
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Role 1
                                </th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    Role 2
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">

                            {
                                users.map((user, index) =>
                                    <tr className='' key={user._id}>
                                        <th className='text-xl font-normal text-center py-2'>{index + 1}</th>
                                        <td className='text-xl text-center'>
                                            <div className='flex flex-col'>
                                                {user.name}
                                                <span className='text-sm font-thin lg:hidden sm:block'>{user.email}</span>
                                            </div>
                                        </td>
                                        <td className='text-xl font-thin text-center hidden sm:block'>{user.email}</td>

                                        {/* admin */}

                                        <td className='text-xl text-center'>
                                            {
                                                user.role === 'admin' ?
                                                    'Admin'
                                                    :
                                                    <button
                                                        onClick={() => handleMakeAdmin(user)}
                                                        disabled={user.role === 'instructor' || buttonDisabled}
                                                        className={`group relative inline-flex items-center overflow-hidden rounded border border-current px-5 py-1 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${user.role === 'instructor' || buttonDisabled ? 'opacity-60' : ''}`}
                                                        href="/download"
                                                    >
                                                        <span className="absolute -end-full transition-all group-hover:end-4">
                                                            <svg
                                                                className="h-5 w-5 rtl:rotate-180"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                />
                                                            </svg>
                                                        </span>

                                                        <span className="text-sm font-medium transition-all group-hover:me-4">
                                                            Make Admin
                                                        </span>
                                                    </button>
                                            }
                                        </td>

                                        {/* instructor */}

                                        <td className='text-xl text-center'>
                                            {
                                                user.role === 'instructor' ?
                                                    'Instructor'
                                                    :
                                                    <button
                                                        onClick={() => handleMakeInstructor(user)}
                                                        disabled={user.role === 'admin' || buttonDisabled}
                                                        className={`group relative inline-flex items-center overflow-hidden rounded border border-current px-5 py-1 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ${user.role === 'admin' || buttonDisabled ? 'opacity-60' : ''}`}
                                                    >
                                                        <span className="absolute -end-full transition-all group-hover:end-4">
                                                            <svg
                                                                className="h-5 w-5 rtl:rotate-180"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                                />
                                                            </svg>
                                                        </span>

                                                        <span className="text-sm font-medium transition-all group-hover:me-4">
                                                            Make Instructor
                                                        </span>
                                                    </button>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
