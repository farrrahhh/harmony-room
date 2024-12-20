"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Link from "next/link";
interface SearchBarProps {
  linkNavigate: string;
  height: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ height }) => {
  const [studioName, setStudioName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Function to generate hour options
  const generateHourOptions = (startHour: number = 0) => {
    const hours = [];
    for (let i = startHour; i < 24; i++) {
      hours.push(`${i.toString().padStart(2, "0")}:00`);
    }
    return hours;
  };

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="flex flex-row items-center p-4 ">
      {/* Studio Name Input */}
      <div className="b1 w-3/5" style={{ height }}>
        <input
          id="studioName"
          type="text"
          value={studioName}
          onChange={(e) => setStudioName(e.target.value)}
          placeholder="Enter studio name"
          className="b1 w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg"
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
          min={getTodayDate()} // Set minimum date to today
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        />
      </div>

      {/* Start Time Input */}
      <div className="w-1/8" style={{ height }}>
        <select
          id="startTime"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        >
          {generateHourOptions().map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <style jsx>{`
          select {
            position: relative;
          }
          select option {
            max-height: 200px;
            overflow-y: auto;
          }
        `}</style>
      </div>

      {/* End Time Input */}
      <div className="w-1/8" style={{ height }}>
        <select
          id="endTime"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="block w-full p-2 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ height: "100%" }}
        >
          {generateHourOptions(Number(startTime.split(":")[0]) + 1).map(
            (hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            )
          )}
        </select>
        <style jsx>{`
          select {
            position: relative;
          }
          select option {
            max-height: 200px;
            overflow-y: auto;
          }
        `}</style>
      </div>

      {/* Search Button */}
      <Link href="hasilsearch">
        <div
          className="bg-primary p-4 w-auto flex items-center justify-center rounded-r-lg cursor-pointer"
          style={{ height: height - 0.2 }}
        >
          <FaSearch className="mr-1 h-5 w-5 text-white" />
        </div>
      </Link>
    </div>
  );
};

export default SearchBar;
