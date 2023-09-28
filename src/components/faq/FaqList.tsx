'use client'

import { useState } from "react";
import { faqs } from "./data";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function FaqList() {

  const [selected, setSelected] = useState<null | number>(0)

  const toggle = (i:number) => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className="container mx-auto mb-5">
      <div className="accordion mx-auto d-flex flex-column justify-content-center align-items-center shadow-lg rounded-3">
        {faqs.map((f, i) => (
          <div key={i} className="item">
            <div
              className={
                selected === i ? "title-faq colored" : "title-faq"
              }
              onClick={() => {
                toggle(i);
              }}
            >
              <h2 className="para-text  font-bolder">{f.question}</h2>
              <span>
                {selected === i ? (
                  <MdKeyboardArrowUp className="arrow" />
                ) : (
                  <MdKeyboardArrowDown className="arrow" />
                )}
              </span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {f.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqList;
