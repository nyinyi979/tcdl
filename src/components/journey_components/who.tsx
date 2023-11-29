import { bg4Class, h1Class, h2Class } from "../utilities";

export default function Who(){
    return(
        <div className={`w-full ${bg4Class} text-white text-center py-20`}>
            <h1 className={`${h1Class} xl:pt-8 lg:pt-6 md:py-4 pb-3`}>
                Who she is?
            </h1>
            <h1 className={h2Class}>
                Founder's Bio
            </h1>
            <div className="xl:w-[75%] w-[95%] text-justify md:text-xl md:leading-[2.8rem] text-[20px] mx-auto leading-10 py-5">
                Thazin Soe, creator of the spiritual products of Genie in a bottle and tarot 
                reader for The Cards Don't Lie, began her career in the field in 2020. She taught 
                for over a decade in a Singaporean elementary school before beginning her spiritual quest. 
                She spent many years in Singapore attending college after growing up in Myanmar (Burma). 
                During the global pandemic of 2020, she began her search for meaning and a higher purpose in 
                life after earning two diplomas, a degree, and a master's in education.
            </div>
            <div className="w-fit h-fit font-[500] mx-auto lg:pt-72 lg:pb-96 lg:pl-28 pt-96">
                <span className="text-3xl">Thazin Soe </span> <br />
                <span className="text-2xl pl-1">The Founder</span>
            </div>
        </div>
    )
}