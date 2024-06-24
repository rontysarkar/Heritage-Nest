import FlatList from "./FlatList/FlatList";
import HeroSection from "./HeroSection.jsx/HeroSection";
import NewProperties from "./NewProperties/NewProperties";
import Properties from "./Properties/Properties";

const Buyer = () => {
    return (
        <div>
            <HeroSection/>
            <FlatList/>
            <Properties/>
            <NewProperties/>
        </div>
    );
};

export default Buyer;