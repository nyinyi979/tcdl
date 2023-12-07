import { bannerh1Class, bannerh2Class } from "../utilities";

export default function TheJourney(){
    return(
        <div className="mt-10 lg:mt-0 lg:pt-0 pt-[4.5rem]">
        
            <div className="text-center xll:pb-20 xl:pb-[40px] lg:pb-12 pb-8">
                
                <h1 className={`${bannerh1Class} xxl:pt-10 xll:pt-16 pt-2 text-primary`}>The Journey</h1>
                <h1 className={`${bannerh2Class} xll:py-5 text-secondary`}>The Awakening</h1>

                <h1 className={`text-white xll:w-5/6 md:w-[90%] sm:w-[100%] xs:w-[85%] w-[88%] mx-auto 
                font-[600] xll:leading-[3rem] xll:text-[30px] lg:leading-10 md:text-[26px] md:py-4 
                text-[21px] leading-8 py-2`}>
                    In the midst of immense turmoils, <br />
                    there arises a quest to uncover significance.
                </h1>

                <div className={`text-white xll:w-[1140px] xl:w-[990px] llg:w-[980px] lg:w-[960px] md:w-[92%] xs:w-[88%] w-[81%] 
                font-[400] text-justify mx-auto xll:text-2xl xll:leading-[3rem] md:text-xl text-lg 
                md:leading-9 leading-8 md:pb-8 py-2`}>
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