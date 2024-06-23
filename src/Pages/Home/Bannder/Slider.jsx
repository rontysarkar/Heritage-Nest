import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Slider = ({ img }) => {
    return (
        <div className={` w-full bg-center bg-cover h-[42rem] bg-no-repeat `}
            style={
                {
                    backgroundImage: `url(${img})`
                }
            }
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <h1  data-aos="fade-right" data-aos-duration="1000" className="text-2xl font-extrabold text-white lg:text-5xl">Your Portal to India s <br/> Exquisite Real Estate</h1>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className="text-xs lg:text-sm py-4 text-white  ">Seamlessly connecting you to the heartbeat of Indias prime properties.</h1>
                    <Link to={'/allFoods'}> <button className="flex items-center mx-auto gap-2  px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-700 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;