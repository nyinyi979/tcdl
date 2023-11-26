import { Navigation , Autoplay, Pagination } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { h1Class, h2Class, quoteClass, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Feedback(){
    useAnimateLeft('feedback');
    useAnimateRight('feedback_text')
    useAnimateLeft('feedback_swiper');
    const quoteClassHere = 'xl:w-[50%] md:w-[60%] w-[90%] mx-auto xxl:text-[2.37rem] xll:leading-[3.3rem] font-[600] xll:text-[1.7rem]  xl:text-2xl xl:leading-[2.75rem] ssm:text-[1.4rem] ssm:leading-[2.4rem] text-xl leading-8 text-center'+ quoteClass;
    return(
        <div className="bg-white text-[#372c44] py-20 text-center">
            <h2 id='feedback' className={h1Class}>
                The Feedbacks
            </h2>
            <h2 id='feedback_text' className={h2Class}>
                Incredibly accurate and insightful, <br />
                and whatelse of their sayings!
            </h2>

            <Swiper id='feedback_swiper' pagination={{clickable: true,}} navigation={false} className='pb-10'
            autoplay={{delay: 2500, disableOnInteraction: false}} speed={1500} direction='horizontal' 
            style={{
                "--swiper-pagination-color": "#eac473",
                "--swiper-pagination-bullet-inactive-color": "#443548",
                "--swiper-pagination-active-bullet-size": "20px",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
            spaceBetween={20} slidesPerView={1} modules={[Navigation, Autoplay, Pagination]}>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has <br className='lg:hidden md:block hidden'/> 
                    helped me to see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 py-10 ml-3 text-violet">
                        <span className="font-bold py-4 lg:text-2xl text-xl">Ms.Rose Marray</span>  <br /> 
                        <span className="text-lg">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has <br className='lg:hidden md:block hidden'/> helped me  to  see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 py-10 ml-3 text-violet">
                        <span className="font-bold py-4 lg:text-2xl text-xl">Ms.Rose Marray</span>  <br /> 
                        <span className="text-lg">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has <br className='lg:hidden md:block hidden'/> helped me to  see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 py-10 ml-3 text-violet">
                        <span className="font-bold py-4 lg:text-2xl text-xl">Ms.Rose Marray</span>  <br /> 
                        <span className="text-lg">ABC Company </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}