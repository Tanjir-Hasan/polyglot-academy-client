
const Footer = ({ theme }) => {

    const textColor = theme === "dark" ? "text-rose-500" : "text-black";
    const bgColor = theme === "dark" ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" : "bg-white";

    return (
        <div className={`mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 p-4 rounded-3xl ${bgColor} ${textColor}`}>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                    eaque error neque ipsa culpa autem, at itaque nostrum!
                </p>
            </div>
        </div>
    );
};

export default Footer;