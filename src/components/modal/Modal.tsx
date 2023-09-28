"use client";
import { baseUrl } from "@/services/cars";
import { useState,useEffect } from "react";
import ReactModal from "react-modal";
import Cars from "../../../types";
import TitleModal from "./TitleModal";
import DescModal from "./DescModal";
import OrderDetails from "./OrderDetails";
import OrderForm from "./OrderForm";
import { useSession,signIn } from "next-auth/react";
import { useResize } from "@/hooks/useResize";



export interface ModalProps {
  car: string | null;
  pickUp: string | null;
  dropOff: string | null;
  pickUpDate: string | null;
  dropOffDate: string | null;
  handleIsOpen?: ()=>void;
}

const Modal = ({car, dropOff, dropOffDate,pickUp,pickUpDate}:ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [getCar, setGetCar] = useState<Cars>();
  const [daysDifference, setDaysDifference] = useState<null | number>(null);
  const totalPrice = getCar!?.price * daysDifference!
  const {data:session} = useSession()
  const screenWidth = useResize()

  const validateBooking = () => {
    if ((pickUp || dropOff) === null || (dropOffDate && pickUpDate) === '') {
      setMessage('All Fields are Required!!!')
    } else {
      handleIsOpen();
      setMessage(null);
    }
  };


  const handleSignIn = () => {
    signIn('google')
  }

   const calculateDaysDifference = () => {
     if (pickUpDate && dropOffDate) {
       const start = new Date(pickUpDate);
       const end = new Date(dropOffDate);
       const timeDifference = end.getTime() - start.getTime();
       const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
       setDaysDifference(daysDifference);
     }
   };


  const handleIsOpen = () => {
    setIsOpen(!isOpen)
    calculateDaysDifference();
  }

  const handleAfterOpenFunc = (id:string | null) => {
        fetch(`${baseUrl}/cars/${id}`)
        .then(res => res.json())
        .then(result => setGetCar(result))
  }

  if(!car){
    return
  }
  

  return (
    <div className="col">
      <ReactModal
        isOpen={isOpen}
        onAfterOpen={() => {
          handleAfterOpenFunc(car);
        }}
        style={
          screenWidth > 500
            ? { content: { right: "20%", left: "20%", padding: "0" } }
            : { content: { right: "0", left: "0", padding: "10px" } }
        }
        ariaHideApp={false}
      >
        <TitleModal handle={handleIsOpen} />
        <DescModal />
        <OrderDetails
          car={getCar!?.name}
          image={getCar!?.image}
          price={getCar!?.price}
          pickUp={pickUp}
          dropOff={dropOff}
          pickUpDate={pickUpDate}
          dropOffDate={dropOffDate}
          daysDifference={daysDifference}
        />
        <OrderForm
          car={getCar!?.name}
          pickUp={pickUp}
          dropOff={dropOff}
          pickUpDate={pickUpDate}
          dropOffDate={dropOffDate}
          handleIsOpen={handleIsOpen}
          price={getCar!?.price}
          daysDifference={daysDifference}
          totalPrice={totalPrice}
        />
      </ReactModal>
      <div className="d-flex flex-column">
        <div className="flex-grow-1 text-light">.</div>
        <button
          className="register search-btn w-100 col flex-grow-0"
          onClick={() => {
            session ? validateBooking() : handleSignIn();
          }}
        >
          Search
        </button>
      </div>
      <div>
        {message !== null && (
          <p className="alert-danger font-bolder red mt-3 para">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
