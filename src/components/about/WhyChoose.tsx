'use client'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";




const WhyChoose = () => {
  return (
    <div className='w-100'>
      <h3 className='subtitle'>Why Choose Us?</h3>
      <h1 className='title'>Best valued deals you will ever find</h1>
      <p className='para'>
        Discover the best deals youll ever find with our unbeatable offers Were
        dedicated to providing you with the best value for your money, so you
        can enjoy top-quality services and products without breaking the bank.
        Our deals are designed to give you the ultimate renting experience, so
        dont miss out on your chance to save big
      </p>
      <button className="book-ride">
        Find Details <MdKeyboardArrowRight className="arrow" />
      </button>
    </div>
  );
}

export default WhyChoose