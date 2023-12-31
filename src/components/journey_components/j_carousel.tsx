import {  bg7Class, h2Class, h3Class } from '../utilities';
import { VideoCarousel } from '../carousels';
export default function J_Carosusel(){
    return(
        <div className={`lg:pt-28 md:py-20 py-10 ${bg7Class} text-center`}>
            <h2 className={`${h2Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h3Class} text-light_secondary py-5`}>
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>
            
            <p className={`xll:w-[1140px] xl:w-[990px] llg:w-[980px] lg:w-[950px] md:w-[94%] xs:w-[86%] w-[85%] 
            xxl:text-[1.6rem] xll:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] xs:text-lg text-sm 
            xs:leading-9 leading-8 md:py-6 xs:py-10 py-8 text-justify font-[400]text-white mx-auto`}>
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </p>

            <div className="w-full arrow relative my-5">
                <VideoCarousel />
            </div>
            
        </div>
    )
}