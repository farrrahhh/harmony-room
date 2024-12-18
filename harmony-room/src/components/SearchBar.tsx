"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import router, { useRouter } from "next/router";

interface SearchBarProps {
  linkNavigate: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ linkNavigate }) => {
  const [studioName, setStudioName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

 

  const handleSearch = () => {
    router.push(linkNavigate);
  };

  return (
    <div className="flex flex-row items-center p-4 shadow-lg ">
      {/* Studio Name Input */}
      <div className="b1 w-3/5 h-12">
        <input
          id="studioName"
          type="text"
          value={studioName}
          onChange={(e) => setStudioName(e.target.value)}
          placeholder="Enter studio name"
          className="b1 mt-1 block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg"
        />
      </div>

      {/* Date Input */}
      <div className="w-1/4 h-12">
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary "
        />
      </div>

      {/* Start Time Input */}
      <div className="w-1/8 h-12" >
        <input
          id="startTime"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary "
        />
      </div>

      {/* End Time Input */}
      <div className="w-1/8 h-12">
        <input
          id="endTime"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="mt-1 block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary "
        />
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className=" h-12 bg-primary p-3 shadow-lg hover:bg-primary-dark transition w-auto flex items-center justify-center rounded-r-lg"
        
      >
        <FaSearch className="mr-1 h-6 w-6" />
       
      </button>
    </div>
  );
};


export default SearchBar;
