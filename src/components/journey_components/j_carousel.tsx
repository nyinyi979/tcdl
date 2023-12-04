import {  bg7Class, h2Class, h3Class } from '../utilities';
import { VideoCarousel } from '../carousels';
export default function J_Carosusel(){
    return(
        <div className={`md:py-20 py-10 ${bg7Class} text-center`}>
            <h2 className={`${h2Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h3Class} text-light_secondary py-5`}>
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>
            <div className={`block font-[400] xl:w-[84%] lg:w-[95%] md:w-[90%] w-[85%] h-fit text-justify text-white leading-10 mx-auto lg:leading-[36px] lg:text-[22px] md:text-xl text-lg py-9`}>
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </div>

            <div className="w-full arrow relative my-5">
                <VideoCarousel />
            </div>
            
        </div>
    )
}