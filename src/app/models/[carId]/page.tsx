import { getCar } from '@/services/cars'
import React from 'react'
import Cars from '../../../../types'
import Image from "next/image";
import CarDetails from '@/components/models/CarDetails';
import CarBenefits from '@/components/car details/CarBenefits';
import { benefits, includeInPrice } from '@/components/car details/benefits';
import CombineBenefits from '@/components/car details/CombineBenefits';
import BeforeFooter from '@/components/before footer/BeforeFooter';
import PickUpReq from '@/components/car details/PickUpReq';


interface CarDetailsProps{
  params:{
    carId:string
  }
}

const CarDetialsPage = async({params}:CarDetailsProps) => {
    const {carId} = params
    const car: Cars = await getCar(carId);

  return (
    <div className="container mx-auto">
      <h2 className="title my-5">{car.name}</h2>
      <div className="d-flex gap-3 flex-lg-row flex-column justify-content-around align-items-center">
        <Image src={car.image} alt="..." width={400} height={238} />
        <CombineBenefits />
      </div>
      <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center gap-3'>
        <PickUpReq />
        <CarDetails {...car} />
      </div>
    </div>
  );
}

export default CarDetialsPage;