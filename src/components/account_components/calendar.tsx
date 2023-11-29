import '../../calendar.css'
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
		($("#calendar") as any).MEC({
			calendar_link: "example.com/myCalendar",
			events: sampleEvents
		});
    }, [])
    const closeTimeBox = () =>{
        const dropdown_content = document.getElementById('dropdown_content')!;
        dropdown_content.style.display = 'none';
    }
    return(
        <div onClick={closeTimeBox}>
            <h1 className='text-center text-xl text-stone-600 font-[700] pt-7'>Select Date & Time</h1>
            <div id="calendar" className='clear-both table py-0 mx-auto'></div>
            <div className='table clear-both w-full px-24 pb-6'>
                <TimeSelectBox />
            </div>
                <TimeDetails />
        </div>
    )
}
type time = {startHour: number , startMinute: number , startAM: string, endHour: number, endMinute: number, endAM: string}
function TimeSelectBox(){
    const [time , setTime] = React.useState<time>({
        startHour: 12 , startMinute: 0 , startAM: 'AM' , endHour: 11 , endMinute: 59 , endAM: 'PM'
    })
    const [displayedTime , setDisplayTime]= React.useState(`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM} `);
    const hours = [1,2,3,4,5,6,7,8,9,10,11,12]
    const minutes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,
    33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]
    const AM_PM = ['AM' , 'PM']
    console.log(time.startHour , displayedTime)
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
        dropdown_content.style.display = 'block';
    }
    
    
    const setTimeForInputBox = (value:string) =>{
        setDisplayTime(value)
    }
    const selectClass = 'inline-block md:mx-1 mx-[2px] outline-none bg-stone-100 md:text-sm text-xs'
    return(
    <>
        <div className={`block relative ssm:px-10 px-4 mx-auto py-1 text-[#5c545f] xl:w-[48%] lg:w-[60%] md:w-[50%] ssm:w-[87%] w-full float-left after:z-20
        after:absolute after:[background-image:url('/drop-icon.png')] lg:after:top-4 ssm:after:top-4 after:top-2 xll:after:left-[76%] ssm:after:left-[70%] after:left-[70%] after:w-10 after:h-10 scale-110
        after:bg-cover`}>
            <span className={'z-[20] font-[400] absolute -top-2 ssm:left-[4.3rem] left-[2.3rem] block w-fit h-fit py-1 px-5 bg-white rounded-full xl:text-lg lg:text-base text-sm'}>Select a time slot</span>
            <div className='dropdown relative'>
                <input onClick={(e)=>{e.stopPropagation()}} onFocus={openTimeBox} className={`oswald z-[10] 
                    font-[600] relative ssm:w-full w-[95%] ssm:h-16 h-12 ssm:px-8 ssm:py-3 px-5 py-4
                    xl:text-lg text-base leading-10 rounded-l-full rounded-r-full border-[2.4px] border-[#beb9bf] outline-none 
                    text-[#5c545f] placeholder:text-[#5c545f] tracking-tighter`} type="text" name="daterange" id="date" 
                    placeholder="05:00 AM  - 05:30 PM" value={`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM}`} onChange={(e)=>{setTimeForInputBox(e.target.value)}}/>
                <div onClick={(e)=>{e.stopPropagation()}} id='dropdown_content' className='absolute w-80 h-fit 
                bg-white pt-5 left-0 top-[110%] hidden border-[1px] border-stone-300' style={{fontFamily:'initial'}}>
                    <div>

                        <select className={selectClass} name="s_hours" id="s_hours" defaultValue={time.startHour} onChange={(e)=>{setStartHour(e.target.value)}}>
                            {hours.map((hour)=>(
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select> : 
                        <select className={selectClass} name="s_mins" id="s_mins" defaultValue={time.startMinute} onChange={(e)=>{setStartMinute(e.target.value)}}>
                            {minutes.map((minute)=>(
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select> :
                        <select className={selectClass} name="s_am" id="s_am" defaultValue={time.startAM} onChange={(e)=>{setStartAM(e.target.value)}}>
                            {AM_PM.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))}
                        </select>   

                        <select className={selectClass} name="e_hours" id="e_hours" defaultValue={time.endHour} onChange={(e)=>{setEndHour(e.target.value)}}>
                            {hours.map((hour)=>(
                                <option value={hour} key={hour}>{hour}</option>
                            ))}
                        </select> : 
                        <select className={selectClass} name="e_mins" id="e_mins" defaultValue={time.endMinute} onChange={(e)=>{setEndMinute(e.target.value)}}>
                            {minutes.map((minute)=>(
                                <option value={minute} key={minute}>{minute}</option>
                            ))}
                        </select> :
                        <select className={selectClass} name="e_am" id="e_am" defaultValue={time.endAM} onChange={(e)=>{setEndAM(e.target.value)}}>
                            {AM_PM.map((value)=>(
                                <option value={value} key={value}>{value}</option>
                            ))}
                        </select>   

                    </div>
                    <div className='clear-both table my-2 w-full border-t-[1px] border-stone-300 py-2'>
                        <div className='float-right text-xs font-[500] font-sans'>
                            {`${time.startHour < 9 ? '0' + time.startHour : time.startHour}:${time.startMinute < 9 ? '0' + time.startMinute : time.startMinute} ${time.startAM} - ${time.endHour < 9 ? '0' + time.endHour : time.endHour}:${time.endMinute < 9 ? '0' + time.endMinute : time.endMinute} ${time.endAM} `}
                            <button className='px-2 py-1 rounded-sm duration-300 text-black hover:bg-stone-300 mx-1 outline-none border-[1px] border-stone-300'>Cancel</button>
                            <button className='px-2 py-1 rounded-sm duration-300 bg-sky-700 text-white hover:text-white hover:bg-sky-800 mx-1 outline-none border-[1px] border-stone-300'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="" className={'block oswald font-[500] md:float-right md:ml-0 md:mt-0 mt-2 float-left ml-16 xxl:pt-4 xll:w-[14rem] xll:text-xl xl:w-[12.5rem] xl:h-[3.8rem] xl:pt-4 pt-3 w-40 h-[3.3rem] text-base bg-primary text-white hover:bg-secondary hover:text-black text-center rounded-full duration-500'}>Schedule Now</a>
    </>
    )
}
function TimeDetails(){
    const spanClass = 'inline-block w-3 h-3 xl:mx-2 lg:mx-0 md:mx-2 mx-1 rounded-full';
    return(
        <div className='w-full font-[500] xll:px-12 xl:px-8 llg:px-4 lg:px-12 md:px-10 px-5 xll:text-lg lg:text-base text-sm ssm:text-left text-center'>
            <p className='inline-block'>
                Singapore Standard Time (SST) 
                <span className={`${spanClass} bg-[#e3dcee]`}></span> 
            </p>
            <p className='inline-block'>
                Available 
                <span className={`${spanClass} bg-secondary`}></span>
            </p>
            <p className='inline-block'>
                Limited time slot 
                <span className={`${spanClass} bg-primary`}></span>Unavailable
                (or) Fully booked
            </p>
        </div>
    )
}