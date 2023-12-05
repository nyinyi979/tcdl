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
            <div className={`${bannerh1Class} arial font-[300] mt-16 lg:mt-0 mr-3 text-primary text-center pt-[2.5rem]`} style={{fontWeight: '300'}}>Q & A</div>
            <div className={`${bannerh2Class} arial xl:pb-20 lg:pt-6 pt-1 pb-12 text-secondary text-center`}>Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}