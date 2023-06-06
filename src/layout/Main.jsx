import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div>
            <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch}></Navbar>
            <div >
                <Outlet theme={theme}></Outlet>
            </div>
            <Footer theme={theme}></Footer>
        </div>
    );
};

export default Main;