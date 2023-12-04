import {  bg7Class, h2Class, h3Class } from '../utilities';
import { VideoCarousel } from '../carousels';
export default function H_Carosusel_Video(){
    return(
        <div className={`md:py-20 py-10 ${bg7Class} text-center`}>
            <h2 className={`${h2Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h3Class} text-light_secondary py-5`}>
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>

            <div className="w-full arrow relative my-5">
                <VideoCarousel />
            </div>
            
        </div>
    )
}