import { h2Class_V, h3Class } from "../utilities";
import Monthly from "./monthly_update";
import PrivacyPolicy from "./privacy_policy";

export default function FAQS(){
    return(
        <div className="w-full bg-white">
            
            <div className="w-fit h-fit mx-auto flex lg:my-8 my-4 py-8">
                <div className="text-white rounded-l-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-[#372c44] font-bold hover:text-white duration-500 cursor-pointer">English</div>
                <div className="text-[#372c44] rounded-r-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-[#9f99a5] font-bold hover:text-white duration-500 cursor-pointer">မြန်မာ</div>
            </div>

            <div className="lg:w-5/6 w-[97%] mx-auto font-[400] lg:leading-10 leading-8">

                <div className="w-full text-lg text-stone-600 border-b-[3px] border-b-gray-300 py-4">
                    <h1 className={`${h2Class_V} text-[#4b2c64]`}>Elite Plus and Elite Star Privileges</h1>
                    <p className="lg:my-5  my-3">
                        EP and ES members are allowed a 30-min reading or consultation sessions per month. 
                        EP and ES members are to specify the type of reading or consultation requested upon booking.
                    </p>
                    <p className="lg:my-5 my-3">
                        Bookings of appointment sessions are available for selection upon logging in with 
                        membership log in.
                    </p>
                    <p className="lg:my-5 my-3">
                        Membership log in info will be sent to the members via email/messenger upon monthly 
                        subscription payment.
                    </p>
                    <p className="lg:my-5 my-3">
                        If appointment date needs to be postponed, the previous booking date must be 
                        cancelled first before making a new booking.
                    </p>
                    <p className="lg:my-5 my-3">
                        For one-question responses , members may send their text questions to the reader.
                    </p>
                </div>
                
                <div className="w-full text-lg text-stone-600 py-4">
                    <h1 className={`${h3Class} text-stone-800`}>
                        Payment FAQs and Policy
                    </h1>
                    <p className="lg:my-5 my-3"> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at least 6-month 
                        is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className="lg:my-5 my-3">
                        Payment screenshot must be sent to the email for verification.
                    </p>
                    <p className="lg:my-5 my-3">
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className="lg:my-5 my-3">
                        If the payment lapse for more than two times within 6 months, membership may be 
                        cancelled until further notice.
                    </p>
                </div>

                <div className="w-full text-lg text-stone-600 border-b-[3px] border-b-gray-300 py-4">
                <h1 className={` ${h2Class_V} text-[#4b2c64]`}>Elite Express and Elite Membership Privileges</h1>

                    <p className="lg:my-5 my-3">
                        EE and EL members are allowed a 30-min group consultation sessions every two month. 
                        EE and EL members are to specify their preferred group consultation slots through 
                        the members' log in system.
                    </p>
                    <p className="lg:my-5 my-3">
                        Bookings of appointment sessions are available for selection upon 
                        logging in with membership log in.
                    </p>
                    <p className="lg:my-5 my-3">
                        Membership log in info will be sent to the members via email/messenger upon 
                        monthly subscription payment.
                    </p>
                    <p className="lg:my-5 my-3">
                        If appointment date needs to be postponed, the previous 
                        booking date must be cancelled first before making a new booking.
                    </p>
                    <p className="lg:my-5 my-3">
                        For next-day one-question responses , members may send their text questions to 
                        the reader. Responses will be sent to the member within a week.
                    </p>
                </div>

                <div className="w-full text-lg text-stone-600 border-b-[3px] border-b-gray-300 py-4">
                    <h1 className={`${h3Class} text-stone-800`}>
                        Payment FAQs and Policy
                    </h1>

                    <p className="lg:my-5 my-3"> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at 
                        least 6-month is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className="lg:my-5 my-3">
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className="lg:my-5 my-3">
                        If the payment lapse for more than two times within 6 months, 
                        membership may be cancelled until further notice.
                    </p>
                </div>

                <PrivacyPolicy />
                <Monthly />
            </div>
        </div>
    )
}