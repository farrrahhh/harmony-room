"use client";
import Image from "next/image";
interface CardProps {
  title: string;
  image: string;
  address: string;
}

const Card: React.FC<CardProps> = ({ title, image, address }) => {
  return (
    <div>
      <div className="d-flex text-center justify-content-center align-items-center">
        <p className="sb1 text-primary">
          {title} <span className="text-white">Studio</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={image}
          alt="Studio Card"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center gap-1 mt-4 mb-1">
        <Image src="/Location.png" alt="Location" width={30} height={15} />
        <p className="b1">{address}</p>
      </div>
    </div>
  );
};

export default Card;
