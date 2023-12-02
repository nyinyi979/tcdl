import { h1Class, h2Class } from "../utilities";

export default function TheJourney(){
    return(
        <div className="mt-10 lg:mt-0 lg:pt-0 pt-[4.5rem]">
        
            <div className="text-center md:py-10 py-2 md:pb-20 pb-4">
                <h1 className={`${h1Class} lg:pt-8 pt-3 pb-2 text-primary`}>The Journey</h1>
                <h1 className={`${h2Class} lg:py-6 py-2 text-secondary`}>The Awakening</h1>
                <h1 className="text-white xl:w-5/6 md:w-[90%] sm:w-[100%] xs:w-[85%] w-[88%] py-2 mx-auto font-[600] xxl:leading-[3.4rem] xxl:text-[2.3rem] xll:text-3xl xll:leading-[3rem] md:text-2xl md:py-4 text-xl leading-8">
                    In the midst of immense turmoils, <br />
                    there arises a quest to uncover significance.
                </h1>
                <div className="text-white xll:w-[78%] xl:w-[84%] xs:w-[88%] w-[81%] font-[400] text-justify mx-auto xl:text-2xl md:text-xl text-lg xl:leading-[3rem] lg:leading-[2.5rem] md:leading-9 leading-8 md:pb-8 xs:pb-10 py-3">
                    Two immense incidents: Covid-19 pandemic, as well as the political unrest in 
                    Myanmar during 2020 - 2021 served as significant catalysts for her awakening, 
                    further motivating her to extend her assistance to individuals in her vicinity. 
                    The individual's trajectory as a tarot reader was propelled by word-of-mouth recommendations 
                    amidst throughout those two turmoils.
                </div>
            </div>
        </div>
    )
}