import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { h1Class } from '../utilities';
export default function H_Carousel(){
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
    const headingClass = "lg:text-2xl text-xl text-secondary font-semibold py-5";
    const pClass = "text-white font-[400] lg:text-xl leading-10 text-justify"
    return(
        <div id='highlight' className={`pb-10 mt-10 lg:mt-0`}>
            <h2 className={`${h1Class} text-center text-primary md:py-10 py-4`}>The Highlights</h2>
            <h2 className={`oswald md:font-[600] font-[500] xxl:text-5xl xxl:mr-16 xll:text-[2rem] 
            xll:leading-[2.7rem] xll:mr-6 xl:text-[1.8rem] xl:mr-4 xl:leading-9 md:text-3xl 
            md:leading-8 mr-3 ssm:text-2xl text-xl text-center text-secondary pb-3`}>
                This Month's Highlights
            </h2>
            
            <div className="w-full arrow relative py-10">
            
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
                pagination={{clickable:true}}
                breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 40 }, 
                768: {spaceBetween: 30,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
                , 1099 : {spaceBetween: 80, slidesPerView: 3} , 1199 : {spaceBetween: 70, slidesPerView: 3}
                ,1365 : {spaceBetween: 60 , slidesPerView: 3}}}
                 modules={[Navigation, Pagination]} className="xll:w-5/6 xl:w-[75%] lg:w-[85%] md:w-[85%] xs:w-[70%] w-[60%] xs:py-10 py-0">

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
                <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 
                hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
                 md:top-[23%] top-[25%] xll:left-[40px] xl:left-[35px] md:left-[20px] ssm:left-[25px] xs:left-[20px] left-[20px] 
                cursor-pointer `}></span>
                <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 
                hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
                 md:top-[23%] top-[25%] xll:right-[35px] xl:right-[25px] md:right-[5px] ssm:right-[25px] xs:right-[15px] right-[5px] 
                cursor-pointer `}></span>
            </div>
        </div>
    )
}