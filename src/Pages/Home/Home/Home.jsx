import Banner from "../Bannder/Banner";
import Property1 from "../PropertySection/Property1";
import Property2 from "../PropertySection/Property2";
import Property3 from "../PropertySection/Property3";
import ServiceSection from "../ServiceSection/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Property1/>
            <Property2/>
            <Property3/>
            <ServiceSection/>
        </div>
    );
};

export default Home;