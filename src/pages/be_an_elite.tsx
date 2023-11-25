import TheElite from "../components/elite_components/elite";
import Elite_Club from "../components/elite_components/elite_club";
import EliteClubItems from "../components/elite_components/elite_clubs_items";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function BeAnElite(){
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