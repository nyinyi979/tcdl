import React from 'react'
import { labelClass } from '../popUpAnimation';
type userInfo = {
    firstName: string, middleName?: string, lastName: string,
    DOB?: string, birthTime?: string , POB: string, currentPlace: string, 
    Gender: 'Male'|'Female'|'LGBTQ+'|'No answer'|''
}
export default function Accounts(){
    const [userInfo , setUserInfo] = React.useState<userInfo>({
        firstName: 'David' , middleName: 'Robert Joseph', lastName: 'Smith',
        DOB: '02/05/1975' , birthTime: '-' , POB: 'London, England', 
        currentPlace: 'Miami, United States of America' , Gender: ''
    })

    const inputClass ='z-10 font-[600] relative w-full ssm:h-16 h-12 ssm:px-8 ssm:py-3 px-5 py-4 lg:text-xl text-base leading-10 rounded-l-full rounded-r-full border-[2.4px] border-[#beb9bf] outline-none text-[#5c545f] placeholder:text-[#5c545f]'
    const inputBoxClass = `z-10 block relative w-full ssm:px-10 px-4 mx-auto my-2 py-2 text-[#5c545f]`
    const requiredInputBoxClass = inputBoxClass +  `after:[content-''] after:absolute after:w-3 after:h-3 after:rounded-full after:bg-primary lg:after:right-4 lg:after:top-[36%] after:-right-0 after:top-[33%]`;
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
    return(

        <div className='lg:float-left float-none lg:w-[68%] w-[94%] lg:mx-[1%] mx-auto h-fit bg-white rounded-3xl py-3'>
            
            <div className='w-full py-5 border-b border-gray-400'>
                <div className='w-fit table clear-both mx-auto'>
                    <img src="/upload-img.png" alt="img" className='border-[6px] lg:w-fit w-24 float-left mr-5 border-[#a88ec0] rounded-full p-1'/>
                    <div className='float-right lg:mt-8 mt-4'>
                        <h2 className='lg:text-3xl text-2xl text-violet  font-[600]'>Akari Yamato</h2>
                        <h2 className='lg:text-lg text-base text-violet py-1 font-[600]'>Change my photo</h2>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:px-5 lg:py-3 py-2 px-2 lg:gap-0 gap-1'>
                
                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>First name</span>
                    <input className={inputClass} type="text" value={userInfo.firstName} onChange={(input)=>{setFirstName(input.target.value)}}/>
                </div>


                <div className={inputBoxClass}>
                    <span className={labelClass}>Birth Time</span>
                    <input className={inputClass} type="text" value={userInfo.birthTime} onChange={(input)=>{setBirthTime(input.target.value)}}/>
                </div>

                <div className={inputBoxClass}>
                    <span className={labelClass}>Middle name</span>
                    <input className={inputClass} type="text" value={userInfo.middleName} onChange={(input)=>{setMiddleName(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Place of Birth</span>
                    <input className={inputClass} type="text" value={userInfo.POB} onChange={(input)=>{setPOB(input.target.value)}}/>
                </div>

                <div className={inputBoxClass}>
                    <span className={labelClass}>Last name</span>
                    <input className={inputClass} type="text" value={userInfo.lastName} onChange={(input)=>{setLastName(input.target.value)}}/>
                </div>

                <div className={requiredInputBoxClass}>
                    <span className={labelClass}>Current Place</span>
                    <input className={inputClass} type="text" value={userInfo.currentPlace} onChange={(input)=>{setCurrentPlace(input.target.value)}}/>
                </div>


                <div className={inputBoxClass +  `after:[content-''] after:absolute after:w-3 after:h-3 after:rounded-full after:bg-primary lg:after:right-4 lg:after:top-[22%] md:after:top-[40%] after:-right-0 after:top-[15%]`}>
                    <span className={labelClass}>Date of Birth</span>
                    <input className={inputClass} type="text" value={userInfo.DOB} onChange={(input)=>{setDOB(input.target.value)}}/>
                </div>

                <div className={'relative grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-[74%] mx-auto lg:py-10 py-6 text-[#5c545f] font-[600] lg:text-xl text-sm'}>
                    <span className={`z-[20] font-[400] absolute -top-2 -left-2 block w-full h-fit bg-white rounded-full text-lg`}>Gender</span>

                    <label className='xl:pb-1' htmlFor="a_male">    <input onClick={()=>{setGender('Male')}} type="radio" name="gender" id="a_male" />Male</label>
                    <label className='xl:pb-1' htmlFor="a_female">  <input onClick={()=>{setGender('Female')}} type="radio" name="gender" id="a_female" />female</label>
                    <label className='xl:pb-1' htmlFor="a_LGBTQ">   <input onClick={()=>{setGender('LGBTQ+')}} type="radio" name="gender" id="a_LGBTQ" />LGBTQ+</label>
                    <label className='xl:pb-1 lg:col-span-2' htmlFor="a_NO">      <input onClick={()=>{setGender('No answer')}} type="radio" name="gender" id="a_NO" />No answer</label>
                </div>

                <div className='col-span-2 w-full py-4 border-t border-t-gray-500'>
                    <div className='w-fit mx-auto'>
                        <a className='inline-block lg:mx-4 ml-2 cursor-pointer lg:mt-5 lg:w-[13.2rem] lg:h-[4.2rem] w-[9rem] h-[3.4rem] ssm:text-2xl text-xl ssm:py-4 ssm:px-[2.8rem] py-[0.675rem] lg:px-6 px-4 font-[600] rounded-full border-[1.5px] border-[#5c545f] text-[#5c545f] text-center hover:bg-primary hover:text-white duration-200'>Cancel</a>
                        <a className='inline-block lg:mx-4 ml-2 cursor-pointer lg:mt-5 lg:w-[13.2rem] lg:h-[4.2rem] w-[9rem] h-[3.4rem] ssm:text-2xl text-xl ssm:py-4 ssm:px-[2.8rem] py-[0.675rem] lg:px-6 px-4 font-[600] rounded-full border-[1.5px] border-[#5c545f] text-[#5c545f] text-center hover:bg-primary hover:text-white duration-200'>Save</a>
                    </div>
                    
                </div>
            </div>
                
        </div>
    )
}