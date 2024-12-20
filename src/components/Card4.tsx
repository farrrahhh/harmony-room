"use client";
import { useRouter } from "next/navigation";

interface CardProps {
  title: string;
  image: string;
  agepartner: number; // Perbaiki menjadi number
  genre: string;
  instrument: string;
}

const Card4: React.FC<CardProps> = ({ title, image, agepartner, genre, instrument }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile"); // Navigasi ke halaman profil
  };

  return (
    <div
      className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer bg-white text-black"
      onClick={handleClick}
    >
      <img src={image} alt="Partner Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">Age: <span className="font-medium">{agepartner}</span></p>
        <p className="text-sm">Genre: <span className="font-medium">{genre}</span></p>
        <p className="text-sm">Instrument: <span className="font-medium">{instrument}</span></p>
      </div>
    </div>
  );
};

export default Card4;
