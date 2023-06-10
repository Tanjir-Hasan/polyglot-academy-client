import Banner from "../Banner/Banner";
import LessonTypes from "../LessonTypes/LessonTypes";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import PopularInstructorsSection from "../PopularInstructorsSection/PopularInstructorsSection";



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorsSection></PopularInstructorsSection>
            <LessonTypes></LessonTypes>
        </div>
    );
};

export default Home;