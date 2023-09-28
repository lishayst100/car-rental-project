
import React from 'react'
import '../header/header.scss'
import IconsAbout from './IconsAbout';
import { logos } from './logos';



const AboutText = () => {
  

  return (
    <div className='d-flex flex-column justify-content-between w-auto m-0'>
      <div>
        <h2 className="title">
          You start the engine and your adventure begins
        </h2>
        <p className="para">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
      </div>

      <div className='d-flex gap-4 justify-content-lg-around flex-column flex-lg-row justify-content-center align-items-center flex-wrap'>
        {logos.map((icon) => (
          <IconsAbout
            key={icon.text}
            icon={icon.icon}
            text={icon.text}
            num={icon.num}
          />
        ))}
      </div>
         
    </div>
  );
}

export default AboutText