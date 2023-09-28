import {AiOutlineCheck} from 'react-icons/ai'
import { benefits } from './benefits';

interface CarBenefitsProps{
    arr: string[]
}

const CarBenefits = ({arr}:CarBenefitsProps) => {
  return (
    <div>
      {arr!.map((b, i) => (
        <div key={i} className='d-flex align-items-center gap-2'>
          <AiOutlineCheck style={{color:"green", fontSize:"22px"}} />
          <span className='para'>{b}</span>
        </div>
      ))}
    </div>
  );
};

export default CarBenefits;
