import React from 'react'
import Image from "next/image";

interface CarModelImageProps {
    image:string
}


const CarModelImage = ({image}:CarModelImageProps) => {
  return (
    <div className="image-car col-lg d-flex align-items-center justify-content-center ">
      <Image
        className="img-fluid"
        src={image || "https://via.placeholder.com/588x350"}
        alt="car-hero"
        width={588}
        height={350}
      />
    </div>
  );
}

export default CarModelImage