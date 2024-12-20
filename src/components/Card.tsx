
"use client";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
interface CardProps {
  title: string;
  price: string;
  image: string;
  rating: number;
}


const Card: React.FC<CardProps> = ({ title,  price, image, rating}) => {
    const router = useRouter();

    const renderStars = () => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    stars.push(<FaStar key={i} className="text-yellow-500" />);
                } else {
                    stars.push(<FaRegStar key={i} className="text-yellow-500" />);
                }
            }
            return stars;
    };

    // handle click
    const handleClick = () => {
        // navigate to detail page
        router.push('/detailstudio');
    };

    return (
        <div>
            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer bg-white text-black" onClick={handleClick}>
                <div>
                    <img src={image} alt="Studio Card" />
                </div>
                <div className="p-2">
                    <p className="sb1">{title}</p>
                    <div className="flex gap-1 mt-1 mb-1">[{rating}]    {renderStars()}</div>
                    <p className="sb2">Start From</p>
                    <p className="sb1 text-primary">{price} <span className="text-black b1">/hour</span></p>
                </div>
            </div>
        </div>
    );
}

export default Card;
