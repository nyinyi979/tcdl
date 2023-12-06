import Accounts from "../components/account_components/account_slide";
import Footer from "../components/footer";
import React from 'react';
import Navbar from "../components/navbar";
import { h1Class } from "../components/utilities";
import AccountSidebar from "../components/account_components/account_sidebar";
import Calendar from "../components/account_components/calendar";
import Voices from "../components/account_components/voices";
import Password from "../components/account_components/password";
type pages = {
    account: boolean , calendar: boolean , voice: boolean, password: boolean
}
const init = {
    account: false , calendar: false , voice: false, password: false
}

export default function Account(){
    React.useEffect(()=>{
        document.title = 'My Account';
        document.getElementById('bg_acc')!.style.opacity = '1';
    }, [])
    return(
        <>
            <Navbar currentLink="/account"/>
            <PageChooser />
            <Footer />
        </>
    )
}

//Side bar
export function PageChooser(){
    const btnClass = `inline-block text-text_violet cursor-pointer mx-auto my-[3px]
    lg:w-full md:w-1/2 xs:w-11/12 w-4/6 lg:h-16 h-12 xll:text-xl xl:text-lg md:text-base text-sm lg:py-4 py-3 lg:px-0 px-1 
    font-[600] rounded-full text-center hover:bg-[#9580bc] border-2 border-[#9580bc] hover:text-white duration-200`
    const btnActiveClass = `inline-block cursor-pointer mx-auto lg:w-full md:w-1/2 xs:w-11/12 w-4/6 lg:h-16 h-12 lg:h-16 h-12 
    xll:text-xl xl:text-lg md:text-base text-sm lg:py-4 py-3 lg:px-0 px-1 font-[600] rounded-full text-center bg-[#9580bc]
     text-white duration-200`

    const [pages , setPages ] = React.useState<pages>({
        account: true, calendar: false, voice: false, password: false
    })
    const goAccout = () =>{
        document.title = 'My Account';
        setPages({...init , account: true})
    }
    const goCalendar = () =>{
        document.title = 'Schedule a meeting!';
        setPages({ ...init, calendar: true})
    }
    const goVoice = () =>{
        document.title = 'Voice messages';
        setPages({...init , voice: true})
    }
    const goPassword = () =>{
        document.title = 'Change Password';
        setPages({...init ,password: true})
    }
    return(
        <>
            <h1 className={`${h1Class} text-primary text-center lg:pt-16 pt-[7rem]`}>
                {pages.account? 'My Account' : pages.calendar? 'Schedule Zoom Meeting' : pages.voice? 'Voice Message' : pages.password? 'Change Password' : ''}
            </h1>
            <div className="w-full llg:px-5 lg:px-2 max-w-full my-1 mb-10 table clear-both py-20">
                
                <div className={`lg:float-left float-none bg-white rounded-3xl 
                xll:w-[355px] xl:w-[26.5%] lg:w-[27%] w-[94%] lg:h-[47rem] lg:mx-[1%] 
                lg:my-0 my-3 mx-auto lg:pb-10 pb-0`}>
                    
                    <div className="flex xl:flex-col flex-row flex-wrap w-full lg:gap-4 gap-2 lg:pt-10 lg:pb-5 py-5 lg:px-6 llg:px-10 px-0">
                        <a onClick={goAccout} className={pages.account? btnActiveClass : btnClass}>
                            Account
                        </a>
                        
                        <a onClick={goCalendar} className={pages.calendar? btnActiveClass : btnClass}>
                            Schedule Zoom Meeting
                        </a>
                        
                        <a onClick={goVoice} className={pages.voice? btnActiveClass : btnClass}>
                            Voice Message
                        </a>
                        
                        <a onClick={goPassword} className={pages.password? btnActiveClass : btnClass}>
                            Change Password
                        </a>
                        
                        <a className={btnClass}>
                            Log out
                        </a>
                    </div>
                     <AccountSidebar />
                </div>
                <div className='lg:float-right float-none xll:w-[910px] xl:w-[69%] lg:w-[68%] w-[94%] lg:mx-[1%] mx-auto lg:h-[47rem] h-fit bg-white rounded-3xl py-3'>
                    {pages.account? <Accounts /> : pages.calendar? <Calendar /> : pages.voice? <Voices /> : pages.password? <Password /> : ''}
                </div>
            
            </div>
        </>
    )
}