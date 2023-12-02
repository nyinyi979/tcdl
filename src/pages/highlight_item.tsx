import { useParams } from "react-router-dom";
import HighLightItem from "../components/highlights_items_components/items";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Communities from "../components/communities";
export default function Highlight(){
    React.useEffect(()=>{
        document.title = 'Highlight';
        document.getElementById('highlight_item')!.style.opacity = '1'

    }, [])
    const {id} = useParams();
    console.log(id);
    return(
        <>
            <Navbar currentLink="/highlights"/>
            <HighLightItem id={id!}/>
            <Communities />
            <Footer />
        </>
    )
}