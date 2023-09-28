import React from 'react'
import ImageAbout from './Image'
import AboutText from './AboutText';
import PlanTrip from '../plan your trip/PlanTrip';
import '../header/header.scss'
import BeforeFooter from '../before footer/BeforeFooter';

const AboutPage = () => {
  return (
    <div>
      <h2 className='title text-center mt-5 '>About Us</h2>
      <div className="container mx-auto justify-content-center gap-5 margin d-flex flex-lg-row flex-column justify-content-center align-items-center ">
        <ImageAbout />
        <AboutText />
      </div>
      <PlanTrip/>
      <BeforeFooter/>
    </div>
  );
}

export default AboutPage;