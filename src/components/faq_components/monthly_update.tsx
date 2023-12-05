import { h3FAQ } from "../utilities";

export default function Monthly(){
    const pClass = 'arial lg:my-[13px] xl:my-5 xl:leading-[34px] my-3 text-light_violet font-[400] leading-[30px] align-baseline bg-transparent md:text-[19px] xs:text-[18px] text-base';

    return(
        <> 
            <h1 className={`${h3FAQ} text-dark_violet lg:mt-12 xs:mt-6 mt-4`}>Monthly Highlights and Updates</h1>
    
            <ol className="px-10 list-none">
                <li className={pClass}>Monthly General Collective PAC Tarot Readings</li>
                <li className={pClass}>Monthly Full Moon and New Moon Rituals (General)</li>
                <li className={pClass}>Product Highlights (if any)</li>
                <li className={pClass}>Runic Readings and Highlights</li>
                <li className={pClass}>Astrological Updates</li>
                <li className={pClass}>Spiritual Practices for Mind, Body and Soul</li>
                <li className={pClass}>Tarot Workshop Classes</li>
                <li className={pClass}>Rune Workshops and Classes</li>
                <li className={pClass}>Birth Chart and Astrology Classes</li>
                <li className={pClass}>Spell Jars and other Ritual Spell Work Workshops</li>
                <li className={pClass}>Spiritual Awakening Talks and Other Sharing Sessions</li>
            </ol>
        </>
    )
}