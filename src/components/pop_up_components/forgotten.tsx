import { AnimeInstance } from 'animejs'
import React from 'react'
import { inputClass , labelClass , requiredInputBoxClass, submitClass, forgottenPWPopUpBox, headingBoxClass } from '../popUpAnimation';

export default function Forgotten(){
    const bgCloseAnimation = React.useRef<AnimeInstance>();
    const logInCloseAnimation = React.useRef<AnimeInstance>();
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
        <div onClick={closePopUp} id='forgotBG' className='hidden bg-black/30 w-full h-[100%] fixed overscroll-y-contain overflow-y-scroll z-[100]'>
            
            <div id='forgot' onClick={(e)=>{e.stopPropagation()}} className='ssm:w-[31rem] w-[23rem] md:my-8 my-4 mx-auto h-fit bg-white rounded-3xl pb-10'>
                
                <div className={headingBoxClass}>
                    <h2 className='oswald float-left tracking-[1px]'>Forgot Password</h2>
                    <h2 onClick={closePopUp} className='float-right rounded-full font-[600] px-3 pb-1 text-lg cursor-pointer bg-primary text-white hover:bg-secondary hover:text-black duration-500'>x</h2>
                </div>

                <div className='px-6 ssm:px-12 font-[500] ssm:text-xl text-lg text-[#5c545f] after:clear-both after:table ssm:leading-9 leading-7'>
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