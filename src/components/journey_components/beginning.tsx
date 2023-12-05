import { h1Class, h3Class } from "../utilities";

export default function Beginning(){
    return(
        <div className="bg-white text-[#4b2c64] xl:py-20 ssm:py-12 xsm:py-10 py-7 leading-10 text-center">
            <h1 className={`${h1Class} text-[#4b2c64] py-3`}>
                The Beginning
            </h1>
            <h1 className={`${h3Class} text-[#612a60] pb-3`}>
                Initial phrase of <br />
                the Journey on Facebook
            </h1>
            <div className={`xxl:w-[78%] xl:w-[84%] lg:w-[97%] xs:w-[95.5%] w-[88%] mx-auto md:py-10 pt-2 pb-4 
            xs:tracking-normal tracking-tight text-[#443548] text-justify font-[400] lg:text-xl
            lg:leading-10 md:text-[19px] md:leading-10 text-lg leading-[34px]`}>
                She began "The Cards Don't Lie" as a closed Facebook group, but its members' 
                candor and willingness to share have allowed it to grow into a larger spiritual 
                awakening community. Despite the fact that their spiritual paths diverge, they were 
                able to share our experiences, insights, and more within this select group. Tarot card 
                readings may have been the initial step on the path, but it has since grown to incorporate 
                energy healing techniques, runic interpretations, astrological and birth chart analysis, spiritual
                 exercises, and the study of universal languages and guidance. Therefore, she will spend her days 
                 as a light-bearer, reader, teacher, and healer for anyone who requires assistance in discovering 
                 their own answers and solutions for their communities.
            </div>
        </div>
    )
}