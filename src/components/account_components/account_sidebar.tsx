export default function AccountSidebar(){
    return(
        <>
            <div className="border-t-2 border-t-light_blue block">

                <div className="py-6 w-full px-16">
                    <ul className="d font-[600] w-full leading-7 md:text-base text-sm">
                        <li className="px-3 py-[2px]">Help</li>
                        <li className="px-3 py-[2px]">Contact Us </li>
                        <li className="px-3 py-[2px]">Terms and Condition </li>
                        <li className="px-3 py-[2px]">Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="flex-row gap-3 md:pl-12 px-5 py-5 items-center flex border-t-2 border-t-light_blue">
                <div><img src='/fb-icon2.png' className="inline-block lg:w-[86px] w-[59px] h-fit"/></div>
                <div className=" text-xs font-[300]">Copyright © 2024 The Card's Don't Lie (TCDL). All Rights Reserved.</div>
            </div>
        </>
    )
}

