import About from '@/components/about/About';
import BookCar from '@/components/book car/BookCar';
import CarModels from '@/components/car models/CarModels';
import Download from '@/components/download/Download';
import Faq from '@/components/faq/Faq';
import Header from '@/components/header/Header';
import PlanTrip from '@/components/plan your trip/PlanTrip';
import Testimonials from '@/components/testimonilas/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <BookCar/>
      <PlanTrip />
      <About />
      <CarModels/>
      <Testimonials/>
     {/*  <Faq/> */}
      <Download/>
    </>
  );
}
