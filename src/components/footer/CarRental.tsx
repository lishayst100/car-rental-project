import React from 'react'
import { BsFillTelephoneFill, BsEnvelope } from "react-icons/bs";
import './Footer.scss'

const CarRental = () => {
  return (
    <div className="col-lg">
      <h3 className="para-text">
        <span className="subtitle">CAR </span> Rental
      </h3>
      <p className="para py-3 font-bolder">
        We Offer a big range of vehicles for all your drivering needs. We have
        the perfect car to meet your needs
      </p>
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

export default CarRental