import Dummy from "../../dummy/Dummy";
import Banner from "../Banner/Banner";



const Home = ({ theme }) => {

    // const [theme, setTheme] = useState('light');

    // useEffect(() => {
    //     if (theme === "dark") {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, [theme]);

    // const handleThemeSwitch = () => {
    //     setTheme(theme === "dark" ? "light" : "dark");
    // };

    return (
        <div>
            <Banner></Banner>
            {/* <Dummy></Dummy> */}
        </div>
    );
};

export default Home;