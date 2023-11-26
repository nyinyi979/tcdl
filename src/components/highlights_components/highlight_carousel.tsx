import { Navigation } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
export default function H_Carosusel(){
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
    const headingClass = "lg:text-2xl text-xl text-secondary font-semibold py-5";
    const pClass = "text-white font-light md:text-justify text-justify font-[50] text-[1.2rem]"
    return(
        <div className='pb-10'>
            <h2 className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10 text-primary tracking-tighter">The Highlights</h2>
            <h2 className="text-secondary lg:text-3xl text-2xl font-bold text-center leading-10 tracking-tight scale-y-[1.1] scale-x-95 mt-5 mb-20">
                This Month's Highlights
            </h2>

            <div className="w-full arrow relative">
               
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode loop speed={1500} breakpoints={{0: {slidesPerView:2 , spaceBetween:50}, 640: {slidesPerView: 3, spaceBetween: 40 }, 1024: {spaceBetween: 70,slidesPerView:3}}} modules={[Navigation]} className=" w-9/12 mySwiper">

                    <SwiperSlide className=''>
                        <img src="/img2.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            Tarot &amp; Spirituality
                        </h1>
                        <div className= {pClass}>
                        Tarot spirituality is a way of using the tarot cards to connect with your higher self 
                        and the divine. It is a practice that can help you to ...
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img3.jpg" alt="img" className="w-full h-32 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            How the moon affects your psyhe
                        </h1>
                        <div className= {pClass}>
                            The majority of tarot readers assert that the cards provide the clearest
                            answers during the full moon. It reflects the diviner's enhanced intuition.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img4.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            The power of amulets
                        </h1>
                        <div className= {pClass}>
                            Since prehistoric times, particularly during the emergence of Egypt's pharaohs, 
                            people have sought spiritual protection by donning amulets, the religious equivalent of armor.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img2.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            Tarot &amp; Spirituality
                        </h1>
                        <div className= {pClass}>
                        Tarot spirituality is a way of using the tarot cards to connect with your higher self 
                        and the divine. It is a practice that can help you to ...
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img3.jpg" alt="img" className="w-full h-32 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            How the moon affects your psyhe
                        </h1>
                        <div className= {pClass}>
                            The majority of tarot readers assert that the cards provide the clearest
                            answers during the full moon. It reflects the diviner's enhanced intuition.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img4.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            The power of amulets
                        </h1>
                        <div className= {pClass}>
                            Since prehistoric times, particularly during the emergence of Egypt's pharaohs, 
                            people have sought spiritual protection by donning amulets, the religious equivalent of armor.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>                    
                
                </Swiper>
                <span className='next absolute font-bold top-[45%] md:right-[9%] right-[5%] text-secondary text-4xl cursor-pointer hover:text-primary' style={{transform:'scaleY(1.8)'}}>&gt;</span>
                <span className='prev absolute font-bold top-[45%] md:left-[9%]  left-[5%] text-secondary text-4xl cursor-pointer  hover:text-primary' style={{transform:'scaleY(1.8)'}}>&lt;</span>
            </div>
            
        </div>
    )
}