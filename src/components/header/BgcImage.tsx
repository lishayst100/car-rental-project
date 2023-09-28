import React from 'react'
import Image from "next/image";

const BgcImage = () => {
  return (
    <Image
      src={
        "https://car-rental-ten.vercel.app/static/media/hero-bg.3b5f7a2502f0f81d1490.png"
      }
      alt="..."
      className="bg-shape"
      width={680}
      height={870}
    />
  );
}

export default BgcImage