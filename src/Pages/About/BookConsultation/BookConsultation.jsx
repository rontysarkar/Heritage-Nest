
const BookConsultation = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-32 my-20">
            <div className="space-y-6">
                <h1 className="text-orange-500 font-bold"><span className="text-5xl">__</span>Meet the Team For Book Consultation</h1>
                <h1 className=" text-2xl lg:text-5xl lg:pr-28 ">Meet the stewards of your heritage journey</h1>
                <p className="opacity-70 lg:pr-28">each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.</p>
                <button className="btn bg-blue-700 text-white border-none rounded-none px-4">Book Consultation Now</button>
            </div>
            <div className="w-96">
                <img src="https://i.ibb.co/HKhtZyg/Rectangle-30-1.png" alt="" />
            </div>
        </div>
    );
};

export default BookConsultation;