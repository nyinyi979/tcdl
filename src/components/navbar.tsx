import {Link} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import React from 'react';
import anime, { AnimeInstance, } from 'animejs';
import { ImCross } from "react-icons/im";
import SignUp from './pop_up_components/signup';
import { loginPopUpBox, signUpPopUpBox } from './popUpAnimation';
import Login from './pop_up_components/login';
import Forgotten from './pop_up_components/forgotten';
export default function Navbar(props:{currentLink:string}){
    const liClass = 'float-left xll:px-[1.2rem] lg:px-4 list-none'
    const linkClass = 'block underline_effect xxl:text-[1.3rem] xll:ml-0 llg:text-[1.2rem] xl:ml-2 font-[500] lg:text-base text-base underline_effect';
    const btnClass = 'cursor-pointer float-left font-[500] block xll:w-36 xll:h-[3.1rem] xl:w-32 xl:h-11 lg:w-28 lg:h-10 w-[5.5rem] h-8 xl:pt-3 pt-2 px-2 xll:text-[1.2rem] lg:text-base text-[0.8rem] lg:rounded-full rounded-[.7rem] leading-4 lg:ml-5 ml-2 text-center text-white bg-primary hover:bg-white hover:text-primary text-xs duration-500';
    const drawerBTN = 'inline-block text-left -mt-[5px] w-full py-[6px] font-[500] px-4 text-lg h-fit text-lg'

    const Drawer = React.useRef<AnimeInstance>();
    const DrawerOutro = React.useRef<AnimeInstance>();
    const bgSignUpAnimation = React.useRef<AnimeInstance>();
    const signUpBoxAnimation = React.useRef<AnimeInstance>();
    const bgLoginAnimation = React.useRef<AnimeInstance>();
    const loginBoxAnimation = React.useRef<AnimeInstance>();
    React.useEffect(()=>{
        anime({
            targets: '#loading',
            opacity: [1 , .3],
            easing: 'linear',
            duration: 1000,
            complete: ()=>{
                document.getElementById('loading')!.style.display = 'none';
                document.body.style.display = 'none'
                document.body.style.display = 'block'
            }
        })
        Drawer.current = anime({
            targets: '#drawers',
            right: [-300 , 0],
            easing: 'linear',
            duration: 500,
            begin: ()=>{
                document.getElementById('drawers')!.style.display = 'block'
            },
            autoplay: false,
        })
        DrawerOutro.current = anime({
            targets: '#drawers',
            right: [0 , -300],
            easing: 'linear',
            duration: 500, 
            complete: ()=>{
                document.getElementById('drawers')!.style.display = 'none'
            },
            autoplay: false,
        })
        const signUpAnimation = signUpPopUpBox();
        bgSignUpAnimation.current =  signUpAnimation.bgOpen;
        signUpBoxAnimation.current = signUpAnimation.boxOpen;

        const loginAnimation = loginPopUpBox();
        bgLoginAnimation.current = loginAnimation.bgOpen;
        loginBoxAnimation.current = loginAnimation.boxOpen;
    },[])
    const openSignUpPopUp = () =>{
        bgSignUpAnimation.current!.restart(); 
        signUpBoxAnimation.current!.restart();
    }
    const openLoginPopUp = () =>{
        bgLoginAnimation.current!.restart(); 
        loginBoxAnimation.current!.restart();
    }
    return(
        <>
            {/* Pop up are added in the navigataion bar because navigation bar is present in all pages */}
            <SignUp /> <Login /><Forgotten />
            {/* Be an elite background picture */}
            <div id='bg_elite' className={`absolute opacity-0 top-0 left-0 w-full xll:h-[1300px] xl:h-[1200px] 
            lg:h-[1280px] md:h-[1350px] ssm:h-[1500px] xs:h-[1880px] h-[2000px] xl:bg-center lg:bg-[top_-5px_left_-200px] 
            md:bg-[top_5px_left_-370px] ssm:bg-[top_5px_left_-500px]
            xs:bg-[top_-0px_left_-840px] bg-[top_-0px_left_-940px] lg:[background-position: top center] 
            scale-100 [background-image:url(/bg5.png)]  
            bg-cover -z-10 bg-repeat-y bg-scroll`}></div>

            {/* Highlight item picture */}
            <div id='highlight_item' className={`absolute opacity-0 top-0 left-0 w-full xxl:h-[1800px] xll:h-[1300px] 
            xl:h-[1000px] lg:h-[1000px] md:h-[900px] h-[900px] [background-image:url(/bg7.png)] xl:bg-[left_-50px_top_-600px]
            lg:bg-[left_-50px_top_-530px] bg-[left_-200px_top_-500px] bg-cover -z-10 bg-no-repeat bg-scroll`}></div>

            {/* q and a background */}
            <div id='q_n_a' className={`absolute opacity-0 top-0 left-0 w-full xll:h-[1100px]
            xl:h-[1200px] lg:h-[1100px] md:h-[900px] xs:h-[700px] h-[500px] [background-image:url(/bg7.png)] 
            xll:bg-[left_-0px_top_-450px] xl:bg-[left_-120px_top_-550px] lg:bg-[left_-120px_top_-500px]
            md:bg-[left_-130px_top_-430px] xs:bg-[left_-130px_top_-300px] bg-[left_-130px_top_-100px] bg-cover -z-10 bg-no-repeat bg-scroll`}></div>

            {/* Highlight background picture */}
            <div id='highlight_pic' className={`absolute opacity-0 top-0 left-0 w-full xll:h-[1300px] 
            xl:h-[1300px] lg:h-[1600px] md:h-[1400px] xs:h-[1200px] h-[1000px] [background-image:url(/bg7.png)] xxl:bg-center xl:bg-[left_-100px_top_0px]
            lg:bg-[left_-400px_top_-380px] md:bg-[left_-340px_top_-100px] bg-[left_-410px_top_0px] bg-cover -z-10 bg-no-repeat bg-scroll`}></div>

            {/* journey background picture */}
            <div id='bg_j' className='absolute opacity-0 top-0 left-0 w-full xll:h-[900px] xl:h-[950px] xs:h-[750px] h-[950px]
            [background-image:url(/home-banner-img.jpg)] bg-cover -z-10 bg-[top_center]
            bg-repeat-y bg-scroll'></div>

            {/* account page background */}
            <div id='bg_acc'  className={`absolute opacity-0 top-0 bg-center left-0 w-full xll:h-[1500px] 
            xl:h-[1400px] lg:h-[1600px] md:h-[2100px] h-[1970px] [background-image:url(/bg7.png)] 
            bg-cover -z-10 bg-repeat-y bg-scroll`}></div>

            {/* loading screen */}
            <div id='loading' className='fixed flex justify-center items-center overflow-hidden overscroll-contain top-0 left-0 w-full h-full bg-white' style={{zIndex: '9999'}}>
                <img src="/site-logo.png" alt="" className='w-fit h-fit scale-[.6] mx-auto cursor-pointer'/>
            </div>

            {/* navigation bar starts from here */}
            <div id='navbar' className="z-50 lg:relative xl:pt-[46px] lg:h-fit lg:py-10 py-5 lg:bg-transparent fixed top-0 right-0 xs:h-16 h-[4.3rem] px-2 w-full clear-both table bg-black/80">

                <div className={`xxl:w-[12.3rem] xll:top-[3.7rem] xll:left-10 xll:w-[11rem] xl:w-[8.6rem] xl:top-8 
                lg:top-8 lg:left-6 lg:w-[7.5rem] left-3 top-1 xs:w-[5.5rem] w-[4.5rem] h-full 
                bg-cover float-left absolute`}>
                    <a href="/"><img id='img' src="/The Card Don't Lie - TDCL - Tarot - Rune Logo- 01.png" alt="Logo"/></a>
                </div>

                {/* links */}
                <div id='links' className='mt-0 float-right xll:pr-12 xl:pr-5 lg:pr-2 pr-0'>
                    <div className='lg:block mr-0 hidden float-left xll:pt-16 xll:pr-8 lg:pt-6'>
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

                    {/* btns only displayed in small screen */}
                    <div id='btns' className='float-right xll:pt-12 lg:pt-2 lg:mt-2'>
                        <span className={btnClass} onClick={openSignUpPopUp}>Join Elite?</span>
                        <span className={btnClass} onClick={openLoginPopUp}>Elite Login?</span>
                        <div className="lg:hidden block float-left ml-3 w-fit h-[2rem] text-white cursor-pointer hover:text-primary" onClick={()=>{Drawer.current!.restart()}}><IoMdMenu className="text-3xl"/></div>
                    </div>
                </div>

            </div>
            {/* drawer component */}
            <div id='drawers' className='lg:hidden fixed right-[-400px] hidden top-0 bg-[#37213c] w-64 h-full z-[60]'>
                <div className='inline-block w-fit h-fit text-white text-xl p-3 hover:text-primary cursor-pointer' onClick={()=>{DrawerOutro.current!.restart()}}><ImCross /></div>
                <Link to={'/'} className={`${drawerBTN} ${props.currentLink === '/'? 'fill_effect_active' : 'fill_effect'} `}>Home</Link>
                <Link to={'/journey'} className={`${drawerBTN} ${props.currentLink === '/journey'? 'fill_effect_active' : 'fill_effect'} `}>The Journey</Link>
                <Link to={'/be-an-elite'} className={`${drawerBTN} ${props.currentLink === '/be-an-elite'? 'fill_effect_active' : 'fill_effect'} `}>Be an Elite</Link>
                <Link to={'/highlights'} className={`${drawerBTN} ${props.currentLink === '/highlights'? 'fill_effect_active' : 'fill_effect'} `}>The Highlights</Link>
                <Link to={'/faq'} className={`${drawerBTN} ${props.currentLink === '/faq'? 'fill_effect_active' : 'fill_effect'} `}>Q & A</Link>
                <Link to={'/account'} className={`${drawerBTN} ${props.currentLink === '/account'? 'fill_effect_active' : 'fill_effect'} `}>Account</Link>
            </div>
        </>
    )
}
