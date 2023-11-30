import anime, {AnimeInstance} from 'animejs'
import React from 'react';
export function useAnimateLeft(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [-50 , 0],
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
export function useAnimateRight(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const played = React.useRef(false);
    
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [50 , 0],
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
    const outroAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateY: [50 , 0],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        outroAnimation.current = anime({
            targets:  `#${selector}`,
            autoplay: false,
            translateY: [0 , 50 ],
            opacity: [1, 0],
            duration: 500,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                outroAnimation.current!.restart();
            }
                introAnimation.current!.restart();
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector])
}
export function useAnimateScale(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const outroAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            scale: [0 , 1],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        outroAnimation.current = anime({
            targets:  `#${selector}`,
            autoplay: false,
            scale: [1 , 0],
            opacity: [1, 0],
            duration: 500,
            easing: 'linear'
        })
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].intersectionRatio <= 0) {
                outroAnimation.current!.restart();
            }
                introAnimation.current!.restart();
        })
        observer.observe(document.getElementById(selector)!);
    }, [selector])
}
export const quoteClass = `leading-8 xl:py-32 md:py-24 py-20 relative
    before:[background-image:url('/left_quote.png')] before:absolute before:w-[70px] before:h-[70px] md:before:left-[44%] before:left-[40%] before:top-0 lg:before:w-[100px] lg:before:h-[100px] before:bg-cover
    after:[background-image:url('/right_quote.png')] after:absolute  after:w-[70px] after:h-[70px] md:after:left-[44%] after:left-[40%] after:bottom-0 lg:after:w-[100px] lg:after:h-[100px] after:bg-cover  `

export const h1Class = "oswald md:font-[600] font-[500] xxl:text-[4.6rem] xxl:leading-[4.5rem] xxl:mr-12 font-bold xll:text-[3rem] xll:mr-4 lg:text-[2.5rem] xl:mr-6 md:text-[2.2rem] md:mr-4 md:leading-[3.8rem] xs:text-4xl text-3xl mr-2 leading-[3.1rem] "
export const h2Class = "oswald md:font-[600] font-[500] xxl:text-5xl xxl:mr-16 xll:text-[2rem] xll:leading-[2.7rem] xll:mr-6 xl:text-[1.8rem] xl:mr-4 xl:leading-9 md:text-[1.3rem] md:leading-8 mr-5 xs:text-[1.4rem] text-[1.1rem]"

export const h2Class_V = "oswald pb-4 font-[700] xl:text-[2.5rem] md:text-4xl xl:leading-9 md:leading-8 md:text-3xl text-[26px]"
export const h3Class = "font-bold xl:text-3xl lg:text-2xl lg:pt-6 md:leading-[3.8rem] text-xl leading-[3.1rem] pb-2"

export const BeEliteBtn = "mx-auto block oswald font-[500] xxl:w-[21.5rem] xxl:h-[6rem] xxl:pt-4 xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4 pt-3 w-40 h-[3.3rem] text-base bg-primary hover:bg-secondary hover:text-black text-center rounded-full duration-500"
export const ReBeEliteBtn = "mx-auto block oswald font-[500] xxl:w-[21.5rem] xxl:h-[6rem] xxl:pt-4 xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4 pt-3 w-40 h-[3.3rem] text-base bg-secondary hover:bg-primary hover:text-white text-black/90 text-center rounded-full duration-500"
export const moreBtn = 'inline-block oswald clear-both font-[400] text-secondary hover:text-primary xxl:text-[2rem] xll:text-[1.5rem] xl:text-[1.4rem] md:text-[1.3rem] text-[1.2rem]';
export const bg0Class = `[background-image:url('/home-banner-img.jpg')] [background-position:center top] bg-cover [background-repeat: no-repeat]`;
export const bg1Class = `[background-image:url('/bg1.jpg')] bg-fixed md:bg-center bg-[center_left_-1400px] bg-cover bg-repeat`
export const bg3Class = `[background-image:url('/bg3.jpg')] bg-scroll bg-center bg-repeat bg-cover`
export const bg2Class = `[background-image:url('/bg2.jpg')] bg-center bg-cover bg-no-repeat`
export const bg4Class = `[background-image:url('/bg4.jpg')] md:bg-center lg:[background-size: 95%] sm:bg-center xs:bg-[center_left_-250px] bg-[center_left_-300px] bg-repeat bg-cover `
export const bg5Class = `[background-image:url('/img5.jpg')] bg-fixed ssm:[background-position:center top] bg-[center_left_-750px] bg-repeat bg-cover`
export const bg6Class = `[background-image:url('/bg6.png')] bg-center bg-repeat bg-cover`
export const bg7Class = `[background-image:url('/bg7.png')] bg-center bg-cover bg-scroll`
