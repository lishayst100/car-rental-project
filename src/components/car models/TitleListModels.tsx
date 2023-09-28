'use client'
import React, { useEffect, useState } from 'react'
import Cars from '../../../types'
import './CarModels.scss'
import './CarModels.scss'
import CarModelImage from './CarModelImage'
import CarModelTable from './CarModelTable'
import { baseUrl } from '@/services/cars'

const TitleListModels = () => {
    const [cars, setCars] = useState<Cars[]>([])
    const [car, setCar] = useState<Cars>()
    const [isLoading, setIsLoading] = useState(true)
    const [selected, setSelected] = useState<null | number>(0);

    const toggleSelected = (i: number) => {
      if (selected === i) {
        return setSelected(null);
      }

      setSelected(i);
    };

    
    useEffect(()=>{
        toggle();
       fetch(`${baseUrl}/cars`)
       .then(res => res.json())
       .then(result => {
        setCars(result.cars)
        setIsLoading(false)
    })

    }, []) 

    const toggle = (carId: string = "1stCTR4ww59AJhKAyyHD") => {
      fetch(`/api/cars/${carId}`)
        .then((res) => res.json())
        .then((result) => setCar(result));
    };


   if (!car) {
     return;
   }
    

  return (
    <div className="row-lg mx-auto gap-5 pb-5 flex-lg-row d-lg-flex justify-content-lg-center align-items-lg-center flex-column d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column gap-1 align-items-end col-lg justify-content-start">
        {cars?.map((car, i) => (
          <div key={car.id}>
            <button
              onClick={() => {
                toggle(car.id);
                toggleSelected(i);
              }}
              className={selected === i ? "title-btn selected" : "title-btn"}
            >
              {car.name}
            </button>
          </div>
        ))}
      </div>
      <CarModelImage image={`${car?.image}`} />
      <CarModelTable car={car} />
    </div>
  );
}

export default TitleListModels