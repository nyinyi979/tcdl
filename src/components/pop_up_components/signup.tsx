import { AnimeInstance } from 'animejs'
import React, { useState } from 'react'
import { signUpPopUpBox , inputBoxClass , inputClass , labelClass , requiredInputBoxClass, submitClass, headingBoxClass } from '../popUpAnimation';
type userInfo = {
    firstName: string, middleName?: string, lastName: string,
    DOB?: string, birthTime?: string , POB: string, currentPlace: string, 
    Gender: 'Male'|'Female'|'LGBTQ+'|'No answer'|'' , emailID: string, password: string
}
export default function SignUp(){
    const bgCloseAnimation = React.useRef<AnimeInstance>();
    const signUpCloseAnimation = React.useRef<AnimeInstance>();
    // userinfos are stored here
    const [userInfo , setUserInfo] = React.useState<userInfo>({
        firstName: 'David' , middleName: 'Robert Joseph', lastName: 'Smith',
        DOB: '02/05/1975' , birthTime: '-' , POB: 'London, England', 
        currentPlace: 'Miami, United States of America' , Gender: '', emailID: '', password: ''
    })
    const [ PW , setPW ] = useState(false);
    React.useEffect(()=>{
        const { bgClose, boxClose } = signUpPopUpBox();
        bgCloseAnimation.current= bgClose;
        signUpCloseAnimation.current = boxClose;
    }, [])

    const setFirstName = (value:string) =>{
        setUserInfo({...userInfo, firstName: value})
    }  
    const setMiddleName = (value:string) =>{
        setUserInfo({...userInfo, middleName: value})
    } 
    const setLastName = (value:string) =>{
        setUserInfo({...userInfo, lastName: value})
    }
    const setDOB = (value:string) =>{
        setUserInfo({...userInfo, DOB: value})
    }
    const setBirthTime = (value:string) =>{
        setUserInfo({...userInfo, birthTime: value})
    }
    const setPOB = (value:string) =>{
        setUserInfo({...userInfo, POB: value})
    }
    const setCurrentPlace = (value:string) =>{
        setUserInfo({...userInfo, currentPlace: value})
    }
    const setGender = (value:'Male'|'Female'|'LGBTQ+'|'No answer'|'') =>{
        setUserInfo({...userInfo, Gender: value})
    }
    const setEmailID = (value:string) =>{
        setUserInfo({...userInfo, emailID: value})
    }
    const setPassword = (value:string) =>{
        setUserInfo({...userInfo, password: value})
    }
    const closePopUp = () =>{
        signUpCloseAnimation.current!.restart();
        bgCloseAnimation.current!.restart();
    }
    React.useEffect(()=>{
        const img = (document.getElementById('s_hide') as HTMLImageElement);
        const password = document.getElementById('s_password');
        if(PW){
            img.src = '/pass-show-icon.png';
            password?.setAttribute('type' , 'text');
        }
        else {
            img.src = '/pass-hide-icon.png';
            password?.setAttribute('type' , 'password');
        }
    }, [PW])
    return(
        <div onClick={closePopUp} id='signUpBG' className='hidden bg-black/30 w-full h-[100%] fixed overscroll-y-contain overflow-y-scroll z-[100]'>
            
            <div id='signUp' onClick={(e)=>{e.stopPropagation()}} className='ssm:w-[30.5rem] w-[23rem] md:my-8 my-4 mx-auto h-fit bg-white rounded-3xl pb-10'>
                
                <div className={headingBoxClass}>
                    <h2 className='oswald float-left tracking-[1px]'>Sign Up</h2>
                    <h2 onClick={closePopUp} className='float-right rounded-full font-[500] px-3 pb-1 text-lg cursor-pointer bg-primary text-white hover:bg-secondary hover:text-black duration-500'>x</h2>
                </div>
                

                <div className={`${requiredInputBoxClass} mt-12`}>
                    <span className={labelClass}>First name</span>
                    <input className={inputClass} type="text" value={userInfo.firstName} onChange={(input)=>{setFirstName(input.target.value)}}/>
                </div>

                <div className={inputBoxClass}>
                    <span className={labelClass}>Middle name</span>
                    <input className={inputClass} type="text" value={userInfo.middleName} onChange={(input)=>{setMiddleName(input.target.value)}}/>
                </div>

                <div className={inputBoxClass}>
                    <span className={labelClass}>Last name</span>
                    <input className={inputClass} type="text" value={userInfo.lastName} onChange={(input)=>{setLastName(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Date of Birth</span>
                    <input className={inputClass} type="text" value={userInfo.DOB} onChange={(input)=>{setDOB(input.target.value)}}/>
                </div>

                <div className={inputBoxClass}>
                    <span className={labelClass}>Birth Time</span>
                    <input className={inputClass} type="text" value={userInfo.birthTime} onChange={(input)=>{setBirthTime(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Place of Birth</span>
                    <input className={inputClass} type="text" value={userInfo.POB} onChange={(input)=>{setPOB(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Current Place</span>
                    <input className={inputClass} type="text" value={userInfo.currentPlace} onChange={(input)=>{setCurrentPlace(input.target.value)}}/>
                </div>

                <div className={'relative grid ssm:grid-cols-3 grid-cols-2 w-full px-10 mx-auto my-5 md:py-10 py-8 text-[#5c545f] font-[600] text-lg'}>
                    <span className={labelClass}>Gender</span>
                    <label htmlFor="s_male">    <input onClick={()=>{setGender('Male')}} type="radio" name="gender" id="s_male" />Male</label>
                    <label htmlFor="s_female">  <input onClick={()=>{setGender('Female')}} type="radio" name="gender" id="s_female" />female</label>
                    <label htmlFor="s_LGBTQ">   <input onClick={()=>{setGender('LGBTQ+')}} type="radio" name="gender" id="s_LGBTQ" />LGBTQ+</label>
                    <label htmlFor="s_NO">      <input onClick={()=>{setGender('No answer')}} type="radio" name="gender" id="s_NO" />No answer</label>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Email ID</span>
                    <input placeholder='drjsmith@gmail.com' className={inputClass} type="text" value={userInfo.emailID} onChange={(input)=>{setEmailID(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Password</span>
                    <img id='s_hide' src="/pass-hide-icon.png" className='absolute right-16 lg:top-7 top-5 z-30' onClick={()=>{setPW(!PW)}}/>
                    <input id='s_password' placeholder='Enter Password' className={inputClass} type="password" value={userInfo.password} onChange={(input)=>{setPassword(input.target.value)}}/>
                </div>
                
                <div className='text-[#5c545f] font-[500] text-left md:ml-24 md:w-[70%] w-[70%] ml-12 lg:text-lg text-base md:leading-10 leading-6'>
                   <span className='inline-block w-3 h-3 bg-primary rounded-full mr-1'></span> Required fields <br />
                   <p className='ml-5'>Password must be 8 characters with alphabet and numeric.</p>
                </div>

                <a href='/' className={submitClass}>
                    Signup
                </a>
            </div>
        </div>
    )
}