import { bg5Class } from "../utilities";

export default function Communities(){
    return(
        <div className={`text-white text-center h-fit w-full lg:pt-20 lg:pb-28 md:py-12 py-5 ${bg5Class}`}>
            <div className="w-5/6 font-semibold mx-auto lg:text-2xl md:text-xl text-lg leading-10 py-12 text-center">
                Her primary mission is to serve as a source of enlightenment and support for individuals and 
                communities seeking answers and guidance on a regular basic, hence, the Elite Club
            </div>
            <a href="" className="block w-fit mx-auto no-underline text-lg font-semibold bg-secondary text-black hover:bg-primary hover:text-white py-5 px-12 my-5 rounded-full duration-500">Be an Elite?</a>
        </div>
    )
}