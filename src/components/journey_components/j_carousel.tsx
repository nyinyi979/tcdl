import { Navigation, Pagination } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {  bg7Class, h1Class, h2Class } from '../utilities';
export default function J_Carosusel(props:{text:boolean}){
    const MoreClass = 'oswald text-secondary hover:text-primary duration-500 lg:text-3xl text-xl font-[400] block mt-4 mb-16 w-fit h-fit mx-auto cursor-pointer'
    const headingClass = "md:text-xl text-lg text-secondary font-semibold py-5";
    const videoClass = 'lg:h-48 md:h-32 h-36 relative bg-cover rounded-[1.2rem] object-cover w-full'
    const playBtn = `w-20 h-20 [background-image:url('/play-btn.png')] absolute bg-no-repeat 
    hover:[background-image:url('/play-btn-hover.png')] duration-500 bg-cover xl:left-[37%] lg:left-[37%] 
    md:left-[30%] lg:top-[27%] top-[20%] left-[30%] z-10 text-6xl p-3 cursor-pointer`
    return(
        <div className={`py-20 ${bg7Class} text-center`}>
            <h2 className={`${h1Class} text-secondary`}>The Feedbacks</h2>
            <h2 className={`${h2Class} text-yellow-100 py-5`}>
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
                breakpoints={{0: {slidesPerView:2 , spaceBetween:40}, 640: {slidesPerView: 2, spaceBetween: 40 }, 
                767: {spaceBetween: 50,slidesPerView:3} , 992 : {spaceBetween: 30, slidesPerView :3} 
                , 1099 : {spaceBetween: 80, slidesPerView: 3} , 1199 : {spaceBetween: 70, slidesPerView: 3}
                ,1365 : {spaceBetween: 60 , slidesPerView: 3}}}
                 modules={[Navigation, Pagination]} className="xll:w-5/6 xl:w-[75%] lg:w-[85%] md:w-[70%] w-[85%] pt-10 pb-20" >
                    
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
                    <span className='next absolute font-bold top-[25%] xl:right-[3%] lg:right-[3%] md:right-[10%] right-[2%] text-secondary text-4xl cursor-pointer hover:text-primary' style={{transform:'scaleY(1.8)'}}>&gt;</span>
                    <span className='prev absolute font-bold top-[25%] xl:left-[3%] lg:left-[3%] md:left-[10%] left-[2%] text-secondary text-4xl cursor-pointer  hover:text-primary' style={{transform:'scaleY(1.8)'}}>&lt;</span>
              
            </div>
            
        </div>
    )
}