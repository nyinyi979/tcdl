//this file is for login, signup and forogtten password animation
import anime from "animejs"
function popUpBox(bg:string , ele:string){
    const bgClose = anime({
        targets: `#${bg}`,
        opacity: [1 , 0],
        complete: ()=>{
            document.getElementById(bg)!.style.display = 'none'
            document.body.style.overflowY = 'scroll';
        },
        autoplay: false,
        duration: 600,
        delay: 200
    })
    const boxClose = anime({
        targets: `#${ele}`,
        translateY: [0 ,-500 ],
        opacity: [1 , 0],
        duration: 200,
        easing: 'linear',
        autoplay: false,
        delay: 200
    })
    const bgOpen = anime({
        targets: `#${bg}`,
        opacity: [0 , 1 ],
        begin: ()=>{
            document.getElementById(bg)!.style.display = 'block'
            document.body.style.overflowY = 'hidden'
            document.getElementById(ele)!.style.opacity = '0';
        },
        autoplay: false,
        duration: 600,
        delay: 200
    })
    const boxOpen = anime({
        targets: `#${ele}`,
        translateY: [-500 , 0 ],
        opacity: [0 , 1],
        duration: 300,
        easing: 'easeInOutQuad',
        begin: ()=>{
            document.body.style.overflowY = 'hidden'
        },
        autoplay: false,
        delay: 200
    })
    return {boxOpen , boxClose , bgOpen , bgClose};
}

export function signUpPopUpBox(){
    const bg = 'signUpBG';
    const ele = 'signUp'
    const animation_values = popUpBox(bg , ele);
    return animation_values;
}
export function loginPopUpBox(){
    const bg = 'loginBG';
    const ele = 'login'
    const animation_values = popUpBox(bg , ele);
    return animation_values;
}
export function forgottenPWPopUpBox(){
    const bg = 'forgotBG';
    const ele = 'forgot'
    const animation_values = popUpBox(bg , ele);
    return animation_values;

}

export const headingBoxClass = "clear-both table rounded-tl-3xl rounded-tr-3xl w-full font-[400] ssm:text-3xl text-2xl ssm:pl-10 ssm:pr-6 ssm:pt-[23px] ssm:pb-[30px] px-6 py-4 md:mb-5 mb-3 text-white bg-gradient-to-r from-[#a2438d] to-[#5c3477]"
export const labelClass = 'z-[20] font-[500] absolute -top-2 ssm:left-[4.3rem] left-[2.3rem] block w-fit h-fit py-1 px-5 bg-white rounded-full text-[#696769] md:text-base text-sm'
export const inputClass ='z-[10] font-[600] relative ssm:w-full w-[95%] ssm:h-16 h-12 ssm:px-8 ssm:py-3 px-5 py-4 ssm:text-xl text-base leading-10 rounded-l-full rounded-r-full border-[2.4px] border-light_gray outline-none text-text_violet placeholder:text-text_violet'
export const inputBoxClass = `block relative md:w-full w-[98%] ssm:px-10 px-4 mx-auto my-5 py-2 text-text_violet`
export const requiredInputBoxClass = inputBoxClass +  `after:[content-''] after:absolute after:w-3 after:h-3 after:rounded-full after:bg-primary after:right-4 after:top-[37%]`;
export const submitClass = 'block cursor-pointer mx-auto ssm:mt-5 mt-3 ssm:w-[13.2rem] ssm:h-[4.2rem] w-[11.4rem] h-[3.4rem] ssm:text-2xl text-xl ssm:py-4 ssm:px-[2.8rem] py-[0.675rem] px-6 font-[600] rounded-full text-white text-center bg-primary hover:bg-[#a0448d] duration-200'