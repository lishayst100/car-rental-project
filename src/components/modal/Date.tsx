import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa';


interface Props {
  pickUpDate: string | null;
  dropOffDate: string | null;
}

const Date1 = ({dropOffDate,pickUpDate}:Props) => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column para-text">
        <span className="font-bolder">
          <FaCalendarAlt className='red' /> Pick-Up Date & Time
        </span>
        <span>
          {pickUpDate}
        </span>
      </div>
      <div className="d-flex flex-column para-text">
        <span className="font-bolder">
          <FaCalendarAlt className='red' /> Drop-Off Date & Time
        </span>
        <span>
          {dropOffDate}
        </span>
      </div>
    </div>
  );
}

export default Date1