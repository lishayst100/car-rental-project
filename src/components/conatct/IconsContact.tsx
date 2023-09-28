import React from 'react'
import { BsFillTelephoneFill, BsEnvelope } from 'react-icons/bs';

const IconsContact = () => {
  return (
    <div>
      <div className="d-flex gap-2 flex-row align-items-baseline">
        <BsFillTelephoneFill className="icon-footer" />
        <p className="para font-bolder">(+972)-50-3321-366</p>
      </div>
      <div className="d-flex gap-2 flex-row align-items-baseline">
        <BsEnvelope className="icon-footer" />
        <p className="para font-bolder">Lishayst100@gmail.com</p>
      </div>
    </div>
  );
}

export default IconsContact