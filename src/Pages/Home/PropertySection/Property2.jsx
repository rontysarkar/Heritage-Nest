import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Property2 = () => {
    return (
        <div className="hero  my-28">
            <div className="w-full hero-content flex-col lg:flex-row-reverse gap-5 justify-between  " >
                <div className="relative mt-5">
                <img src="https://i.ibb.co/gFRr8rS/img.jpg" className="max-w-sm rounded-lg " />
                <img src="https://i.ibb.co/yVbXmm3/img2.jpg" className="max-w-sm rounded-lg absolute -top-24 -right-20 " />
                <img src="https://i.ibb.co/gSs06MK/Group-27.png"className="max-w-sm rounded-lg absolute -top-14 left-8 " />
                </div>
                <div className="w-1/2 space-y-5 content-start">
                    <h1 className="font-semibold">___ Property buying</h1>
                    <h1 className=" text-3xl lg:text-5xl font-bold">Finding Your Perfect Home</h1>
                    <p className="py-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </p>
                    <Link to={''}> <button className="flex items-center  gap-2  px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-700 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>

                </div>
            </div>
        </div>
    );
};

export default Property2;