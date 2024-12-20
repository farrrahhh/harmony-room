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
        <div className="bg-white p-6 rounded-lg shadow-md boxStyle flex flex-col space-y-4">
            <div className="flex items-start space-x-4">
                {/* Avatar Section */}
                <div className="flex-none">
                    <Image
                        src="/avatar.png"
                        alt="Avatar"
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </div>
                
                {/* User Details */}
                <div className="flex flex-col flex-1">
                    <p className="b1 font-semibold">{username}</p>
                    <div className="flex mt-1">{renderStars()}</div>
                </div>
            </div>

            {/* Review Content */}
            <div className="flex-1">
                <p className="text-gray-700">{review}</p>
            </div>
        </div>
    );
};

export default Review;
