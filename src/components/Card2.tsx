"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
interface CardProps {
  title: string;
  image: string;
  address: string;
}

const Card: React.FC<CardProps> = ({ title, image, address }) => {
  const router = useRouter();

  // handle click
  const handleClick = () => {
    // navigate to detail page
    router.push("/detailstudio");
  };

  return (
    <div>
      <div className="boxStyle2 p-8" onClick={handleClick}>
        <p className="sb1 text-center text-primary">
          {title} <span className="text-white">Studio</span>
        </p>
        <div className="styleImage">
          <Image src={image} alt="Studio Card" width={500} height={500} />
        </div>
        <div className="flex items-center gap-1 mt-4 mb-1">
          <Image src="/location.png" alt="Location" width={30} height={15} />
          <p className="b1">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
