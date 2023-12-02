import { h1Class } from '../utilities';
import {ImageCarousel} from '../carousels';
export default function H_Carousel_Img(){
    return(
        <div id='highlight' className={`pb-10 mt-10 lg:mt-0 lg:pt-0 pt-[4.5rem]`}>
            <h2 className={`${h1Class} text-center text-primary md:py-10 py-4`}>The Highlights</h2>

            <h2 className={`oswald md:font-[600] font-[500] xxl:text-5xl xxl:mr-16 xll:text-[2rem] 
            xll:leading-[2.7rem] xll:mr-6 xl:text-[1.8rem] xl:mr-4 xl:leading-9 md:text-3xl 
            md:leading-8 mr-3 ssm:text-2xl text-xl text-center text-secondary pb-3`}>
                This Month's Highlights
            </h2>
            
            <div className="w-full arrow relative py-10">
                <ImageCarousel />
            </div>
        </div>
    )
}