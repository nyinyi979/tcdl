import { useParams } from "react-router-dom";
import HighLightItem from "../components/highlights_items_components/items";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Communities from "../components/communities";
export default function Highlight(){
    React.useEffect(()=>{
        document.title = 'Highlight';
        document.getElementById('bg_j')!.style.backgroundImage = `url('/bg6.png')`;
        document.getElementById('bg_j')!.style.opacity = '1'
        document.getElementById('bg_j')!.style.height = '800px'
    }, [])
    const {id} = useParams();
    console.log(id);
    return(
        <>
            <Navbar currentLink=""/>
            <HighLightItem id={id!}/>
            <Communities />
            <Footer />
        </>
    )
}