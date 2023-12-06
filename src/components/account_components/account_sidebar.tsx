export default function AccountSidebar(){
    return(
        <>
            <div className="border-t-2 border-t-light_gray block">

                <div className="py-6 xl:py-8 w-fit lg:w-full mx-auto xl:px-20 lg:px-10 px-16">
                    <ul className="d font-[600] text-[#4b2c64] w-full leading-7 md:text-base text-sm">
                        <li className="px-3 py-[2px]">Help</li>
                        <li className="px-3 py-[2px]">Contact Us </li>
                        <li className="px-3 py-[2px]">Terms and Condition </li>
                        <li className="px-3 py-[2px]">Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="flex-row gap-4 md:pl-12 md:pr-0 px-4 py-5 items-center flex border-t-2 border-t-light_gray">
                <div><img src='/fb-icon2.png' className="inline-block lg:w-[86px] w-[59px] h-fit"/></div>
                <div className="text-[#333] text-xs font-[400] leading-5 ml-2">Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.</div>
            </div>
        </>
    )
}

