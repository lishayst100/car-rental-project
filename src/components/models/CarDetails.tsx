import React from 'react'
import { BsFillCarFrontFill, BsDoorClosedFill } from 'react-icons/bs';
import { FaGasPump } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';

type DetailsProps = {
  model: string;
  fuel: string;
  transmission: string;
  doors: string;
};


const CarDetails = ({doors,fuel,model,transmission}:DetailsProps) => {
  return (
    <div className="d-flex flex-column gap-5 py-5 ">
      <div className="d-flex justify-content-between gap-3">
        <span>
          <BsFillCarFrontFill className="icon-models" />
          <span className="text-models">{model}</span>
        </span>

        <span>
          <span className="text-models">{transmission}</span>
          <TbManualGearbox className="icon-models" />
        </span>
      </div>

      <div className="d-flex justify-content-between gap-3">
        <span>
          <FaGasPump className="icon-models" />
          <span className="text-models">{fuel}</span>
        </span>
        <span>
          <span className="text-models">{doors}</span>
          <BsDoorClosedFill className="icon-models" />
        </span>
      </div>
    </div>
  );
}

export default CarDetails