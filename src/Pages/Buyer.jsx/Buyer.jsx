import FlatList from "./FlatList/FlatList";
import HeroSection from "./HeroSection.jsx/HeroSection";
import NewProperties from "./NewProperties/NewProperties";
import PostSection from "./PostSection/PostSection";
import Properties from "./Properties/Properties";
import Testimonials from "./Testimonials/Testimonials";

const Buyer = () => {
    return (
        <div>
            <HeroSection/>
            <FlatList/>
            <Properties/>
            <NewProperties/>
            <Testimonials/>
            <PostSection/>
        </div>
    );
};

export default Buyer;