import FlatList from "../Buyer.jsx/FlatList/FlatList";
import Testimonials from "../Buyer.jsx/Testimonials/Testimonials";
import AboutBanner from "./AboutBanner/AboutBanner";
import BookConsultation from "./BookConsultation/BookConsultation";
import Mission from "./Mission/Mission";
import OurStory from "./OurStory/OurStory";
import OurTeam from "./OurTeam/OurTeam";

const About = () => {
    return (
        <div>
            <AboutBanner/>
            <FlatList/>
            <OurStory/>
            <Mission/>
            <OurTeam/>
            <BookConsultation/>
            <Testimonials/>
        </div>
    );
};

export default About;