import TheElite from "../components/elite_components/elite";
import Elite_Club from "../components/elite_components/elite_club";
import EliteClubItems from "../components/elite_components/elite_clubs_items";
import Footer from "../components/footer";
import React from 'react';
import Navbar from "../components/navbar";
export default function BeAnElite(){
    React.useEffect(()=>{   
        document.getElementById('bg')!.style.backgroundImage = `url('/bg5.png')`;
        document.getElementById('bg')!.style.opacity = '1'
        document.getElementById('bg')!.style.height = '170vh'
        document.getElementById('bg')!.style.backgroundPositionY = '10px'
        document.getElementById('bg')!.style.transform = 'scale(1.02)'
        if(window.innerWidth < 1099) {
            document.getElementById('bg')!.style.height = '250vh'
            document.getElementById('bg')!.style.backgroundPositionY = '-10px'
            document.getElementById('bg')!.style.transform = 'scale(1)'
        }
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