import { h1Class, h2Class } from '../utilities';
import {ImageCarousel} from '../carousels';
export default function H_Carousel_Img(){
    return(
        <div id='highlight' className={`pb-10 mt-10 lg:mt-0 lg:pt-0 pt-[4.5rem]`}>
            <h2 className={`${h1Class} text-center text-primary md:py-10 py-4`}>The Highlights</h2>

            <h2 className={`${h2Class} text-center text-secondary pb-3`}>
                This Month's Highlights
            </h2>
            
            <div className="w-full arrow relative py-10">
                <ImageCarousel />
            </div>
        </div>
    )
}