import FAQAccordion from "./accordion";
import Monthly from "./monthly_update";
import PrivacyPolicy from "./privacy_policy";
import Privileges from "./privileges";
export default function FAQS(){
    const pillClass = `ssm:text-xl text-lg xl:w-[150px] xl:py-5 xl:text-2xl w-32 px-10 py-3
    font-[700] duration-500 cursor-pointer`;
    return(
        <div className="w-full bg-white pt-4 xll:pb-32 lg:pb-20 pb-10">
 
            <div className="w-fit h-fit mx-auto flex xl:py-12 md:py-8 py-5">
                <div className={`text-white rounded-l-full ${pillClass} bg-[#372c44] hover:text-white`}>
                    English
                </div>
                <div className={`text-violet rounded-r-full ${pillClass} bg-[#ccc5d4] font-bold hover:text-white`}>
                    မြန်မာ
                </div>
            </div>
            
            { /* adjust the width and padding of the whole FAQ page here */}
            <div className={`xll:w-[1150px] xl:w-[1000px] llg:w-[1000px] lg:w-[97%] md:w-[96%] xs:w-[94%] w-[90%]
                mx-auto font-[400] lg:leading-[50px] md:leading-10 leading-9 text-left `}>
                {/* these  componenets are added here for the same width and padding, otherwise 
                you would have to adjust it for two times */}
                <Privileges />
                <PrivacyPolicy />
                <Monthly />
                <FAQAccordion />
            </div>
        </div>
    )
}