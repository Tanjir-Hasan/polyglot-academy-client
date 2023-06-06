import Dummy from "../../dummy/Dummy";



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

            {
                theme === "dark" ?
                    <h1>hello</h1>
                    :
                    ''
            }
        </div>
    );
};

export default Home;