import $ from "jquery"
import '../calendar_components/mini-event-calendar'
import '../calendar_components/mini-event-calendar.css'
import React from 'react';
export default function CalendarPage(){
    React.useEffect(()=>{
        const sameDaylastWeek = new Date().setDate(new Date().getDate() - 7);
        const someDaynextMonth = new Date().setDate(new Date().getDate() + 31);

        // All dates should be provided in timestamps
        const sampleEvents = [{
            title: "Soulful sundays bay area",
            date: sameDaylastWeek, // Same day as today, last week
            link: "https://www.eventbrite.com/e/soulful-sundays-bay-area-edition-tickets-55214242285?aff=ehomecard"
        }, {
            title: "London Comicon",
            date: new Date().getTime(), // Today
            link: "https://www.eventbrite.co.uk/e/london-film-comic-con-summer-2019-tickets-49472593860?aff=ebdssbdestsearch"
        }, {
            title: "Youth Athletic Camp",
            date: someDaynextMonth, // Some day as today, next month
            link: "https://www.eventbrite.com/e/leaner-stronger-faster-tm-youth-athletic-camp-2021-tickets-38245970728?aff=ebdssbdestsearch"
        }];
        //if you are using typescript, type any should be added ( or create a global type of JQuery containing MEC )
		($("#calendar") as any).MEC({
			calendar_link: "example.com/myCalendar",
			events: sampleEvents
		});
    }, [])
    const closeTimeBox = () =>{
        const dropdown_content = document.getElementById('dropdown_content')!;
        const arrow = document.getElementById('arrow')!;
        dropdown_content.style.display = 'none';
        arrow.style.display = 'none';
    }
    return(
        <div onClick={closeTimeBox} className='xs:w-full xxs:w-[370px] xxs:-ml-3 w-[310px] xs:mx-auto'>
            <h1 className='text-center xs:text-xl text-sm text-text_violet font-[700] py-5 xs:pt-7'>Select Date & Time</h1>
            <div id="calendar" className='clear-both table lg:w-[70%] md:w-[80%] xs:w-[90%] xxs:w-[90.7%] w-[90%] h-fit py-0 mx-auto'></div>
            <div className='table clear-both w-full pb-6'>
                <TimeSelectBox />
            </div>
                <TimeDetails />
        </div>
    )
}

type time = {startHour: number , startMinute: number , startAM: string, endHour: number, endMinute: number, endAM: string}
//
function TimeSelectBox(){
    const [time , setTime] = React.useState<time>({
        startHour: 12 , startMinute: 0 , startAM: 'AM' , endHour: 11 , endMinute: 59 , endAM: 'PM'
    })
    const [displayedTime , setDisplayTime]= React.useState(`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM} `);
    // for mapping purpose
    const hours = [1,2,3,4,5,6,7,8,9,10,11,12]
    const minutes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
    33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
    const AM_PM = ['AM' , 'PM']

    console.log(time.startHour , displayedTime);

    const setStartHour = (value:string) =>{
        setDisplayTime(`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM} `)
        setTime({...time, startHour: Number(value)})
        
    }
    const setEndHour = (value:string) =>{
        setTime({...time, endHour: Number(value)})
    }
    const setStartMinute = (value:string) =>{
        setTime({...time, startMinute: Number(value)})
    }
    const setEndMinute = (value:string) =>{
        setTime({...time, endMinute: Number(value)})
    }
    const setStartAM = (value:string) =>{
        setTime({...time, startAM: value})
    }
    const setEndAM = (value:string) =>{
        setTime({...time, startAM: value})
    }
    const openTimeBox = () =>{
        const dropdown_content = document.getElementById('dropdown_content')!;
        const arrow = document.getElementById('arrow')!;
        dropdown_content.style.display = 'block';
        arrow.style.display = 'block';
    }
    const closeTimeBox = () =>{
        const dropdown_content = document.getElementById('dropdown_content')!;
        const arrow = document.getElementById('arrow')!;
        dropdown_content.style.display = 'none';
        arrow.style.display = 'none';
    }
    
    
    const setTimeForInputBox = (value:string) =>{
        setDisplayTime(value)
    }
    //since all of the select boxes are the same I used this 
    const selectClass = 'inline-block xs:mx-1 mx-[2px] outline-none bg-stone-100 text-black text-xs'
    return(
    <div className='ssm:w-full ssm:-ml-0 xs:-ml-10 xs:w-[120%] md:px-10 w-[200px] flex md:flex-row flex-col mx-auto items-center justify-center'>
        
        
        <div className={`block relative items-center md:py-1 py-0 text-text_violet w-11/12 mx-auto
        xs:w-1/3 `}>
            
            {/* this is the up arrow of the dropdown box */}
            <span id="arrow" className='hidden absolute ssm:-bottom-[6px] xs:-bottom-[10px] -bottom-2 z-20 left-4
            border-l-[10px] border-l-transparent border-r-transparent border-r-[10px] border-b-[10px] 
            border-b-[#f5f5f5] w-0 h-0'></span>

            {/* icon of down arrow is added here */}
            <span className="absolute z-30 [background-image:url('/drop-icon.png')] lg:top-4 
            ssm:top-4 left-[78%] top-3 xs:top-4 md:w-10 w-7 h-7 
            md:h-10 md:scale-110 bg-cover block" onClick={(e)=>{e.stopPropagation();openTimeBox()}}></span>

            <span className={`z-[20] font-[400] absolute -top-2 lg:left-3 md:left-[3rem] left-[1rem] block xxs:w-fit w-fit h-fit py-1
            px-5 bg-white rounded-full xl:text-lg md:text-sm text-xs`}>Select a time slot</span>
            
            <div className='arial dropdown relative'>

                <input onClick={(e)=>{e.stopPropagation()}} onFocus={openTimeBox} className={`oswald z-[10] mx-auto block
                    font-[600] relative w-full xxs:h-16 ssm:px-8 ssm:py-2 px-5 xs:py-4 py-1 bg-white
                    xl:text-lg md:text-base text-sm leading-10 rounded-l-full rounded-r-full border-[2.4px]
                    border-light_gray outline-none text-text_violet placeholder:text-text_violet tracking-tighter`} 
                    type="text" name="daterange" id="date" placeholder="05:00 AM  - 05:30 PM" 
                    value={`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM}`} onChange={(e)=>{setTimeForInputBox(e.target.value)}}/>
                
                {/* dropdown content */}
                <div onClick={(e)=>{e.stopPropagation()}} id='dropdown_content' className='absolute xs:w-80 w-[280px] h-fit 
                bg-white pt-5 ssm:left-0 xs:-left-20 -left-10 top-[114%] hidden border-[1px] border-stone-300 ' style={{fontFamily:'initial'}}>
                    <div>

                        <select className={selectClass} name="s_hours" id="s_hours" 
                        defaultValue={time.startHour} onChange={(e)=>{setStartHour(e.target.value)}}>
                            {hours.map((hour)=>(
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select> : 
                        <select className={selectClass} name="s_mins" id="s_mins" 
                        defaultValue={time.startMinute} onChange={(e)=>{setStartMinute(e.target.value)}}>
                            {minutes.map((minute)=>(
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select> :
                        <select className={selectClass} name="s_am" id="s_am" 
                        defaultValue={time.startAM} onChange={(e)=>{setStartAM(e.target.value)}}>
                            {AM_PM.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))}
                        </select>   

                        <select className={selectClass} name="e_hours" id="e_hours" 
                        defaultValue={time.endHour} onChange={(e)=>{setEndHour(e.target.value)}}>
                            {hours.map((hour)=>(
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select> : 
                        <select className={selectClass} name="e_mins" id="e_mins" 
                        defaultValue={time.endMinute} onChange={(e)=>{setEndMinute(e.target.value)}}>
                            {minutes.map((minute)=>(
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select> :
                        <select className={selectClass} name="e_am" id="e_am" 
                        defaultValue={time.endAM} onChange={(e)=>{setEndAM(e.target.value)}}>
                            {AM_PM.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))}
                        </select>   

                    </div>

                    {/* bottom text in the dropdown box */}
                    <div className='clear-both table my-2 w-full border-t-[1px] border-stone-300 py-2'>
                        <div className='xxs:float-right float-left xxs:text-xs text-[10px] font-[500] font-sans'>

                            {/* adding 0 before signle digit in hour and minute */}
                            {`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + 
                            time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + 
                            time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM} `}
                            
                            <button className='px-2 py-1 rounded-sm duration-300 text-black 
                            hover:bg-stone-300 mx-1 outline-none border-[1px] border-stone-300' onClick={closeTimeBox}>
                                Cancel
                            </button>

                            <button className='px-2 py-1 rounded-sm duration-300 bg-sky-700 text-white
                             hover:text-white hover:bg-sky-800 mx-1 outline-none border-[1px] border-stone-300'>
                                Apply
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="" className={`block mx-auto oswald font-[500] md:float-right md:mt-0 mt-2 
        xxl:pt-4 xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4
        xs:w-40 xs:h-[3.3rem] w-32 h-[3rem] pt-3 text-base bg-primary text-white hover:bg-secondary hover:text-black
        text-center rounded-full duration-500`}>Schedule Now</a>
    </div>
    )
}

function TimeDetails(){
    const spanClass = 'md:inline-block md:float-none float-left mt-2 md:pt-0 pt-2 w-3 h-3 xl:mx-2 lg:mx-0 md:mx-2 mx-1 rounded-full';
    return(
        <div className='w-fit font-[500] mx-auto xll:px-4 xl:px-8 llg:px-4 lg:pb-0 pb-4 md:px-8 xs:px-5 px-0 xll:text-lg xl:text-base xs:text-sm text-[10px] ssm:text-left text-center leading-8 text-black'>
            <p className='md:inline-block clear-both table'>
                <span className='float-right md:float-none'>
                    Singapore Standard Time (SST) 
                </span>
                <span className={`${spanClass} bg-[#e3dcee]`}></span> 
            </p>
            <p className='md:inline-block clear-both table'>
                <span className='float-right md:float-none'>Available</span> 
                <span className={`${spanClass} bg-secondary`}></span>
            </p>
            <p className='md:inline-block clear-both table'>
                <span className='float-right md:float-none'>Limited time slot </span>
                <span className={`${spanClass} bg-primary`}></span>Unavailable
                (or) Fully booked
            </p>
        </div>
    )
}
