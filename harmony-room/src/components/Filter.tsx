import React from 'react';

const FilterComponent = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg border border-gray-200 ">
      <h1 className="sb1 mb-4">Filter</h1>
      <div className="flex flex-col gap-4">
        {/* Category Filter */}
        <div>
          <h2 className="sb2">Category</h2>
          <div className="flex flex-col gap-2 b1">
            <div className="flex items-center">
              <input type="checkbox" id="kategori1" />
              <label htmlFor="kategori1" className="ml-2">Music</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="kategori2" />
              <label htmlFor="kategori2" className="ml-2">Recording</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="kategori3" />
              <label htmlFor="kategori3" className="ml-2">Band Practice</label>
            </div>
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
            <h2 className="sb2">Price Range</h2>
            <div className="flex gap-4 mt-2">
                {/* Min Price Input */}
                <input
                type="number"
                min="0"
                step="50"
                placeholder="Min"
                className="w-full p-2 border border-primary rounded-lg focus:outline-none"
                style={{
                    appearance: "none",  
                    MozAppearance: "textfield",  
                    WebkitAppearance: "none", 
                }}
                />
                {/* Max Price Input */}
                <input
                type="number"
                min="0"
                max="10000"
                step="50"
                placeholder="Max"
                className="w-full p-2 border border-primary rounded-lg focus:outline-none"
                style={{
                    appearance: "none", 
                    MozAppearance: "textfield",  
                    WebkitAppearance: "none", 
                }}
                />
            </div>
        </div>


        {/* Facilities Filter */}
        <div>
          <h2 className="sb2">Facilities</h2>
          <div className="flex flex-col gap-2 b1">
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas1" />
              <label htmlFor="fasilitas1" className="ml-2">Parking</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas2" />
              <label htmlFor="fasilitas2" className="ml-2">Wifi</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas3" />
              <label htmlFor="fasilitas3" className="ml-2">AC</label>
            </div>
          </div>
        </div>

       {/* Apply Filters Button */}
        <button
        className="bg-primary text-white p-2 rounded-lg mt-4 w-full hover:bg-primary-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
        Apply Filters
        </button>

      </div>
    </div>
  );
};

export default FilterComponent;
