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

export const quoteClass = `font-semibold leading-8 py-28 relative
    before:[background-image:url('/left_quote.png')] before:absolute md:before:left-[45%] before:left-[40%] before:top-0 before:w-[100px] before:h-[100px]
    after:[background-image:url('/right_quote.png')] after:absolute md:after:left-[45%] after:left-[40%] after:bottom-0 after:w-[100px] after:h-[100px]`


export const bg1Class = `[background-image:url('/TheCardDon_tLie-TDCL-Tarot-Rune-Photo-01.jpg')] bg-cover [background-repeat: no-repeat]`
export const bg3Class = `bg-fixed md:bg-[center_left_0px] bg-[center_left_-200px] bg-repeat [background-image:url('/TheCardDon_tLie-TDCL-Tarot-Rune-03.jpg')] bg-cover [background-repeat: no-repeat]`
export const bg4Class = `bg-fixed md:bg-[center_left_-600px] bg-[center_left_-800px] bg-repeat [background-image:url('/TheCardDon_tLie-TDCL-Tarot-Rune-04.jpg')] bg-cover [background-repeat: no-repeat]`
export const bg5Class = `bg-fixed md:bg-[center_left_-600px] bg-[center_left_-800px] bg-repeat [background-image:url('/TheCardDon_tLie-TDCL-Tarot-Rune-05.jpg')] bg-cover [background-repeat: no-repeat]`