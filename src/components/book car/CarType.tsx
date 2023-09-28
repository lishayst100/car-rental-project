'use client'
import { FaCalendarAlt, FaCarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Subtitle from './Subtitle';
import { LABLES, locations } from './labels';
import { useEffect, useState } from 'react';
import { baseUrl} from '@/services/cars';
import Cars from '../../../types';
import Modal from '../modal/Modal';
import {ColorRing} from 'react-loader-spinner' 



const CarType = () => {

  const [cars, setCars] = useState<Cars[]>()
  const [car, setCar] = useState<string | null>(null);
  const [pickUp, setPickUp] = useState<string | null>(null);
  const [dropOff, setDropOff] = useState<string | null>(null);
  const [pickUpDate, setPickUpDate] = useState<string>('');
  const [dropOffDate, setDropOffDate] = useState<string>('');
  
  const booking = { car, pickUp, dropOff, pickUpDate, dropOffDate };

  useEffect(()=>{
      fetch(baseUrl + '/cars')
      .then(res => res.json())
      .then(result => {
        setCars(result.cars)
      })
  },[])
  
if(!cars){
  return <ColorRing/>
}





  return (
    <div>
      <div className="row my-3 gap-3">
        <div className="col-lg">
          <Subtitle
            icon={(props) => <FaCarAlt {...props} />}
            title={LABLES[0].title}
          />
          <select
            className="form-select"
            onChange={(e) => {
              setCar(e.target.value);
            }}
          >
            <option value="" selected hidden disabled>
              Select Your Car Here
            </option>
            {cars!.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg">
          <Subtitle
            icon={(props) => <FaLocationDot {...props} />}
            title={LABLES[1].title}
          />
          <select
            className="form-select"
            onChange={(e) => {
              setPickUp(e.target.value);
            }}
          >
            <option value="" hidden disabled selected>
              Select Pick Up Location
            </option>
            {locations.map((c) => (
              <option key={c.value} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-lg">
          <Subtitle
            icon={(props) => <FaLocationDot {...props} />}
            title={LABLES[2].title}
          />
          <select
            className="form-select"
            name=""
            id=""
            onChange={(e) => {
              setDropOff(e.target.value);
            }}
          >
            <option value="" selected hidden disabled={true}>
              Select Drop Off Location
            </option>
            {locations.map((c) => (
              <option key={c.value} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row my-3 gap-3">
        <div className="col-lg">
          <Subtitle
            icon={(props) => <FaCalendarAlt {...props} />}
            title={LABLES[3].title}
          />
          <input
            type="date"
            className="form-control"
            onChange={(e) => {
              setPickUpDate(e.target.value);
            }}
          />
        </div>
        <div className="col-lg">
          <Subtitle
            icon={(props) => <FaCalendarAlt {...props} />}
            title={LABLES[4].title}
          />
          <input
            type="date"
            className="form-control"
            required
            value={dropOffDate}
            onChange={(e) => {
              setDropOffDate(e.target.value);
            }}
          />
        </div>
        <Modal {...booking} />
      </div>
    </div>
  );
}

export default CarType