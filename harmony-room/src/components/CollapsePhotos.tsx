import React from 'react';

interface CollapsePhotosProps {
  photos: string[]; 
}

const CollapsePhotos: React.FC<CollapsePhotosProps> = ({ photos }) => {
  if (photos.length !== 5) {
    throw new Error("Expected exactly 5 photos");
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* Left Image (Larger) */}
      <div className="w-full sm:w-1/2">
        <img
          src={photos[0]}
          alt="Main Studio"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Images (2x2 grid) */}
      <div className="w-full sm:w-1/2 grid grid-cols-2 gap-4">
        <div className="w-full">
          <img
            src={photos[1]}
            alt="Studio Image 2"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={photos[2]}
            alt="Studio Image 3"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={photos[3]}
            alt="Studio Image 4"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={photos[4]}
            alt="Studio Image 5"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CollapsePhotos;
