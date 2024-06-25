import { GoDotFill } from "react-icons/go";
import { IoImage, IoLocationOutline } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import useProperty from "../../../Hooks/useProperty";
const NearbyProperties = () => {
    const [properties] = useProperty()
    
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="flex items-center justify-between px-6">
                <h1 className="text-xl lg:text-4xl font-bold ">Others Nearby Properties</h1>
                <h1 className="underline font-bold text-blue-700">See all Property</h1>
            </div>
            <div className="hidden lg:block">
                <Swiper

                    slidesPerView={3}
                    spaceBetween={3}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper my-16"
                    autoplay={{
                        delay: 2000,

                    }}
                >
                    {
                        properties.map((property, index) => <SwiperSlide key={index}>
                            <Link ><div className="w-full max-w-sm overflow-hidden  rounded-lg shadow-lg mx-auto ">
                                <div className="relative">
                                    <img className="object-cover object-center w-full h-56" src={property.img} alt="" />
                                    <div className="flex items-center gap-2  bg-[#fdf0e7] w-12 rounded-sm absolute bottom-2 left-2">
                                        <IoImage className="text-orange-500" />
                                        <h1 className="font-bold">{property.quantity}</h1>

                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-4 py-3 bg-white border-b-2">
                                    <h1 className="mx-3 text-base font-semibold ">{property.type}</h1>
                                    <h1 className="mx-3  font-semibold flex items-center gap-2 "> <GoDotFill className="text-orange-500 text-xs bg-orange-500" /> Ready to Move</h1>
                                </div>

                                <div className="px-4 py-4 space-y-2">
                                    <h1 className="text-xl font-bold">{property.title}</h1>
                                    <h2 className="text-sm flex items-center gap-2 mb-2 "> <IoLocationOutline className="text-orange-500 text-xl" />{property.location}</h2>
                                    <h1 className="text-2xl font-bold">$ {property.price}</h1>
                                    {/* <button>View Property</button> */}
                                </div>
                            </div></Link>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
            <div className=" lg:hidden my-8 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    properties.map((property, index) => <div key={index} className="w-full max-w-sm overflow-hidden  rounded-lg shadow-lg mx-auto ">
                        <div className="relative">
                            <img className="object-cover object-center w-full h-56" src={property.img} alt="" />
                            <div className="flex items-center gap-2  bg-[#fdf0e7] w-12 rounded-sm absolute bottom-2 left-2">
                                <IoImage className="text-orange-500" />
                                <h1 className="font-bold">{property.quantity}</h1>

                            </div>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3 bg-white border-b-2">
                            <h1 className="mx-3 text-base font-semibold ">{property.type}</h1>
                            <h1 className="mx-3  font-semibold flex items-center gap-2 "> <GoDotFill className="text-orange-500 text-xs bg-orange-500" /> Ready to Move</h1>
                        </div>

                        <div className="px-4 py-4 space-y-2">
                            <h1 className="text-xl font-bold">{property.title}</h1>
                            <h2 className="text-sm flex items-center gap-2 mb-2 "> <IoLocationOutline className="text-orange-500 text-xl" />{property.location}</h2>
                            <h1 className="text-2xl font-bold">$ {property.price}</h1>
                            {/* <button>View Property</button> */}
                        </div>
                    </div>).slice(0,3)

                }
            </div>

        </div>
    );
};

export default NearbyProperties;