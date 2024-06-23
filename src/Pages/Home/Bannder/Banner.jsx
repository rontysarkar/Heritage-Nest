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
            discription:"Seamlessly connecting you to the heartbeat of India's prime properties."
        },
        {
            image:banner2,
            text:"Your Portal to India's Exquisite Real Estate",
            discription:"Seamlessly connecting you to the heartbeat of India's prime properties."
        },
        {
            image:banner3,
            text:"Your Portal to India's Exquisite Real Estate",
            discription:"Seamlessly connecting you to the heartbeat of India's prime properties."
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
                    banner.map((slider,index)=> <SwiperSlide key={index} ><Slider img = {slider?.image} text={slider?.text} /> </SwiperSlide>)
                }
                <SwiperSlide>
                    <Slider img = {banner1} text = 'DISCOVER CULINARY DELIGHTS'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {banner2} text = 'WE GET WHAT YOU LOVE'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider img = {banner3} text = 'ORDER FOOD DELIVERY'  />
                </SwiperSlide>
                
               
                

            </Swiper>
        </>
    );
};

export default Banner;