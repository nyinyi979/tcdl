import { AnimeInstance } from 'animejs'
import React from 'react'
import { inputClass , labelClass , requiredInputBoxClass, submitClass, forgottenPWPopUpBox, headingBoxClass } from '../popUpAnimation';

export default function Forgotten(){
    const bgCloseAnimation = React.useRef<AnimeInstance>();
    const logInCloseAnimation = React.useRef<AnimeInstance>();
    //email value is stored here
    const [email , setEmail] = React.useState('')
    React.useEffect(()=>{
        const { bgClose, boxClose } = forgottenPWPopUpBox();
        bgCloseAnimation.current= bgClose;
        logInCloseAnimation.current = boxClose;
    }, [])

    const closePopUp = () =>{
        logInCloseAnimation.current!.restart();
        bgCloseAnimation.current!.restart();
    }
    return(
        <div onClick={closePopUp} id='forgotBG' className='hidden bg-black/30 ssm:w-full w-full h-[100%] fixed top-0 overscroll-y-contain overflow-y-scroll z-[100]'>
            
            <div id='forgot' onClick={(e)=>{e.stopPropagation()}} className='ssm:w-[30.5rem] xs:w-[23rem] w-[19rem] md:my-8 my-4 mx-auto h-fit bg-white rounded-3xl pb-10'>
                
                <div className={headingBoxClass}>
                    <h2 className='oswald float-left tracking-[1px]'>Sign Up</h2>
                    <img src='/close-icon.png' onClick={closePopUp} className='float-right w-[34px] h-[34px] text-lg cursor-pointer' />
                </div>

                <div className='px-6 ssm:px-12 font-[500] ssm:text-xl text-lg text-text_violet after:clear-both after:table ssm:leading-9 leading-7'>
                    We will send you a six-digit verification code to your Email ID.
                </div>
                
                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Email ID</span>
                    <input placeholder='drjsmith@gmail.com' className={inputClass} type="text" value={email} onChange={(input)=>{setEmail(input.target.value)}}/>
                </div>

                <a href='/' className={submitClass}>
                    Send 
                </a>
            </div>
        </div>
    )
}