import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {  bg3Class, h1Class, h2Class } from '../utilities';
import Navbar from '../navbar';
const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
export default function H_Carousel(){
    const headingClass = "lg:text-2xl text-xl text-secondary font-semibold py-5";
    const pClass = "text-white font-light lg:text-xl lg:leading-10 font-[500] text-lg text-justify"
    return(
        <div className={`${bg3Class}`}>
            <Navbar currentLink="/highlights"/>
            <div className={`py-20 `}>
                <h2 className={`${h1Class} text-center text-primary md:py-10 py-4`}>The Highlights</h2>
                <h2 className={`${h2Class} text-center text-secondary pb-5s`}>
                    This Month's Highlights
                </h2>

                
                <div className="w-full arrow relative">
                
                    <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode loop speed={1000} 
                    pagination={{clickable:true, dynamicBullets: true}}
                    breakpoints={{0: {slidesPerView:2 , spaceBetween:40}, 640: {slidesPerView: 2, spaceBetween: 40 }, 767: {spaceBetween: 60,slidesPerView:3} , 1099 : {spaceBetween: 80, slidesPerView: 3}}} 
                    modules={[Navigation, Pagination]} className="lg:w-[80%] w-[87%] py-10" >

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
                    <span className='next absolute font-bold md:top-[20%] top-[24%] xl:right-[3%] lg:right-[6%] md:right-[3%] right-[0%] text-secondary text-4xl cursor-pointer hover:text-primary' style={{transform:'scaleY(1.8)'}}>&gt;</span>
                    <span className='prev absolute font-bold md:top-[20%] top-[24%] xl:left-[3%] lg:left-[6%] md:left-[3%] left-[0%] text-secondary text-4xl cursor-pointer  hover:text-primary' style={{transform:'scaleY(1.8)'}}>&lt;</span>
                </div>
                
        </div>
        </div>
    )
}