import { bannerh1Class, bannerh2Class } from '../utilities';
import {ImageCarousel} from '../carousels';
export default function H_Carousel_Img(){
    return(
        <div id='highlight' className={`pb-10 mt-10 lg:mt-0 lg:pt-16 pt-[4.5rem]`}>
            <h2 className={`${bannerh1Class} text-center text-primary pb-3`}>The Highlights</h2>

            <h2 className={`${bannerh2Class} text-center xl:py-3 py-2 text-secondary`}>
                This Month's Highlights
            </h2>
            
            <div className="w-full arrow relative py-6">
                <ImageCarousel />
            </div>
        </div>
    )
}