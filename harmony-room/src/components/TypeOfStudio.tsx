import React from 'react';
import Image from 'next/image';

interface TypeOfStudioProps {
    type: string;
    facilities: string[];
    capacity: string;
    price: number;
    description: string;
    isAvailable: boolean;
    photo: string;
}

const TypeOfStudio: React.FC<TypeOfStudioProps> = ({type, facilities, capacity, price, description, isAvailable, photo}) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="h2 mb-2">{type}</h2>
            <div className='flex'>
                <Image
                    src={photo}
                    alt="Studio Image"
                    layout="fill"
                    objectFit="cover"
                />
                <div>
                    <p className="b1 mb-4">Facilities: {facilities.join(", ")}</p>
                    <p className="b1 mb-4">Capacity: {capacity}</p>
                    <p className="b1 mb-4">Price: {price}</p>
                    <p className="b1 mb-4">Description: {description}</p>
                </div>
            </div>
            <button className="relative bottom-5 left-5 bg-primary text-white px-4 py-2 rounded-md" disabled={!isAvailable}>
                {isAvailable ? "Book Now" : "Not Available"}
            </button>
        </div>
    );
}

export default TypeOfStudio;