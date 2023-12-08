import { h3FAQ } from "../utilities";

export default function FAQAccordion(){
    const items = [1 , 2 , 3, 4 , 5];    
    const pClass = 'xl:leading-[34px] text-[#443548] font-[400] leading-[30px] align-baseline bg-transparent md:text-base text-[14px]';
    const questionClass = 'text-[#443548] font-[600] md:text-[19px] text-base h-fit leading-0 '
    return(
        <div className="border-t-[3px] border-gray-300 pt-7 mt-10">
          <h1 className={`${h3FAQ} text-dark_violet`}>
              Frequently Asked Questions
          </h1>
          <div className="w-full h-auto py-5">
              {items.map((val)=>(
                <div key={Math.random()*999} tabIndex={val} className="ds-collapse ds-collapse-arrow bg-gray-50 my-1 py-0 rounded-none">
                    <input type="checkbox" name={`accordion-${val}`} /> 
                    <div className={`ds-collapse-title ${questionClass}`}>
                      Question {val}
                    </div>
                    <div className={`ds-collapse-content ${pClass}`}> 
                      <p>ANSWER {val}</p>
                    </div>
                </div>
              ))}
          </div>
        </div>
    )
}