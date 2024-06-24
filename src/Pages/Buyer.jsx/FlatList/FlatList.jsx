import { FaRegArrowAltCircleDown } from "react-icons/fa";

const FlatList = () => {
    return (
        <div className=" max-w-7xl mx-auto my-20 grid grid-cols-1 lg:grid-cols-4 justify-between gap-10">
            <div className="stat w-64 mx-auto bg-[#fdf0e7]">

                <div className="space-y-8">
                    <div>
                        <div className="stat-value text-orange-500">2K+</div>
                        <h1 className="text-sm font-semibold py-2">New Flat Listed</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="underline text-sm text-orange-500 font-bold">View All</h1>
                        <div className="stat-figure text-orange-500 text-2xl content-end">

                            <FaRegArrowAltCircleDown />

                        </div>
                    </div>
                </div>
            </div>
            <div className="stat w-64  mx-auto bg-[#ecf5ff]">

                <div className="space-y-8">
                    <div>
                        <div className="stat-value text-[#0051a1]">2K+</div>
                        <h1 className="text-sm font-semibold py-2">New Flat Listed</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="underline text-sm text-[#0051a1] font-bold">View All</h1>
                        <div className="stat-figure text-[#0051a1] text-2xl content-end">

                            <FaRegArrowAltCircleDown />

                        </div>
                    </div>
                </div>
            </div>
            <div className="stat w-64 mx-auto bg-[#fdf0e7]">

                <div className="space-y-8">
                    <div>
                        <div className="stat-value text-orange-500">2K+</div>
                        <h1 className="text-sm font-semibold py-2">New Flat Listed</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="underline text-sm text-orange-500 font-bold">View All</h1>
                        <div className="stat-figure text-orange-500 text-2xl content-end">

                            <FaRegArrowAltCircleDown />

                        </div>
                    </div>
                </div>
            </div>
            <div className="stat w-64  mx-auto bg-[#ecf5ff]">

                <div className="space-y-8">
                    <div>
                        <div className="stat-value text-[#0051a1]">2K+</div>
                        <h1 className="text-sm font-semibold py-2">New Flat Listed</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        <h1 className="underline text-sm text-[#0051a1] font-bold">View All</h1>
                        <div className="stat-figure text-[#0051a1] text-2xl content-end">

                            <FaRegArrowAltCircleDown />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FlatList;