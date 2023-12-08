import { h3FAQ2 } from "../utilities";

export default function FAQAccordion(){
    const items = [1 , 2 , 3, 4 , 5];    
    const pClass = 'lg:my-[13px] xl:my-6 xl:leading-[34px] text-[#443548] font-[400] leading-[30px] align-baseline bg-transparent md:text-[19px] text-base';
    return(
        <>
        <h1 className={`${h3FAQ2} text-stone-800 py-3`}>
            FAQs
        </h1>
        <div className=" w-full">
            {items.map((val)=>(
                <div key={Math.random()*999} className="ds-collapse ds-collapse-arrow bg-gray-50 my-1 py-0 rounded-none">
                <input type="radio" className="h-2" name="my-accordion-4"/> 
                <div className="raleway ds-collapse-title text-black ssm:text-xl text-xl font-[500]">
                  Question {val}
                </div>
                <div className={`ds-collapse-content ${pClass}`}> 
                  <p>ANSWER {val}</p>
                </div>
              </div>
            ))}
        </div>
        </>
    )
}