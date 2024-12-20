"use client";
import React, { useState } from "react";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

const FilterComponent = () => {
  const [ageRange, setAgeRange] = useState([18, 60]);

  const handleAgeChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setAgeRange(newRange);
    }
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg border border-gray-200">
      <h1 className="sb1 mb-4">Filter</h1>
      <div className="flex flex-col gap-4">
        {/* Music Category Filter */}
        <div>
          <h2 className="sb2">Music Category</h2>
          <div className="flex flex-col gap-2 b1">
            <div className="flex items-center">
              <input type="checkbox" id="category1" />
              <label htmlFor="category1" className="ml-2">
                Rock
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="category2" />
              <label htmlFor="category2" className="ml-2">
                Jazz
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="category3" />
              <label htmlFor="category3" className="ml-2">
                Pop
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="category4" />
              <label htmlFor="category4" className="ml-2">
                Classical
              </label>
            </div>
          </div>
        </div>

        {/* Instrument Filter */}
        <div>
          <h2 className="sb2">Instruments Played</h2>
          <div className="flex flex-col gap-2 b1">
            <div className="flex items-center">
              <input type="checkbox" id="instrument1" />
              <label htmlFor="instrument1" className="ml-2">
                Guitar
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="instrument2" />
              <label htmlFor="instrument2" className="ml-2">
                Drums
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="instrument3" />
              <label htmlFor="instrument3" className="ml-2">
                Piano
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="instrument4" />
              <label htmlFor="instrument4" className="ml-2">
                Vocals
              </label>
            </div>
          </div>
        </div>

        {/* Age Range Filter */}
        <div>
          <h2 className="sb2">Age Range</h2>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex justify-between">
              <p>18</p>
              <p>60</p>
            </div>
            <Slider
              range
              min={18}
              max={60}
              step={1}
              value={ageRange}
              onChange={handleAgeChange}
              className="w-full"
            />
            <div className="flex justify-between">
              <span>Min: {ageRange[0]} years</span>
              <span>Max: {ageRange[1]} years</span>
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
