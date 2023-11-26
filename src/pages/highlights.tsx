import Footer from "../components/footer";
import H_Carosusel from "../components/highlights_components/highlight_carousel";
import HighlightItems from "../components/highlights_components/highlight_items";
import Communities from "../components/home_components/communities";
import J_Carosusel from "../components/journey_components/j_carousel";
import Navbar from "../components/navbar";
import React from 'react';
export default function Highlights(){
    React.useEffect(()=>{   
        document.body.style.backgroundImage = `url('bg7.png')`;
        document.body.style.backgroundPositionY = `10px`;
        document.body.style.backgroundSize = `cover`;

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