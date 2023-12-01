import { Navigation , Autoplay, Pagination } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { h1Class, h2Class, quoteClass, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Feedback(){
    //adding animation
    useAnimateLeft('feedback');
    useAnimateRight('feedback_text')
    useAnimateLeft('feedback_swiper');
    //overall quoteClass doesn't have text size values
    const quoteClassHere = `xl:w-[50%] lg:w-[74%] md:w-[65%] xs:w-[80%] w-[90%] mx-auto xxl:text-[2.37rem] 
    xll:leading-[3.3rem] font-[600] xll:text-[1.7rem]  ssm:text-2xl xl:leading-[2.75rem] ssm:leading-[2.4rem] 
    ssm:text-xl text-lg leading-8 text-center` + quoteClass;
    return(
        <div className="bg-white text-[#372c44] xl:py-20 py-16 text-center">
            <h2 id='feedback' className={`${h1Class} py-2`}>
                The Feedbacks
            </h2>
            <h2 id='feedback_text' className={`${h2Class} py-5`}>
                Incredibly accurate and insightful, <br />
                and whatelse of their sayings!
            </h2>   

            <Swiper id='feedback_swiper' pagination={{clickable: true}} navigation={false} className='pb-10 mx-auto'
            autoplay={{delay: 2500, disableOnInteraction: false}} speed={1500} direction='horizontal' 
            style={{
            }}
            spaceBetween={20} slidesPerView={1} modules={[Navigation, Autoplay, Pagination]}>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has 
                    helped me to see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 xs:py-10 py-8 text-violet">
                        <span className="font-bold py-4 lg:text-2xl ssm:text-xl text-lg">Ms.Rose Marray</span>  <br /> 
                        <span className="ssm:text-lg text-base">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has 
                         helped me  to  see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 xs:py-10 py-8 text-violet">
                        <span className="font-bold py-4 lg:text-2xl ssm:text-xl text-lg">Ms.Rose Marray</span>  <br /> 
                        <span className="ssm:text-lg text-base">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has helped me to  see the world in a new way
                    </blockquote>
                    <div className="text-center leading-8 xs:py-10 py-8 text-violet">
                        <span className="font-bold py-4 lg:text-2xl ssm:text-xl text-lg">Ms.Rose Marray</span>  <br /> 
                        <span className="ssm:text-lg text-base">ABC Company </span>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}