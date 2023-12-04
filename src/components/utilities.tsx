import anime, {AnimeInstance} from 'animejs'
import React from 'react';
//These are for animation used in certain page
//AnimeJS is used heavily
export function useAnimateLeft(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [-40 , 0],
            opacity: [0 , 1],
            duration: 700,
            delay: 400,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            if(!played.current) {
                introAnimation.current!.restart();
                played.current = true;
            }
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector, played])
}
export function useAnimateRight(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [40 , 0],
            opacity: [0 , 1],
            duration: 500,
            delay: 600,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            if(!played.current) {
                introAnimation.current!.restart();
                played.current = true;
            }
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector, played])
}
export function useAnimateTop(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateY: [50 , 0],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            if(!played.current) {
                introAnimation.current!.restart();
                played.current = true;
            }
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector])
}
export function useAnimateScale(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            scale: [0 , 1],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            if(!played.current) {
                introAnimation.current!.restart();
                played.current = true;
            }
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector])
}
//Class for quotation
export const quoteClass = `leading-8 xl:py-32 lg:py-24 py-20 relative
    before:[background-image:url('/left_quote.png')] before:absolute before:w-[70px] before:h-[70px] md:before:left-[46%] before:left-[40%] before:top-0 xl:before:w-[100px] xl:before:h-[100px] before:bg-cover
    after:[background-image:url('/right_quote.png')] after:absolute  after:w-[70px] after:h-[70px] md:after:left-[46%] after:left-[40%] after:bottom-0 xl:after:w-[100px] xl:after:h-[100px] after:bg-cover  `

//Class for h1 and h2 used in almost all pages
export const h1Class = `oswald font-[600] xxl:text-[4.6rem] xxl:leading-[4.5rem] 
    xll:text-[2.9rem] xl:text-[2.8rem] lg:text-[2.5rem] md:font-[600] md:text-[2.2rem] 
    md:leading-[3.8rem] xs:text-[2rem] text-[1.9rem] leading-[3.1rem]`
export const bannerh1Class = `oswald font-[500] xxl:text-[4.6rem] xxl:leading-[4.5rem] 
    xll:text-[3rem] xl:text-[2.5rem] md:font-[600] lg:text-[2.36rem] md:text-[2.26rem] xs:text-[2.1rem]
    md:leading-[3.8rem] text-[1.9rem] leading-[3.1rem]`

export const h2Class = `oswald font-[600] xxl:text-[4.6rem] xxl:leading-[4.5rem] 
    xll:text-[2.9rem] xl:text-[2.8rem] lg:text-[2.5rem] md:font-[600] md:text-[2.2rem] 
    md:leading-[3.8rem] xs:text-[2rem] text-[1.9rem] leading-[3.1rem]`
export const bannerh2Class =  `oswald font-[500] xxl:text-[4.6rem] xxl:leading-[4.5rem] 
lg:text-[1.9rem] md:text-[1.8rem] xs:text-[1.7rem]
md:leading-[3.8rem] text-[1.6rem] leading-[3.1rem]` 

export const h3Class = `oswald font-[600] xxl:text-5xl
xxl:text-[2rem] xl:text-[1.9em] xll:leading-[2.7rem] xl:text-[1.8rem] lg:text-[1.6rem] xl:leading-9 
md:font-[600] md:text-[1.3rem] lg:leading-10 md:leading-8 leading-7 ssm:text-[1.2rem] text-[1.1rem]`;
//Second version of h2 which is used in Q&A pages
export const h3FAQ = `oswald md:pb-4 pb-2 font-[700] xl:text-[2.5rem] md:text-4xl md:text-3xl text-[26px]`  
export const h3FAQ2 = `font-bold xl:text-3xl lg:text-2xl lg:pt-6 leading-10 text-[23px] pb-2`

//Be elite button and reversed(background and text color) be elite button
export const BeEliteBtn = `mx-auto block oswald font-[500] xxl:w-[21.5rem] xxl:h-[6rem] xxl:pt-6 xxl:text-3xl 
    xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4 pt-3 w-40 h-[3.3rem] 
    text-base bg-primary hover:bg-secondary hover:text-black text-center rounded-full duration-500`
export const ReBeEliteBtn = `mx-auto block oswald font-[500] xxl:w-[21.5rem] xxl:h-[6rem] xxl:pt-6 xxl:text-3xl 
    xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4 pt-3 w-40 h-[3.3rem] 
    text-base bg-secondary hover:bg-primary hover:text-white text-black/90 text-center rounded-full duration-500`

export const moreBtn = `inline-block oswald clear-both font-[400] text-secondary hover:text-primary 
xxl:text-[2rem] xll:text-[1.5rem] xl:text-[1.4rem] md:text-[1.3rem] text-[1.2rem]`

//background images
export const bg0Class = `[background-image:url('/home-banner-img.jpg')] [background-position:center top] 
    bg-cover [background-repeat: no-repeat]`;
export const bg1Class = `[background-image:url('/bg1.jpg')] bg-fixed md:bg-center 
    bg-[center_left_-600px] bg-cover bg-repeat`
export const bg3Class = `[background-image:url('/bg3.jpg')] bg-scroll bg-center bg-repeat bg-cover`
export const bg2Class = `[background-image:url('/bg2.jpg')] ssm:h-full h-[500px] bg-[center_top] bg-cover bg-no-repeat`
export const bg4Class = `[background-image:url('/bg4.jpg')] md:bg-center lg:[background-size: 95%] 
    sm:bg-center bg-[center_left_50%] bg-repeat bg-cover `
export const bg5Class = `[background-image:url('/img5.jpg')] bg-fixed lg:bg-[center_left_-400px]
    bg-[center_left_-1200px] bg-repeat bg-cover`
export const bg6Class = `[background-image:url('/bg6.png')] bg-center bg-repeat bg-cover`
export const bg7Class = `[background-image:url('/bg7.png')] bg-center bg-cover bg-scroll`
