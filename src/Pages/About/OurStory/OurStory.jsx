import img from '../../../assets/images/img5.jpeg'
const OurStory = () => {
    return (
        <div className="max-w-7xl mx-auto relative lg:my-36">
            <img src={img} alt="" />
            <dir className="bg-[#ecf5ff] py-4 px-8 lg:w-[600px] space-y-4 lg:absolute right-16 -bottom-28">
                <h1 className='text-orange-500 font-bold'><span className='text-5xl '>__ </span> Our Story</h1>
                <h1 className='text-4xl font-bold'>Efficient and TransparentHome Buying Solutions</h1>
                <p className='text-sm opacity-65'>In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
            </dir>
        </div>
    );
};

export default OurStory;