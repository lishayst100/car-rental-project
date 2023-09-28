import Image from 'next/image'
import React from 'react'
import car from '@/images/display_car_image-1024x449-1.png'
const CarImage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center '>
        <Image src={car} width={1400} height={614} alt='....' className='img-fluid'/>
    </div>
  )
}

export default CarImage