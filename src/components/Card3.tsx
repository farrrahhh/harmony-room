"use client";

import { useRouter } from "next/navigation";
import React from "react";
import IconDescRow from "./IconDescRow";
import Image from "next/image";
interface CardProps {
  title: string;
  image: string;
  facilities: string[];
}

const Card3: React.FC<CardProps> = ({ title, image, facilities }) => {
  const router = useRouter();

  // Handle click
  const handleClick = () => {
    // Navigate to detail page
    router.push("/detailstudio");
  };

  return (
    <div
      className="h-72 md:h-[600px] overflow-hidden rounded-xl shadow-lg relative cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="absolute object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white text-center">
        <h2 className="h2 font-bold text-primary">
          {title} <span className="text-white">Studio</span>
        </h2>
        <div className="flex items-center justify-center text-center gap-4">
          <IconDescRow icon="/stars.png" description={facilities[0]} />
          <IconDescRow icon="/clean_hands.png" description={facilities[1]} />
          <IconDescRow icon="/Music2.png" description={facilities[2]} />
        </div>
        {/* Button See Details */}
        <button className="bg-primary mb-4 text-white sb2 py-2 px-4 rounded-lg mt-4 transform transition-transform hover:scale-110">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Card3;
