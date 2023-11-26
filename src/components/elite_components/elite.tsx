export default function TheElite(){
    return(
        <div className="text-center py-5">

            <h1 className="lg:text-5xl md:text-4xl text-3xl pb-3 text-primary font-bold">Be an Elite?</h1>
            <h1 className="lg:text-3xl md:text-2xl text-xl py-5 text-secondary font-bold">Founder's Message</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 py-10">

                <div id='image' className="col-span-1 w-full mx-auto relative md:hidden block">
                    <img src="/pic1.png" alt="" className="bg-cover w-[20rem] h-[20rem] mt-10 rounded-xl my-3 mx-auto"/>
                </div>
                <div className="lg:col-span-2 col-span-2 text-white text-xl mx-auto lg:w-5/6 w-11/12 py-6 text-justify pr-4" style={{fontWeight:100,lineHeight:'2.4rem'}}>
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
                    <img src="/pic1.png" alt="" className="bg-cover lg:w-[22rem] lg:h-[22rem] lg:ml-5 ml-0 w-[18rem] h-[18rem] mt-10 rounded-xl float-left"/>
                </div>

            </div>
        </div>
    )
}