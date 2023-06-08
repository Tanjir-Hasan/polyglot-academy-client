import React, { useEffect, useState } from 'react';

const AllUsers = () => {

    const [users, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

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
                                        <th className='text-xl text-center py-2'>{index + 1}</th>
                                        <td className='text-xl text-center'>
                                            <div className='flex flex-col'>
                                                {user.name}
                                                <span className='text-sm font-thin lg:hidden sm:block'>{user.email}</span>
                                            </div>
                                        </td>
                                        <td className='text-xl font-thin text-center hidden sm:block'>{user.email}</td>
                                        <td className='text-xl text-center'>
                                            <button
                                                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-5 py-1 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
                                        </td>
                                        <td className='text-xl text-center'>
                                            <button
                                                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-5 py-1 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
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
                                                    Make Instructor
                                                </span>
                                            </button>
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
