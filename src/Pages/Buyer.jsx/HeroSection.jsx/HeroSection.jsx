import { IoLocationOutline } from 'react-icons/io5';
import hero from '../../../assets/images/hero.jpg'
const HeroSection = () => {
    return (
        <div>
            <div className={` w-full bg-center bg-cover h-[24rem] bg-no-repeat `}
                style={
                    {
                        backgroundImage: `url(${hero})`
                    }
                }
            >
            </div>
            <div className='w-4/6 h-[24rem] bg-white shadow-2xl mx-auto -mt-52 p-8'>
                <div className="flex items-center dark:bg-gray-100 dark:text-gray-800">
                    <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-violet-600 dark:text-violet-600">Buy</a>
                    <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Rent</a>
                    <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">PG</a>
                    <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Plot</a>
                    <a rel="noopener noreferrer" href="#" className="px-5 py-1 border-b-2 dark:border-gray-300">Commercial</a>
                </div>
                
                <div className='my-5 '>
                    <input
                        type="text"
                        placeholder="🔍 Type here"
                        className="input input-bordered input-sm w-full rounded-none " />
                    {/* lg */}
                    <input />
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <IoLocationOutline className=' text-orange-500' /> Your Location</h1>
                        <select name="#" className='input input-bordered w-full input-sm  rounded-none'></select>
                    </div>
                    <div>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <IoLocationOutline className=' text-orange-500' /> Your Location</h1>
                        <select name="#" className='input input-bordered w-full input-sm  rounded-none'></select>
                    </div>
                    <div>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <IoLocationOutline className=' text-orange-500' /> Your Location</h1>
                        <select name="#" className='input input-bordered w-full input-sm  rounded-none'></select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;