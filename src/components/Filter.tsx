"use client";
import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const FilterComponent = () => {
  const [priceRange, setPriceRange] = useState([20000, 1000000]);

  const handlePriceChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setPriceRange(newRange);
    }
  };

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
              <label htmlFor="kategori1" className="ml-2">
                Music
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="kategori2" />
              <label htmlFor="kategori2" className="ml-2">
                Recording
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="kategori3" />
              <label htmlFor="kategori3" className="ml-2">
                Band Practice
              </label>
            </div>
          </div>
        </div>

        {/* Price Range Filter */}
        <div>
          <h2 className="sb2">Price Range</h2>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between">
              <p>Rp20.000</p>
              <p>Rp1.000.000</p>
            </div>
            <div className="px-4">
              <Slider
                range
                min={20000}
                max={1000000}
                step={10000}
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full"
                handleStyle={{
                  borderColor: "darkgray",
                  height: 20,
                  width: 20,
                  backgroundColor: "#DF2389",
                }}
                trackStyle={{ backgroundColor: "#5C027F", height: 10 }}
              />
            </div>
            <div className="flex justify-between ">
              <span>Min: Rp{priceRange[0].toLocaleString()}</span>
              <span>Max: Rp{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Facilities Filter */}
        <div>
          <h2 className="sb2">Facilities</h2>
          <div className="flex flex-col gap-2 b1">
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas1" />
              <label htmlFor="fasilitas1" className="ml-2">
                Parking
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas2" />
              <label htmlFor="fasilitas2" className="ml-2">
                Wifi
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="fasilitas3" />
              <label htmlFor="fasilitas3" className="ml-2">
                AC
              </label>
            </div>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="bg-primary text-white p-2 rounded-lg mt-4 w-full hover:bg-primary-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
