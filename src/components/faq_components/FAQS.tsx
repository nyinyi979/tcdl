import { h3FAQ, h3FAQ2 } from "../utilities";
import Monthly from "./monthly_update";
import PrivacyPolicy from "./privacy_policy";
export default function FAQS(){
    const pillClass = `ssm:text-xl text-lg xl:w-[150px] xl:py-5 xl:text-2xl w-32 px-10 py-3
    font-[700] duration-500 cursor-pointer`;
    const pClass = 'lg:my-[13px] xl:my-6 xl:leading-[34px] md:my-4 my-3 text-[#443548] font-[400] leading-[30px] align-baseline bg-transparent md:text-[19px] xs:text-[18px] text-base';
    return(
        <div className="w-full bg-white pt-4 xll:pb-32 lg:pb-20 pb-10">
 
            <div className="w-fit h-fit mx-auto flex xl:py-12 md:py-8 py-5">
                <div className={`text-white rounded-l-full ${pillClass} bg-[#372c44] hover:text-white`}>English</div>
                <div className={`text-violet rounded-r-full ${pillClass} bg-[#ccc5d4] font-bold hover:text-white`}>မြန်မာ</div>
            </div>
            
            { /* adjust the width and padding of the whole FAQ page here */}
            <div className={`xll:w-[1150px] xl:w-[1000px] llg:w-[1000px] lg:w-[97%] md:w-[96%] xs:w-[94%] w-[90%]
                mx-auto font-[400] lg:leading-[50px] md:leading-10 leading-9 text-left `}>

                <div className={'w-full border-b-[3px] border-b-gray-300 py-4 xs:pb-6 xl:pb-10 pb-4'}>
                    <h1 className={`${h3FAQ} text-dark_violet`} style={{lineHeight: '2rem'}}>Elite Plus and Elite Star Privileges</h1>
                    <p className={`lg:my-5 my-3 ${pClass}`}>
                        EP and ES members are allowed a 30-min reading or consultation sessions per month. 
                        EP and ES members are to specify the type of reading or consultation requested upon booking.
                    </p>
                    <p className={pClass}>
                        Bookings of appointment sessions are available for selection upon logging in with 
                        membership log in.
                    </p>
                    <p className={pClass}>
                        Membership log in info will be sent to the members via email/messenger upon monthly 
                        subscription payment.
                    </p>
                    <p className={pClass}>
                        If appointment date needs to be postponed, the previous booking date must be 
                        cancelled first before making a new booking.
                    </p>
                    <p className={pClass}>
                        For one-question responses , members may send their text questions to the reader.
                    </p>
                </div>
                
                <div className="w-full ssm:text-lg text-base text-stone-600 xl:pt-10 xs:pt-6 pt-4">
                    <h1 className={`${h3FAQ2} text-stone-800`}>
                        Payment FAQs and Policy
                    </h1>
                    <p className={pClass}> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at least 6-month 
                        is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className={pClass}>
                        Payment screenshot must be sent to the email for verification.
                    </p>
                    <p className={pClass}>
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className={pClass}>
                        If the payment lapse for more than two times within 6 months, membership may be 
                        cancelled until further notice.
                    </p>
                </div>

                <div className={`w-full border-b-[3px] border-b-gray-300 pb-4 xs:pb-7 lg:pb-16`}>
                    <h1 className={` ${h3FAQ} text-dark_violet`} style={{lineHeight: '2rem'}}>Elite Express and Elite Membership Privileges</h1>

                    <p className={pClass}>
                        EE and EL members are allowed a 30-min group consultation sessions every two month. 
                        EE and EL members are to specify their preferred group consultation slots through 
                        the members' log in system.
                    </p>
                    <p className={pClass}>
                        Bookings of appointment sessions are available for selection upon 
                        logging in with membership log in.
                    </p>
                    <p className={pClass}>
                        Membership log in info will be sent to the members via email/messenger upon 
                        monthly subscription payment.
                    </p>
                    <p className={pClass}>
                        If appointment date needs to be postponed, the previous 
                        booking date must be cancelled first before making a new booking.
                    </p>
                    <p className={pClass}>
                        For next-day one-question responses , members may send their text questions to 
                        the reader. Responses will be sent to the member within a week.
                    </p>
                </div>

                <div className={`w-full border-b-[3px] border-b-gray-300 py-4 xl:pb-10 xs:pb-6 lg:py-7`}>
                    <h1 className={`${h3FAQ2} text-stone-800`}>
                        Payment FAQs and Policy
                    </h1>

                    <p className={pClass}> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at 
                        least 6-month is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className={pClass}>
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className={pClass}>
                        If the payment lapse for more than two times within 6 months, 
                        membership may be cancelled until further notice.
                    </p>
                </div>

                {/* these two componenets are added here for the same width and padding, otherwise 
                you would have to adjust it for two times */}
                <PrivacyPolicy />
                <Monthly />
            </div>
        </div>
    )
}