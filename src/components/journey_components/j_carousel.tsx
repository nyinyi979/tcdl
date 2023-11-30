import { Navigation, Pagination } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {  bg7Class, h1Class, h2Class } from '../utilities';
export default function J_Carosusel(props:{text:boolean}){
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 lg:text-3xl text-xl font-[400] block mt-4 mb-16 w-fit h-fit mx-auto cursor-pointer'
    const headingClass = "md:text-xl xs:text-lg text-base text-left text-secondary font-semibold py-5";
    const videoClass = 'xl:h-42 lg:h-36 md:h-28 xs:h-32 xxs:h-28 h-24 relative bg-cover rounded-[1.2rem] object-cover w-full'
    const playBtn = `md:w-20 md:h-20 w-16 h-16 [background-image:url('/play-btn.png')] absolute bg-no-repeat 
    hover:[background-image:url('/play-btn-hover.png')] duration-500 bg-cover xll:left-[35%] xl:left-[37%] lg:left-[37%] 
    md:left-[29%] md:top-[13%] lg:top-[24%] xs:top-[20%] xxs:top-[23%] xxs:left-[35%] lg:left-[30%] md:left-[35%] ssm:left-[35%] xs:left-[35%] top-[14%] ssm:left-[35%] left-[30%] z-10 text-6xl p-3 cursor-pointer`
    return(
        <div className={`md:py-20 py-10 ${bg7Class} text-center`}>
            <h2 className={`${h1Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h2Class} text-light_secondary py-5`}>
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>
            <div className={`${props.text? 'block' : 'hidden'} font-[500] xl:w-[84%] md:w-[90%] w-[85%] h-fit text-justify text-white leading-10 mx-auto md:text-xl text-lg py-9`}>
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </div>

            <div className="w-full arrow relative my-5">
               
            <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode speed={1000} 
                pagination={{clickable:true}}
                breakpoints={{0: {slidesPerView:1 , spaceBetween:40}, 479: {slidesPerView: 2, spaceBetween: 40 }, 
                768: {spaceBetween: 40,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
                , 1099 : {spaceBetween: 80, slidesPerView: 3} , 1199 : {spaceBetween: 70, slidesPerView: 3}
                ,1365 : {spaceBetween: 60 , slidesPerView: 3}}}
                 modules={[Navigation, Pagination]} className="xxl:w-[40%] xll:w-[70%] xl:w-[75%] lg:w-[85%] md:w-[85%] ssm:w-[70%] xs:w-[60%] xxs:w-[200px] w-[50%] pt-10 md:pb-20 pb-10" >
                    
                    <SwiperSlide className=''>
                        
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
                    <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 
                    hover:[background-image:url('/arrow-left-hover.png')] [background-image:url('/arrow-left.png')]
                    md:top-[23%] top-[45%] xxl:left-[24.4%] xll:left-[95px] xl:left-[35px] md:left-[20px] ssm:left-[30px] xs:left-[30px] left-[30px] 
                    cursor-pointer `}></span>
                    <span className={`absolute md:w-10 md:h-10 w-6 h-6 bg-no-repeat bg-contain duration-300 
                    hover:[background-image:url('/arrow-right-hover.png')] [background-image:url('/arrow-right.png')] 
                    md:top-[23%] top-[45%] xxl:right-[25.4%] xll:right-[90px] xl:right-[25px] md:right-[5px] ssm:right-[30px] xs:right-[23px] right-[15px] 
                    cursor-pointer `}></span>
            </div>
            
        </div>
    )
}