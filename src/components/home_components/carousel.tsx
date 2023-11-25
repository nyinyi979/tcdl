import { Navigation } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {  bg4Class } from '../utilities';
const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
export default function Carosusel(){
    const headingClass = "lg:text-2xl text-xl text-secondary font-semibold py-5";
    const pClass = "text-white font-light text-lg md:text-justify text-left"
    return(
        <div className={`py-20 ${bg4Class}`}>
            <h2 className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10 text-secondary">The Highlights</h2>
            <h2 className="text-white lg:text-3xl text-2xl font-bold text-center leading-10">
                Sharing is caring
            </h2>
            <p className="lg:w-5/6 w-11/12 text-justify text-white leading-10 mx-auto text-xl py-10">
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </p>

            <div className="w-full arrow relative">
               
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode loop speed={1500}  breakpoints={{0: {slidesPerView:2 , spaceBetween:50}, 640: {slidesPerView: 3, spaceBetween: 70 }}} modules={[Navigation]} className=" w-9/12 mySwiper">
                    
                    <SwiperSlide className=''>
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-8.jpg" alt="img" className="w-full h-32 bg-cover rounded-md"/>
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
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-7.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
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
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-6.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
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
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-8.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
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
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-7.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
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
                        <img src="/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-6.jpg" alt="img" className="w-full h-64 bg-cover rounded-md"/>
                        <h1 className= {headingClass}>
                            Tarot &amp; Spirituality
                        </h1>
                        <div className= {pClass}>
                        Tarot spirituality is a way of using the tarot cards to connect with your higher self 
                        and the divine. It is a practice that can help you to ...
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>
                </Swiper>
                <span className='next absolute font-bold top-[45%] md:right-[9%] right-[5%] text-secondary text-4xl cursor-pointer scale-y-125'>&gt;</span>
                <span className='prev absolute font-bold top-[45%] md:left-[9%]  left-[5%] text-secondary text-4xl cursor-pointer scale-y-125'>&lt;</span>
            </div>
            
        </div>
    )
}