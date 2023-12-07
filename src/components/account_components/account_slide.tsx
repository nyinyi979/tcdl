import React from 'react'
//type for userinfo, it is similar to the one in the pop up
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

    const labelClass = `z-[20] font-[500] absolute -top-2 lg:left-[2.3rem] ssm:left-[7rem] left-[2.3rem] 
    block w-fit h-fit py-1 px-5 bg-white rounded-full text-[#696769] md:text-base text-sm`

    //classes for input , input container, required input container 
    const inputClass =`z-10 font-[600] relative w-[100%] lg:h-16 h-12 ssm:px-8 ssm:py-2 px-5 py-4 
    xxl:text-xl xl:text-lg md:text-base text-sm leading-10 rounded-l-full rounded-r-full border-[2.4px] border-light_gray 
    outline-none text-text_violet placeholder:text-text_violet`
    
    const inputBoxClass = `z-10 block relative lg:w-full w-[98%] xll:px-4 lg:px-4 ssm:px-20 px-4 mx-auto lg:my-[2px] my-1 py-2 text-text_violet`
    const requiredInputBoxClass = inputBoxClass +  
    `after:[content-''] after:absolute after:w-3 after:h-3 after:rounded-full after:bg-primary 
    md:after:top-[36%] lg:after:-right-1 ssm:after:right-12 after:-right-1 after:top-[33%]`;
    
    //method for setting each value of the userinfo
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
        <>
            <div className='w-full py-5 border-b border-gray-400'>
                <div className='w-fit table clear-both mx-auto'>
                    <img src="/upload-img.png" alt="img" className='border-[6px] lg:w-36 w-24 float-left lg:mr-8 mr-5 border-[#a88ec0] rounded-full p-1'/>
                    <div className='float-right lg:mt-10 mt-4'>
                        <h2 className='lg:text-[25px] xs:text-2xl text-xl text-[#4b2c64]  font-[700]'>AKARAI YAMATO</h2>
                        <label htmlFor="file" className='cursor-pointer lg:text-lg text-base text-violet py-1 font-[600]'>
                            <input type='file' className='hidden' id='file'/>Change my photo
                        </label>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-10 lg:py-3 py-2 px-2 lg:gap-0 gap-1'>
                
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


                <div className={inputBoxClass +  `after:[content-''] after:absolute after:w-3 after:h-3 ssm:after:right-12
                after:rounded-full after:bg-primary lg:after:-right-1 lg:after:top-[25%] md:after:top-[40%] 
                after:-right-0 after:top-[40%]`}>
                    <span className={labelClass}>Date of Birth</span>
                    <input className={inputClass} type="text" value={userInfo.DOB} onChange={(input)=>{setDOB(input.target.value)}}/>
                </div>

                <div className={'relative grid xl:grid-cols-3 grid-cols-2 xll:gap-2 gap-1 lg:w-[80%] w-[70%] mx-auto xll:py-8 py-6 text-text_violet font-[600] xxl:text-xl xl:text-lg md:text-base text-sm'}>
                    <span className={`z-[20] font-[400] absolute -top-2 left-2 block w-full h-fit bg-white rounded-full md:text-lg`}>Gender</span>

                    <label className='xl:pb-1' htmlFor="a_male">    <input onClick={()=>{setGender('Male')}} type="radio" name="gender" id="a_male" />Male</label>
                    <label className='xl:pb-1' htmlFor="a_female">  <input onClick={()=>{setGender('Female')}} type="radio" name="gender" id="a_female" />female</label>
                    <label className='xl:pb-1' htmlFor="a_LGBTQ">   <input onClick={()=>{setGender('LGBTQ+')}} type="radio" name="gender" id="a_LGBTQ" />LGBTQ+</label>
                    <label className='xl:pb-1 lg:col-span-2' htmlFor="a_NO">      <input onClick={()=>{setGender('No answer')}} type="radio" name="gender" id="a_NO" />No answer</label>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 w-full lg:py-3 py-4 border-t border-t-gray-500'>
                    <div className='w-fit mx-auto'>
                        <a className='inline-block lg:mx-4 ml-2 cursor-pointer lg:mt-5 llg:w-[13.2rem] llg:h-[4.2rem] llg:py-4 xs:w-[9rem] xs:h-[3.4rem] w-[7rem] h-[3.2rem] llg:text-2xl lg:text-xl xs:text-lg text-base py-[0.675rem] lg:px-6 px-4 font-[600] rounded-full border-[1.5px] border-text_violet text-text_violet text-center hover:bg-primary hover:text-white duration-200'>Cancel</a>
                        <a className='inline-block lg:mx-4 ml-2 cursor-pointer lg:mt-5 llg:w-[13.2rem] llg:h-[4.2rem] llg:py-4 xs:w-[9rem] xs:h-[3.4rem] w-[7rem] h-[3.2rem] llg:text-2xl lg:text-xl xs:text-lg text-base py-[0.675rem] lg:px-6 px-4 font-[600] rounded-full border-[1.5px] border-text_violet text-text_violet text-center hover:bg-primary hover:text-white duration-200'>Save</a>
                    </div>
                </div>
                
        </>
    )
}