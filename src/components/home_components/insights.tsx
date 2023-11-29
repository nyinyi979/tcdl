import { bg2Class, useAnimateLeft, useAnimateScale } from "../utilities"

export default function Insight(){
    useAnimateScale('insights');
    useAnimateLeft('h1');
    useAnimateLeft('h2');
    useAnimateLeft('h3');
    useAnimateLeft('h4');
    useAnimateLeft('h5');
    useAnimateLeft('h6');
    useAnimateLeft('h7');
    const listClass = "font-[600] xxl:text-4xl xxl:leading-[6.4rem] xl:text-[1.7rem] lg:py-3 md:leading-[3.4rem] ssm:text-2xl text-xl leading-[3.175rem]"
    return(
        <div className={`relative py-10 text-white after:[content:''] z-10 after:absolute after:z-[-1] after:bg-black/40 after:w-full after:h-full after:top-0 after:left-0 ${bg2Class}`}>
            <div className="grid grid-cols-2 lg:text-3xl md:text-2xl text-lg text-left xl:px-32 lg:px-10 md:px-32 px-12 md:pt-10 pt-0 lg:pb-48 pb-20">
                <h2 id="insights" className="oswald font-[700] col-span-2 text-4xl text-center py-6">Insights</h2>
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