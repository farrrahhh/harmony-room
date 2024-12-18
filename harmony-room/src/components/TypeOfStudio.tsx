import React from 'react';
import Image from 'next/image';

interface TypeOfStudioProps {
    type: string;
    facilities: string[];
    capacity: string;
    price: string;
    description: string;
    isAvailable: boolean;
    photo: string;
}

const TypeOfStudio: React.FC<TypeOfStudioProps> = ({ type, facilities, capacity, price, description, isAvailable, photo }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md style2">
            <h2 className="h3 mb-4">{type}</h2>
            <div className="flex space-x-4">
                {/* Image Container */}
                <div className="relative w-1/3 h-auto">
                    <Image
                        src={photo}
                        alt="Studio Image"
                        width={450}
                        height={270}
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>

                {/* Details Section */}
                <div className="flex-1">
                    <p className="sb1 mb-2">Description</p>
                    <p className="b1 mb-4">{description}</p>
                    
                    {/* Facilities */}
                    <p className="sb1 mb-2">Facilities</p>
                    <ul className="list-disc list-inside">
                        {facilities.map((facility, index) => (
                            <li key={index} className="b1">{facility}</li>
                        ))}
                    </ul>

                    <p className="sb1 mt-4 mb-2">Capacity</p>
                    <p className="b1 mb-4">{capacity}</p>
                </div>
            </div>

            {/* Bottom Section */}
            
            <div className="relative">
                {/* Price Section */}
                <div className="absolute bottom-10 right-4 text-right">
                    <p className="sb1">Price/studio/hour</p>
                    <p className="sb1 text-accent2">Rp{price}</p>
                </div>
                
                {/* Button Section */}
                <button
                    className={`absolute bottom-0 right-4 space-y-4 text-right bg-primary text-white px-4 py-2 rounded-md ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isAvailable}
                >
                    {isAvailable ? "Book Now" : "Not Available"}
                </button>
            </div>

            
        </div>
    );
};

export default TypeOfStudio;
