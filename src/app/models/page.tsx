import BeforeFooter from '@/components/before footer/BeforeFooter';
import CarModelsTitle from '@/components/car models/CarModelsTitle';
import CarModels from '@/components/models/CarModels';
import React from 'react'

const Models = () => {
  return (
    <div>
      <CarModelsTitle />
      <CarModels />
      <BeforeFooter />
    </div>
  );
  
}

export default Models;