import { h2Class_V, } from "../utilities";

export default function PrivacyPolicy(){
    const liClass = 'ssm:py-3 py-2'
    return(
        <div className="xl:w-[85%] lg:w-[96%] md:w-[92.4%] xs:w-[93%] w-[90%] py-10 border-b-[3px] border-b-gray-400 font-[400] text-left">
            
            <h1 className={`oswald ${h2Class_V} text-dark_violet lg:pt-8 pt-3 pb-3`}>Privacy Policy</h1>
            <p className="text-lg text-stone-600 py-3">
                For a personalised reading these data and info will be collected with high confidentiality for the reader:
            </p>
            <ol className="px-10 lg:py-4 py-2 list-decimal list-outside ssm:text-lg text-base text-stone-600 ">
                <li className={liClass}>Member's DOB</li>
                <li className={liClass}>Member's time and city of birth</li>
                <li className={liClass}>Member's photo without masks/glasses</li>
                <li className={liClass}>Member's full residential address (for delivery purposes)</li>
                <li className={liClass}>Member's current phone number(s)</li>
                <li className={liClass}>Member's valid email address</li>
                <li className={liClass}>Member's preferred type of reading or consultation (may choose more than one)</li>
                <li className={liClass}>Member's preferred process and outcome through the sessions with the reader</li>
            </ol>

        </div>
    )
}