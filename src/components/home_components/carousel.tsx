import {  bg3Class, h1Class, h2Class } from '../utilities';
import ImageCarousel from '../carousels';
export default function Carosusel(){
    return(
        <div className={`py-20 ${bg3Class}`}>
            <h2 className={`${h1Class} text-center text-secondary md:py-6 py-4`}>The Highlights</h2>
            <h2 className={`${h2Class} text-center text-light_secondary`}>
                Sharing is caring
            </h2>
            <p className="xll:w-5/6 xl:w-[80%] lg:w-[95%] md:w-[90%] w-[85%] mx-auto text-justify font-[400] leading-9 text-white xxl:text-[1.6rem] lg:text-[1.4rem] xs:text-base text-sm xs:py-10 py-8">
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </p>

            
            <div className="w-full arrow relative">
                <ImageCarousel />
            </div>
            
        </div>
    )
}
