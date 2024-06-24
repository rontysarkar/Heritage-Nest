import img from '../../../assets/images/img4.png'
const Mission = () => {
    return (
        <div className="max-w-7xl mx-auto relative my-36 flex justify-evenly">
            <div>
                <dir className="bg-[#fdf0e7] py-4 px-8 w-[600px] space-y-4 absolute left-0 -bottom-32">
                    <h1 className='text-orange-500 font-bold'><span className='text-5xl'>__ </span>Mission Statement</h1>
                    <h1 className='text-4xl font-bold'>Efficient and TransparentHome Buying Solutions</h1>
                    <p className='text-sm opacity-65'>To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
                </dir>
            </div>
            <div>
                <img  src={img} alt="" />
            </div>
        </div>
    );
};

export default Mission;