import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';
type Imgitems = {id: number, img: string , heading: React.ReactNode , paragraph: string}[]
export function ImageCarousel(){
    const headingClass = "oswald lg:py-9 xs:py-6 xl:text-[29px] xs:text-2xl text-xl text-secondary font-[400] py-5";
    const pClass = "text-white font-[400] lg:text-xl lg:leading-[36px] xs:text-lg xs:leading-8 text-sm leading-7 text-justify"
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 xl:text-2xl text-xl font-[400] inline-block my-8'
    const items:Imgitems = [
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
            heading: <>How the moon affects your psyhe.</>,
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
        <div className="w-full arrow relative my-5">
            <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
            pagination={{clickable:true}}
            // Swiper breakpoints , screenSize(>=) : {spaceBetweenEachComponents , slidesVisible per view}
            breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 30 }, 
            769: {spaceBetween: 40,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
            , 1099 : {spaceBetween: 70, slidesPerView: 3} ,1365 : {spaceBetween: 65 , slidesPerView: 3}}}
             modules={[Navigation, Pagination]} className="xxl:w-[1300px] xll:w-[1100px] xl:w-[960px] llg:w-[960px] lg:w-[850px] md:w-[85%] ssm:w-[78%] xs:w-[68%] w-[60%] py-10" >

                {items.map((item)=>(
                    <SwiperSlide key={Math.random()*1000}>

                        <img src={item.img} alt="img" className="lg:w-full w-[98%] h-fit bg-cover mx-auto rounded-xl"/>
                        <h1 className= {headingClass}>
                            {item.heading}
                        </h1>
                        <div className= {pClass}>
                            {item.paragraph}
                        </div>
                        <Link to={`/highlight/${item.id}`} className={MoreClass}>More</Link>

                    </SwiperSlide>
                ))}

            </Swiper>
            <span className={`absolute xxl:w-12 xxl:h-12 w-8 h-8 bg-no-repeat bg-contain duration-300 prev
            hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
            xs:top-[20%] top-[25%] cursor-pointer
            xxl:left-[8%] xll:left-[3%] xl:left-[7%] lg:left-[4.3%] md:left-[20px] 
            ssm:left-[25px] xs:left-[20px] left-[20px]`}></span>
            
            <span className={`absolute xxl:w-12 xxl:h-12 w-8 h-8 bg-no-repeat bg-contain duration-300 next
            hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
            xs:top-[20%] top-[24%] cursor-pointer
            xxl:right-[7.8%] xll:right-[2.9%] xl:right-[6.9%] lg:right-[3%] md:right-[5px] 
            ssm:right-[15px] xs:right-[10px] right-[5px]`}></span>
        </div>
    )
}

type Videoitems = {id: number , video: string , title: string}[]
export function VideoCarousel(){
    const headingClass = "oswald lg:py-9 ssm:py-6 xl:text-[29px] xl:leading-10 md:text-2xl xs:text-xl text-base text-secondary font-[400] py-5 text-left";
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 xl:text-2xl text-xl font-[400] inline-block my-8'
    const videoClass = 'xll:h-48 xl:h-42 lg:h-36 md:h-28 ssm:h-28 xsm:h-24 xs:h-32 xxs:h-28 h-24 relative bg-cover rounded-[1.2rem] object-cover w-full'
    //play button style
    const playBtn = `md:w-20 md:h-20 w-16 h-16 [background-image:url('/play-btn.png')] absolute bg-no-repeat 
    hover:[background-image:url('/play-btn-hover.png')] duration-500 bg-cover
    xll:top-[30%] md:top-[13%] lg:top-[24%] ssm:top-[24%] xsm:top-[18%] xs:top-[20%] xxs:top-[23%] top-[14%]
    xl:left-[38%] lg:left-[37%] xxs:left-[35%] lg:left-[30%] md:left-[29%] ssm:left-[36%] xs:left-[36%] xsm:left-[33%] left-[30%] 
    z-10 text-6xl p-3 cursor-pointer`
    const items:Videoitems = [
        {
            id: 1,
            video: '/sample_video.mp4',
            title: `Mrs. Ng's insightful interview`
        },
        {
            id: 2,
            video: '/sample_video.mp4',
            title: `Ms. Rebecca Lim's tarot experience `
        },
        {
            id: 3,
            video: '/sample_video.mp4',
            title: `The gathering party in Bangkok`
        },
        {
            id: 4,
            video: '/sample_video.mp4',
            title: `Ms. Rebecca Lim's tarot experience `
        },
        
    ]
    return(
        <div className="w-full arrow relative my-5">
            <Swiper navigation={{nextEl: '.v_next', prevEl: '.v_prev'}} freeMode speed={1000} 
                pagination={{clickable:true}}
                breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 40 }, 
                768: {spaceBetween: 40,slidesPerView:3} , 992 : {spaceBetween: 40, slidesPerView :3} }}
                 modules={[Navigation, Pagination]} className="xxl:w-[1300px] xll:w-[1120px] xl:w-[970px] llg:w-[960px] lg:w-[850px] md:w-[85%] ssm:w-[70%] xsm:w-[75%] xs:w-[60%] xxs:w-[200px] w-[50%] pt-7 md:pb-20 pb-10" >
                    

                    {items.map((item)=>(
                        <SwiperSlide key={Math.random()*1000}>
                            <div className='relative rounded-lg '>
                                <div className={playBtn} id={`p${item.id}`} onClick={()=>{
                                    (document.getElementById(`v${item.id}`) as HTMLVideoElement).play(); 
                                    (document.getElementById(`v${item.id}`) as HTMLVideoElement).controls = true;
                                    document.getElementById(`p${item.id}`)!.style.display = 'none'}} ></div>
                                <video src={item.video} id={`v${item.id}`} className={videoClass} controls={false}></video>
                            </div>
                            <h1 className= {headingClass}>
                                {item.title}
                            </h1>

                        </SwiperSlide>
                    ))}
                
                </Swiper>
                <a className={MoreClass} href='#'>
                    More Videos
                </a>

                {/* left and right button */}

            <span className={`absolute xxl:w-12 xxl:h-12  w-8 h-8 bg-no-repeat bg-contain duration-300 v_prev
            hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
            md:top-[23%] xsm:top-[35%] top-[45%] cursor-pointer 
            xxl:left-[9%] xll:left-[3%] xl:left-[5.4%] lg:left-[4%] llg:left-[5%] md:left-[20px] sm:left-[40px] xsm:left-[15px] xs:left-[30px] left-[44px] 
            `}></span>

            <span className={`absolute xxl:w-12 xxl:h-12 w-8 h-8 bg-no-repeat bg-contain duration-300 v_next
            hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
            md:top-[23%] xsm:top-[34.5%] top-[45%] cursor-pointer
            xxl:right-[8.8%] xll:right-[2.8%] lg:right-[3.7%] llg:right-[4.7%] xl:right-[5%] md:right-[5px] sm:right-[35px] xsm:right-[10px] xs:right-[23px] right-[36px] 
            `}></span>
        </div>
    )
}
