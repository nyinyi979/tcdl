import { useAnimateLeft, useAnimateRight } from '../utilities';
const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold'
export default function Journey(){
    useAnimateLeft('about_the_journey')
    useAnimateLeft('about_the_journey_text')
    useAnimateRight('image');
    return(
        <div className="lg:w-5/6 w-11/12 h-fit mx-auto mt-6 pb-8">
            <div className="grid md:grid-cols-3 col-span-2 gap-3">
                <div className="col-span-2 w-full">
                    <h1 id='about_the_journey' className="text-secondary text-4xl font-bold">About the journey</h1>
                    <div id='about_the_journey_text'>
                        <p className="text-gray-200 lg:leading-[3rem] leading-[2rem] py-8 text-xl text-justify">
                            Her tarot journey is not easy. Immense traumatic events served as significant 
                            catalysts for her journey of self-discovery, healing, and transformation. The awakening 
                            transformation and further motivation empowered her to assist to individuals in her vicinity.
                            She helped others see the world in a new light, and her incredibly accurate and insightful 
                            readings, propelled by mouth-to-mouth recommendations, became the very basic foundation of 
                            the “The Cards Don't Lie” movement.
                        </p>
                        <a href="" className={MoreClass}>More</a>
                    </div>
                </div>
                <div id='image' className="col-span-1 w-full mx-auto relative yellow_block">
                    <img src="The Card Don_t Lie - TDCL - Tarot - Rune - Photo - 01.jpg" alt="" className="bg-cover w-11/12 lg:h-96 lg:mt-10 md:h-72 h-52 md:mt-20 mt-0 rounded-lg md:float-right float-left my-3"/>
                  
                </div>
            </div>
        </div>
    )
}
