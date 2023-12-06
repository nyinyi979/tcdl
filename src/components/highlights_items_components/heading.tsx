import { Link } from "react-router-dom";
import { bannerh1Class } from "../utilities";
export function HighLightItemHeading({title}:{title:string}){
    const gtClass = 'px-2 lg:px-4 text-[#584f74]'
    return(
        <div className="lg:mt-6 mt-16">
            <h1 className={`${bannerh1Class} text-center text-primary lg:pt-5 pt-10 lg:pb-6 pb-4`}>
               The Highlights 
            </h1>
            <h2 className={`font-[400] text-center lg:text-[1.34rem] md:leading-8 
            xxs:text-[1.1rem] text-base text-primary pb-8 lg:pb-12`}>
                <Link className="hover:text-dark_violet duration-500" to="/">Home</Link>
                <span className={gtClass}>&gt;</span>
                <Link className="hover:text-dark_violet duration-500" to="/highlights">Tarot </Link>
                <span className={gtClass}>&gt;</span>
                <span className={'px-2 text-[#584f74]'}> {title}</span>
            </h2>
        </div>
    
    )
}