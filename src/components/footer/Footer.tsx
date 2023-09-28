import React from 'react'
import Subscription from './Subscription'
import OpeningHours from './OpeningHours'
import Company from './Company';
import CarRental from './CarRental';

const Footer = () => {
  return (
    <footer className="container mx-auto py-5 d-flex flex-column flex-lg-row" id='contact'>
      <CarRental/>
      <Company/>  
      <OpeningHours />
      <Subscription />
    </footer>
  );
}

export default Footer