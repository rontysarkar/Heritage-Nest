// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import banner1 from '../../../assets/images/banner1.jpeg'
// import banner2 from '../../../assets/images/banner2.jpeg'
// import banner3 from '../../../assets/images/banner3.jpeg'



// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Slider from './Slider';
import { Link } from 'react-router-dom';
import bgVideo from '../../../assets/video/bgVideo.mp4'
import { CiSearch } from 'react-icons/ci';
const Banner = () => {

    // const banner = [
    //     {
    //         image: banner1,
    //         text: "Your Portal to India's  Exquisite Real Estate",
    //         body: "Seamlessly connecting you to the heartbeat of India's prime properties."
    //     },
    //     {
    //         image: banner2,
    //         text: "Explore India's Finest Real Estate Gems",
    //         body: "Unlock access to India’s most prestigious homes and commercial spaces, ."
    //     },
    //     {
    //         image: banner3,
    //         text: "Unlock India's Luxury Real Estate Market",
    //         body: "Delve into the world of high-end real estate in India, where exceptional properties and prime "
    //     }
    // ]

    return (
        <>


            <div className='w-full relative '>
                <video src={bgVideo} autoPlay loop muted className='w-full max-h-screen' ></video>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40 absolute top-0">
                    <div className="text-center">
                        <h1 data-aos="fade-right" data-aos-duration="1000" className="text-xl font-extrabold text-white lg:text-5xl ">Your Portal to Indias  Exquisite Real Estate</h1>
                        <h1 data-aos="fade-left" data-aos-duration="1000" className="text-xs lg:text-sm py-4 text-white  ">Seamlessly connecting you to the heartbeat of Indias prime properties.</h1>
                        <Link to={'buy'}> <button className="flex items-center mx-auto gap-2  px-5 py-3 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-700 hover:bg-black rounded-md lg:w-auto y"> <CiSearch className="text-xl" />Find Property</button> </Link>
                    </div>
                </div>
            </div>
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    banner.map((slider,index)=> <SwiperSlide key={index} ><Slider slider={slider} /> </SwiperSlide>)
                }
                
                
               
                

            </Swiper> */}
        </>
    );
};

export default Banner;