import React from 'react'
import Cars from '../../../types';


interface CarProps {
    car:Cars
}

const CarModelTable = ({car}:CarProps) => {
  return (
    <div className="col-lg">
      {Object.keys(car).map((key, i) => {
        if (key === "price") {
          return (
            <div className="price row" key={key}>
              <div className="price">
                <span className="price-bigger price">${car?.price}</span> / rent
                per day
              </div>
            </div>
          );
        } else if (!(key === "image" || key === "id" || key === "name")) {
          return (
            <div key={key}>
              <div className="row tr-text p-3">
                <span className="slash col text-center">
                  {key[0].toUpperCase() + key.slice(1)}
                </span>
                <span className="col text-center">{car[key]}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default CarModelTable