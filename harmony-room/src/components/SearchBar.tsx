"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import router from "next/router";

interface SearchBarProps {
  linkNavigate: string;
  height: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ linkNavigate, height }) => {
  const [studioName, setStudioName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSearch = () => {
    router.push(linkNavigate);
  };

  return (
    <div className="flex flex-row items-center p-4 shadow-lg">
      {/* Studio Name Input */}
      <div className="b1 w-3/5" style={{ height }}>
        <input
          id="studioName"
          type="text"
          value={studioName}
          onChange={(e) => setStudioName(e.target.value)}
          placeholder="Enter studio name"
          className="b1 block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg"
          style={{ height: "100%" }}
        />
      </div>

      {/* Date Input */}
      <div className="w-1/4" style={{ height }}>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        />
      </div>

      {/* Start Time Input */}
      <div className="w-1/8" style={{ height }}>
        <input
          id="startTime"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        />
      </div>

      {/* End Time Input */}
      <div className="w-1/8" style={{ height }}>
        <input
          id="endTime"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        />
      </div>

      {/* Search Button */}
      <div
        className="bg-primary p-4 w-auto flex items-center justify-center rounded-r-lg cursor-pointer" 
        onClick={handleSearch}
        style={{ height: height - 1 }}

      >
        <FaSearch className="mr-1 h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchBar;
