import { useAnimateLeft, useAnimateScale } from "../utilities"

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
        <div className="text-white img_3_bg">
                <div className="grid grid-cols-2 lg:text-3xl text-2xl text-left md:px-32 px-12 pt-10 lg:pb-48 pb-12">
                    <h2 id="insights" className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10">Insights</h2>
                    <div>
                        <h2 id="h1" className="py-4">Tarot Reading</h2>
                        <h2 id="h2" className="py-4">Birth Chart Reading</h2>
                        <h2 id="h3" className="py-4">Rune Reading</h2>
                        <h2 id="h4" className="py-4">Energy Healing</h2>
                    </div>
                    <div>
                        <h2 id="h5" className="py-4">Spell & Rituals</h2>
                        <h2 id="h6" className="py-4">Spiritual Guidance</h2>
                        <h2 id="h7" className="py-4">Healing & Consultation</h2>
                    </div>
                </div>
            </div>
    )
}