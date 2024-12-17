import Image from 'next/image'; 
import { FaStar, FaRegStar } from 'react-icons/fa';

interface ReviewProps {
    username: string;
    review: string;
    rating: number;
}

const Review: React.FC<ReviewProps> = ({ username, review, rating }) => {
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

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/avatar.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                    <div>
                        <p className="b1">{username}</p>
                        <div className="flex">{renderStars()}</div>
                    </div>
                </div>
                <div className="flex-1 ml-4">
                    <p className="text-gray-700">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;