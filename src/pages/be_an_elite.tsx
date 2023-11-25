import TheElite from "../components/elite_components/elite";
import Elite_Club from "../components/elite_components/elite_club";
import EliteClubItems from "../components/elite_components/elite_clubs_items";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import React from 'react';
export default function BeAnElite(){
    React.useEffect(()=>{
        document.body.style.backgroundImage = `url('/bg5.png')`;
        document.body.style.backgroundPosition = `-300px center`;
    }, [])
    return(
        <>
            <Navbar currentLink="/be-an-elite"/>
            <TheElite />
            <Elite_Club />
            <EliteClubItems />
            <Footer />
        </>
    )
}