import Footer from "../components/footer";
import Communities from "../components/home_components/communities";
import Private from "../components/home_components/private_group";
import Beginning from "../components/journey_components/beginning";
import J_Carosusel from "../components/journey_components/j_carousel";
import TheJourney from "../components/journey_components/the_journey";
import Who from "../components/journey_components/who";

export default function Journey(){
    return(
        <>
                <TheJourney />
                <Beginning />
                <Who />
                <Private />
                <J_Carosusel text/>
                <Communities />
            <Footer />
        </>
    )
}