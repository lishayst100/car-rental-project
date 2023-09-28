import React from 'react'
import { IoCarSportSharp } from "react-icons/io5";
const Logo = () => {
  return (
    <div className="logo-div d-flex align-items-center gap-2">
      <IoCarSportSharp className="logo" />
      <div className="text-logo d-flex flex-column">
        <span className="car">CAR</span>
        <span className="rental">Rental</span>
      </div>
    </div>
  );
}

export default Logo