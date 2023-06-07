import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:pt-48">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;