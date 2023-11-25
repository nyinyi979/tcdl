import { FaFacebookF, FaPlay, } from "react-icons/fa6";
import {FaTelegramPlane} from 'react-icons/fa';
import { MdOutlineMusicNote } from "react-icons/md";
export default function Footer(){
    const linkClass = 'text-light_blue hover:text-primary duration-500 lg:text-xl md:text-lg text-base';
    const iconClass ="text-dark_violet hover:rotate-[20deg] rounded-full w-12 h-12 p-3 bg-blue cursor-pointer hover:bg-primary duration-500";
    return(
        <div className="bg-dark_violet py-20">
            <div className="flex lg:w-[48%] md:w-[70%] w-[98%] mx-auto my-4" style={{justifyContent:'space-between'}}>
                <a href="/" className={linkClass}>Home</a>
                <a href="/journey" className={linkClass}>The Journey</a>
                <a href="/be-an-elite" className={linkClass}>Be an Elite?</a>
                <a href="/highlights" className={linkClass}>The Highlights</a>
                <a href="/faq" className={linkClass}>Q & A</a>
            </div>
            <div className="flex lg:w-[38%] md:w-[66%] w-[90%] mx-auto my-4" style={{justifyContent:'space-between'}}>
                <a href="/faq" className={linkClass}>Contact Us</a>
                <a href="/faq" className={linkClass}>Terms & Conditions</a>
                <a href="/faq" className={linkClass}>Privacy Policy</a>
            </div>
            <div className="flex lg:w-[20%] md:w-[40%] w-[50%] mx-auto my-8" style={{justifyContent:'space-between'}}>
                <FaFacebookF className={iconClass}/>
                <FaPlay className={iconClass} />
                <FaTelegramPlane className={iconClass} />
                <MdOutlineMusicNote className={iconClass} />
            </div>
            <img src="/footer-logo-e48cc106.png" alt="" className="w-72 h-fit bg-cover mt-4 mx-auto"/>
            <div className="text-light_blue text-center pt-10">
                Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.
            </div>
        </div>
    )
}