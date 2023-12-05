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
    useAnimateLeft('h1_');
    useAnimateLeft('h2_');
    useAnimateLeft('h3_');
    useAnimateLeft('h4_');
    useAnimateLeft('h5_');
    useAnimateLeft('h6_');
    useAnimateLeft('h7_');
    const listClass = `font-[500] xxl:text-4xl xxl:py-8 
    xl:text-[1.7rem] lg:leading-[3rem] leading-10 py-1 xsm:py-1 xs:py-[10px] md:py-3 xxl:text-5xl lg:text-[27px] ssm:text-[22px] xs:text-[19px] text-lg `
    return(
        <div className={`${bg2Class} relative text-white after:[content:''] z-10 after:absolute after:z-[-1]
         after:bg-black/50 after:w-full after:h-full after:top-0 after:left-0 `}>
            <div className={`grid xsm:grid-cols-2 grid-cols-1 lg:text-3xl md:text-2xl text-lg text-left xxl:w-[60%] xxl:mx-auto xl:px-32 px-8
            xxl:pt-20 pt-10 xxl:pb-96 xll:pb-80 lg:pb-72 ssm:pb-24 pb-16`}>
                <h2 id="insights" className={`${h2Class} xsm:col-span-2 text-center py-5 md:py-10`}>Insights</h2>
                <div className="xsm:block hidden">
                    <h2 id="h1" className={listClass}>Tarot Reading</h2>
                    <h2 id="h2" className={listClass}>Birth Chart Reading</h2>
                    <h2 id="h3" className={listClass}>Rune Reading</h2>
                    <h2 id="h4" className={listClass}>Energy Healing</h2>
                </div>
                <div className="xsm:block hidden">
                    <h2 id="h5" className={listClass}>Spell & Rituals</h2>
                    <h2 id="h6" className={listClass}>Spiritual Guidance</h2>
                    <h2 id="h7" className={listClass}>Healing & Consultation</h2>
                </div>
                <div className="xsm:hidden block">
                    <h2 id="h1_" className={listClass}>Tarot Reading</h2>
                    <h2 id="h5_" className={listClass}>Spell & Rituals</h2>
                    <h2 id="h2_" className={listClass}>Birth Chart Reading</h2>
                    <h2 id="h6_" className={listClass}>Spiritual Guidance</h2>
                    <h2 id="h3_" className={listClass}>Rune Reading</h2>
                    <h2 id="h7_" className={listClass}>Healing & Consultation</h2>
                    <h2 id="h4_" className={listClass}>Energy Healing</h2>
                </div>
            </div>
        </div>
    )
}