import { BeEliteBtn, bg1Class, h1Class, h3Class, quoteClass, useAnimateLeft, useAnimateRight, useAnimateTop } from '../utilities';
export default function Private(){
    //adding animation
    useAnimateLeft('private');
    useAnimateRight('private_group');
    useAnimateLeft('private_text');
    useAnimateRight('mySwiper');
    useAnimateTop('private_btn');
    return(
        <div className={`text-white text-center xll:py-20 xsm:py-16 py-12 ${bg1Class}`}>
            <h1 id='private' className={`${h1Class} pb-2`}>The Private Group</h1>
            <h2 id='private_group' className={`${h3Class} text-center xl:py-2`}>
                A Private Group of <br /> Seeking and Awakening Individuals
            </h2>
            <div id='private_text' className={`xll:w-5/6 xl:w-[83%] llg:w-[90%] lg:w-[94.7%] md:w-[94%] ssm:w-[88%] xs:w-[86%] w-[85%] font-[400] text-justify 
            mx-auto xl:text-xl xl:leading-[2.4rem] lg:text-xl lg:leading-[2.3rem] md:leading-10 xs:leading-9 xs:text-lg text-base
            py-3 leading-9 md:py-6`}>
                The initial phase of the trip was tarot card readings, but it has since expanded to encompass 
                many forms of energy healing, runic readings, astrological/birth chart readings, spiritual practices, 
                and even the acquisition of knowledge in global languages and guidance. Consequently, she has made the
                decision to pursue a career as a dedicated practitioner of healing, an educator, and a facilitator of
                spiritual guidance. 
            </div>

            <div id='mySwiper' className="xll:w-5/6 xl:w-[83%] llg:w-[90%] lg:w-[94%] md:w-[94%] xs:w-[86%] w-[85%] md:py-8 py-4 mx-auto">
                <blockquote id="quote" className={`font-[500] text-left mx-auto xxl:leading-[3rem] 
                xxl:text-[2rem] xll:text-[1.7rem] lg:text-2xl lg:leading-[2.8rem] xsm:text-[1.32rem] xs:text-[1.3rem] text-[1.2rem] 
                leading-9 py-10 ${quoteClass}`}>
                Her primary mission is to serve as a source of enlightenment and support for individuals and 
                communities seeking answers and guidance on a regular basic, hence, the Elite Club.
                </blockquote>
            </div>
            <a id='private_btn' href="" className={BeEliteBtn}>Be an Elite?</a>
        </div>
    )
}   
