import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import React from 'react';
import anime, { AnimeInstance, } from 'animejs';
import { ImCross } from "react-icons/im";
let Drawer:AnimeInstance;
let DrawerOutro:AnimeInstance;
export default function Navbar(props:{currentLink:string}){
    const liClass = 'float-left xll:px-[1.2rem] lg:px-4 list-none'
    const linkClass = 'block underline_effect xxl:text-[1.7rem] xll:text-xl xl:text-[1.1rem] font-[500] lg:text-lg underline_effect';
    const btnClass = 'float-left font-[500] block xll:w-36 xll:h-12 xl:w-32 xl:h-11 lg:w-28 lg:h-10 w-[5.5rem] h-8 xl:pt-3 pt-2 px-2 xll:text-xl lg:text-base text-[0.8rem] lg:rounded-full rounded-[.7rem] leading-4 lg:ml-5 ml-2 text-center text-white bg-primary hover:bg-white hover:text-primary duration-500';
    const drawerBTN = 'inline-block text-left w-full py-1 px-4 text-lg h-fit'
    const [ drawer , setDrawer ] = React.useState(false);
    const firstTime = React.useRef(0);
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
        if(firstTime.current! < 2) {
            firstTime.current += 1;
            return;
        }
        Drawer = anime({
            targets: '#drawers',
            right: [-300 , 0],
            opacity: [0 , 1],
            easing: 'linear',
            duration: 500,
            autoplay: false,
        })
        DrawerOutro = anime({
            targets: '#drawers',
            right: [0 , -300],
            opacity: [1 , 0],
            easing: 'linear',
            duration: 500, 
            autoplay: false,
        })
        if(drawer){
            Drawer.restart();
        }
        else{
            DrawerOutro.restart()
        }
    },[drawer])
    return(
        <>
        <div id='navbar' className="lg:relative xll:py-16 lg:h-fit lg:py-16 lg:bg-transparent sticky z-10 top-0 right-0 h-16 px-2 w-full float_clear bg-black/80 opacity-0">

            <div className='xxl:w-[12.3rem] xll:top-16 xll:left-10 xll:w-[11rem] lg:top-12 lg:left-6 lg:w-[8.4rem] left-3 top-1 w-[5.5rem] h-full bg-cover float-left absolute'>
                <img src="/The Card Don't Lie - TDCL - Tarot - Rune Logo- 01.png" alt="Logo"/>
            </div>
            
            <div className='float-right xll:pr-8 xl:pr-5 lg:pr-2 pr-0'>
                <div className='lg:block mr-0 hidden float-left xll:pt-10 xll:pr-8 xl:pt-7 lg:pt-6'>
                    <li className={liClass}>
                        <Link to="/" className={`${linkClass} ${props.currentLink === '/'? 'text-primary underline_active' : 'text-secondary '}`}>Home</Link> 
                    </li>
                    <li className={liClass}>
                        <Link to="/journey" className={`${linkClass} ${props.currentLink === '/journey'? 'text-primary underline_active' : 'text-secondary'}`}>The Journey</Link> 
                    </li>
                    <li className={liClass}>
                        <Link to="/be-an-elite" className={`${linkClass} ${props.currentLink === '/be-an-elite'? 'text-primary underline_active' : 'text-secondary'}`}>Be an elite?</Link> 
                    </li>
                    <li className={liClass}>
                        <Link to="/highlights" className={`${linkClass} ${props.currentLink === '/highlights'? 'text-primary underline_active' : 'text-secondary'}`}>The Highlights</Link> 
                    </li>
                    <li className={liClass}>
                        <Link to="/faq" className={`${linkClass} ${props.currentLink === '/faq'? 'text-primary underline_active' : 'text-secondary'}`}>Q & A</Link> 
                    </li>
                </div>
                <div className='float-right xll:pt-5 pt-2 mt-2'>
                    <Link to="/" className={btnClass}>Join Elite?</Link>
                    <Link to="/" className={btnClass}>Elite Login?</Link>
                    <div className="lg:hidden block float-left ml-3 w-fit h-[2rem] text-white cursor-pointer hover:text-primary" onClick={()=>{setDrawer(!drawer)}}><IoMdMenu className="text-3xl"/></div>
                </div>
            </div>

        </div>
        
            <div id='drawers' className='fixed right-[-400px] top-0 opacity-0 bg-violet w-64 h-full z-10'>
                <div className='inline-block w-fit h-fit text-white text-xl p-3 hover:text-primary cursor-pointer' onClick={()=>{setDrawer(!drawer)}}><ImCross /></div>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/'? 'fill_effect_active' : 'fill_effect'} `}>Home</Link>
                <Link to={'/journey'} className={`${drawerBTN} ${props.currentLink === '/journey'? 'fill_effect_active' : 'fill_effect'} `}>The Journey</Link>
                <Link to={'/be-an-elite'} className={`${drawerBTN} ${props.currentLink === '/be-an-elite'? 'fill_effect_active' : 'fill_effect'} `}>Be an Elite</Link>
                <Link to={'/highlights'} className={`${drawerBTN} ${props.currentLink === '/highlights'? 'fill_effect_active' : 'fill_effect'} `}>The Highlights</Link>
                <Link to={'/faq'} className={`${drawerBTN} ${props.currentLink === '/faq'? 'fill_effect_active' : 'fill_effect'} `}>Q & A</Link>
            </div>
        </>
    )
}