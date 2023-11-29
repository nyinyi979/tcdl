type voiceMessage = {
    order: number,
    sender: boolean      //if it is sender, it would be true
    date: string,
    time: string, 
    messageDuration: string
}
export default function Voices(){
    const voiceMessages:voiceMessage[] = [
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: false},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: true},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: false},
        {order: 0 , date: '10/9/2023' , time: '12:43pm' , messageDuration: '2:07' , sender: true},
    ]
    return(
        <div>
            <div className="border-b-2 border-b-[#908ec0] pt-6 pb-5">
                <h1 className="text-center font-[600] text-2xl text-[#5c545f]">{voiceMessages.length}/5 Message(s)</h1>
            </div>
            <div className="w-full h-[35.5rem] overflow-y-scroll scrollbar scrollbar-h-[60rem] scrollbar-w-3 scrollbar-thumb-[#3c3f58] hover:scrollbar-thumb-black/30 scrollbar-track-[#bbbbbb]">
                <div className="ssm:px-16 px-10 py-4">
                    {voiceMessages.length === 0? <div className="flex items-center justify-center">No messages</div> : 
                    <div className="table clear-both">
                        {voiceMessages.map((message)=>(
                            <div className={`${message.sender? 'float-right' : 'float-left'} my-6`}>
                                <div className="table w-fit">
                                    {message.sender? 
                                    '' :
                                    <img className="float-left -mt-1 mr-4 ssm:w-20 ssm:h-20 w-12 h-12 rounded-full border-[3px] border-[#755f83]/80 p-[2px]" src="/pic1.png" alt="sender" />
                                    }
                            
                                    
                                    <div className="bg-[#e3dbe5] rounded-xl float-left flex flex-row items-center gap-3 ssm:pr-2 pr-4">
                                        <img src="/sound.png" alt="" className="ssm:w-full w-40"/>
                                        <span className="font-[700] ssm:text-2xl text-base ssm:-mt-1 mt-0 text-[#755f83]">{message.messageDuration}</span>
                                    </div>
                                    
                                    
                                    {message.sender? 
                                    <img className="float-right ml-4 -mt-1 ssm:w-20 ssm:h-20 w-12 h-12 rounded-full border-[3px] border-[#755f83]/80 p-[2px]" src="/upload-img.png" alt="sender" />
                                    : ''}
                                </div>
                                <span className={`block font-[400] mt-2 ${message.sender? 'float-right' : 'float-left'} text-[#5c545fbe]`}>{message.date} {message.time} </span>
                            </div>
                        ))}
                    </div>
                    }
                </div>
            </div>
            <div className="border-t-2 border-t-[#908ec0] pt-8 w-full">
                <div className="clear-both table w-full pl-10 pr-16">
                    <h1 className="float-left ml-10 mt-2 text-sm text-[#5c545f]">Your voice message can be recorded by clicking on the mic icon</h1>
                    <img src="/sound-icon.png" alt="sound" className="w-[70px] h-[70px] -mt-4 float-right cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}