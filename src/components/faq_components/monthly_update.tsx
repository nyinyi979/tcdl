import { h3FAQ } from "../utilities";

export default function Monthly(){
    const liClass = 'ssm:py-3 py-2'
    return(
        <>
            
            <h1 className={`${h3FAQ} text-dark_violet xl:pt-20 lg:pt-12 pt-2 pb-3`}>Monthly Highlights and Updates</h1>
    
            <ol className="px-10 md:py-4 py-2 list-none ssm:text-lg text-base text-stone-600">
                <li className={liClass}>Monthly General Collective PAC Tarot Readings</li>
                <li className={liClass}>Monthly Full Moon and New Moon Rituals (General)</li>
                <li className={liClass}>Product Highlights (if any)</li>
                <li className={liClass}>Runic Readings and Highlights</li>
                <li className={liClass}>Astrological Updates</li>
                <li className={liClass}>Spiritual Practices for Mind, Body and Soul</li>
                <li className={liClass}>Tarot Workshop Classes</li>
                <li className={liClass}>Rune Workshops and Classes</li>
                <li className={liClass}>Birth Chart and Astrology Classes</li>
                <li className={liClass}>Spell Jars and other Ritual Spell Work Workshops</li>
                <li className={liClass}>Spiritual Awakening Talks and Other Sharing Sessions</li>
            </ol>

        </>
    )
}