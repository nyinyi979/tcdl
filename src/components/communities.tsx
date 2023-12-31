import { ReBeEliteBtn, bg5Class } from "./utilities";

export default function Communities(){
    return(
        <div className={`text-white text-center h-fit w-full lg:pt-20 lg:pb-28 py-12 ${bg5Class}`}>
            <div className={`xxl:w-2/3 xll:w-[74%] xl:w-5/6 llg:w-[91%] md:w-[85%] xs:w-[82%] w-[90%] lg:py-8 pt-2 pb-8
            mx-auto font-[600] xxl:leading-[3.4rem] 
            xxl:text-3xl lg:text-2xl lg:leading-[3rem] md:leading-[2.4rem] xs:leading-10 xs:text-xl text-lg leading-10`}>
                Her primary mission is to serve as a source of enlightenment and support for individuals and 
                communities seeking answers and guidance on a regular basic, hence, the Elite Club
            </div>
            <a href="" className={ReBeEliteBtn}>Be an Elite?</a>
        </div>
    )
}