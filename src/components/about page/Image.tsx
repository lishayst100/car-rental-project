'use client'
import { useResize } from '@/hooks/useResize';
import Image from 'next/image';
import React from 'react'

const ImageAbout = () => {

  const screenWidth = useResize()

  return (
    <div className="">
      <Image
        src={
          "https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg"
        }
        alt="..."
        width={461}
        height={478}
        className={screenWidth > 500 ? '' : 'img-fluid'}
      />
    </div>
  );
}

export default ImageAbout;