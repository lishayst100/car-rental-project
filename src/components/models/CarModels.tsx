import { getCars } from '@/services/cars'
import Cars from '../../../types'
import CarImage from './CarImage';
import CarHeader from './CarHeader';
import CarDetails from './CarDetails';
import CarButton from './CarButton';
import CarLearnMoreButton from './CarLearnMore'




const CarModels = async() => {
   const cars:Cars[] = await getCars()
  return (
    <div className="w-75 mx-auto d-flex flex-wrap gap-5 justify-content-center align-items-center">
      {cars.map((car) => (
        <div key={car.id} className="model-box">
          <CarImage image={car.image} />
          <CarHeader {...car} />
          <CarDetails {...car} />
          <div className='d-flex justify-content-center align-items-center gap-3'>
            <CarButton/>
            <CarLearnMoreButton postId={car!.id}/>
          </div>
          </div>
      ))}
    </div>
  );
}

export default CarModels