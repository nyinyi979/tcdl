import { bg2Class, h2Class, useAnimateLeft, useAnimateScale } from "../utilities"

export default function Insight(){
    //adding animation
    useAnimateScale('insights');
    useAnimateLeft('h1');
    useAnimateLeft('h2');
    useAnimateLeft('h3');
    useAnimateLeft('h4');
    useAnimateLeft('h5');
    useAnimateLeft('h6');
    useAnimateLeft('h7');
    const listClass = `font-[500] xxl:text-4xl  
    xl:text-[1.7rem] lg:leading-[3rem] leading-10 py-1 xs:py-2 md:py-3 lg:text-[27px] md:text-[22px] xs:text-xl text-lg `
    return(
        <div className={`${bg2Class} xl:lg-pb-40 lg:pb-20 relative py-10 text-white after:[content:''] z-10 after:absolute after:z-[-1]
         after:bg-black/50 after:w-full after:h-full after:top-0 after:left-0 `}>
            <div className={`grid xsm:grid-cols-2 grid-cols-1 lg:text-3xl md:text-2xl text-lg text-left 
            xl:px-32 px-8 lg:pt-10 pt-0 lg:pb-48 pb-20`}>
                <h2 id="insights" className={`${h2Class} xsm:col-span-2 text-center py-5 md:py-10`}>Insights</h2>
                <div>
                    <h2 id="h1" className={listClass}>Tarot Reading</h2>
                    <h2 id="h2" className={listClass}>Birth Chart Reading</h2>
                    <h2 id="h3" className={listClass}>Rune Reading</h2>
                    <h2 id="h4" className={listClass}>Energy Healing</h2>
                </div>
                <div>
                    <h2 id="h5" className={listClass}>Spell & Rituals</h2>
                    <h2 id="h6" className={listClass}>Spiritual Guidance</h2>
                    <h2 id="h7" className={listClass}>Healing & Consultation</h2>
                </div>
            </div>
        </div>
    )
}