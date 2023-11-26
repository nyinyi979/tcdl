export default function PrivacyPolicy(){
    return(
        <div className="lg:w-5/6 w-11/12 py-10 border-b-4 border-b-gray-400">
            
            <h1 className="text-4xl my-8 text-violet font-bold">Privacy Policy</h1>
            <p className="font-extralight text-lg text-stone-600 py-3">
                For a personalised reading these data and info will be collected with high confidentiality for the reader:
            </p>
            <ol className="px-20 py-4 list-decimal list-outside font-extralight text-lg text-stone-600 ">
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