import React from 'react'
import FiveStars from './FiveStars';

type HeaderProps = {
  name: string;
  price: number;
};

const CarHeader = ({name,price}: HeaderProps) => {
  return (
    <div className="section-2 d-flex justify-content-between p-3">
      <div>
        <h4 className="font-bolder">{name}</h4>
        <FiveStars />
      </div>
      <div className="d-flex flex-column">
        <span className="price-model font-bolder">{price}$</span>
        <span className="per-day">per day</span>
      </div>
    </div>
  );
};

export default CarHeader