import Accounts from "../components/account_components/account_slide";
import Footer from "../components/footer";
import React from 'react';
import Navbar from "../components/navbar";
import { bg7Class, h1Class } from "../components/utilities";
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
    const btnClass = "inline-block text-[#5c545f] cursor-pointer mx-auto lg:w-full w-[12rem] lg:h-16 h-12 xl:text-xl lg:text-base text-sm lg:py-4 py-3 lg:px-0 px-1 font-[600] rounded-full text-center hover:bg-[#908ec0] border-2 border-[#9580bc] hover:text-white duration-200"
    const btnActiveClass = "inline-block cursor-pointer mx-auto lg:w-full w-[12rem] lg:h-16 h-12 xl:text-xl lg:text-base text-sm lg:py-4 py-3 lg:px-0 px-1 font-[600] rounded-full text-center bg-[#908ec0] border-2 border-[#9580bc] text-white duration-200"

    const [pages , setPages ] = React.useState<pages>({
        account: true, calendar: false, voice: false, password: false
    })
    const goAccout = () =>{
        setPages({...init , account: true})
    }
    const goCalendar = () =>{
        setPages({ ...init, calendar: true})
    }
    const goVoice = () =>{
        setPages({...init , voice: true})
    }
    const goPassword = () =>{
        setPages({...init ,password: true})
    }
    return(
        <div className={bg7Class} style={{backgroundPosition: 'center top'}}>
            <Navbar currentLink="/account"/>
            <h1 className={`${h1Class} text-primary text-center pt-16`}>
            {pages.account? 'My Account' : pages.calendar? 'Schedule Zoom Meeting' : pages.voice? 'Voice Message' : pages.password? 'Change Password' : ''}
            </h1>
            <div className="mx-auto w-full md:my-8 my-4 table clear-both py-20">
                
                <div className="lg:float-left float-none bg-gray-100 rounded-3xl lg:w-[27%] w-[94%] h-fit lg:mx-[1%] lg:my-0 my-3 mx-auto lg:pb-10 pb-0">
                    <div className="lg:border-b-2 lg:border-b-[#908ec0]">
                        <div className="flex lg:flex-col flex-row flex-wrap w-full lg:gap-4 gap-2 lg:py-10 py-5 lg:px-10 px-0">

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
                    </div>
                     <AccountSidebar />
                </div>
                <div className='lg:float-left float-none lg:w-[68%] w-[94%] lg:mx-[1%] mx-auto xl:h-[47.6rem] lg:h-[49.7rem] h-fit bg-white rounded-3xl py-3'>
                    {pages.account? <Accounts /> : pages.calendar? <Calendar /> : pages.voice? <Voices /> : pages.password? <Password /> : ''}
                </div>
            </div>
            <Footer />
        </div>
    )
}