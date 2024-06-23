import { IoHomeOutline } from "react-icons/io5";

const ServiceSection = () => {
    const otherServices = [
        {
            title:"Advanced Property Search",
            body:"Effortlessly find your dream property with advanced search filters."
        },
        {
            title:"Virtual Tours and Multimedia",
            body:"Explore properties through immersive virtual tours and HD photos."
        },
        {
            title:"Secure Online Transactions",
            body:"Ensure secure transactions and e-sign documents seamlessly online."
        }
    ]
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h1 className="text-5xl text-center my-16">Other Service</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                otherServices.map((service,index)=><div key={index} className="w-96 h-44 bg-[rgb(236,245,255)] flex mx-auto">
                <div className="p-4 " ><IoHomeOutline className="text-7xl p-4 bg-orange-500 rounded-sm"/></div>
                <div className="px-2 py-2">
                    <h1 className="text-2xl font-bold  py-2">{service?.title}</h1>
                    <p>{service?.body}</p>
                </div>
            </div>)
            }
                
            </div>
            
        </div>
    );
};

export default ServiceSection;