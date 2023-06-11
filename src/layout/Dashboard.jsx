import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdManageSearch, MdManageAccounts } from 'react-icons/md';
import { HiViewGridAdd } from 'react-icons/hi';
import { FaStickyNote } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';
import { GrCheckboxSelected } from 'react-icons/gr';
import { BsCashCoin } from 'react-icons/bs';
import { BiSelection } from 'react-icons/bi';
import { ImHome } from 'react-icons/im';
import { useAdmin } from '../hooks/useAdmin';
import { useInstructor } from '../hooks/useInstructor';


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <Link to="/" className='font-[Pacifico] text-xl'>Polyglot Academy</Link>
                    </div>

                    <div className="flex-none hidden lg:block">

                        {
                            isAdmin &&
                            <ul className="menu menu-horizontal">
                                <li><Link to="/dashboard/admin-home"><ImHome size={'1.5rem'} /> Admin home</Link></li>
                                <li><Link to="/dashboard/manage-classes"><MdManageSearch size={'1.5rem'} /> Manage Classes</Link></li>
                                <li><Link to="/dashboard/all-users"><MdManageAccounts size={'1.5rem'} /> All Users</Link></li>
                            </ul>
                            ||
                            isInstructor &&
                            <ul className="menu menu-horizontal">
                                <li><Link to="/dashboard/add-class"><ImHome size={'1.5rem'} /> Instructor Home</Link></li>
                                <li><Link to="/dashboard/add-class"><HiViewGridAdd size={'1.5rem'} /> Add a Class</Link></li>
                                <li><Link to="/dashboard/my-class"><FaStickyNote size={'1.5rem'} /> My classes</Link></li>
                            </ul>
                            ||
                            <ul className="menu menu-horizontal">
                                <li><Link to="/dashboard/my-selected-classes"><GrCheckboxSelected size={'1.5rem'} /> My Selected Classes</Link></li>
                                <li><Link to="/dashboard/my-enrolled-classes"><BiSelection size={'1.5rem'} /> My Enrolled Classes</Link></li>
                                <li><Link to="/dashboard/payment-history"><BsCashCoin size={'1.5rem'} /> Payment History</Link></li>
                            </ul>
                        }

                    </div>

                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-base-200">
                    {
                        isAdmin &&
                        <>
                            <li><Link to="/dashboard/admin-home"><ImHome size={'1.5rem'} /> Admin home</Link></li>
                            <li><Link to="/dashboard/manage-classes"><MdManageSearch size={'1.5rem'} /> Manage Classes</Link></li>
                            <li><Link to="/dashboard/all-users"><MdManageAccounts size={'1.5rem'} /> All Users</Link></li>
                        </>
                        ||
                        isInstructor &&
                        <>
                            <li><Link to="/dashboard/add-class"><ImHome size={'1.5rem'} /> Instructor Home</Link></li>
                            <li><Link to="/dashboard/add-class"><HiViewGridAdd size={'1.5rem'} /> Add a Class</Link></li>
                            <li><Link to="/dashboard/my-class"><FaStickyNote size={'1.5rem'} /> My classes</Link></li>
                        </>
                        ||
                        <>
                            <li><Link to="/dashboard/my-selected-classes"><GrCheckboxSelected size={'1.5rem'} /> My Selected Classes</Link></li>
                            <li><Link to="/dashboard/my-enrolled-classes"><BiSelection size={'1.5rem'} /> My Enrolled Classes</Link></li>
                            <li><Link to="/dashboard/payment-history"><BsCashCoin size={'1.5rem'} /> Payment History</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;