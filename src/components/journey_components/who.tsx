import { bg4Class } from "../utilities";

export default function Who(){
    return(
        <div className={`w-full ${bg4Class} text-white py-20`}>
            <h1 className="md:text-4xl text-3xl py-3 font-semibold text-center">
                Who she is?
            </h1>
            <h1 className="md:text-3xl text-2xl py-3 font-semibold text-center">
                Founder's Bio
            </h1>
            <div className="text-justify text-lg mx-auto lg:w-5/6 w-11/12 leading-10 py-5">
                Thazin Soe, creator of the spiritual products of Genie in a bottle and tarot 
                reader for The Cards Don't Lie, began her career in the field in 2020. She taught 
                for over a decade in a Singaporean elementary school before beginning her spiritual quest. 
                She spent many years in Singapore attending college after growing up in Myanmar (Burma). 
                During the global pandemic of 2020, she began her search for meaning and a higher purpose in 
                life after earning two diplomas, a degree, and a master's in education.
            </div>
            <div className="w-fit h-fit mx-auto pt-72 pb-96 pl-40">
                <span className="text-3xl">Thazin Soe </span> <br />
                <span className="text-2xl pl-1">The Founder</span>
            </div>
        </div>
    )
}