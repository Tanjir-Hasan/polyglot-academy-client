
// const Navbar = ({ theme, handleThemeSwitch }) => {

//     const textColor = theme === "dark" ? "text-rose-500" : "text-black";
//     const bgColor = theme === "dark" ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" : "bg-white";

//     return (
//         <div className={`mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 p-4 rounded-3xl ${bgColor} ${textColor}`}>


//             <button className="p-4 rounded-3xl" onClick={handleThemeSwitch}>
//                 {theme === "dark" ? "Light Mode" : "Dark Mode"}
//             </button>

//             <div className="mx-auto max-w-lg text-center">
//                 <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

//                 <p className="mt-4 text-gray-500">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
//                     eaque error neque ipsa culpa autem, at itaque nostrum!
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

const Navbar = () => {

    const { theme, handleThemeSwitch } = useContext(AuthContext)

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={`bg-gray-50 lg:fixed z-10 w-full bg-${theme === 'dark' ? 'gray-800' : 'gray-200'}`}>
            {/*    className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-200'}`} */}
            <div className=" px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">
                    {/* <div className="relative hidden sm:block">
                        <label className="sr-only" htmlFor="search"> Search </label>

                        <input
                            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                        />

                        <button
                            type="button"
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div> */}

                    {/* <button onClick={handleThemeSwitch}>Toggle Color</button> */}

                    <BsSun size={'1.5rem'} />
                    {/* <BsFillMoonFill size={'1.5rem'} /> */}

                    <div
                        className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
                    >
                        <div className="flex lg:gap-4 gap-2">

                            <Link>
                                <button className='hidden md:block'>Home</button>
                            </Link>
                            <Link>
                                <button>Instructors</button>
                            </Link>
                            <Link>
                                <button>Classes</button>
                            </Link>

                            {
                                user &&
                                <Link to="/dashboard">
                                    <button>Dashboard</button>
                                </Link>
                            }

                            {
                                user ?
                                    <button onClick={handleLogOut}>Logout</button>
                                    :
                                    (<Link to="/login">
                                        <button>Login</button>
                                    </Link>)
                            }
                        </div>

                        <button
                            type="button"
                            className="group flex shrink-0 items-center rounded-lg transition"
                        >
                            <img
                                alt="avatar"
                                src={user ? user?.photoURL : "https://i.ibb.co/qmh6CKP/user.png"}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <p className="ms-2 hidden text-left text-xs md:block">
                                <strong className="block font-medium">{user?.displayName}</strong>

                                <span className="text-gray-500">{user?.email}</span>
                            </p>

                        </button>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Summer Camp
                    </h1>
                    <h2 className='md:hidden sm:block'>
                        <span className='text-xl font-medium'>Welcome back,</span>
                        <br />
                        <span className='font-thin'>{user?.displayName}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;