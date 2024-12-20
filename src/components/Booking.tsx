import React from "react";
import Link from "next/link";
import Image from "next/image";
import photo from "@Images/studio5.png";
function Booking() {
  return (
    <div className="bg-white text-dark1 p-6 rounded-lg shadow-md style2">
      <div className="grid grid-cols-[2fr_3fr]">
        <div className="ml-8">
          <div className="flex">
            <h1 className="h1 text-primary">SoulChord </h1>
            <h1 className="h1 ml-4 text-dark1">Studio</h1>
          </div>
          <p>Jl. Ir. H. Juanda No. 157, Dago Atas, Bandung, Jawa Barat</p>
          <h2 className="sb1 mt-4">Studio Type</h2>
          <h2 className="b1">Small Band Studio - Studio 2</h2>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="sb1 mt-4">Start From</h2>
              <h2 className="b1">18 Dec 2024 - 15.00</h2>
            </div>
            <div>
              <h2 className="sb1 mt-4 text-right">Until</h2>
              <h2 className="b1 text-right">18 Dec 2024 - 17.00</h2>
            </div>
          </div>
          <h2 className="sb1 mt-4">Number of People</h2>
          <h2 className="b1 ">5 People</h2>

          <h2 className="sb1 mt-4">Price</h2>
          <div className="grid grid-cols-2">
            <h2 className="b1">Studio Fees</h2>

            <h2 className="b1 text-right">2 x Rp 349.0000</h2>
          </div>
          <hr className="w-full h-0.5 my-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
          <div className="grid grid-cols-2">
            <h2 className="sb1 ">Total Price</h2>
            <h2 className="sb1 text-right text-red">Rp 698.0000</h2>
          </div>
          {/* Button Section */}
          <div className="flex flex-col justify-center items-center mt-4">
            <Link href="/payment">
              <button
                className={
                  "bottom-0 right-4 space-y-4 text-right bg-primary text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110"
                }
              >
                <h2 className="sb1">Make a Payment</h2>
              </button>
            </Link>
            <Link href="/detailstudio">
              <p className="mt-4 text-primary  transition-transform transform hover:scale-110">
                Cancel
              </p>
            </Link>
          </div>
        </div>
        <div className="ml-32 relative h-full">
          <Image
            src={photo}
            alt="Studio Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;
