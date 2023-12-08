import { h3FAQ } from "../utilities";

type items = {id: string , question: string , answer: string}[]
export default function FAQAccordion(){
    const items:items = [
      {id: '1' , question: 'Question 1' , answer: 'Answer 1'},
      {id: '2' , question: 'Question 2' , answer: 'Answer 2'},
      {id: '3' , question: 'Question 3' , answer: 'Answer 3'},
      {id: '4' , question: 'Question 4' , answer: 'Answer 4'},
      {id: '5' , question: 'Question 5' , answer: 'Answer 5'},
    ];    
    const pClass = 'xl:leading-[34px] text-[#443548] font-[400] leading-[30px] align-baseline bg-transparent md:text-base text-[14px]';
    const questionClass = 'text-[#443548] font-[600] md:text-[19px] text-base h-fit leading-0 '
    return(
        <div className="border-t-[3px] border-gray-300 pt-7 mt-10">
          <h1 className={`${h3FAQ} text-dark_violet`}>
              Frequently Asked Questions
          </h1>
          <div className="w-full h-auto py-5">
              {items.map((item)=>(
                <div key={Math.random()*999} className="ds-collapse ds-collapse-arrow bg-gray-50 my-[6px] py-0 rounded-none">
                    <input type="checkbox" name={`accordion-${item.id}`} /> 
                    <div className={`ds-collapse-title ${questionClass}`}>
                      {item.question}
                    </div>
                    <div className={`ds-collapse-content ${pClass}`}> 
                      {item.answer}
                    </div>
                </div>
              ))}
          </div>
        </div>
    )
}