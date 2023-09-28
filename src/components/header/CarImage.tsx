import Image from "next/image"
import car from '../../images/pngimg.com - volkswagen_PNG1821.png'

const CarImage = () => {
  return (
    <div className="">
      <Image
        className="img-header slide-fwd-bl"
        src={car}
        alt="car-hero"
        width={879}
        height={500}
      />
    </div>
  );
}

export default CarImage