import React from "react";
import Link from "next/link";
import Image from "next/image";

import studioImageSmall from "@Images/studio5.png"; // Example image, replace with actual image
import studioImageLarge from "@Images/studio6.png"; // Example image, replace with actual image

function BookingHistory() {
  return (
    <div className="bg-white min-h-screen rounded-lg p-8">
      {/* Tabs Section */}
      <div className="flex flex-between space-x-4 bg-white rounded-lg p-2 mb-8">
        <button className="py-2 px-6 rounded-md border-2 bg-primary border-primary text-white font-semibold">
          All
        </button>
        <button className="py-2 px-6 rounded-md border-2 border-primary text-dark1 hover:text-primary transition-colors">
          Completed
        </button>
        <button className="py-2 px-6 rounded-md border-2 border-primary text-dark1 hover:text-primary transition-colors">
          Pending
        </button>
        <button className="py-2 px-6 rounded-md border-2 border-primary text-dark1 hover:text-primary transition-colors">
          In Progress
        </button>
        <button className="py-2 px-6 rounded-md border-2 border-primary text-dark1 hover:text-primary transition-colors">
          Paid
        </button>
        <button className="py-2 px-6 rounded-md border-2 border-primary text-dark1 hover:text-primary transition-colors">
          Canceled
        </button>
      </div>

      {/* Booking Cards Container */}
      <div className="space-y-8">
        {/* First Booking Card */}
        <div className="bg-white text-dark1 p-6 rounded-lg shadow-md style2 grid grid-cols-[1fr_3fr]">
          {/* Image Section */}
          <div className="relative h-full rounded-lg overflow-hidden mr-6">
            <Image
              src={studioImageSmall}
              alt="Studio Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-[2fr_1fr_1fr] items-center w-full">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="h2 text-primary">SoulChord</h1>
                <h1 className="h2 text-dark1">Studio</h1>
              </div>
              <h2 className="sb1 mt-2">Studio Type</h2>
              <h2 className="b1">Small Band Studio - Studio 2</h2>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h2 className="sb1">Start From</h2>
                  <h2 className="b1">18 Dec 2024 - 15.00</h2>
                </div>
                <div>
                  <h2 className="sb1 text-right">Until</h2>
                  <h2 className="b1 text-right">18 Dec 2024 - 17.00</h2>
                </div>
              </div>

              <h2 className="sb1 mt-4">Number of People</h2>
              <h2 className="b1">5 People</h2>
            </div>

            <div className="flex justify-center items-center">
              <h2 className="sb1 text-primary">Completed</h2>
            </div>

            <div className="text-right">
              <h2 className="sb1">Total Price</h2>
              <h2 className="sb1 text-accent2">Rp 698.0000</h2>
              <Link href="/bookingdetails">
                <p className="text-primary cursor-pointer hover:underline mt-2">
                  See details
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Booking Card */}
        <div className="bg-white text-dark1 p-6 rounded-lg shadow-md style2 grid grid-cols-[1fr_3fr]">
          {/* Image Section */}
          <div className="relative h-full rounded-lg overflow-hidden mr-6">
            <Image
              src={studioImageLarge}
              alt="Studio Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Details Section */}
          <div className="grid grid-cols-[2fr_1fr_1fr] items-center w-full">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="h2 text-primary">SoulChord</h1>
                <h1 className="h2 text-dark1">Studio</h1>
              </div>
              <h2 className="sb1 mt-2">Studio Type</h2>
              <h2 className="b1">Large Band Studio - Studio 2</h2>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h2 className="sb1">Start From</h2>
                  <h2 className="b1">19 Dec 2024 - 15.00</h2>
                </div>
                <div>
                  <h2 className="sb1 text-right">Until</h2>
                  <h2 className="b1 text-right">19 Dec 2024 - 17.00</h2>
                </div>
              </div>

              <h2 className="sb1 mt-4">Number of People</h2>
              <h2 className="b1">5 People</h2>
            </div>

            <div className="flex justify-center items-center">
              <h2 className="sb1 text-primary">Paid</h2>
            </div>

            <div className="text-right">
              <h2 className="sb1">Total Price</h2>
              <h2 className="sb1 text-accent2">Rp 898.0000</h2>
              <Link href="/bookingdetails">
                <p className="text-primary cursor-pointer hover:underline mt-2">
                  See details
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHistory;
