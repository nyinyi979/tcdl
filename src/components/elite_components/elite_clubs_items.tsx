import { bg6Class } from "../utilities";

export default function EliteClubItems(){
    const bg = ['from-[#a2438d] to-[#5c3477]' , 'from-[#f58138] to-[#f26725]' , 'from-[#0080c5] to-[#004e7c]' ,
        'from-[#859086] to-[#405658]'];
    const items = ['Elite PLUS' , 'Elite STAR' , 'Elite EXPRESS' , 'Elite LITE' ];
    const texts = [
        [<><b>30-mins</b> Zoom readings and consultations</> , <><b>5 questions</b> next-day voice responses</> , <><b>Personalized Spiritual Guidance, Coaching, and Rituals</b></>],
        [<><b>30-mins</b> Zoom readings and consultations</> , <><b>3 questions</b> within a week with voice response</> , <><b>Personalized Spiritual Guidance, Coaching, and Rituals</b></>],
        [<><b>30-mins </b>Zoom group consultations</>, <><b>7 short question responses </b>within a week</>],
        [<><b>5 short question responses</b>within a week</>]
    ];
    const prices = ['100' , '80' , '50' , '30'];
    return(
        <div className={`w-full py-20 ${bg6Class}`}>
    
            <h1 className="lg:text-4xl text-center text-3xl pb-3 text-secondary font-bold tracking-[-0.04rem]">The Membership</h1>
            <h1 className="lg:text-2xl text-center text-xl pt-5 text-white font-bold tracking-[-0.03rem]">
                Quality of reading remains consistent <br />
                across all membership levels.
            </h1>
            <div className="w-fit h-fit mx-auto flex my-8">
                <div className="text-[#4b2c64] rounded-l-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-gray-300 font-bold hover:bg-primary hover:text-white duration-500 cursor-pointer">English</div>
                <div className="text-[#4b2c64] rounded-r-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-gray-300 font-bold hover:bg-primary hover:text-white duration-500 cursor-pointer">မြန်မာ</div>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 lg:w-9/12 md:w-11/12 w-9/12 lg:gap-12 md:gap-8 gap-12 mx-auto">

                {bg.map((value , index)=>(
                <div key={index} className="rounded-xl relative lg:h-[30rem] md:h-fit md:w-full pb-20 w-[25rem] mx-auto h-fit bg-gray-200 mt-4">
                    <div className={`lg:font-bold w-full text-3xl rounded-t-xl lg:px-6 lg:py-7 py-5 px-4 text-white  bg-gradient-to-r ${value}`}>{items[index]}</div>
                    <div className="pb-3">
                        <ul className="p-4 pt-5 lg:text-xl text-lg ml-4 text-t_violet lg:leading-[2.5rem] leading-[2rem]">
                            {texts[index].map((text)=>(
                                <li className="ml-4 lg:mt-3 mt-1" key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="absolute left-10 bottom-10 text-gray-700 font-[600] tracking-tighter">
                        <span className="lg:text-4xl text-2xl text-[#4b2c64] font-extrabold">${prices[index]}</span>
                        <sub className="relative bottom-0 xl:text-2xl text-xl ">/Month</sub>
                    </div>
                    <div className="absolute right-10 bottom-8 lg:px-3 lg:py-4 lg:text-base xl:text-lg font-bold py-4 text-base px-4 cursor-pointer
                     rounded-full text-white bg-primary hover:bg-secondary hover:text-black duration-500">
                        Subscribe now?
                    </div>
                </div>
                ))}    
                 
                {bg.map((value , index)=>(
                <div key={index} className="rounded-xl relative lg:h-[30rem] md:h-fit md:w-full pb-20 w-[25rem] mx-auto h-fit bg-gray-200 mt-4">
                    <div className={`lg:font-bold w-full text-3xl rounded-t-xl lg:px-6 lg:py-7 py-5 px-4 text-white  bg-gradient-to-r ${value}`}>{items[index]}</div>
                    <div className="pb-3">
                        <ul className="p-4 pt-5 lg:text-xl text-lg ml-4 text-t_violet lg:leading-[2.5rem] leading-[2rem]">
                            {texts[index].map((text)=>(
                                <li className="ml-4 lg:mt-3 mt-1" key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="absolute left-10 bottom-10 text-gray-700 font-[600] tracking-tighter">
                        <span className="lg:text-4xl text-2xl text-[#4b2c64] font-extrabold">${prices[index]}</span>
                        <sub className="relative bottom-0 xl:text-2xl text-xl ">/Month</sub>
                    </div>
                    <div className="absolute right-10 bottom-8 lg:px-3 lg:py-4 lg:text-base xl:text-lg font-bold py-4 text-base px-4 cursor-pointer
                     rounded-full text-white bg-primary hover:bg-secondary hover:text-black duration-500">
                        Subscribe now?
                    </div>
                </div>
                ))}     
              

            </div>
        </div>
    )
}