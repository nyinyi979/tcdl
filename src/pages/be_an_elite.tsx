import TheElite from "../components/elite_components/elite";
import Elite_Club from "../components/elite_components/elite_club";
import EliteClubItems from "../components/elite_components/elite_clubs_items";
import Footer from "../components/footer";
import React from 'react';
import Navbar from "../components/navbar";
export default function BeAnElite(){
    React.useEffect(()=>{  
        document.getElementById('bg_elite')!.style.opacity = '1'
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