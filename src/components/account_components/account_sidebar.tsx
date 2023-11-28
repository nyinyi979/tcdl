import { FaFacebook } from "react-icons/fa6"

export default function AccountSidebar(){
    
    return(
        <>

            <div className="border-b-2 border-b-[#908ec0] lg:block hidden">

                <div className="py-6 w-full px-16">
                    <ul className="d font-[500] w-full leading-7">
                        <li className="px-3">Help</li>
                        <li className="px-3">Contact Us </li>
                        <li className="px-3">Terms and Condition </li>
                        <li className="px-3">Privacy Policy</li>
                    </ul>
                </div>

            </div>

            <div className="flex-row gap-3 pl-7 py-5 items-center lg:flex hidden">
                <div><FaFacebook className="inline-block text-[#5c545f] w-[3.5rem] h-[3.5rem]"/></div>
                <div className="text-sm font-[300]">Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.</div>
            </div>
        </>
    )
}