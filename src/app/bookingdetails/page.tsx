import React from "react";
import Booking from "@/components/Booking";

function page() {
  return (
    <div className="flex flex-col h-screen text-white bg-[#1A1A1A]">
      <div className="m-32">
        <h1 className="h1 px-8 pb-8">Booking Details</h1>
        <Booking />
      </div>
    </div>
  );
}

export default page;
