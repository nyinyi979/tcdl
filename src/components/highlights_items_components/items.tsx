import { Link } from "react-router-dom";
export function HighLightItemHeading({title}:{title:string}){
    const gtClass = 'px-2 lg:px-4 text-[#584f74]'
    return(
        <div className="pt-16 lg:pt-0">
            <h1 className={`oswald font-[500] xxl:text-[4.6rem] xxl:leading-[4.5rem] 
                xll:text-[3rem] lg:text-[2.5rem] md:font-[600] md:text-[2.4rem] 
                md:leading-[3.8rem] xs:text-4xl text-3xl leading-[3.1rem]
                text-primary text-center lg:pt-20 pt-12`}>
               The Highlights 
            </h1>
            <h2 className={`lg:font-[400] md:font-[500] font-[600] xxl:text-5xl text-center md:pt-3 pt-6 
            lg:pb-12 md:pb-6 pb-10 xxl:text-[2rem] xll:leading-[2.7rem] xl:leading-9 xl:text-[1.5rem]
            lg:text-[1.3rem] md:leading-8 xxs:text-[1.1rem] text-base text-primary`}>
                <Link className="hover:text-[#583f74] duration-500" to="/">Home</Link>
                <span className={gtClass}>&gt;</span>
                <Link className="hover:text-[#583f74] duration-500" to="/highlights">Tarot </Link>
                <span className={gtClass}>&gt;</span>
                <span className={gtClass}> {title}</span>
            </h2>
        </div>
    
    )
}

export default function HighLightItem({id}:{id: string}){
    console.log(id);
    const pClass = 'lg:my-3 md:my-2 my-1'
    const imgClass = "w-full h-[95%] bg-cover rounded-md self-center";
    const divClass = 'my-4';
    //THIS IS A DATA STYLE FOR DYNAMIC RENDERING, YOU CAN MATCH THE ID AND RENDER
    //NOW IT IS JUST USED AS A SAMPLE
    const ItemTextAndImg = [
        {
            id: '0',
            title: 'Tarot & Spirituality ',
            topP: <>
                <p className={pClass}>
                    Tarot decks are an effective instrument for self-reflection and spiritual development. 
                    You can use them to connect with your intuition, obtain insight into your subconscious mind, 
                    and receive direction from the higher realms.
                </p>
                <p className={pClass}>
                    Tarot cards are a deck of 78 cards divided into the Major Arcana and Minor Arcana. The Major 
                    Arcana consists of 22 cards that represent archetypes and universal themes, such as the Fool, 
                    the Magician, the High Priestess, the Emperor, the Empress, and the Chariot. The Minor Arcana is 
                    comprised of 56 cards divided among four suits: wands, cups, swords, and pentacles. Each suit 
                    represents a distinct aspect of the human experience: wands represent passion and creativity, 
                    cups emotions and relationships, swords intelligence and communication, and pentacles work and 
                    finances.
                </p>
                <p className={pClass}>
                    Tarot cards can be utilized in numerous methods for spiritual development. Using them for 
                    divination or to seek guidance from the higher realms is a prevalent practice. To accomplish this,
                    you would shuffle the deck and then select a card or cards at random. Then, you can interpret the 
                    cards' meaning based on your intuition and knowledge of tarot symbolism.
                </p>
                <p className={pClass}>
                    Self-reflection is another method of utilizing tarot cards for spiritual development. To accomplish 
                    this, you would first select a card that represents a query or problem in your life. Then, you can 
                    meditate on the card and pay close attention to any thoughts, emotions, or images that arise. This 
                    can help you 
                    develop a deeper understanding of your subconscious mind and yourself.
                </p>    
                <p className={pClass}>
                    Additionally, Tarot cards can be utilized for journaling and creative writing. To accomplish this,
                    you would select a card and then describe its significance. You may also discuss how the card relates 
                    to your personal life experiences and spiritual development.
                </p>
            </>,
            topImg: '/pic2.jpg',
            bottomP: <>
                <p className={pClass}>
                    Here are some specific applications of tarot cards for spiritual development:
                </p>
                <p className={pClass}>
                    To tap into your intuition. Tarot cards can help you communicate with your intuition by providing a 
                    symbolic language through which you can access your subconscious. When you draw a tarot card, 
                    pay close attention to any thoughts, emotions, or images that come to mind. This is the voice of your 
                    intuition.
                </p>
            </>,
            leftImg: '/pic3.jpg',
            rightP : <>
                <p className={pClass}>
                    To develop an understanding of your 
                    subconscious psyche. Tarot cards can help you obtain insight into your subconscious mind by 
                    representing your hidden desires, fears, and beliefs through symbols. Consider the card's 
                    significance and how it relates to your own life experiences when you draw one.
                </p>
                <p className={pClass}>
                    To develop an understanding of your 
                    subconscious psyche. Tarot cards can help you obtain insight into your subconscious mind by 
                    representing your hidden desires, fears, and beliefs through symbols. Consider the card's 
                    significance and how it relates to your own life experiences when you draw one.
                </p>
                <p className={pClass}>
                    To receive direction from higher domains. You can use Tarot cards to obtain guidance 
                    from the higher realms by receiving messages from your angels, guides, and spirit animals.
                    When drawing a tarot card, seek guidance from a higher power and follow your intuition.
                </p>
                <p className={pClass}>
                    To encourage introspection.Tarot cards can be used to encourage self-reflection by 
                    facilitating the exploration of one's thoughts, emotions, and beliefs. Consider the card's 
                    significance and how it relates to your own life experiences when you draw one.
                </p>
            </>,
            rightImg: '/pic4.jpg',
            leftP: <>
                <p className={pClass}>
                    To gain a greater understanding of oneself. Tarot cards can assist you in gaining a deeper 
                    understanding of yourself by revealing your strengths, vulnerabilities, and obstacles. 
                    Consider what the card means to you and how it relates to your own life journey when you 
                    draw a tarot card.
                </p>
                <p className={pClass}>
                    If you are interested in using tarot cards for spiritual development, you must keep a few 
                    factors in mind. First, it is essential to locate a tarot deck to which you feel compelled. 
                    There are numerous tarot decks available; therefore, take the time to peruse your local bookstore
                    or an online retailer until you find one that appeals to you.
                </p>
                <p className={pClass}>            
                    Second, it is essential to understand the fundamentals of tarot symbolism. 
                    Numerous publications and websites can instruct you on the meanings of the various 
                    tarot cards. 
                </p>
            </>,
            restP: <>
                <p className={pClass}>
                    Once you have a basic comprehension of tarot symbolism, you can begin to intuitively interpret 
                    the meaning of the cards.
                </p>
                <p className={pClass}>
                    Finally, patience and an open mind are essential when using tarot cards for spiritual development. It 
                    requires time and practice to learn how to effectively use tarot cards. Do not become disheartened 
                    if you do not see immediate results. You will eventually develop a deeper understanding of tarot and 
                    how to use it for your own spiritual development if you continue to practice and study.
                </p>
                <p className={pClass}>
                    Here are some additional guidelines for employing tarot cards for spiritual development:
                </p>
                <p className={pClass}>
                    Create a sacred space in which to read.This could be a basic area of your home in which you feel r
                    elaxed and at ease. You may wish to decorate your space with candles, crystals, or other sacred 
                    objects.
                </p>
                <p>
                    Set a purpose for your reading before beginning.What are you hoping to discover from the cards?
                </p>
                </>
            }
    ]
    //add for dynamic stuffs here
    return(
        <>
        <HighLightItemHeading title={ItemTextAndImg[0].title}/>
        <div className=" w-full bg-white text-black xxl:text-xl md:text-[19px] text-lg text-left font-[400] leading-9 lg:py-12 py-10">
            <div className="xll:w-[72rem] xl:w-[65rem] lg:w-[97%] md:w-[96%] w-11/12 h-fit mx-auto">
                <div>
                    <h1 className="oswald font-[700] text-[#583f74] xll:text-4xl md:text-[34px] text-[25px] trackingwide">{ItemTextAndImg[0].title}</h1>
                    <h2 className="lg:pt-6 md:pt-5 pt-3 font-[300]">Posted on 2023/10/02</h2>
                </div>
        
                <div className={divClass}>
                    {/* top */}
                    {ItemTextAndImg[0].topP}
                    <img src="/pic2.jpg" alt="" className={`${imgClass} my-5`}/>
                    {/* bottom text */}
                    {ItemTextAndImg[0].bottomP}
                </div>
                
        
                {/* text right */}
                <div className={`${divClass} grid xl:grid-cols-2 lg:grid-cols-1.1 grid-cols-1 lg:gap-7 gap-3`}>
                    <img src={ItemTextAndImg[0].leftImg} alt="" className={imgClass}/>
                    <div>
                        {ItemTextAndImg[0].rightP}
                    </div>
                </div>
                
                {/* text left */}
                <div className={`${divClass} grid xl:grid-cols-2 lg:grid-cols-1.1 grid-cols-1 lg:gap-7 gap-3`}>
                    <div>
                        {ItemTextAndImg[0].leftP}
                    </div>
                    
                    <img src={ItemTextAndImg[0].rightImg} alt="" className={imgClass}/>
                </div>
        
                {/* bottom */}
                <div className={divClass}>
                    <div>
                        {ItemTextAndImg[0].restP}
                    </div>
                </div>
        
            </div>
        </div>
        </>
    )
}