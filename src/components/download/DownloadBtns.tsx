import React from 'react'
import Image from "next/image";

const DownloadBtns = () => {
  return (
    <div className='d-flex gap-4 flex-column flex-lg-row'>
      <Image
        src={
          "https://car-rental-ten.vercel.app/static/media/appstore.35481c6295b0744dfcc00d35874fbdd8.svg"
        }
        height={69}
        width={231}
        alt="..."
      />
      <Image
        src={
          "https://car-rental-ten.vercel.app/static/media/googleapp.e6493904327fe3f9b89c7c75a4f3ae74.svg"
        }
        height={69}
        width={227}
        alt="..."
      />
    </div>
  );
}

export default DownloadBtns