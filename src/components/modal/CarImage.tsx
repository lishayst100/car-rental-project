import Image from "next/image";


interface ModalProps {
  car: string | null;
  image: string;
}

const CarImage = ({ car, image }: ModalProps) => {
  return (
    <div className="d-flex flex-column gap-4 align-items-center">
      <span className="font-bolder text-modal">
        Car - <span className="red font-bolder">{car}</span>
      </span>
      <Image className="img-fluid" src={image} alt="..." width={500} height={297} />
    </div>
  );
};

export default CarImage;
