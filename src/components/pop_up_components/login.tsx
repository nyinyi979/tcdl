import { AnimeInstance } from 'animejs'
import React from 'react'
import { inputClass , labelClass , requiredInputBoxClass, submitClass, loginPopUpBox, forgottenPWPopUpBox, headingBoxClass } from '../popUpAnimation';
type userInfo = {
    emailID: string, password: string
}
export default function Login(){
    const bgCloseAnimation = React.useRef<AnimeInstance>();
    const logInCloseAnimation = React.useRef<AnimeInstance>();
    // user input values are stored here
    const [userInfo , setUserInfo] = React.useState<userInfo>({ emailID: '', password: ''});
    const [PW , setPW] = React.useState(false);
    React.useEffect(()=>{
        const { bgClose, boxClose } = loginPopUpBox();
        bgCloseAnimation.current= bgClose;
        logInCloseAnimation.current = boxClose;
    }, [])
    
    React.useEffect(()=>{
        const img = (document.getElementById('l_hide') as HTMLImageElement);
        const password = document.getElementById('l_password');
        if(PW){
            img.src = '/pass-show-icon.png';
            password?.setAttribute('type' , 'text');
        }
        else {
            img.src = '/pass-hide-icon.png';
            password?.setAttribute('type' , 'password');
        }
    }, [PW])

    const setEmailID = (value:string) =>{
        setUserInfo({...userInfo, emailID: value})
    }
    const setPassword = (value:string) =>{
        setUserInfo({...userInfo, password: value})
    }
    const closePopUp = () =>{
        logInCloseAnimation.current!.restart();
        bgCloseAnimation.current!.restart();
    }
    const openForogtten = () =>{
        const {bgOpen , boxOpen} = forgottenPWPopUpBox();
        closePopUp();
            bgOpen.restart();
            boxOpen.restart();
    }
    return(
        <div onClick={closePopUp} id='loginBG' className='hidden bg-black/30 w-full h-[100%] fixed top-0 left-0 overscroll-y-contain overflow-y-scroll z-[100]'>
            
            <div id='login' onClick={(e)=>{e.stopPropagation()}} className='ssm:w-[30.5rem] w-[23rem] md:my-8 my-4 mx-auto h-fit bg-white rounded-3xl pb-10'>
                
                <div className={headingBoxClass}>
                    <h2 className='oswald float-left tracking-[1px]'>Login</h2>
                    <h2 onClick={closePopUp} className='float-right rounded-full font-[600] px-3 pb-1 text-lg cursor-pointer bg-primary text-white hover:bg-secondary hover:text-black duration-500'>x</h2>
                </div>
                

                <div className={`${requiredInputBoxClass} mt-12`}>
                    <span className={labelClass}>Email ID</span>
                    <input placeholder='drjsmith@gmail.com' className={inputClass} type="text" value={userInfo.emailID} onChange={(input)=>{setEmailID(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Password</span>
                    <img id='l_hide' src="/pass-hide-icon.png" className='absolute right-16 lg:top-7 top-5 z-30' onClick={()=>{setPW(!PW)}}/>
                    <input id='l_password' placeholder='Enter Password' className={inputClass} type="password" value={userInfo.password} onChange={(input)=>{setPassword(input.target.value)}}/>
                </div>
                
                <div className='px-6 ssm:px-8 text-lg text-[#5c545f] after:clear-both after:table'>
                    <label className='float-left px-2 ml-2 -pt-2 font-[500]' htmlFor="remember" defaultChecked={false}><input type="checkbox" name="remember" id="remember" /> Remember me</label> <br className='ssm:hidden block'/>
                    <h2 onClick={openForogtten} className='hover:text-primary cursor-pointer ssm:float-right float-none text-center ssm:text-right underline duration-200'>Forgot your password?</h2>
                </div>

                <a href='/' className={submitClass}>
                    Login 
                </a>
            </div>
        </div>
    )
}