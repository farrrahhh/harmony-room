
"use client";

import { useRouter } from 'next/navigation';
interface CardProps {
  title: string;
  image: string;
  address: string;
}


const Card: React.FC<CardProps> = ({ title, image, address}) => {
    const router = useRouter();

    // handle click
    const handleClick = () => {
        // navigate to detail page
        router.push('/detailstudio');
    };

    return (
        <div>
            <div className="boxStyle2 onClick={handleClick} p-8">
                <p className="sb1 text-center text-primary">{title} <span className='text-white'>Studio</span></p>
                <div className='styleImage'>
                    <img src={image} alt="Studio Card" />
                </div>
                <div className="flex gap-1 mt-4 mb-1">
                    <img src="/location.png" alt="Location" />
                    <p className='b1'>{address}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
