"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBarPartner = () => {
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    if (searchName.trim() !== "") {
      console.log("Searching for:", searchName); 
    }
  };

  return (
    <div className="flex items-center p-4">
      {/* Search Input */}
      <div className="flex-grow">
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search by name"
          className="w-full p-4 border border-primary text-black focus:outline-none focus:ring-2 focus:ring-primary rounded-l-lg"
          style={{ height: "50px" }}
        />
      </div>

      {/* Search Button */}
      <div
        className="bg-primary p-4 flex items-center justify-center rounded-r-lg cursor-pointer"
        style={{ height: "50px" }}
        onClick={handleSearch}
      >
        <FaSearch className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default SearchBarPartner;
