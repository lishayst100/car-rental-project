import { MdKeyboardArrowRight } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import './header.scss'

const Text = () => {
  return (
    <div className="d-flex flex-column justify-content-center gap-2 fade-in-top">
      <p className="subtitle">Plan your trip now</p>
      <h1 className="title">
        Save <span className="red">Big</span> with our car rental
      </h1>
      <p className="para">
        Rent the car of your dreams. Unbeatble prices, unlimited miles, flexible
        pick-up options and much more
      </p>
      <div className=" d-flex justify-content-around">
        <button className="book-ride">
          Book Ride <VscVerifiedFilled className="arrow"/>
        </button>
        <button className="learn-more">
          Learn More <MdKeyboardArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Text