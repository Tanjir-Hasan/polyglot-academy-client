import React from 'react';
import { Link } from 'react-router-dom';
import { MdManageSearch, MdManageAccounts } from 'react-icons/md';
import { HiViewGridAdd } from 'react-icons/hi';
import { FaStickyNote } from 'react-icons/fa';
import { GrCheckboxSelected } from 'react-icons/gr';
import { BsCashCoin } from 'react-icons/bs';
import { BiSelection } from 'react-icons/bi';


const Dashboard = () => {
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
                        <Link to="/">Home</Link>
                    </div>
                    <div className="flex-none hidden lg:block">

                        {/* admin */}
                        <ul className="menu menu-horizontal">
                            <li><Link to="/">Manage Users</Link></li>
                            <li><Link to="/">Manage Classes</Link></li>
                        </ul>

                        {/* instructor */}
                        <ul className="menu menu-horizontal">
                            <li><Link to="/">Add a Class</Link></li>
                            <li><Link to="/">My classes</Link></li>
                        </ul>

                        {/* student */}
                        <ul className="menu menu-horizontal">
                            <li><Link to="/">My Selected Classes</Link></li>
                            <li><Link to="/">My Enrolled Classes</Link></li>
                            <li><Link to="/">Payment History</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                Content
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200">

                    {/* admin */}
                    <li><Link to="/"><MdManageAccounts size={'1.5rem'} /> Manage Users</Link></li>
                    <li><Link to="/"><MdManageSearch size={'1.5rem'} /> Manage Classes</Link></li>

                    {/* instructor */}
                    <li><Link to="/"><HiViewGridAdd size={'1.5rem'} /> Add a Class</Link></li>
                    <li><Link to="/"><FaStickyNote size={'1.5rem'} /> My classes</Link></li>

                    {/* student */}
                    <li><Link to="/"><GrCheckboxSelected size={'1.5rem'} /> My Selected Classes</Link></li>
                    <li><Link to="/"><BiSelection size={'1.5rem'} /> My Enrolled Classes</Link></li>
                    <li><Link to="/"><BsCashCoin size={'1.5rem'} /> Payment History</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;