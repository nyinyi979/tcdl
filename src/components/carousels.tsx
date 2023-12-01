import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';
type items = {id: number, img: string , heading: React.ReactNode , paragraph: string}[]
export default function ImageCarousel(){
    const headingClass = "lg:text-2xl md:text-xl ssm:text-lg text-base text-secondary font-semibold py-5";
    const pClass = "text-white font-[400] lg:text-xl ssm:text-base text-sm leading-10 text-justify"
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold inline-block my-8'
    const items:items = [
        {
            id: 1,
            img: '/img2.jpg',
            heading: <>Tarot &amp; Spirituality </>,
            paragraph: `Tarot spirituality is a way of using the tarot cards to connect with your higher self 
            and the divine. It is a practice that can help you to ...`
        },
        {
            id: 2,
            img: '/img3.jpg',
            heading: <>How the moon affects your psyhe</>,
            paragraph: `
            The majority of tarot readers assert that the cards provide the clearest
            answers during the full moon. It reflects the diviner's enhanced intuition.`
        },
        {
            id: 3,
            img: '/img4.jpg',
            heading: <>The power of amulets</>,
            paragraph: `
            Since prehistoric times, particularly during the emergence of Egypt's pharaohs, 
            people have sought spiritual protection by donning amulets, the religious equivalent of armor.`
        },
        {
            id: 2,
            img: '/img3.jpg',
            heading: <>How the moon affects your psyhe</>,
            paragraph: `
            The majority of tarot readers assert that the cards provide the clearest
            answers during the full moon. It reflects the diviner's enhanced intuition.`
        },
        {
            id: 3,
            img: '/img4.jpg',
            heading: <>The power of amulets</>,
            paragraph: `
            Since prehistoric times, particularly during the emergence of Egypt's pharaohs, 
            people have sought spiritual protection by donning amulets, the religious equivalent of armor.`
        },
    ]
    return(
        <>
        <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
        pagination={{clickable:true}}
        // Swiper breakpoints , screenSize(>=) : {spaceBetweenEachComponents , slidesVisible per view}
        breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 40 }, 
        768: {spaceBetween: 30,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
        , 1099 : {spaceBetween: 80, slidesPerView: 3} , 1199 : {spaceBetween: 70, slidesPerView: 3}
        ,1365 : {spaceBetween: 60 , slidesPerView: 3}}}
         modules={[Navigation, Pagination]} className="xll:w-5/6 xl:w-[75%] lg:w-[85%] md:w-[85%] xs:w-[70%] w-[60%] xs:py-10 py-0" >
            
            {items.map((item)=>(
                <SwiperSlide key={Math.random()*1000}>

                    <img src={item.img} alt="img" className="w-full h-64 bg-cover rounded-lg"/>
                    <h1 className= {headingClass}>
                        {item.heading}
                    </h1>
                    <div className= {pClass} style={{lineHeight: '2rem'}}>
                        {item.paragraph}
                    </div>
                    <Link to={`/highlight/${item.id}`} className={MoreClass}>More</Link>

                </SwiperSlide>
            ))}

        </Swiper>
        <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 prev
        hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
        md:top-[23%] top-[25%] xll:left-[40px] xl:left-[35px] md:left-[20px] ssm:left-[25px] xs:left-[20px] 
        left-[20px] cursor-pointer`}></span>
        <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 next
        hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
        md:top-[23%] top-[25%] xll:right-[35px] xl:right-[25px] md:right-[5px] ssm:right-[25px] xs:right-[15px] 
        right-[5px] cursor-pointer`}></span>
        </>
    )
}