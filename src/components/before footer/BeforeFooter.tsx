import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import '../about/about.scss'
import './BeforeFooter.scss'

const BeforeFooter = () => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center gap-5 my-5 container-footer flex-lg-row flex-column">
      <span className="text-white">Book a car by getting in touch with us</span>
      <div className="text-red d-flex justify-content-center align-items-center gap-2">
        <BsFillTelephoneFill className="" />
        <span className="font-bolder">(+972) 50-3321366</span>
      </div>
    </div>
  );
}

export default BeforeFooter