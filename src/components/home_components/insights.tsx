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
    const listClass = `font-[500] xxl:text-4xl xxl:leading-[6.4rem] 
    xl:text-[1.7rem] xs:py-3 md:leading-[3.4rem] xl:py-2 ssm:text-2xl xs:text-xl text-lg leading-[3.175rem]`
    return(
        <div className={`${bg2Class} xl:lg-pb-40 lg:pb-20 relative py-10 text-white after:[content:''] z-10 after:absolute after:z-[-1]
         after:bg-black/50 after:w-full after:h-full after:top-0 after:left-0 `}>
            <div className={`grid xs:grid-cols-2 grid-cols-1 lg:text-3xl md:text-2xl text-lg text-left 
            xl:px-32 lg:px-8 md:px-8 xs:px-12 px-8 md:pt-10 pt-0 lg:pb-48 pb-20`}>
                <h2 id="insights" className={`${h2Class} xs:col-span-2 text-center`}>Insights</h2>
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