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

