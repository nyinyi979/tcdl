import Footer from "./footer"
import Journey from "./home_components/about_the_journey"
import Carosusel from "./home_components/carousel"
import Communities from "./home_components/communities"
import Feedback from "./home_components/feedback"
import Insight from "./home_components/insights"
import Private from "./home_components/private_group"
import Navbar from "./navbar"

export default function Home(){
    return(
        <div>
            <Navbar currentLink="/"/>
            <Journey />
            <Private />
            <Insight />
            <Feedback />
            <Carosusel />
            <Communities />
            <Footer />
        </div>
    )
} 