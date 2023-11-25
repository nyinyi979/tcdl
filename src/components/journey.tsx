import Footer from "./footer";
import Communities from "./home_components/communities";
import Private from "./home_components/private_group";
import Beginning from "./journey_components/beginning";
import J_Carosusel from "./journey_components/j_carousel";
import TheJourney from "./journey_components/the_journey";
import Who from "./journey_components/who";
import Navbar from "./navbar";

export default function Journey(){
    return(
        <>
            <Navbar currentLink="/journey"/>
                <TheJourney />
                <Beginning />
                <Who />
                <Private />
                <J_Carosusel />
                <Communities />
            <Footer />
        </>
    )
}