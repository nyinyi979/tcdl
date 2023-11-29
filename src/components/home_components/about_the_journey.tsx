import { h1Class, moreBtn, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Journey(){
    useAnimateLeft('about_the_journey')
    useAnimateLeft('about_the_journey_text')
    useAnimateRight('image');
    return(
        <div>
            <div className="xll:w-[72rem] xl:w-[65rem] w-11/12 h-fit mx-auto xll:mt-[3.2rem] xl:mt-[2rem] mt-8 lg:pb-20 pb-8">
                <div className="grid md:grid-cols-3 col-span-2 gap-3 w-full">
                    
                    <div id='image' className="col-span-1 w-64 ssm:ml-[43%] ml-[38%] relative yellow_block md:hidden block">
                        <img src="/img1.jpg" alt="" className="block bg-cover w-full h-[92%] mt-7 rounded-xl md:float-right float-left my-3"/>
                    </div>

                    <div className="col-span-2 xll:w-full xll:ml-0 xl:ml-12 xl:w-[90%]">
                        <h1 id='about_the_journey' className={`${h1Class} text-secondary pb-8 xll:mb-3`}>About the Journey</h1>
                        <div id='about_the_journey_text'>
                            <p className="text-gray-200 xxl:text-2xl xll:text-[1.3rem] xll:font-[450] font-[400] text-justify xll:leading-[2.6rem] xll:mb-7 lg:text-xl lg:leading-10 lg:font-[500] xl:mb-5 xl:leading-9 mb-4 text-base leading-8">
                                Her tarot journey is not easy. Immense traumatic events served as significant 
                                catalysts for her journey of self-discovery, healing, and transformation. The awakening 
                                transformation and further motivation empowered her to assist to individuals in her vicinity.
                                She helped others see the world in a new light, and her incredibly accurate and insightful 
                                readings, propelled by mouth-to-mouth recommendations, became the very basic foundation of 
                                the “The Cards Don't Lie” movement.
                            </p>
                            <a href="/" className={moreBtn}>More</a>
                        </div>
                    </div>
                    <div id='image' className="col-span-1 w-full mx-auto relative yellow_block md:block hidden">
                        <img src="/img1.jpg" alt="" className="bg-cover w-[90%] lg:h-[90%] md:h-[80%] lg:mt-9 mt-7 rounded-2xl md:float-right float-left my-3"/>
                    </div>
                </div>
            </div>

        </div>
    )
}
