'use client'
import {useEffect, useState} from 'react'
import Date1 from './Date';
import Location from './Location';
import CarImage from './CarImage';

interface ModalProps {
  car: string | null;
  pickUp: string | null;
  dropOff: string | null;
  pickUpDate: string | null;
  dropOffDate: string | null;
  image: string;
  price: number | null;
  daysDifference:number | null;
}


const OrderDetails = ({
  car,
  dropOff,
  dropOffDate,
  pickUp,
  pickUpDate,
  image,
  price,
  daysDifference,
}: ModalProps) => {
 

  return (
    <div className="d-flex justify-content-around flex-row-reverse pt-5 flex-wrap ">
      <CarImage car={car} image={image} />
      <div className="d-flex flex-column gap-4">
        <span className="red font-bolder text-modal">Location & Date</span>
        <Date1 dropOffDate={dropOffDate} pickUpDate={pickUpDate} />
        <Location dropOff={dropOff} pickUp={pickUp} />
        <div className="d-flex flex-column gap-2 justify-content-center">
          {daysDifference !== null && (
            <>
              <span className="para">Rental Days : {daysDifference}</span>
              <span className="para">Price Per Day : {price!}$</span>
              <span className="font-bolder para-text border-top border-3">
                Total Price :{daysDifference! * price!}$
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails