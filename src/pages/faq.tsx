import FAQS from "../components/faq_components/FAQS";
import Footer from "../components/footer";
import Communities from "../components/home_components/communities";
import Navbar from "../components/navbar";
import React from 'react';
import { h1Class, h2Class } from "../components/utilities";
import anime from "animejs";
export default function FAQ(){
    React.useEffect(()=>{
        document.getElementById('bg')!.style.backgroundImage = `url('/bg6.png')`;
        document.getElementById('bg')!.style.opacity = '1'
        document.getElementById('bg')!.style.top = '-20%'
        document.getElementById('bg')!.style.height = '100%'
        anime({
            targets: '#links',
            opacity: [0 , 1],
            translateY: [-20 , 0 , -1 , 0],
            delay: 600,
            easing:'linear',
            duration: 1000,
        })
        anime({
            targets: '#img',
            opacity: [0 , 1],
            translateX: [-20 , 0 , -1, 0],
            delay: 600,
            easing:'linear',
            duration: 1000,
        })
        anime({
            targets: '#btns',
            opacity: [0 , 1],
            translateX: [20, 0 , 1, 0],
            delay: 600,
            easing:'linear',
            duration: 1000,
        })
    })
    return(
        <>
            <Navbar currentLink="/faq"/>
            <div className={`${h1Class} mt-10 lg:mt-0 py-2 text-primary text-center`}>Q & A</div>
            <div className={`${h2Class} md:py-8 py-4 pb-10 text-secondary text-center`}>Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}