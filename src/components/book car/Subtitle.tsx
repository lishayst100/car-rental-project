import React from 'react'
import { SubtitleCar } from '../../../types';
import './bookCar.scss'




const Subtitle = ({icon,title}:SubtitleCar) => {
  return (
    <div className="d-flex gap-2 align-items-center col-4 w-100">
      {React.createElement(icon, { fontSize: "22px", color: "#FF1053" })}
      <span className='lable'>
        {title} <span className='red'>*</span>
      </span>
    </div>
  );
}

export default Subtitle