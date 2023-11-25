import { Navigation , Autoplay } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { quoteClass, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Feedback(){
    useAnimateLeft('feedback');
    useAnimateRight('feedback_text')
    useAnimateLeft('feedback_swiper');
    const quoteClassHere = 'text-center text-violet ' + quoteClass;
    return(
        <div className="bg-white py-20">
            <h2 id='feedback' className="text-violet md:text-4xl text-4xl font-bold text-center py-5">
                The Feedbacks
            </h2>
            <h2 id='feedback_text' className="text-violet text-2xl font-bold text-center leading-10">
            Incredibly accurate and insightful, <br />
                and whatelse of their sayings!
            </h2>

            <Swiper id='feedback_swiper' navigation={false} autoplay={{delay: 2500, disableOnInteraction: false}} speed={1500} direction='horizontal' spaceBetween={20} slidesPerView={1} modules={[Navigation, Autoplay]} className="md:text-2xl text-xl px-4">
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has helped me <br /> to  see the world in a new way
                    </blockquote>
                        <div className="text-center leading-8 py-10 text-violet">
                        <span className="font-bold">Ms.Rose Marray</span>  <br /> 
                        <span className="text-light_violet">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has helped me <br /> to  see the world in a new way
                    </blockquote>
                        <div className="text-center leading-8 py-10 text-violet">
                        <span className="font-bold">Ms.Rose Marray</span>  <br /> 
                        <span className="text-light_violet">ABC Company </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <blockquote id="quote" className={quoteClassHere}>
                        She is a wise and insightful teacher who has helped me <br /> to  see the world in a new way
                    </blockquote>
                        <div className="text-center leading-8 py-10 text-violet">
                        <span className="font-bold">Ms.Rose Marray</span>  <br /> 
                        <span className="text-light_violet">ABC Company </span>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}