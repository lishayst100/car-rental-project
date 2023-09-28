'use client'
import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import { testimonials } from './test'
import { Image } from 'react-bootstrap'
import './testi.scss'


const TestimonialsList = () => {
  return (
    <div className="row container mx-auto gap-3 d-flex flex-wrap flex-sm-column flex-lg-row">
      {testimonials.map((t) => (
        <div
          key={t.testimonial}
          className="col d-flex justify-content-center align-items-center flex-column shadow-lg p-4"
        >
          <p className="para w-75 subtitle">{t.testimonial}</p>
          <div className="d-flex justify-content-between w-75">
            <div className="d-flex gap-3 align-items-center">
              <Image
                className="thumbnail-image"
                src={t.details.image}
                alt={t.details.name}
              />
              <div className="d-flex flex-column">
                <span className="para-text font-bolder">{t.details.name}</span>
                <span className="para">{t.details.location}</span>
              </div>
            </div>
            <FaQuoteRight className="icon-testi" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialsList