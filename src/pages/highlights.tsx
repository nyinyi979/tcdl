import Footer from "../components/footer";
import HighlightItems from "../components/highlights_components/highlight_items";
import Communities from "../components/communities";
import React from 'react';
import Navbar from "../components/navbar";
import H_Carousel_Img from "../components/highlights_components/highlight_carousel";
import H_Carosusel_Video from "../components/highlights_components/highlight_video_carousel";
export default function Highlights(){
    React.useEffect(()=>{   
        document.title = 'Highlights';
        document.getElementById('highlight_pic')!.style.opacity = '1'
    }, [])
    return(
        <>
            <Navbar currentLink="/highlights"/>
            <H_Carousel_Img />
            <HighlightItems />
            <H_Carosusel_Video />
            <Communities />
            <Footer />
        </>
    )
}