import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Slider = ({ slider }) => {
    return (
        <div className={` w-full bg-center bg-cover h-[42rem] bg-no-repeat `}
            style={
                {
                    backgroundImage: `url(${slider.image})`
                }
            }
        >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <h1  data-aos="fade-right" data-aos-duration="1000" className="text-2xl font-extrabold text-white lg:text-5xl ">{slider.text}</h1>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className="text-xs lg:text-sm py-4 text-white  ">{slider.body}</h1>
                    <Link to={'buy'}> <button className="flex items-center mx-auto gap-2  px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-700 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;