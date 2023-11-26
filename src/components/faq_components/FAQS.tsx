import Monthly from "./monthly_update";
import PrivacyPolicy from "./privacy_policy";

export default function FAQS(){
    return(
        <div className="w-full bg-white">
            
            <div className="w-fit h-fit mx-auto flex my-8 py-8">
                <div className="text-white rounded-l-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-stone-500 font-bold hover:text-white duration-500 cursor-pointer">English</div>
                <div className="text-white rounded-r-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-stone-500 font-bold hover:text-white duration-500 cursor-pointer">မြန်မာ</div>
            </div>

            <div className="lg:w-5/6 w-11/12 mx-auto">

                <div className="w-full font-extralight text-lg text-stone-600 leading-10 border-b-4 border-b-gray-300 py-10">
                    <h1 className="text-4xl my-8 text-violet font-bold">Elite Plus and Elite Star Privileges</h1>
                    <p className="my-3">
                        EP and ES members are allowed a 30-min reading or consultation sessions per month. 
                        EP and ES members are to specify the type of reading or consultation requested upon booking.
                    </p>
                    <p className="my-3">
                        Bookings of appointment sessions are available for selection upon logging in with 
                        membership log in.
                    </p>
                    <p className="my-3">
                        Membership log in info will be sent to the members via email/messenger upon monthly 
                        subscription payment.
                    </p>
                    <p className="my-3">
                        If appointment date needs to be postponed, the previous booking date must be 
                        cancelled first before making a new booking.
                    </p>
                    <p className="my-3">
                        For one-question responses , members may send their text questions to the reader.
                    </p>
                </div>
                
                <div className="w-full font-extralight text-lg text-stone-600 leading-10 py-10">
                    <h1 className="text-3xl my-8 text-black font-bold">
                        Payment FAQs and Policy
                    </h1>
                    <p className="my-3"> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at least 6-month 
                        is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className="my-3">
                        Payment screenshot must be sent to the email for verification.
                    </p>
                    <p className="my-3">
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className="my-3">
                        If the payment lapse for more than two times within 6 months, membership may be 
                        cancelled until further notice.
                    </p>
                </div>

                <div className="w-full font-extralight text-lg text-stone-600 leading-10 border-b-4 border-b-gray-300 py-10">
                    <h1 className="text-4xl my-8 text-violet font-bold">Elite Plus and Elite Star Privileges</h1>
                    <p className="my-3">
                        EP and ES members are allowed a 30-min reading or consultation sessions per month. 
                        EP and ES members are to specify the type of reading or consultation requested upon booking.
                    </p>
                    <p className="my-3">
                        Bookings of appointment sessions are available for selection upon logging in with 
                        membership log in.
                    </p>
                    <p className="my-3">
                        Membership log in info will be sent to the members via email/messenger upon monthly 
                        subscription payment.
                    </p>
                    <p className="my-3">
                        If appointment date needs to be postponed, the previous booking date must be 
                        cancelled first before making a new booking.
                    </p>
                    <p className="my-3">
                        For one-question responses , members may send their text questions to the reader.
                    </p>
                </div>

                <div className="w-full font-extralight text-lg text-stone-600 leading-10 border-b-4 border-b-gray-300 py-10 ">
                    <h1 className="text-3xl my-8 text-black font-bold">
                        Payment FAQs and Policy
                    </h1>
                    <p className="my-3"> 
                        Monthly subscription payment is required on each calendar month. For better 
                        consultation results and progress monitoring, consecutive membership of at least 6-month 
                        is highly recommended for regular consultation check-ins every month.
                    </p>
                    <p className="my-3">
                        Payment screenshot must be sent to the email for verification.
                    </p>
                    <p className="my-3">
                        Payment reminders will be sent to the members one week before the payment is due.
                    </p>
                    <p className="my-3">
                        If the payment lapse for more than two times within 6 months, membership may be 
                        cancelled until further notice.
                    </p>
                </div>

                <PrivacyPolicy />
                <Monthly />
            </div>
        </div>
    )
}