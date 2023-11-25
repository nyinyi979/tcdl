import { bg3Class, quoteClass, useAnimateLeft, useAnimateRight, useAnimateTop } from '../utilities';
export default function Private(){
    useAnimateLeft('private');
    useAnimateRight('private_group');
    useAnimateLeft('private_text');
    useAnimateRight('mySwiper');
    useAnimateTop('private_btn')
    return(
        <div className={`text-white text-center py-20 ${bg3Class}`}>
            <h1 id='private' className="md:text-3xl text-2xl font-bold">The Private Group</h1>
            <h2 id='private_group' className="md:text-2xl text-xl font-bold py-8">A Private Group of <br /> Seeking and Awakening Individuals</h2>
            <div id='private_text' className="lg:w-5/6 w-11/12 text-justify mx-auto md:text-xl text-lg" style={{lineHeight:'2.6rem'}}>
                The initial phase of the trip was tarot card readings, but it has since expanded to encompass 
                many forms of energy healing, runic readings, astrological/birth chart readings, spiritual practices, 
                and even the acquisition of knowledge in global languages and guidance. Consequently, she has made the
                decision to pursue a career as a dedicated practitioner of healing, an educator, and a facilitator of
                spiritual guidance. 
            </div>

            <div id='mySwiper' className="lg:w-5/6 w-11/12 mx-auto ">
                    <blockquote id="quote" className={`text-justify mx-auto md:text-2xl text-xl leading-8 my-7 ${quoteClass}`}>
                    Her primary mission is to serve as a source of enlightenment and support for individuals and 
                    communities seeking answers and guidance on a regular basic, hence, the Elite Club
                    </blockquote>
            </div>
            <a id='private_btn' href="" className="block w-fit mx-auto no-underline text-lg font-semibold bg-primary hover:bg-secondary hover:text-black py-4 px-10 rounded-full duration-500">Be an Elite?</a>
        </div>
    )
}