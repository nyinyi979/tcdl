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
        document.getElementById('q_n_a')!.style.opacity = '1'
        
        // faq has navigation bar animation
        anime({
            targets: '.link',
            opacity: [0 , 1],
            translateY: [-40 , 0],
            delay: 600,
            duration: 2000,
        })
        anime({
            targets: '#img',
            opacity: [0 , 1],
            translateX: [-40 , 0],
            delay: 600,
            duration: 1000,
        })
        anime({
            targets: '#btns',
            opacity: [0 , 1],
            translateX: [40 , 0],
            delay: 600,
            duration:2000,
        })
    }, [])
    return(
        <>
            <Navbar currentLink="/faq"/>
            <div className={`${bannerh1Class} mt-16 lg:mt-0 mr-3 text-primary text-center pt-[2.3rem]`}>Q & A</div>
            <div className={`${bannerh2Class} xl:pb-[66px] lg:pt-6 pt-1 pb-12 text-secondary text-center`}>Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}