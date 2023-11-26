import { Navigation } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {  bg6Class } from '../utilities';
export default function J_Carosusel(props:{text:boolean}){
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold block my-16 w-fit h-fit mx-auto cursor-pointer'
    const headingClass = "md:text-xl text-lg text-secondary font-semibold py-5";
    const videoClass = 'md:h-48 h-32 relative bg-cover rounded-[1.2rem] object-cover w-full'
    const playBtn = `lg:w-24 lg:h-24 w-20 h-20 [background-image:url('/play-btn.png')] absolute bg-no-repeat 
    hover:[background-image:url('/play-btn-hover.png')] duration-500 bg-cover lg:top-[27%] lg:left-[36%] left-[28%] top-[20%] md:left-[25%] z-10 text-6xl p-3 cursor-pointer`
    return(
        <div className={`py-20 ${bg6Class}`}>
            <h2 className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10 text-secondary">The Feedbacks</h2>
            <h2 className="text-white lg:text-3xl md:text-2xl text-base font-bold text-center leading-10 tracking-tight">
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>
            <p className={`${props.text? 'block' : 'hidden'} lg:w-5/6 w-11/12 text-justify text-white leading-10 mx-auto md:text-xl text-lg py-10`}>
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </p>

            <div className="w-full arrow relative my-5">
               
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode loop speed={2000} breakpoints={{0: {slidesPerView:2 , spaceBetween:40}, 640: {slidesPerView: 3, spaceBetween: 30 },}} modules={[Navigation]} className=" w-[80%] mySwiper">
                    
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
                <span className='next absolute font-bold top-[45%] md:right-[6%] right-[4%] text-secondary text-4xl cursor-pointer hover:text-primary duration-500' style={{transform:'scaleY(1.8)'}}>&gt;</span>
                <span className='prev absolute font-bold top-[45%] md:left-[6%]  left-[4%] text-secondary  text-4xl cursor-pointer hover:text-primary duration-500' style={{transform:'scaleY(1.8)'}}>&lt;</span>
            </div>
            
        </div>
    )
}