import { IoHomeOutline, IoLocationOutline } from 'react-icons/io5';
import hero from '../../../assets/images/hero.jpg'
import { BiSolidDollarCircle } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
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
            <div className='lg:w-3/6 lg:h-[24rem] bg-white shadow-2xl mx-auto -mt-52 p-8'>
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
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                    <div className='lg:w-2/5 space-y-2 '>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <IoLocationOutline className=' text-orange-500' /> Your Location</h1>

                        <div className='relative'>
                            <IoIosArrowDown className='absolute right-4 bottom-6 text-sm text-orange-500' />
                            <select name="#" className='input input-bordered w-full input-lg  rounded-none bg-[#ecf5ff] '>
                            <option value=""> USA</option>
                            <option value=""> New York </option>
                            <option value="">Greenfield</option>
                            <option value=""> City</option>
                            </select>
                        </div>
                    </div>
                    <div className='lg:w-2/5 space-y-2'>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <IoHomeOutline className=' text-orange-500' /> Property Type</h1>
                        <div className='relative'>
                            <IoIosArrowDown className='absolute right-4 bottom-6 text-sm text-orange-500' />
                            <select name="#" className='input input-bordered w-full input-lg  rounded-none bg-[#ecf5ff]'>
                                <option value="">Real State</option>
                                <option value="">Apartment</option>
                                <option value="">Real State</option>
                                <option value="">Apartment</option>
                            </select>
                        </div>
                    </div>

                    <div className='lg:w-2/5 space-y-2'>
                        <h1 className='flex items-center gap-2 text-xl font-bold'> <BiSolidDollarCircle className=' text-orange-500 text-xl' />Your Budget</h1>
                        <div className='relative'>
                            <IoIosArrowDown className='absolute right-4 bottom-6 text-sm text-orange-500' />
                            <select name="#" className='input input-bordered w-full input-lg  rounded-none bg-[#ecf5ff]'>
                                <option value="">250k</option>
                                <option value="">130k</option>
                                <option value="">550k</option>
                                <option value="">190k</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Link to={"/propertyDetails/1"}><button className='btn w-full bg-blue-700 text-white hover:text-black my-6'> <CiSearch className="text-xl" /> Find Property</button></Link>
            </div>
        </div>
    );
};

export default HeroSection;