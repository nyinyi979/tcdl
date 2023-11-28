import { FaFacebook } from "react-icons/fa6"

export default function AccountSidebar(){
    const btnClass = "inline-block text-[#5c545f] cursor-pointer mx-auto lg:w-full w-[12rem] lg:h-16 h-12 xl:text-xl lg:text-base text-sm lg:py-4 py-3 lg:px-0 px-1 font-[600] rounded-full text-center hover:bg-[#908ec0] border-2 border-[#9580bc] hover:text-white duration-200"
    return(
        <div className="lg:float-left float-none bg-white rounded-3xl lg:w-[27%] w-[94%] h-fit lg:mx-[1%] lg:my-0 my-3 mx-auto lg:pb-10 pb-0">
            <div className="lg:border-b-2 lg:border-b-[#908ec0]">
                <div className="flex lg:flex-col flex-row flex-wrap w-full lg:gap-4 gap-2 lg:py-10 py-5 lg:px-10 px-0">

                    <a className={btnClass}>
                        Account
                    </a>
                    
                    <a className={btnClass}>
                        Schedule Zoom Meeting
                    </a>
                    
                    <a className={btnClass}>
                        Voice Message
                    </a>
                    
                    <a className={btnClass}>
                        Change Password
                    </a>
                    
                    <a className={btnClass}>
                        Log out
                    </a>

                </div>
            </div>

            <div className="border-b-2 border-b-[#908ec0] lg:block hidden">

                <div className="py-6 w-full px-16">
                    <ul className="d font-[500] w-full leading-7">
                        <li className="px-2">Help</li>
                        <li className="px-2">Contact Us </li>
                        <li className="px-2">Terms and Condition </li>
                        <li className="px-2">Privacy Policy</li>
                    </ul>
                </div>

            </div>

            <div className="flex-row gap-3 pl-7 py-5 items-center lg:flex hidden">
                <div><FaFacebook className="inline-block text-[#5c545f] w-[3.5rem] h-[3.5rem]"/></div>
                <div className="text-sm font-[300]">Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.</div>
            </div>
        </div>
    )
}