import Footer from "../components/footer"
import Journey from "../components/home_components/about_the_journey"
import Carosusel from "../components/home_components/carousel"
import Communities from "../components/home_components/communities"
import Feedback from "../components/home_components/feedback"
import Insight from "../components/home_components/insights"
import Private from "../components/home_components/private_group"
import anime from "animejs"
import React from 'react';
import Navbar from "../components/navbar"
export default function Home(){
    React.useEffect(()=>{
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
            <Navbar currentLink='/'/>
            <Journey />
            <Private />
            <Insight />
            <Feedback />
            <Carosusel />
            <Communities />
            <Footer />
        </>
    )
} 