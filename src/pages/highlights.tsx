import Footer from "../components/footer";
import H_Carosusel from "../components/highlights_components/highlight_carousel";
import HighlightItems from "../components/highlights_components/highlight_items";
import Communities from "../components/home_components/communities";
import J_Carosusel from "../components/journey_components/j_carousel";
import React from 'react';
import Navbar from "../components/navbar";
export default function Highlights(){
    React.useEffect(()=>{   
        document.getElementById('bg')!.style.backgroundImage = `url('/bg7.png')`;
        document.getElementById('bg')!.style.opacity = '1'
        document.getElementById('bg')!.style.height = '180vh'
    }, [])
    return(
        <>
            <Navbar currentLink="/highlights"/>
            <H_Carosusel />
            <HighlightItems />
            <J_Carosusel text={false}/>
            <Communities />
            <Footer />
        </>
    )
}