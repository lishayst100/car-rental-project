import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
interface Props {
  handle:()=>void;
}


const TitleModal = ({handle}:Props) => {
  return (
    <div>
      <div className="font-bolder d-flex justify-content-between align-items-center p-3 title-modal">
        <h2 className="font-bolder m-0">COMPLETE RESERVATION</h2>
        <AiOutlineClose
          onClick={handle}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default TitleModal