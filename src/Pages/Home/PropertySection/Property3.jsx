import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Property3 = () => {
    return (
        <div className="hero  my-20">
        <div className="w-full hero-content flex-col lg:flex-row gap-10 justify-between  " >
            <div className="relative">
            <img src="https://i.ibb.co/GJ7Y0R7/img-1.jpg" className="max-w-sm rounded-lg " />
            <img src="https://i.ibb.co/BBW2c3z/img-3.png" className="max-w-sm rounded-lg absolute -bottom-14 -right-16 " />
            <img src="https://i.ibb.co/gSs06MK/Group-27.png"className="max-w-sm rounded-lg absolute -right-14 bottom-20 " />
            </div>
            <div className="w-1/2 space-y-5 content-start">
                <h1 className="font-semibold">___ Property buying</h1>
                <h1 className=" text-3xl lg:text-5xl font-bold">Your Dream Home Awaits</h1>
                <p className="py-6">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                </p>
                <Link to={''}> <button className="flex items-center  gap-2  px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-700 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>

            </div>
        </div>
    </div>
    );
};

export default Property3;