import React from "react";
import Payment from "@/components/Payment";

function page() {
  return (
    <div className="flex flex-col h-screen text-white bg-[#1A1A1A]">
      <div className="m-32">
        <h1 className="h1 px-8 pb-8">Payment</h1>
        <Payment />
      </div>
    </div>
  );
}

export default page;
