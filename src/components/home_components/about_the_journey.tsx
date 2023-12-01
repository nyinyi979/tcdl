import { h1Class, moreBtn, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Journey(){
    //add animation by the ID of the component
    useAnimateLeft('about_the_journey')
    useAnimateLeft('about_the_journey_text')
    useAnimateRight('image1');
    useAnimateRight('image2')
    return(
        <div className="xll:w-[72rem] xl:w-[65rem] lg:w-[100%] w-11/12 h-fit mx-auto xll:mt-[3.2rem] xl:mt-[2rem] mt-10 lg:mt-8 lg:pb-20 pb-8 lg:pt-0 pt-[4.5rem]">
            
            <div className="grid md:grid-cols-3 col-span-2 gap-3 w-full">
                
                {/* image displayed in small screen */}
                <div id='image1' className="col-span-2 w-full h-full flex items-center justify-center relative md:hidden">
                    <img src="/img1.jpg" alt="" className="mx-auto bg-cover xs:w-[88%] xs:h-[90%] w-[93%] h-[96%] xs:mt-7 mb-3 mt-0 rounded-xl md:float-right float-left"/>
                    <div className='absolute w-[7%] h-1/2 scale-75 bg-secondary right-4 bottom-1'></div>
                </div>

                <div className="col-span-2 xll:w-full xll:ml-0 xl:ml-12 lg:ml-8 w-[90%] mx-auto">
                    <h1 id='about_the_journey' className={`${h1Class} text-secondary pb-8 xll:mb-3 mb-0`}>About the Journey</h1>
                    <div id='about_the_journey_text'>
                        <p className="text-gray-200 xxl:text-2xl xll:text-[1.3rem] lg:text-xl md:text-base text-[15px] xll:font-[450] font-[400] text-justify xll:leading-[2.6rem] xll:mb-7 lg:leading-10 lg:font-[500] xl:mb-5 xl:leading-9 mb-4 leading-8">
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

                {/* image displayed in large screen */}
                <div id='image2' className="col-span-1 w-full mx-auto relative md:block hidden">
                    <img src="/img1.jpg" alt="" className="bg-cover lg:w-[90%] lg:h-[90%] md:w-[100%] md:h-[70%] md:mt-20 lg:mt-9 mt-7 rounded-2xl md:float-right float-left my-3"/>
                    <div className='absolute w-[7%] lg:h-1/3 h-1/4 bg-secondary md:bottom-16 -right-1 lg:bottom-6'></div>
                </div>

            </div>

        </div>
    )
}
