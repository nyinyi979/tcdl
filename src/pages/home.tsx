import Footer from "../components/footer"
import Journey from "../components/home_components/about_the_journey"
import Carosusel from "../components/home_components/carousel"
import Communities from "../components/communities"
import Feedback from "../components/home_components/feedback"
import Insight from "../components/home_components/insights"
import Private from "../components/home_components/private_group"
import anime from "animejs"
import React from 'react';
import Navbar from "../components/navbar"
export default function Home(){
    React.useEffect(()=>{
        document.title = 'Home';
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