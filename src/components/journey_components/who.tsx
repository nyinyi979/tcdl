import { bg4Class, h2Class , h3Class} from "../utilities";
export default function Who(){
    return(
        <div id="who" className={`w-full ${bg4Class} text-white text-center xll:pt-24 xl:py-20 py-16`}>
            <h1 className={`${h2Class} xl:pt-8 lg:pt-6 md:py-4 pb-3`}>
                Who she is?
            </h1>
            <h1 className={`${h3Class} xll:pb-8 `}>
                Founder's Bio
            </h1>
            <div className={`xll:w-[1140px] xl:w-[990px] lg:w-[980px] xs:w-[95.5%] w-[88%] text-justify 
            xxl:text-2xl xxl:leading-[44px] sm:leading-[2.5rem] sm:text-xl ssm:text-[22px] text-lg mx-auto leading-9 ssm:leading-10 py-5`}>
                Thazin Soe, creator of the spiritual products of Genie in a bottle and tarot 
                reader for The Cards Don't Lie, began her career in the field in 2020. She taught 
                for over a decade in a Singaporean elementary school before beginning her spiritual quest. 
                She spent many years in Singapore attending college after growing up in Myanmar (Burma). 
                During the global pandemic of 2020, she began her search for meaning and a higher purpose in 
                life after earning two diplomas, a degree, and a master's in education.
            </div>
            <div className="w-fit h-fit font-[500] mx-auto lg:pt-48 md:pt-40 md:pb-60 xll:pl-40 lg:pl-48 md:pl-28 xs:pt-10">
                <span className="xl:text-3xl text-2xl py-2">Thazin Soe </span> <br />
                <span className="xl:text-2xl font-[400] text-xl pl-1 py-2">The Founder</span>
            </div>
        </div>
    )
}