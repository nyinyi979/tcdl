import anime, {AnimeInstance} from 'animejs'
import React from 'react';
export function useAnimateLeft(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const outroAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [-50 , 0],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        outroAnimation.current = anime({
            targets:  `#${selector}`,
            autoplay: false,
            translateX: [0 , -50 ],
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
export function useAnimateRight(selector:string){
    const introAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    const outroAnimation = React.useRef<undefined|AnimeInstance>(undefined);
    React.useEffect(()=>{
        introAnimation.current = anime({
            targets: `#${selector}`,
            autoplay: false,
            translateX: [50 , 0],
            opacity: [0 , 1],
            duration: 500,
            easing: 'linear'
        })
        outroAnimation.current = anime({
            targets:  `#${selector}`,
            autoplay: false,
            translateX: [0 , 50 ],
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

export const quoteClass = `leading-8 py-28 relative
    before:[background-image:url('/left_quote.png')] before:absolute md:before:left-[45%] before:left-[40%] before:top-0 before:w-[100px] before:h-[100px]
    after:[background-image:url('/right_quote.png')] after:absolute md:after:left-[45%] after:left-[40%] after:bottom-0 after:w-[100px] after:h-[100px]`


export const bg1Class = `[background-image:url('/bg1.jpg')] md:bg-center bg-[center_left_-800px] bg-cover [background-repeat: no-repeat]`
export const bg3Class = `[background-image:url('/bg3.jpg')] bg-fixed md:bg-[center_left_0px] bg-[center_left_-500px] bg-repeat bg-cover`
export const bg2Class = `[background-image:url('/bg2.jpg')] md:bg-[top_center_-300px] md:bg-[center_left_0px]  bg-[center_left_-450px] bg-cover bg-no-repeat`
export const bg4Class = `[background-image:url('/bg4.jpg')] md:bg-center bg-[center_left_-400px] bg-repeat bg-cover `
export const bg5Class = `[background-image:url('/img5.jpg')] bg-fixed md:bg-[center_left_-500px] bg-[center_left_-1500px] bg-repeat bg-cover`
export const bg6Class = `[background-image:url('/bg6.png')] bg-center bg-repeat bg-cover`