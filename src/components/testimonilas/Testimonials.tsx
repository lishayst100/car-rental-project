import React from 'react'
import TitleTestimonials from './TitleTestimonials'
import TestimonialsList from './TestimonialsList'
import './testi.scss'


const Testimonials = () => {
  return (
    <div id='testimonials' className='bg-light spacing'>
        <TitleTestimonials/>
        <TestimonialsList/>
    </div>
  )
}

export default Testimonials