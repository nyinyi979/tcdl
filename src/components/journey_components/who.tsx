import { bg4Class, h2Class , h3Class} from "../utilities";
export default function Who(){
    return(
        <div id="who" className={`w-full ${bg4Class} text-white text-center py-20`}>
            <h1 className={`${h2Class} xl:pt-8 lg:pt-6 md:py-4 pb-3`}>
                Who she is?
            </h1>
            <h1 className={`${h3Class} md:py-5`}>
                Founder's Bio
            </h1>
            <div className="xll:w-[85%] xl:w-[75%] w-[95%] text-justify sm:leading-[2.8rem] sm:text-xl ssm:text-[22px] text-lg mx-auto leading-9 ssm:leading-10 py-5">
                Thazin Soe, creator of the spiritual products of Genie in a bottle and tarot 
                reader for The Cards Don't Lie, began her career in the field in 2020. She taught 
                for over a decade in a Singaporean elementary school before beginning her spiritual quest. 
                She spent many years in Singapore attending college after growing up in Myanmar (Burma). 
                During the global pandemic of 2020, she began her search for meaning and a higher purpose in 
                life after earning two diplomas, a degree, and a master's in education.
            </div>
            <div className="w-fit h-fit font-[500] mx-auto md:pt-72 md:pb-96 xll:pl-40 lg:pl-60 md:pl-28">
                <span className="xl:text-3xl text-2xl py-2">Thazin Soe </span> <br />
                <span className="xl:text-2xl font-[400] text-xl pl-1 py-2">The Founder</span>
            </div>
        </div>
    )
}