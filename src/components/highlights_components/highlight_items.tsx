import React from 'react';
export default function HighlightItems(){
    const MoreClass = 'text-primary hover:text-secondary duration-500 text-xl font-semibold inline-block my-8 scale-y-125'
    
    const linkClass = "hover:text-white hover:bg-primary duration-500 px-4 py-2 rounded-lg cursor-pointer text-lg font-bold"

    //can use useState to change the pages, here it is just used to check for active color
    const [ active , setActive ] = React.useState('1');
    const contents:{title:string , contents:string, img:string}[] = [
        {title: 'How can I discover my true purpose?' , contents: 'Discovering your true purpose is a journey, not a destination. It takes time, self-reflection, and experimentation.' , img: '/img6.png'},
        {title: 'How can I achieve work-life balance?' , contents: 'Work-life balance is the ability to successfully manage your work and personal life without sacrificing either.' , img: '/img7.png'},
        {title: 'How can I reduce my stress?' , contents: 'Stress is a normal and often healthy response to challenges in our lives. It can help us to stay focused and motivated. However, .' , img: '/img8.png'},
        {title: 'Inner peace' , contents: 'Discovering your true purpose is a journey, not a destination. It takes time, self-reflection, and experimentation.' , img: '/img9.png'},
        {title: 'Are they energized amulets?' , contents: 'Energized amulets are amulets that have been imbued with energy, typically through a ritual or ceremony. This energy is said to give the amulet special powers or properties,' , img: '/img10.png'},
        {title: 'Dark colored amulets' , contents: `Since prehistoric times, particularly during the emergence of Egypt's pharaohs, people have sought spiritual protection by donning amulets, the religious equivalent of armor.` , img: '/img11.png'},
        {title: 'Tarot and spirituality' , contents: 'Tarot spirituality is a way of using the tarot cards to connect with your higher self and the divine. It is a practice that can help you to' , img: '/img12.png'},
        {title: 'Healing generational trauma' , contents: 'Generational trauma is the emotional and psychological impact of trauma that is passed down from one generation to the next. It can be caused by a variety of experiences,' , img: '/img13.png'},
        {title: 'Next career or financial goal' , contents: 'What comes next in your professional or economic life is totally up to you. However, here are some general prediction according to zodiac' , img: '/img14.png'},
    ]
    return(
        <div className="bg-white py-10">
            <div className="grid md:grid-cols-3 grid-cols-1 lg:w-[88%] md:w-[96%] w-[60%] lg:gap-10 gap-5 mx-auto">
            {contents.map((content)=>(
                <div key={content.title}>
                    <img src={content.img} alt="img" className="w-full lg:h-60 md:h-52 h-60 bg-cover rounded-md my-2"/>
                    <h1 className="text-[#4b3a5f] my-5 lg:scale-y-125 scale-y-105 lg:leading-7 lg:text-2xl text-xl lg:font-bold font-semibold">{content.title}</h1>
                    <div className="text-[1.2rem] text-left lg:leading-9 leading-6 text-gray-900" style={{fontWeight: 100}}>{content.contents}</div>
                    <a href="#" className={MoreClass}>More</a>
                </div>
            ))}
            </div>
            <div className="w-fit mx-auto flex gap-5 my-10">
                <a onClick={()=>{setActive('1')}} href="#" className={`${linkClass} ${active === '1'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>1</a>
                <a onClick={()=>{setActive('2')}} href="#" className={`${linkClass} ${active === '2'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>2</a>
                <a onClick={()=>{setActive('3')}} href="#" className={`${linkClass} ${active === '3'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>3</a>
                <a onClick={()=>{setActive('4')}} href="#" className={`${linkClass} ${active === '4'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>4</a>
                <a onClick={()=>{setActive('5')}} href="#" className={`${linkClass} ${active === '5'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>5</a>
            </div>
        </div>
    )
}