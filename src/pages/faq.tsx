import FAQS from "../components/faq_components/FAQS";
import Footer from "../components/footer";
import Communities from "../components/home_components/communities";
import Navbar from "../components/navbar";
import React from 'react';
import { h1Class, h2Class } from "../components/utilities";
import anime from "animejs";
export default function FAQ(){
    React.useEffect(()=>{
        document.body.style.backgroundImage = `url('/bg6.png')`;
        document.body.style.backgroundPositionY = `-150px`;
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
            <div className={`${h1Class} py-2 text-primary text-center`}>Q & A</div>
            <div className={`${h2Class} py-4 pb-10 text-secondary text-center`}>Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}