import FAQS from "../components/faq_components/FAQS";
import Footer from "../components/footer";
import Communities from "../components/communities";
import Navbar from "../components/navbar";
import React from 'react';
import { bannerh1Class, bannerh2Class } from "../components/utilities";
import anime from "animejs";
export default function FAQ(){
    React.useEffect(()=>{
        document.title = 'FAQ';
        document.getElementById('highlight_item')!.style.opacity = '1'
        
        // faq has navigation bar animation
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
    }, [])
    return(
        <>
            <Navbar currentLink="/faq"/>
            <div className={`${bannerh1Class} mt-10 lg:mt-0 text-primary text-center pt-[4.5rem]`}>Q & A</div>
            <div className={`${bannerh2Class} xl:py-8 py-4 pb-12 text-secondary text-center`}>Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}