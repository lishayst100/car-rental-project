import React from 'react'
import Image from "next/image";

type ImageProps = {
    image:string
}

const CarImage = ({image}:ImageProps) => {
  return (
    
        <div>
            <Image src={image} alt="..." width={350} height={200} />
        </div>
  )
}

export default CarImage