import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import InteractiveLanguageTools from "../InteractiveLanguageTools/InteractiveLanguageTools";
import LanguageLearningTips from "../LanguageLearningTips/LanguageLearningTips";
import LatestBlog from "../LatestBlog/LatestBlog";
import LessonTypes from "../LessonTypes/LessonTypes";
import PartnerInstitutions from "../PartnerInstitutions/PartnerInstitutions";
import PopularClassesSection from "../PopularClassesSection/PopularClassesSection";
import PopularInstructorsSection from "../PopularInstructorsSection/PopularInstructorsSection";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorsSection></PopularInstructorsSection>
            {/* <LanguageLearningTips></LanguageLearningTips> */}
            <InteractiveLanguageTools></InteractiveLanguageTools>
            <LessonTypes></LessonTypes>
            <LatestBlog></LatestBlog>
            <PartnerInstitutions></PartnerInstitutions>
            <Contact></Contact>
        </div>
    );
};

export default Home;