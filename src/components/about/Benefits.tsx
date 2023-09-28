import React from 'react'
import { BsCoin } from "react-icons/bs";
import {PiHandCoins ,PiPoliceCarDuotone} from 'react-icons/pi'

const Benefits = () => {
  return (
    <div className=''>
      <div className="benefit d-flex gap-4 justify-content-center align-items-center">
        <PiPoliceCarDuotone className="icon-benefit" />
        <div>
          <h2 className="subtitle">Cross Country Drive</h2>
          <p className="para">
            Take your driving experience to the next level with our top-notch
            vehicles for your cross-country adventures.
          </p>
        </div>
      </div>
      <div className="benefit d-flex gap-4 justify-content-center align-items-center">
        <BsCoin className="icon-benefit" />
        <div>
          <h2 className="subtitle">All Inclusive Pricing</h2>
          <p className="para">
            Get everything you need in one convenient. transparent price with
            our all-inclusive pricing policy.
          </p>
        </div>
      </div>
      <div className="benefit d-flex gap-4 justify-content-center align-items-center">
        <PiHandCoins className="icon-benefit" />
        <div>
          <h2 className="subtitle">No Hidden Charges</h2>
          <p className="para">
            Enjoy peace of mind with our no hidden charges policy. We believe in
            transparent and honest pricing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits