import Footer from "../components/footer"
import Journey from "../components/home_components/about_the_journey"
import Carosusel from "../components/home_components/carousel"
import Communities from "../components/home_components/communities"
import Feedback from "../components/home_components/feedback"
import Insight from "../components/home_components/insights"
import Private from "../components/home_components/private_group"

export default function Home(){
    return(
        <div>
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