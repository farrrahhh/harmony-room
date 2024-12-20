"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import studioImageSmall from "@Images/studio5.png"; // Example image, replace with actual image
import studioImageLarge from "@Images/studio6.png"; // Example image, replace with actual image

function BookingHistory() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Completed",
    "Pending",
    "In Progress",
    "Paid",
    "Canceled",
  ];

  return (
    <div className="bg-white min-h-screen rounded-lg p-8">
      {/* Tabs Section */}
      <div className="flex flex-between space-x-4 bg-white rounded-lg p-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-6 rounded-md border-2 font-semibold ${
              activeTab === tab
                ? "bg-primary border-primary text-white"
                : "bg-white border-primary text-dark1 hover:text-primary transition-colors"
            }`}
          >
            {tab}
          </button>
        ))}
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
              <div className="grid gap-x-4 grid-cols-2">
                <div>
                  <h2 className="sb1">Studio Type</h2>
                  <h2 className="b1">Small Band Studio - Studio 2</h2>
                </div>

                <div>
                  <h2 className="sb1 text-right">Start From</h2>
                  <h2 className="b1 text-right">18 Dec 2024 - 15.00</h2>
                </div>
                <div className="mt-4">
                  <h2 className="sb1">Number of People</h2>
                  <h2 className="b1">5 People</h2>
                </div>
                <div className="mt-4">
                  <h2 className="sb1 text-right">Until</h2>
                  <h2 className="b1 text-right">18 Dec 2024 - 17.00</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="sb1 text-primary text-right pl-32">Completed</h2>
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
              <div className="grid gap-x-4 grid-cols-2">
                <div>
                  <h2 className="sb1">Studio Type</h2>
                  <h2 className="b1">Large Band Studio - Studio 2</h2>
                </div>

                <div>
                  <h2 className="sb1 text-right">Start From</h2>
                  <h2 className="b1 text-right">19 Dec 2024 - 15.00</h2>
                </div>
                <div className="mt-4">
                  <h2 className="sb1">Number of People</h2>
                  <h2 className="b1">5 People</h2>
                </div>
                <div className="mt-4">
                  <h2 className="sb1 text-right">Until</h2>
                  <h2 className="b1 text-right">19 Dec 2024 - 17.00</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <h2 className="sb1 text-primary pl-32">Paid</h2>
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
