import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

interface Props {
  pickUp: string | null;
  dropOff:string | null
}

const Location = ({pickUp,dropOff}:Props) => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column para-text">
        <span className="font-bolder">
          <FaLocationDot className='red' /> Pick-Up Location
        </span>
        <span>{pickUp}</span>
      </div>
      <div className="d-flex flex-column para-text">
        <span className="font-bolder">
          <FaLocationDot className='red' /> Drop-Off Location
        </span>
        <span className=''>{dropOff}</span>
      </div>
    </div>
  );
}

export default Location