import React from 'react';
export default function HighlightItems(){
    const MoreClass = 'oswald text-primary hover:text-secondary duration-500 xll:text-2xl xs:text-xl text-lg font-[400] inline-block xs:my-8 my-4'
    
    const linkClass = "hover:text-white hover:bg-primary duration-500 px-5 py-3 rounded-lg cursor-pointer xs:text-lg text-base font-bold"

    //can use useState to change the pages, here it is just used to check for active color
    const [ active , setActive ] = React.useState('1');
    // Contents data , you can add more if you want to render more
    const contents:{title:string , contents:string, img:string, id:string}[] = [
        {title: 'How can I discover my true purpose?' , 
        contents:  `Discovering your true purpose is a journey, not a destination. It takes time, 
        self-reflection, and experimentation.` , 
        img: '/img6.png' , id: '1'},
        {title: 'How can I achieve work-life balance?' , 
        contents: `Work-life balance is the ability to successfully manage your work and personal 
        life without sacrificing either.` , 
        img: '/img7.png' , id: '1'},
        {title: 'How can I reduce my stress?' , 
        contents: `Stress is a normal and often healthy response to challenges in our lives. 
        It can help us to stay focused and motivated. However, .` , 
        img: '/img8.png' , id: '1'},
        {title: 'Inner peace' , 
        contents: `Discovering your true purpose is a journey, not a destination. It takes time,
        self-reflection, and experimentation.` , 
        img: '/img9.png' , id: '1'},
        {title: 'Are they energized amulets?' , 
        contents: `Energized amulets are amulets that have been imbued with energy, typically 
        through a ritual or ceremony. This energy is said to give the amulet special powers or properties,` , 
        img: '/img10.png' , id: '1'},
        {title: 'Dark colored amulets' , 
        contents: `Since prehistoric times, particularly during the emergence of Egypt's pharaohs, people
        have sought spiritual protection by donning amulets, the religious equivalent of armor.` , 
        img: '/img11.png' , id: '1'},
        {title: 'Tarot and spirituality' , 
        contents: `Tarot spirituality is a way of using the tarot cards to connect with your higher self 
        and the divine. It is a practice that can help you to` , 
        img: '/img12.png' , id: '1'},
        {title: 'Healing generational trauma' , 
        contents: `Generational trauma is the emotional and psychological impact of trauma that is passed
        down from one generation to the next. It can be caused by a variety of experiences,` , 
        img: '/img13.png' , id: '1'},
        {title: 'Next career or financial goal' , 
        contents: `What comes next in your professional or economic life is totally up to you. However, 
        here are some general prediction according to zodiac` , 
        img: '/img14.png' , id: '1'},
    ]
    return(
        <div className="bg-white xs:py-10 py-5">
            <div className="grid md:grid-cols-3 grid-cols-1 xll:w-[80%] xl:w-[88%] lg:w-[87%] md:w-[94%] xs:w-[22rem] w-[18rem] lg:gap-8 gap-5 mx-auto py-10">

            {contents.map((content)=>(
                <div key={content.title}>
                    <img src={content.img} alt="img" className="w-full xl:h-72 lg:h-52 md:h-44 h-60 bg-cover rounded-md my-2"/>
                    <h1 className="oswald text-dark_violet my-5 xl:text-4xl ssm:text-2xl text-xl font-[400]">{content.title}</h1>
                    <div className="font-[400] xl:text-xl ssm:text-base text-sm leading-8 xl:leading-10 text-gray-900 lg:line-clamp-3 line-clamp-2">{content.contents}</div>
                    <a href={`/highlight/${content.id}`} className={MoreClass}>More</a>
                </div>
            ))}
            
            </div>
            <div className="w-fit mx-auto flex lg:gap-5 gap-3 my-10">
                <a onClick={()=>{setActive('1')}} href="#" className={`${linkClass} ${active === '1'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>1</a>
                <a onClick={()=>{setActive('2')}} href="#" className={`${linkClass} ${active === '2'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>2</a>
                <a onClick={()=>{setActive('3')}} href="#" className={`${linkClass} ${active === '3'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>3</a>
                <a onClick={()=>{setActive('4')}} href="#" className={`${linkClass} ${active === '4'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>4</a>
                <a onClick={()=>{setActive('5')}} href="#" className={`${linkClass} ${active === '5'? 'text-white bg-primary' : 'text-stone-500 bg-stone-200'}`}>5</a>
            </div>
        </div>
    )
} 