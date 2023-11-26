import { ReBeEliteBtn, bg5Class } from "../utilities";

export default function Communities(){
    return(
        <div className={`text-white text-center h-fit w-full lg:pt-20 lg:pb-28 md:py-12 py-5 ${bg5Class}`}>
            <div className="xl:w-5/6 md:w-[90%] w-[85%] py-8 mx-auto font-[600] xxl:leading-[3.4rem] xxl:text-[2.3rem] xll:text-2xl xll:leading-[3rem] text-xl leading-10">
                Her primary mission is to serve as a source of enlightenment and support for individuals and 
                communities seeking answers and guidance on a regular basic, hence, the Elite Club
            </div>
            <a href="" className={ReBeEliteBtn}>Be an Elite?</a>
        </div>
    )
}