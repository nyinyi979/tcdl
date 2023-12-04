import { bg6Class, h2Class, h3Class } from "../utilities";

type ClubItems = {bg:string , name:string, texts:React.ReactNode[] , price:string}[]
export default function EliteClubItems(){
    //background gradient of the items
    //items name
    //list items
    //prices of each item
    //if the items needed to be added, add more in this list, it will update!
    const ClubItems:ClubItems = [
        {bg:'from-[#a2438d] to-[#5c3477]' , 
        name:'Elite PLUS', price: '100' , 
        texts: [<><b>30-mins</b> Zoom readings and consultations</> , 
                <><b>5 questions</b> next-day voice responses</> , 
                <><b>Personalized Spiritual Guidance, Coaching, and Rituals</b></>] 
        },
        {bg:'from-[#f58138] to-[#f26725]' , 
        name:'Elite STAR', price: '80' , 
        texts: [<><b>30-mins</b> Zoom readings and consultations</> , 
                <><b>3 questions</b> within a week with voice response</> , 
                <><b>Personalized Spiritual Guidance, Coaching, and Rituals</b></>],
        },
        {bg:'from-[#0080c5] to-[#004e7c]' , 
        name:'Elite EXPRESS', price: '50' , 
        texts: [<><b>30-mins </b>Zoom group consultations</>, <><b>7 short question responses </b>within a week</>],
        },
        {bg:'from-[#859086] to-[#405658]' , 
        name:'Elite LITE', price: '30' , 
        texts: [<><b>5 short question responses </b>within a week</>],
        },
    ]
    return(
        <div className={`w-full py-20 text-center ${bg6Class}`}>
    
            <h1 className={`${h2Class} py-2 text-secondary`}>The Membership</h1>
            <h1 className={`${h3Class} py-2 text-yellow-100`}>
                Quality of reading remains consistent <br />
                across all membership levels.
            </h1>
            <div className="w-fit h-fit mx-auto flex my-8">
                <div className="rounded-l-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 font-bold bg-primary text-white duration-500 cursor-pointer">English</div>
                <div className="text-[#4b2c64] rounded-r-full lg:w-40 lg:px-12 lg:py-5 lg:text-2xl text-xl w-32 px-7 py-3 bg-gray-300 font-bold hover:bg-primary hover:text-white duration-500 cursor-pointer">မြန်မာ</div>
            </div>


            <div className="grid md:grid-cols-2 grid-cols-1 llg:w-[76%] lg:w-[88%] md:w-11/12 xs:w-[90%] w-10/12 lg:gap-16 md:gap-8 gap-12 mx-auto text-left xll:py-10 lg:py-5">

                {ClubItems.map((Item)=>(
                <div key={Math.random()*1000} className="rounded-xl lg:h-[28rem] md:h-[26rem] md:w-full ssm:w-[74%] relative pb-24 w-fit mx-auto h-fit bg-gray-200 mt-4">
                    <div className={`oswald font-[500] w-full md:text-3xl text-2xl rounded-t-xl xl:px-8 px-5 py-5 text-white bg-gradient-to-r ${Item.bg}`}>{Item.name}</div>
                    
                    <div className="pb-3 lg:px-5 px-3">
                        <ul className="c pl-1 pt-5 lg:text-xl ssm:text-lg xs:text-lg text-base font-[500] ml-4 text-t_violet lg:leading-[2.5rem] leading-[2rem]">
                            {Item.texts.map((text)=>(
                                <li className="ml-4 lg:mt-3 mt-1" key={Math.random()*900}>{text}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="absolute left-7 bottom-10 text-gray-700 font-[600]">
                        <span className="oswald llg:text-5xl lg:text-4xl xs:text-3xl text-2xl text-[#4b2c64] font-[800]">${Item.price}</span>
                        <sub className="oswald relative bottom-0 lg:text-[27px] xl:text-2xl xs:text-xl text-lg font-[600]">/Month</sub>
                    </div>
                    <div className="absolute md:right-8 sm:right-10 sm:bottom-8 xl:px-6 xl:py-5 lg:px-3 lg:py-4 lg:text-base xl:text-lg 
                    sm:py-4 sm:px-4 xs:text-base text-xs px-3 py-3 right-5 xs:bottom-10 bottom-9 font-bold cursor-pointer
                    rounded-full text-white bg-primary hover:bg-secondary hover:text-black duration-500">
                        Subscribe now?
                    </div>
                </div>
                ))}    
                
              

            </div>
        </div>
    )
}