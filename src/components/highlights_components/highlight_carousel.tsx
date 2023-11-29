import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { h1Class, h2Class } from '../utilities';
export default function H_Carousel(){
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
    const headingClass = "lg:text-2xl text-xl text-secondary font-semibold py-5";
    const pClass = "text-white font-[400] lg:text-xl leading-10 text-justify"
    return(
        <div className={`pb-10`}>
            <h2 className={`${h1Class} text-center text-primary md:py-10 py-4`}>The Highlights</h2>
            <h2 className={`${h2Class} text-center text-secondary pb-5s`}>
                This Month's Highlights
            </h2>
            
            <div className="w-full arrow relative py-10">
            
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
                pagination={{clickable:true}}
                breakpoints={{0: {slidesPerView:2 , spaceBetween:40}, 640: {slidesPerView: 2, spaceBetween: 40 }, 
                767: {spaceBetween: 50,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
                , 1099 : {spaceBetween: 80, slidesPerView: 3} , 1199 : {spaceBetween: 70, slidesPerView: 3}
                ,1365 : {spaceBetween: 60 , slidesPerView: 3}}}
                 modules={[Navigation, Pagination]} className="xll:w-5/6 xl:w-[75%] lg:w-[85%] md:w-[70%] w-[85%]  py-10" >

                    <SwiperSlide>
                        <img src="/img2.jpg" alt="img" className="w-full h-64 bg-cover rounded-lg"/>
                        <h1 className= {headingClass}>
                            Tarot &amp; Spirituality
                        </h1>
                        <div className= {pClass} style={{lineHeight: '2rem'}}>
                        Tarot spirituality is a way of using the tarot cards to connect with your higher self 
                        and the divine. It is a practice that can help you to ...
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img3.jpg" alt="img" className="w-full h-32 bg-cover rounded-lg"/>
                        <h1 className= {headingClass}>
                            How the moon affects your psyhe
                        </h1>
                        <div className= {pClass} style={{lineHeight: '2rem'}}>
                            The majority of tarot readers assert that the cards provide the clearest
                            answers during the full moon. It reflects the diviner's enhanced intuition.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img4.jpg" alt="img" className="w-full h-64 bg-cover rounded-lg"/>
                        <h1 className= {headingClass}>
                            The power of amulets
                        </h1>
                        <div className= {pClass} style={{lineHeight: '2rem'}}>
                            Since prehistoric times, particularly during the emergence of Egypt's pharaohs, 
                            people have sought spiritual protection by donning amulets, the religious equivalent of armor.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <img src="/img3.jpg" alt="img" className="w-full h-32 bg-cover rounded-lg"/>
                        <h1 className= {headingClass}>
                            How the moon affects your psyhe
                        </h1>
                        <div className= {pClass}>
                            The majority of tarot readers assert that the cards provide the clearest
                            answers during the full moon. It reflects the diviner's enhanced intuition.
                        </div>
                        <a href="/" className={MoreClass}>More</a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/img4.jpg" alt="img" className="w-full h-64 bg-cover rounded-lg"/>
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
                <span className={`absolute w-10 h-10 bg-no-repeat bg-contain duration-300 
                hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
                prev md:top-[20%] top-[24%] xll:left-[40px] xl:left-[35px] md:left-[50px] ssm:left-[10px] left-[3px] 
                cursor-pointer `}></span>
                <span className={`absolute w-10 h-10 bg-no-repeat bg-contain duration-300 
                hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
                next md:top-[20%] top-[24%] xll:right-[35px] xl:right-[25px] md:right-[30px] ssm:-right-[4px] -right-[10px]  
                cursor-pointer `}></span>
            </div>
        </div>
    )
}