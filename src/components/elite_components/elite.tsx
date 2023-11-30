import React from 'react'
import { h1Class, h2Class } from "../utilities";

export default function TheElite(){
    React.useEffect(()=>{
    }, [])
    return(
        <div className={`text-center pb-16`}>

            <h1 className={`${h1Class} text-primary py-4`}>Be an Elite?</h1>
            <h1 className={`${h2Class} text-secondary pt-5`}>Founder's Message</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:py-10 py-5 lg:pl-10 pl-0">

                <div id='image' className="col-span-1 xs:w-full w-[96%] mx-auto relative md:hidden block">
                    <img src="/pic1.png" alt="" className="bg-cover w-[20rem] h-[20rem] mt-10 rounded-xl my-3 mx-auto"/>
                </div>
                <div className="xl:w-5/6 lg:[w-90%] sm:w-[92%] w-[88%] lg:col-span-2 col-span-2 text-white md:text-xl text-lg mx-auto text-justify pr-4 font-[400]" style={{lineHeight:'2.2rem'}}>
                    <p className="py-2">
                        Magic exists in you. But most of us don't know about it and completely untapped.
                        We were born with this ability, therefore you've always had it. It's a quest you must undertake;
                        I have no doubt that you contain inside yourself the light, the magic, or whatever you like to call
                        it.
                    </p>
                    <p className="py-2">
                        As the founder of The Cards Don't Lie, it is my mission to assist you in recognizing and developing 
                        this talent.
                    </p>
                    <p className="py-2">
                        Know that we are in a completely private and safe environment where you may be who you truly are as
                        we go on this adventure together.
                    </p>
                    <p className="py-2">
                        Through my services, which mostly consist of tarot, astrological, or runic readings, spiritual 
                        consultations, coaching, the sharing of spiritual practices, and healing procedures, I will help you 
                        find the light, or rather, rediscover the upgraded version of you.
                    </p>
                    <p className="py-2">
                        Hello, my name is Thazin Soe, and I am here to introduce myself as Version 2.0, a
                        person who is constantly working to improve their mental, physical, and spiritual self. 
                        You can do it, too, if I can. I'm here to guide you to the light.
                    </p>
                    <p className="py-2">
                        Thazin Soe <br />
                        The Founder <br />
                        The Cards Don't Lie <br />
                    </p>
                </div>

                <div id='image' className="md:block hidden col-span-1 w-full mx-auto relative">
                    <img src="/pic1.png" alt="" className="bg-cover lg:w-[22rem] lg:h-[22rem] ml-0 w-[18rem] h-[18rem] xl:mt-10 mt-5 rounded-xl float-left"/>
                </div>

            </div>
        </div>
    )
}
