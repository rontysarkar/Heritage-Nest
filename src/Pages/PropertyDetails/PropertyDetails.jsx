import ServiceSection from "../Home/ServiceSection/ServiceSection";
import Amenities from "./Amenities/Amenities";
import Details from "./Details/Details";
import NearbyProperties from "./NearbyProperties/NearbyProperties";

const PropertyDetails = () => {
    return (
        <div>
            <Details/>
            <Amenities/>
            <ServiceSection/>
            <NearbyProperties/>
        </div>
    );
};

export default PropertyDetails;