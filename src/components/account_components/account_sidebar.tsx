
export default function AccountSidebar(){
    
    return(
        <>
            <div className="border-t-2 border-t-[#908ec0] block">

                <div className="py-6 w-full px-16">
                    <ul className="d font-[500] w-full leading-7 md:text-base text-sm">
                        <li className="px-3">Help</li>
                        <li className="px-3">Contact Us </li>
                        <li className="px-3">Terms and Condition </li>
                        <li className="px-3">Privacy Policy</li>
                    </ul>
                </div>

            </div>

            <div className="flex-row gap-3 md:pl-12 px-7 py-5 items-center flex border-t-2 border-t-[#908ec0]">
                <div><img src='/fb-icon.png' className="inline-block text-violet xxl:w-[5rem] lg:w-[8rem] w-[4rem] h-fit"/></div>
                <div className="ssm:text-sm text-xs font-[300]">Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.</div>
            </div>
        </>
    )
}