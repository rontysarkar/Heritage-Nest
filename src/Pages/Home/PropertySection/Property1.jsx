import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Property1 = () => {
    return (
        <div className="hero  my-20">
            <div className="w-full hero-content flex-col lg:flex-row gap-12 justify-between  " >
                <div className="relative mt-6">
                <img src="https://i.ibb.co/xLMbxTL/img.jpg" className="max-w-sm rounded-lg " />
                <img src="https://i.ibb.co/zsMz24L/img.png" className="max-w-sm rounded-lg absolute -bottom-14 -right-16 " />
                <img src="https://i.ibb.co/gSs06MK/Group-27.png"className="max-w-sm rounded-lg absolute -right-14 bottom-20 " />
                </div>
                <div className="w-1/2 space-y-5 content-start">
                    <h1 className="font-semibold text-orange-500"><span className="text-5xl">___ </span>Property buying</h1>
                    <h1 className=" text-3xl lg:text-5xl font-bold">Efficient and Transparent 
                    Home Buying Solutions</h1>
                    <p className="py-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                    </p>
                    <Link to={'buy'}> <button className="flex items-center  gap-2  px-5 py-3 mt-4 text-sm font-medium text-blue-95000 hover:text-white capitalize transition-colors duration-300 transform bg-blue-100 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>

                </div>
            </div>
        </div>
    );
};

export default Property1;