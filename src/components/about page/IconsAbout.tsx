import React from 'react'
import { IconTypeProps, IconsAboutProps } from '../../../types';


const IconsAbout = ({ icon, num, text }:IconsAboutProps) => {
  
const splitText = text.split(' ')


  return (
    <div className="d-flex gap-1 justify-content-center flex-lg-column flex-xl-column flex-row align-items-center">
      <div>
        {React.createElement(icon, { fontSize: "60px", color: "#FF1053" })}
      </div>
      <div className='d-flex align-items-center gap-2'>
        <span className="title">{num}</span>
        <span className='d-flex flex-column'>
          {splitText.map((t) => (
            <span key={t} className="para-text">
              {t}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default IconsAbout