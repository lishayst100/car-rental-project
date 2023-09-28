import { getTeam } from '@/services/team'
import React from 'react'
import { OurTeam } from '../../../types'
import Image from 'next/image'
import Team from './Team'


const OurTeam = async() => {

    const team:OurTeam[] = await getTeam()

  return (
    <div className='container mx-auto d-flex flex-wrap justify-content-center gap-5'>
      {team.map((t) => (
        <Team key={t.id} {...t}/>
      ))}
    </div>
  );
}

export default OurTeam