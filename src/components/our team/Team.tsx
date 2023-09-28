import React from 'react'
import { OurTeam } from '../../../types'
import Image from 'next/image';

const Team = ({image,position,name}:OurTeam) => {
  return (
    <div className="shadow-lg">
      <div className="bg-light pt-3 px-4">
        <Image src={image} alt="..." width={350} height={431} />
      </div>
      <div className="p-2 pt-3">
        <p className="text-center subtitle font-bolder">{name}</p>
        <p className="text-center para-text">{position}</p>
      </div>
    </div>
  );
}

export default Team