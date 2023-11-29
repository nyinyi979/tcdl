import { bg6Class, h1Class, h2Class } from "../utilities";

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
        <div className={`w-full py-20 text-center ${bg6Class}`}>
    
            <h1 className={`${h1Class} py-2 text-secondary`}>The Membership</h1>
            <h1 className={`${h2Class} py-2 text-yellow-100`}>
                Quality of reading remains consistent <br />
                across all membership levels.
            </h1>
            <div className="w-fit h-fit mx-auto flex my-8">
                <div className="rounded-l-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 font-bold bg-primary text-white duration-500 cursor-pointer">English</div>
                <div className="text-[#4b2c64] rounded-r-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-gray-300 font-bold hover:bg-primary hover:text-white duration-500 cursor-pointer">မြန်မာ</div>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 llg:w-[75%] lg:w-[88%] md:w-11/12 w-10/12 lg:gap-16 md:gap-8 gap-12 mx-auto text-left xll:py-10 lg:py-5">

                {bg.map((value , index)=>(
                <div key={index} className="rounded-xl md:h-[28rem] md:w-full ssm:w-[74%] relative pb-24 w-fit mx-auto h-fit bg-gray-200 mt-4">
                    <div className={`oswald font-[500] w-full text-3xl rounded-t-xl px-5 py-5 text-white bg-gradient-to-r ${value}`}>{items[index]}</div>
                    <div className="pb-3 px-2">
                        <ul className="c pl-1 pt-5 md:text-xl text-lg font-[500] ml-4 text-t_violet lg:leading-[2.5rem] leading-[2rem]">
                            {texts[index].map((text)=>(
                                <li className="ml-4 lg:mt-3 mt-1" key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="absolute left-7 bottom-10 text-gray-700 font-[600]">
                        <span className="oswald llg:text-5xl lg:text-4xl text-3xl text-[#4b2c64] font-[800]">${prices[index]}</span>
                        <sub className="oswald relative bottom-0 lg:text-[27px] xl:text-2xl text-xl font-[600]">/Month</sub>
                    </div>
                    <div className="absolute right-10 bottom-8 xl:px-6 xl:py-5 lg:px-3 lg:py-4 lg:text-base xl:text-lg font-bold py-4 text-base px-4 cursor-pointer
                     rounded-full text-white bg-primary hover:bg-secondary hover:text-black duration-500">
                        Subscribe now?
                    </div>
                </div>
                ))}    
                
              

            </div>
        </div>
    )
}