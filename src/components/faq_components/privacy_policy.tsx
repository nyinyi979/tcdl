import { h3FAQ } from "../utilities";

export default function PrivacyPolicy(){
    const pClass = `lg:my-[13px] xl:my-5 xl:leading-[34px] my-3 text-light_violet font-[400] leading-[30px] 
    align-baseline bg-transparent md:text-[19px] xs:text-[18px] text-base`;
    return(
        <div className="border-b-[3px] border-b-gray-300 pb-4 lg:pb-12">
            
            <h1 className={`oswald ${h3FAQ} xl:pt-20 lg:pt-12 xs:pt-7 pt-4 text-dark_violet `}>Privacy Policy</h1>
            <p className={pClass}>
                For a personalised reading these data and info will be collected with high confidentiality for the reader:
            </p>
            <ol className="xl:px-16 px-10 list-decimal list-outside">
                <li className={pClass}>Member's DOB</li>
                <li className={pClass}>Member's time and city of birth</li>
                <li className={pClass}>Member's photo without masks/glasses</li>
                <li className={pClass}>Member's full residential address (for delivery purposes)</li>
                <li className={pClass}>Member's current phone number(s)</li>
                <li className={pClass}>Member's valid email address</li>
                <li className={pClass}>Member's preferred type of reading or consultation (may choose more than one)</li>
                <li className={pClass}>Member's preferred process and outcome through the sessions with the reader</li>
            </ol>

        </div>
    )
}