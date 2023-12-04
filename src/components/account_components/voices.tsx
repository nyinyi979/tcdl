type voiceMessage = {
    order: number,
    sender: boolean      //if it is sender, it would be true
    date: string,
    time: string, 
    messageDuration: string
}
export default function Voices(){
    //For voice message add a new object here!
    const voiceMessages:voiceMessage[] = [
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: false},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: true},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: false},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: true},
    ]
    return(
        <div>
            <div className="border-b-2 border-b-light_blue pt-6 pb-5">
                <h1 className="text-center font-[600] text-2xl text-text_violet">{voiceMessages.length}/5 Message(s)</h1>
            </div>
            <div className="w-full h-[35.5rem] overflow-y-scroll scrollbar scrollbar-h-[60rem] scrollbar-w-3 scrollbar-thumb-[#3c3f58] hover:scrollbar-thumb-black/30 scrollbar-track-[#bbbbbb]">
                <div className="ssm:px-16 px-10 py-4">
                    
                    {voiceMessages.length === 0? <div className="flex items-center justify-center">No messages</div> : 

                    <div className="table clear-both">
                        {voiceMessages.map((message)=>(
                            // if it is sender it would be on the right, else it would be on the left
                            <div key={Math.random()*9000} className={`${message.sender? 'float-right' : 'float-left'} my-6`}>
                                <div className="table w-fit">
                                    {/* if it is not sender , the image  would be on the left*/}
                                    {message.sender? 
                                    '' :
                                    <img className="float-left xs:-mt-1 mr-4 ssm:w-20 ssm:h-20 xs:w-12 xs:h-12 w-10 -mt-3 h-10 rounded-full border-[3px] border-[#755f83]/80 p-[2px]" src="/pic1.png" alt="sender" />
                                    }
                            
                                    
                                    <div className="bg-[#e3dbe5] rounded-xl float-left flex flex-row items-center gap-3 ssm:pr-2 pr-4">
                                        <img src="/sound.png" alt="" className="ssm:w-full xs:w-40 w-20"/>
                                        <span className="font-[700] ssm:text-2xl xs:text-base text-sm ssm:-mt-1 mt-0 text-[#755f83]">{message.messageDuration}</span>
                                    </div>
                                    
                                    {/* if it is sender , the image  would be on the right*/}
                                    {message.sender? 
                                    <img className="float-right ml-4 xs:-mt-1 ssm:w-20 ssm:h-20 xs:w-12 xs:h-12 w-10 -mt-3 h-10 rounded-full border-[3px] border-[#755f83]/80 p-[2px]" src="/upload-img.png" alt="sender" />
                                    : ''}
                                </div>
                                
                                <span className={`block font-[400] md:text-lg xs:text-base text-sm mt-2 ${message.sender? 'float-right' : 'float-left'} text-[#5c545fbe]`}>{message.date} {message.time} </span>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
            
            <div className="border-t-2 border-t-light_blue md:pt-8 py-4 w-full">
                <div className="clear-both table w-full md:pl-10 md:pr-16 px-5">
                    <h1 className="float-left md:ml-10 ml-0 md:mt-2 mt-0 text-sm text-text_violet w-3/4">Your voice message can be recorded by clicking on the mic icon</h1>
                    <img src="/sound-icon.png" alt="sound" className="md:w-[70px] md:h-[70px] w-10 h-10 md:-mt-4 mt-0 float-right cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}