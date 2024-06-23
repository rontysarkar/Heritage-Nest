// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../../../assets/images/banner1.jpeg'
import banner2 from '../../../assets/images/banner2.jpeg'
import banner3 from '../../../assets/images/banner3.jpeg'



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';
const Banner = () => {

    const banner = [
        {
            image:banner1,
            text:"Your Portal to India's  Exquisite Real Estate",
            body:"Seamlessly connecting you to the heartbeat of India's prime properties."
        },
        {
            image:banner2,
            text:"Explore India's Finest Real Estate Gems",
            body:"Unlock access to India’s most prestigious homes and commercial spaces, ."
        },
        {
            image:banner3,
            text:"Unlock India's Luxury Real Estate Market",
            body:"Delve into the world of high-end real estate in India, where exceptional properties and prime "
        }
    ]

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
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
                
                
               
                

            </Swiper>
        </>
    );
};

export default Banner;