import { IoAlertCircleOutline } from "react-icons/io5";


const DescModal = () => {
  return (
    <div className="d-flex flex-column p-5 container-modal mx-auto justify-content-center gap-4">
      <div className="red d-flex align-items-center font-bolder text-modal gap-2">
        <IoAlertCircleOutline className="icon-modal" />
        <span>Upon completing this reservation enquiry, you will receive:</span>
      </div>

      <span className="para-text">
        Your rental voucher to produce on arrival at the rental desk and a
        toll-free customer support number.
      </span>
    </div>
  );
}

export default DescModal