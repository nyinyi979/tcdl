import { Navigation } from 'swiper/modules';
import {Swiper , SwiperSlide} from 'swiper/react'
import { FaPlay } from "react-icons/fa";
import 'swiper/css'
import 'swiper/css/navigation'
import {  bg4Class } from '../utilities';
export default function J_Carosusel(){
    const MoreClass = 'text-secondary hover:text-primary duration-500 text-xl font-semibold block my-16 w-fit h-fit mx-auto cursor-pointer'
    const headingClass = "md:text-xl text-lg text-secondary font-semibold py-5";
    const playBtn = 'w-fit h-fit rounded-full bg-primary/60 text-white absolute md:left-[38.5%] top-[27%] left-[28%] z-10 text-6xl p-3 cursor-pointer hover:text-black hover:bg-secondary/80 duration-300'
    return(
        <div className={`py-20 ${bg4Class}`}>
            <h2 className="font-bold col-span-2 lg:text-4xl text-3xl text-center py-10 text-secondary">The Feedbacks</h2>
            <h2 className="text-white lg:text-3xl text-2xl font-bold text-center leading-10">
            Incredibly accurate and insightful, <br /> and whatelse of their sayings!
            </h2>
            <p className="lg:w-5/6 w-11/12 text-justify text-white leading-10 mx-auto md:text-xl text-lg py-10">
                In order to create a more interconnected and compassionate world, the founder and members 
                share their insights, knowledge, and spiritual experiences with others. Substantial value and
                worth reading articles.
            </p>

            <div className="w-full arrow relative">
               
                <Swiper navigation={{nextEl: '.next', prevEl: '.prev'}} freeMode loop speed={1500}  breakpoints={{0: {slidesPerView:2 , spaceBetween:50}, 640: {slidesPerView: 3, spaceBetween: 50 }}} modules={[Navigation]} className=" w-[80%] mySwiper">
                    
                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <FaPlay className={playBtn} id='p1' onClick={()=>{
                                (document.getElementById('v1') as HTMLVideoElement).play(); (document.getElementById('v1') as HTMLVideoElement).controls = true;
                                document.getElementById('p1')!.style.display = 'none'}} />
                            <video src="/sample_video.mp4" id='v1' className='h-52 relative bg-cover rounded-md object-cover w-full' controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Mrs. Ng's insightful interview
                        </h1>
                    </SwiperSlide>

                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <FaPlay className={playBtn} id='p2' onClick={()=>{
                                (document.getElementById('v2') as HTMLVideoElement).play(); (document.getElementById('v2') as HTMLVideoElement).controls = true;
                                document.getElementById('p2')!.style.display = 'none'}} />
                            <video src="/sample_video.mp4" id='v2' className='h-52 relative bg-cover rounded-md object-cover w-full' controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Ms. Rebecca Lim's tarot experience 
                        </h1>
                    </SwiperSlide>
                    
                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <FaPlay className={playBtn} id='p3' onClick={()=>{
                                (document.getElementById('v3') as HTMLVideoElement).play(); (document.getElementById('v3') as HTMLVideoElement).controls = true;
                                document.getElementById('p3')!.style.display = 'none'}} />
                            <video src="/sample_video.mp4" id='v3' className='h-52 relative bg-cover rounded-md object-cover w-full' controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            The gathering party in Bangkok
                        </h1>
                    </SwiperSlide>
                    
                    <SwiperSlide className=''>
                        <div className='relative rounded-lg'>
                            <FaPlay className={playBtn} id='p4' onClick={()=>{
                                (document.getElementById('v4') as HTMLVideoElement).play(); (document.getElementById('v4') as HTMLVideoElement).controls = true;
                                document.getElementById('p4')!.style.display = 'none'}} />
                            <video src="/sample_video.mp4" id='v4' className='h-52 relative bg-cover rounded-md object-cover w-full' controls={false}></video>
                        </div>
                        <h1 className= {headingClass}>
                            Ms. Rebecca Lim's tarot experience 
                        </h1>
                    </SwiperSlide>

                </Swiper>
                
                <a className={MoreClass} href='#'>
                        More Videos
                    </a>
                <span className='next absolute font-bold top-[45%] md:right-[6%] right-[4%] text-secondary text-4xl cursor-pointer scale-y-125'>&gt;</span>
                <span className='prev absolute font-bold top-[45%] md:left-[6%]  left-[4%] text-secondary text-4xl cursor-pointer scale-y-125'>&lt;</span>
            </div>
            
        </div>
    )
}