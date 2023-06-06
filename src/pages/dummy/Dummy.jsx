
const Dummy = ({ theme }) => {

    const textColor = theme === "dark" ? "text-rose-500" : "text-black";
    const bgColor = theme === "dark" ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" : "bg-white";


    return (
        <div className={`mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 p-4 rounded-3xl ${bgColor} ${textColor}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur necessitatibus quidem officiis ullam! Tenetur minus quaerat aperiam delectus accusamus adipisci reprehenderit quibusdam, facilis iure quo tempora asperiores, illo at praesentium, aliquam repudiandae deserunt cumque earum dolor excepturi velit ad? Accusantium provident rerum incidunt earum rem aperiam ipsa minima neque architecto.</p>
        </div>
    );
};

export default Dummy;