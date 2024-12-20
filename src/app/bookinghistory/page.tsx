import React from "react";
import BookingHistory from "@/components/BookingHistory";
const page = () => {
  return (
    <div className="flex flex-col text-white bg-[#1A1A1A]">
      <div className="m-32">
        <h1 className="h1 px-8 pb-8">Booking History</h1>
        <BookingHistory />
      </div>
    </div>
  );
};

export default page;
