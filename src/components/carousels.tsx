import { Navigation , Pagination} from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';
type items = {id: number, img: string , heading: React.ReactNode , paragraph: string}[]
export function ImageCarousel(){
    const headingClass = "oswald lg:py-9 ssm:py-6 xl:text-[29px] md:text-2xl xs:text-xl text-base text-secondary font-[400] py-5";
    const pClass = "text-white font-[400] lg:text-xl lg:leading-[36px] xs:text-lg xs:leading-9 text-sm leading-10 text-justify"
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 xl:text-2xl text-xl font-[400] inline-block my-8'
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
        <>
        <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
        pagination={{clickable:true}}
        // Swiper breakpoints , screenSize(>=) : {spaceBetweenEachComponents , slidesVisible per view}
        breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 450: {slidesPerView: 2, spaceBetween: 30 }, 
        769: {spaceBetween: 40,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
        , 1099 : {spaceBetween: 70, slidesPerView: 3} ,1365 : {spaceBetween: 65 , slidesPerView: 3}}}
         modules={[Navigation, Pagination]} className="xll:w-[81%] xl:w-[75%] lg:w-[85%] md:w-[85%] ssm:w-[78%] xs:w-[75%] w-[60%] xs:py-10 py-0" >
            
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
        <span className={`absolute md:w-8 md:h-8 w-8 h-8 bg-no-repeat bg-contain duration-300 prev
        hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
        xs:top-[20%] top-[25%] xll:left-[3.6%] xl:left-[4%] md:left-[20px] ssm:left-[25px] xs:left-[20px] 
        left-[20px] cursor-pointer`}></span>
        <span className={`absolute md:w-8 md:h-8 w-8 h-8 bg-no-repeat bg-contain duration-300 next
        hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
        xs:top-[20%] top-[24%] xll:right-[3.5%] xl:right-[4%] md:right-[5px] ssm:right-[20px] xs:right-[10px] 
        right-[5px] cursor-pointer`}></span>
        </>
    )
}
export function VideoCarousel(){
    const headingClass = "oswald lg:py-9 ssm:py-6 xl:text-[29px] md:text-2xl xs:text-xl text-base text-secondary font-[400] py-5 text-left";
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 xl:text-2xl text-xl font-[400] inline-block my-8'
    const videoClass = 'xll:h-48 xl:h-42 lg:h-36 md:h-28 ssm:h-28 xsm:h-24 xs:h-32 xxs:h-28 h-24 relative bg-cover rounded-[1.2rem] object-cover w-full'
    //play button style
    const playBtn = `md:w-20 md:h-20 w-16 h-16 [background-image:url('/play-btn.png')] absolute bg-no-repeat 
    hover:[background-image:url('/play-btn-hover.png')] duration-500 bg-cover
    xll:top-[30%] md:top-[13%] lg:top-[24%] ssm:top-[24%] xsm:top-[18%] xs:top-[20%] xxs:top-[23%] top-[14%]
    xl:left-[37%] lg:left-[37%] xxs:left-[35%] lg:left-[30%] md:left-[29%] ssm:left-[36%] xs:left-[36%] xsm:left-[33%] left-[30%] 
    z-10 text-6xl p-3 cursor-pointer`
    return(
        <>
            <Swiper navigation={{nextEl: '.v_next', prevEl: '.v_prev'}} freeMode speed={1000} 
                pagination={{clickable:true}}
                breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 40 }, 
                768: {spaceBetween: 40,slidesPerView:3} , 992 : {spaceBetween: 40, slidesPerView :3} }}
                 modules={[Navigation, Pagination]} className="xxl:w-[40%] xll:w-[83%] xl:w-[75%] lg:w-[85%] md:w-[85%] ssm:w-[70%] xsm:w-[75%] xs:w-[60%] xxs:w-[200px] w-[50%] pt-7 md:pb-20 pb-10" >
                    
                    <SwiperSlide>
                        
                        <div className='relative rounded-lg '>
                            <div className={playBtn} id='p1' onClick={()=>{
                                (document.getElementById('v1') as HTMLVideoElement).play(); (document.getElementById('v1') as HTMLVideoElement).controls = true;
                                document.getElementById('p1')!.style.display = 'none'}} ></div>
                            <video src="/sample_video.mp4" id='v1' className={videoClass} controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Mrs. Ng's insightful interview
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <div className={playBtn} id='p2' onClick={()=>{
                                (document.getElementById('v2') as HTMLVideoElement).play(); (document.getElementById('v2') as HTMLVideoElement).controls = true;
                                document.getElementById('p2')!.style.display = 'none'}} >
                            </div>
                            <video src="/sample_video.mp4" id='v2' className={videoClass} controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Ms. Rebecca Lim's tarot experience 
                        </h1>
                    </SwiperSlide>
                    
                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <div className={playBtn} id='p3' onClick={()=>{
                                (document.getElementById('v3') as HTMLVideoElement).play(); (document.getElementById('v3') as HTMLVideoElement).controls = true;
                                document.getElementById('p3')!.style.display = 'none'}}>
                            </div>
                            <video src="/sample_video.mp4" id='v3' className={videoClass} controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            The gathering party in Bangkok
                        </h1>
                    </SwiperSlide>
                    
                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <div className={playBtn} id='p4' onClick={()=>{
                                (document.getElementById('v4') as HTMLVideoElement).play(); (document.getElementById('v4') as HTMLVideoElement).controls = true;
                                document.getElementById('p4')!.style.display = 'none'}}>
                            </div>
                            <video src="/sample_video.mp4" id='v4' className={videoClass} controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Ms. Rebecca Lim's tarot experience 
                        </h1>
                    </SwiperSlide>

                </Swiper>
                <a className={MoreClass} href='#'>
                    More Videos
                </a>
                {/* left and right button */}
                <span className={`absolute w-8 h-8 bg-no-repeat bg-contain duration-300 v_prev
                hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
                md:top-[23%] xsm:top-[35%] top-[45%] xxl:left-[24.4%] xll:left-[45px] xl:left-[35px] md:left-[20px] sm:left-[40px] xsm:left-[15px] xs:left-[30px] left-[44px] 
                cursor-pointer `}></span>
                <span className={`absolute w-8 h-8 bg-no-repeat bg-contain duration-300 v_next
                hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
                md:top-[23%] xsm:top-[34.5%] top-[45%] xxl:right-[25.4%] xll:right-[40px] xl:right-[25px] md:right-[5px] sm:right-[35px] xsm:right-[10px] xs:right-[23px] right-[36px] 
                cursor-pointer `}></span>
        </>
    )
}
