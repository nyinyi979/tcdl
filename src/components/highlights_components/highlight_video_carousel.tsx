import {  bg7Class, h1Class, h2Class } from '../utilities';
import { VideoCarousel } from '../carousels';
export default function H_Carosusel_Video(){
    return(
        <div className={`md:py-20 py-10 ${bg7Class} text-center`}>
            <h2 className={`${h1Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h2Class} text-light_secondary py-5`}>
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>

            <div className="w-full arrow relative my-5">
                <VideoCarousel />
            </div>
            
        </div>
    )
}