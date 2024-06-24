

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const Testimonials = () => {

    const testimonials = [
        {
            name: 'Tony Stark',
            img: 'https://i.ibb.co/x70kqNk/businessman-pointing-copy-space-happy-young-businessman-looking-at-camera-and-smiling-while-pointing.jpg',
            job: 'Marketing Manager, Real Estate Company',
            review: "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. "
        },
        {
            name: 'Natasha Romanoff',
            img: 'https://i.ibb.co/6s3Qt2b/businessman-isolated-illustration-ai-generative-free-photo.jpg',
            job: 'Sales Executive, Tech Firm',
            review: "CypherPlay has revolutionized the way I handle my transactions. The security features are state-of-the-art, and I feel protected no matter where I am."
        },
        {
            name: 'Bruce Banner',
            img: 'https://i.ibb.co/B2P16z2/freecompress-file.jpg',
            job: 'Research Scientist, Biotech Company',
            review: "Using CypherPlay has been a game-changer for me. The seamless integration with my daily life and the peace of mind it provides is invaluable."
        },
        {
            name: 'Steve Rogers',
            img: 'https://i.ibb.co/ZH09ZZg/portrait-blonde-woman-looking-photographer.jpg',
            job: 'Operations Manager, Logistics Firm',
            review: "The reliability and security of CypherPlay are unparalleled. It’s made my financial transactions smoother and more secure than ever before."
        },
        {
            name: 'Clint Barton',
            img: 'https://i.ibb.co/phRvV2G/pexels-emmy-e-1252107-2381069.jpg',
            job: 'Project Manager, Construction Company',
            review: "CypherPlay’s security measures are impressive. I trust it completely for all my business and personal transactions. Highly recommended!"
        },
        
        

    ]
    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="text-center">
                <h1 className="text-xl lg:text-4xl font-bold ">Testimonials</h1>
            </div>
            <div className="hidden lg:block">
                <Swiper

                    slidesPerView={2}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper my-16 "
                    autoplay={{
                        delay: 1500,

                    }}
                >
                    {
                        testimonials.map((person, index) => <SwiperSlide className='px-10' key={index}>
                            <section className="p-6 bg-[#ecf5ff]">
                                <div className="container max-w-xl mx-auto">
                                    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 ">
                                        <div className="rating space-x-5">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name="rating-2"
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <blockquote className="max-w-md text-lg  font-medium text-center text-gray-500">{person.review}</blockquote>
                                        <img src={person.img}  className="w-16 h-16 rounded-full dark:bg-gray-500" />
                                        <div className="text-center dark:text-gray-600">
                                            <p className="font-bold">{person.name}</p>
                                            <p>{person.job}</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>)
                    }


                </Swiper>
            </div>
            <div className=" lg:hidden my-8 grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    testimonials.map((person, index) => <section key={index} className="p-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50 dark:text-gray-800">
                            <div className="rating space-x-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <blockquote className="max-w-md text-lg  font-medium text-center text-gray-500">{person.review}</blockquote>
                            <img src={person.img}  className="w-16 h-16 rounded-full dark:bg-gray-500" />
                            <div className="text-center dark:text-gray-600">
                                <p className="font-bold">{person.name}</p>
                                <p>{person.job}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-900"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-400"></button>
                            </div>
                        </div>
                    </div>
                </section>).slice(0, 3)

                }
            </div>

        </div>
    );
};

export default Testimonials;