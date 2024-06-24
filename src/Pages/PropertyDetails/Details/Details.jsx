import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { MdBalcony, MdOutlineBathtub } from "react-icons/md";

const Details = () => {
    return (
        <div className="max-w-7xl mx-auto my-10 flex flex-col lg:flex-row  gap-10">
            <div className="lg:w-2/3">
                <div className="flex justify-between items-center border-b-2  p-4">
                    <div className="py-2 w-2/3">
                        <h1 className="lg:text-xl font-bold pb-2">3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h1>
                        <h2 className="flex items-center gap-2 "><IoLocationOutline className="text-xl text-orange-600" /> Meadowshire Park, Greenfield, USA</h2>
                    </div>
                    <h1 className="lg:text-2xl font-bold ">$300K</h1>
                </div>
                <div className="py-4">
                    <img className="w-full" src="https://i.ibb.co/Z8SzHZY/Rectangle-20.jpg" alt="" />
                    <div className="grid grid-cols-3 gap-3 pt-4 ">
                        <div><img src="https://i.ibb.co/Z8SzHZY/Rectangle-20.jpg" alt="" /></div>
                        <div><img src="https://i.ibb.co/Y3xNqVL/img-3.jpg" alt="" /></div>
                        <div className="bg-black relative  ">
                            <img className="opacity-50 " src="https://i.ibb.co/TRrCwfT/Rectangle-23.jpg" alt="" />
                            <h1 className="font-semibold absolute top-12 right-20 text-white text-2xl hidden lg:block">View more</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f9fafb] border my-6 p-6 space-y-8">
                    <h1 className="text-2xl font-bold">Overview</h1>
                    <div className=" bg-white shadow-lg flex gap-3 lg:gap-16 p-3">
                        <h1 className="flex items-center gap-2 font-semibold"><MdOutlineBathtub />2 Bath</h1>
                        <h1 className="flex items-center gap-2 font-semibold"><LiaBedSolid />2 beds</h1>
                        <h1 className="flex items-center gap-2 font-semibold"><MdBalcony />2 Balcony</h1>
                        <h1 className="font-semibold">🚪 Fully Furniture</h1>
                    </div>
                    <div className="flex justify-between">
                        <div className="space-y-1">
                            <h1>Carpet Area</h1>
                            <h2 className="font-semibold">2000 sqft</h2>
                            <p className="text-xs">$ 225/sqft</p>
                        </div>
                        <div className="space-y-1">
                            <h1>Floor</h1>
                            <h2 className="font-semibold">Second (Out of 6th floor)</h2>
                        </div>
                        <div className="space-y-1">
                            <h1>Transaction Type</h1>
                            <h2 className="font-semibold">Ready to move</h2>
                        </div>
                        <div className="space-y-1">
                            <h1>Lift</h1>
                            <h2 className="font-semibold">1</h2>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <div className="space-y-1">
                            <h1>Facing</h1>
                            <h2 className="font-semibold">North - East</h2>
                        </div>
                        <div className="space-y-1">
                            <h1>Additional Rooms</h1>
                            <h2 className="font-semibold">1 servant room & 1 gust room</h2>
                        </div>
                        <div className="space-y-1">
                            <h1>Age of construction</h1>
                            <h2 className="font-semibold">New Construction</h2>
                        </div>
                        <div></div>

                    </div>
                </div>
            </div>
            <div className="mt-36">
                <div className="bg-[#ecf5ff] p-6 space-y-5">
                    <h1>Property value</h1>
                    <h1 className="text-xl font-bold">$ 300k - $ 310k</h1>
                    <p className="opacity-80">Your bid can not be than 10% of the property Minimum value.</p>
                    <label className="form-control w-full ">
                        <span className="label-text">Min</span>
                        <input type="text" placeholder="Type here" defaultValue={"$ 280k"} className="input input-bordered input-md w-full rounded-md font-bold" />
                    </label>
                    <label className="form-control w-full ">
                        <span className="label-text">Max</span>
                        <input type="text" placeholder="Type here" defaultValue={'$ 305k'} className="input input-bordered input-md w-full rounded-md font-bold" />
                    </label>
                    <div>
                        <div className="w-full h-8 bg-[rgb(238,238,238)] rounded-full relative ">
                            <GoDotFill className="text-6xl ml-0 absolute -left-4 -bottom-3 text-orange-500" />
                            <GoDotFill className="text-6xl ml-0 absolute -right-4 -bottom-3 text-orange-500" />
                        </div>
                        <div className="flex justify-between font-bold">
                            <h1 >$ 280k</h1>
                            <h1>$ 305k</h1>
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <button className="btn bg-blue-700 text-white ">Bid Property</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;