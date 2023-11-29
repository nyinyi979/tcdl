import { h2Class_V, } from "../utilities";

export default function PrivacyPolicy(){
    return(
        <div className="lg:w-5/6 w-11/12 py-10 border-b-[3px] border-b-gray-400 font-[400] md:text-left text-justify">
            
            <h1 className={`oswald ${h2Class_V} text-[#583f74] lg:pt-8 pt-3 pb-3`}>Privacy Policy</h1>
            <p className="text-lg text-stone-600 py-3">
                For a personalised reading these data and info will be collected with high confidentiality for the reader:
            </p>
            <ol className="px-10 lg:py-4 py-2 list-decimal list-outside text-lg text-stone-600 ">
                <li className="py-3">Member's DOB</li>
                <li className="py-3">Member's time and city of birth</li>
                <li className="py-3">Member's photo without masks/glasses</li>
                <li className="py-3">Member's full residential address (for delivery purposes)</li>
                <li className="py-3">Member's current phone number(s)</li>
                <li className="py-3">Member's valid email address</li>
                <li className="py-3">Member's preferred type of reading or consultation (may choose more than one)</li>
                <li className="py-3">Member's preferred process and outcome through the sessions with the reader</li>
            </ol>

        </div>
    )
}