import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import { ThemeContext } from '../../../providers/ThemeProvider';

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleThemeToggle = () => {
        toggleTheme();
    };

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={`px-2 lg:fixed z-10 w-full my-component ${theme === 'dark' ? 'dark' : 'bg-gradient-to-b from-gray-500 via-white to-white'}`}>

            <div className=" py-8 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">

                    <button onClick={handleThemeToggle}>
                        {theme === 'light' ? <BsFillMoonFill className='animate-bounce hover:animate-none' size={"1.5rem"} /> : <BsSun className='animate-spin hover:animate-none text-[#ffbe0b]' size={"2rem"} />}
                    </button>

                    <div
                        className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
                    >
                        <div className="flex lg:gap-4 gap-2">

                            <Link>
                                <button className='hidden md:block'>Home</button>
                            </Link>

                            {/* {
                                isAdmin || isInstructor &&
                                <>
                                    <Link to="/instructors">
                                        <button>Instructors</button>
                                    </Link>
                                    <Link to="/classes">
                                        <button>Classes</button>
                                    </Link>
                                </>
                            } */}

                            <Link to="/instructors">
                                <button>Instructors</button>
                            </Link>
                            <Link to="/classes">
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
                                src={user ? user?.photoURL : "https://i.ibb.co/P5ycT8T/user-1.png"}
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <p className="ms-2 hidden text-left text-xs md:block">
                                <strong className="block font-medium">{user?.displayName}</strong>

                                <span>{user?.email}</span>
                            </p>

                        </button>
                    </div>
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold sm:text-3xl">
                        Polyglot Academy
                    </Link>
                    <h2 className='md:hidden sm:block'>
                        <span className='text-xl font-medium md:hidden sm:block'>Welcome back,</span>
                        <br />
                        <span className='font-thin'>{user?.displayName}</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Navbar;