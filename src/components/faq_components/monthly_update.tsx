import { h2Class_V } from "../utilities";

export default function Monthly(){
    return(
        <div className="xl:w-[85%] lg:w-[96%] md:w-[92.4%] xs:w-[93%] w-[90%] py-10 font-[400] text-left">
            
            <h1 className={`${h2Class_V} text-[#583f74] lg:pt-8 pt-3 pb-3`}>Monthly Highlights and Updates</h1>
    
            <ol className="px-10 md:py-4 py-2 list-none ssm:text-lg text-base text-stone-600">
                <li className="ssm:py-3 py-2">Monthly General Collective PAC Tarot Readings</li>
                <li className="ssm:py-3 py-2">Monthly Full Moon and New Moon Rituals (General)</li>
                <li className="ssm:py-3 py-2">Product Highlights (if any)</li>
                <li className="ssm:py-3 py-2">Runic Readings and Highlights</li>
                <li className="ssm:py-3 py-2">Astrological Updates</li>
                <li className="ssm:py-3 py-2">Spiritual Practices for Mind, Body and Soul</li>
                <li className="ssm:py-3 py-2">Tarot Workshop Classes</li>
                <li className="ssm:py-3 py-2">Rune Workshops and Classes</li>
                <li className="ssm:py-3 py-2">Birth Chart and Astrology Classes</li>
                <li className="ssm:py-3 py-2">Spell Jars and other Ritual Spell Work Workshops</li>
                <li className="ssm:py-3 py-2">Spiritual Awakening Talks and Other Sharing Sessions</li>
            </ol>

        </div>
    )
}