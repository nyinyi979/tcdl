import { h2Class_V } from "../utilities";

export default function Monthly(){
    return(
        <div className="lg:w-5/6 w-11/12 py-10 font-[400]">
            
            <h1 className={`${h2Class_V} text-[#4b2c64] lg:pt-8 pt-3 pb-3`}>Monthly Highlights and Updates</h1>
    
            <ol className="px-10 md:py-4 py-2 list-none text-lg text-stone-600">
                <li className="py-3">Monthly General Collective PAC Tarot Readings</li>
                <li className="py-3">Monthly Full Moon and New Moon Rituals (General)</li>
                <li className="py-3">Product Highlights (if any)</li>
                <li className="py-3">Runic Readings and Highlights</li>
                <li className="py-3">Astrological Updates</li>
                <li className="py-3">Spiritual Practices for Mind, Body and Soul</li>
                <li className="py-3">Tarot Workshop Classes</li>
                <li className="py-3">Rune Workshops and Classes</li>
                <li className="py-3">Birth Chart and Astrology Classes</li>
                <li className="py-3">Spell Jars and other Ritual Spell Work Workshops</li>
                <li className="py-3">Spiritual Awakening Talks and Other Sharing Sessions</li>
            </ol>

        </div>
    )
}