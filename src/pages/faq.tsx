import FAQS from "../components/faq_components/FAQS";
import Footer from "../components/footer";
import Communities from "../components/home_components/communities";
import Navbar from "../components/navbar";
import React from 'react';
export default function FAQ(){
    React.useEffect(()=>{
        document.body.style.backgroundImage = `url('/bg7.png')`;
        document.body.style.backgroundPositionY = `-200px`;
    })
    return(
        <>
            <Navbar currentLink="/faq"/>
            <div className="text-4xl tracking-tight text-center text-primary font-bold">Q & A</div>
            <div className="text-3xl tracking-tight py-10 text-center text-secondary font-bold">Membership Privileges</div>
            <FAQS />
            <Communities />
            <Footer />
        </>
    )
}