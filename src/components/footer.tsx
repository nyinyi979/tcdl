//icons are used instead of images, which can improve quality of icons
import { FaFacebookF, FaPlay, FaTiktok, } from "react-icons/fa6";
import { FaTelegramPlane } from 'react-icons/fa';
export default function Footer(){
    const linkClass = 'text-light_blue font-[500] hover:text-primary duration-500 xll:text-[20px] md:text-lg ssm:text-base text-sm';
    const iconClass ="text-dark_violet hover:rotate-[20deg] hover:text-black rounded-full lg:w-12 lg:h-12 w-10 h-10 xs:p-3 p-2 bg-blue cursor-pointer hover:bg-primary duration-300";
    return(
        <div className="bg-dark_violet xs:py-12 py-7">
            <div className="flex lg:w-[60%] w-[76%] mx-auto items-center justify-center my-4 flex-wrap gap-6">
                <a href="/" className={linkClass}>Home</a>
                <a href="/journey" className={linkClass}>The Journey</a>
                <a href="/be-an-elite" className={linkClass}>Be an Elite?</a>
                <a href="/highlights" className={linkClass}>The Highlights</a>
                <a href="/faq" className={linkClass}>Q & A</a>
                <a href="/faq" className={linkClass}>Contact Us</a>
                <a href="/faq" className={linkClass}>Terms & Conditions</a>
                <a href="/faq" className={linkClass}>Privacy Policy</a>
            </div>
            <div className="flex xl:w-[20%] lg:w-[28%] md:w-[30%] xs:w-[50%] w-[58%] mx-auto my-10" style={{justifyContent:'space-between'}}>
                <FaFacebookF className={iconClass}/>
                <FaPlay className={iconClass} />
                <FaTelegramPlane className={iconClass} />
                <FaTiktok className={iconClass} />
            </div>
            <a href="/"><img src="/footer-logo-e48cc106.png" alt="" className="lg:w-64 w-36 h-fit bg-cover md:mt-12 mt-4 mx-auto"/></a>
            <div className="text-light_blue text-center pt-10 xs:pb-8 pb-3 sm:px-0 px-2 leading-10">
                Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.
            </div>
        </div>
    )
}    