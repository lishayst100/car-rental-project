
import BgcImage from "./BgcImage";
import CarImage from "./CarImage"
import Text from "./Text"

const Header = () => {
  return (
    <div className="container mx-auto d-flex justify-content-around margin hero">
      <Text />
      <CarImage />
      <BgcImage/>
      
    </div>
  );
}

export default Header