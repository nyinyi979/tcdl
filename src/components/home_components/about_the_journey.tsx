import Navbar from '../navbar';
import { bg0Class, moreBtn, useAnimateLeft, useAnimateRight } from '../utilities';
export default function Journey(){
    useAnimateLeft('about_the_journey')
    useAnimateLeft('about_the_journey_text')
    useAnimateRight('image');
    return(
        <div className={bg0Class}>
            <Navbar currentLink='/'/>
            <div className="xll:w-[73rem] w-11/12 h-fit mx-auto mt-6 pb-8">
                <div className="grid md:grid-cols-3 col-span-2 gap-3 w-full">
                    
                    <div id='image' className="col-span-1 w-64 ml-[45%] relative yellow_block md:hidden block">
                        <img src="/img1.jpg" alt="" className="block bg-cover w-full h-[92%] mt-7 rounded-xl md:float-right float-left my-3"/>
                    </div>

                    <div className="col-span-2 w-full">
                        <h1 id='about_the_journey' className="oswald text-secondary xll:[font-weight:bold] xll:text-5xl xll:leading-[5rem] xl:text-[2.5rem] xl:leading-[4.3rem] text-3xl leading-[3rem] py-3">About the journey</h1>
                        <div id='about_the_journey_text'>
                            <p className="text-gray-200 xxl:text-2xl font-[450] text-justify xll:leading-10 xll:mb-7 xl:text-[1.3rem] xl:mb-5 xl:leading-9 mb-4 text-base leading-8">
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
                        <img src="/img1.jpg" alt="" className="bg-cover w-11/12 lg:h-[90%] md:h-[80%] lg:mt-3 mt-7 rounded-xl md:float-right float-left my-3"/>
                    </div>
                </div>
            </div>

        </div>
    )
}
