import { useParams } from "react-router-dom";
import HighLightItem from "../components/highlights_items_components/items";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Communities from "../components/communities";
import anime from "animejs";
export default function Highlight(){
    React.useEffect(()=>{
        document.title = 'Highlight';
        document.getElementById('highlight_item')!.style.opacity = '1'

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
    const {id} = useParams();
    console.log(id);
    return(
        <>
            <Navbar currentLink="/highlights"/>
            <HighLightItem id={id!}/>
            <Communities />
            <Footer />
        </>
    )
}