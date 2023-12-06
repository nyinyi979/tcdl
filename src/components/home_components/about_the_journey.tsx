import { bannerh1Class, moreBtn, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Journey(){
    //add animation by the ID of the component
    useAnimateLeft('about_the_journey')
    useAnimateLeft('about_the_journey_text')
    useAnimateRight('image1');
    useAnimateRight('image2');
    return(
        <div className={`xll:w-[85%] xl:w-[83%] lg:w-[98%] md:w-[94%] ssm:w-[88%] xs:w-[86%] w-[83%] h-fit mx-auto 
        xll:mt-[3.2rem] xl:mt-[2rem] mt-10 lg:mt-8 xll:pb-20 md:pb-12 pb-7 lg:pt-0 md:pt-[3rem] pt-[3.5rem]`}>
            
            <div className="grid md:grid-cols-3 col-span-2 gap-3 w-full pb-3">
                
                {/* image displayed in small screen */}
                <div id='image1' className="col-span-2 ssm:w-[45%] xsm:w-[70%] w-[97%] mx-auto h-full flex items-center justify-center relative md:hidden">
                    <img src="/img1.jpg" alt="" className="mx-auto bg-cover w-full h-fit xs:mt-3 mb-3 mt-0 rounded-xl md:float-right float-left"/>
                    <div className='absolute w-[20px] h-[150px] bg-secondary xs:right-3 right-3 bottom-10'></div>
                </div>

                <div className="col-span-2 xll:mx-auto xll:w-[730px] xll:float-right llg:w-[640px] lg:w-[600px] md:w-[95%] ml-0 xl:ml-16 llg:ml-12 lg:ml-4 w-full">
                    <h1 id='about_the_journey' className={`${bannerh1Class} text-secondary lg:pb-7 pb-2 md:mb-0 mb-2 xll:mb-3`}>About the Journey</h1>
                    <div id='about_the_journey_text'>
                        <p className={`text-gray-200 xxl:text-2xl xxl:leading-10 lg:text-xl md:text-base 
                        xs:text-[17px] text-[15px] font-[400] text-justify xll:leading-[2.6rem] 
                        xll:mb-7 lg:leading-9 md:leading-8 xl:mb-5 xl:leading-9 mb-4 leading-8`}>
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
                <div id='image2' className="col-span-1 w-[100%] h-full mx-auto relative md:block hidden">
                    <img src="/img1.jpg" alt="" className={`bg-cover xxl:float-left xxl:w-[80%] xll:h-[90%] xl:w-[90%] lg:w-[88%] xl:h-[94%] lg:h-[90%] md:w-[96%] 
                    md:h-[89%] lg:mt-9 mt-12 rounded-2xl float-right xl:mr-0 lg:mr-4 my-3`}/>
                    <div className='absolute llg:w-[30px] llg:h-[200px] w-[20px] lg:h-[150px] h-[140px] bg-secondary xl:-right-2 llg:right-1 lg:bottom-6 right-7 bottom-4'></div>
                </div>

            </div>

        </div>
    )
}
