import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import React from 'react';
import anime, { AnimeInstance, } from 'animejs';
import { ImCross } from "react-icons/im";
let Drawer:AnimeInstance;
export default function Navbar(props:{currentLink:string}){
    const linkClass = 'pt-12 -mt-3 xl:mr-8 lg:mr-[1.2rem] mr-2 lg:text-lg text-base font-semibold underline_effect';
    const btnClass = "py-2 px-3 mt-6 lg:text-lg text-base text-white bg-primary rounded-full w-fit h-fit hover:bg-white hover:text-primary duration-500"
    const notRoundedbtnClass = "inline-block py-2 px-3 mr-2 font-semibold text-sm text-white bg-primary rounded-lg w-fit h-fit hover:bg-white hover:text-primary duration-500";
    const drawerBTN = 'inline-block text-left w-full py-1 px-4 text-lg h-fit'
    const [ drawer , setDrawer ] = React.useState(false);
    React.useEffect(()=>{
        anime({
            targets: '#navbar',
            opacity: [0 , 1],
            translateY: [-50 , 0],
            easing: 'linear',
            duration: 600
        })
    }, [])
    React.useEffect(()=>{
        Drawer = anime({
            targets: '#drawers',
            right: [-300 , 0],
            opacity: [0 , 1],
            easing: 'linear',
            duration: 500,
            autoplay: false,
        })
        if(drawer){
            Drawer.restart();
        }
        else{
            anime({
                targets: '#drawers',
                right: [0 , -300],
                opacity: [1 , 0],
                easing: 'linear',
                duration: 500,
            })
        }
    },[drawer])
    return(
        <>
        <div id='navbar' className="lg:relative sticky z-10 top-0 right-0 px-2 w-full float_clear lg:py-[4rem] lg:bg-transparent bg-black/70 opacity-0">
            <img src="/The Card Don't Lie - TDCL - Tarot - Rune Logo- 01.png" alt="Logo" className='lg:w-[10rem] lg:h-28 lg:ml-[4%] w-[5.5rem] h-16 bg-cover float-left ml-[1%]'/>
            <div className='float-right lg:flex lg:gap-4 gap-5 lg:mr-4 mr-0 hidden'>
                <Link to="/" className={`${linkClass} ${props.currentLink === '/'? 'text-primary underline_active' : 'text-secondary '}`}>Home</Link>
                <Link to="/journey" className={`${linkClass} ${props.currentLink === '/Journey'? 'text-primary underline_active' : 'text-secondary'}`}>The Journey</Link>
                <Link to="/be-an-elite" className={`${linkClass} ${props.currentLink === '/Elite'? 'text-primary underline_active' : 'text-secondary'}`}>Be an elite?</Link>
                <Link to="/highlights" className={`${linkClass} ${props.currentLink === '/HighLight'? 'text-primary underline_active' : 'text-secondary'}`}>The Highlights</Link>
                <Link to="/faq" className={`${linkClass} ${props.currentLink === '/QA'? 'text-primary underline_active' : 'text-secondary'}`}>Q & A</Link>
                <Link to="/" className={btnClass}>Join Elite?</Link>
                <Link to="/" className={btnClass}>Elite Login?</Link>
            </div>
            <div className='float-right lg:hidden block '>
                <Link to="/" className={notRoundedbtnClass}>Join Elite?</Link>
                <Link to="/" className={notRoundedbtnClass}>Elite Login?</Link>
                <div className="inline-block w-12 h-[2rem] pt-4 text-white cursor-pointer hover:text-primary" onClick={()=>{setDrawer(!drawer)}}><IoMdMenu className="text-2xl"/></div>
            </div>
        </div>
        
            <div id='drawers' className='fixed right-0 top-0 opacity-0 bg-violet w-64 h-full z-10'>
                <div className='text-white text-xl p-3 hover:text-primary cursor-pointer' onClick={()=>{setDrawer(!drawer)}}><ImCross /></div>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/'? 'fill_effect_active' : 'fill_effect'} `}>Home</Link>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/journey'? 'fill_effect_active' : 'fill_effect'} `}>The Journey</Link>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/be-an-elite'? 'fill_effect_active' : 'fill_effect'} `}>Be an Elite</Link>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/highlights'? 'fill_effect_active' : 'fill_effect'} `}>The Highlights</Link>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/faq'? 'fill_effect_active' : 'fill_effect'} `}>Q & A</Link>
            </div>
        </>
    )
}