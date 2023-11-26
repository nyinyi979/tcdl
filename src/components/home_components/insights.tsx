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
    return(
        <div className={`relative py-10 text-white after:[content:''] z-10 after:absolute after:z-[-1] after:bg-black/40 after:w-full after:h-full after:top-0 after:left-0 ${bg2Class}`}>
            <div className="grid grid-cols-2 lg:text-3xl md:text-2xl text-lg text-left md:px-32 px-12 pt-10 lg:pb-48 pb-16">
                <h2 id="insights" className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10">Insights</h2>
                <div>
                    <h2 id="h1" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Tarot Reading</h2>
                    <h2 id="h2" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Birth Chart Reading</h2>
                    <h2 id="h3" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Rune Reading</h2>
                    <h2 id="h4" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Energy Healing</h2>
                </div>
                <div>
                    <h2 id="h5" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Spell & Rituals</h2>
                    <h2 id="h6" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Spiritual Guidance</h2>
                    <h2 id="h7" className="xxl:text-5xl xxl:leading-[6.4rem] xll:text-[1.7rem] xll:leading-[4.5rem] md:text-2xl md:leading-[3.4rem] text-xl leading-[3.175rem]">Healing & Consultation</h2>
                </div>
            </div>
        </div>
    )
}