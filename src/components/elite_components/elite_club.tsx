import { h1Class, h2Class_S } from "../utilities";

export default function Elite_Club(){
    return(
        <div className="bg-white text-[#4b2c64] text-center lg:py-24 py-10 leading-10">
            <h1 className={`${h1Class} py-2`}>
                Elite Club Privileges
            </h1>
            <h1 className={`${h2Class_S} text-[#612a60] px-2 md:py-4`}>
                Take a seat, walk along with the reader for<br />
                your personalize coaching and healing
            </h1>
            <div className="xl:w-5/6 lg:w-[92%] w-[95%] mx-auto py-4 text-light_violet font-[400] md:leading-[2.7rem] sm:leading-10 leading-8 md:text-xl ssm:text-lg text-base text-justify">
                <p className="py-2">
                    In 2024, TCDL introduces the Elite Club to provide its members with more individualized readings, 
                    deeper spiritual insights, and more frequent consultations and coaching sessions.
                </p>
                <p className="py-2">
                    The reader will provide tarot readings, birth charts, astrological updates, personalized
                    guidance on spell works, and spiritual practices, as well as other forms of spiritual coaching 
                    and healing as needed for EC members, as well as regular check-ins and priority appointments. 
                    When making an appointment, you'll be given the option.
                </p>
                <p className="py-2">
                    Elite Plus and Elite Star members have access to 160 monthly 30-minute appointments with a
                    bonus of short question responses from the reader the following day. Members of the Elite 
                    Express and Elite tiers receive answers to their short questions within a week, and they 
                    also have access to 30-minute group consultations once every two months.
                </p>
            
            </div>
        </div>
    )
}