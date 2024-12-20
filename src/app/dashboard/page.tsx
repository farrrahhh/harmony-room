import React from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Card2 from "@/components/Card2";
import Carousel from "@/components/Carousel";

const DashboardPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Background Container */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/dashboard-1.png"
          alt="Dashboard"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 h-full flex items-center pl-8 z-20">
          <div>
            <h1 className="h1 text-white text-left">Music is life</h1>
            <h2 className="h2 text-white">
              Feel The <span className="text-primary">Rhythm & Melody</span>
            </h2>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>

        {/* Search Bar */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-20">
          <SearchBar linkNavigate="/hasilsearch" height={60} />
        </div>
      </div>

      {/* Additional Content */}
      <h1 className="h1 text-center mt-20">
        Experience The <span className="text-primary">Ultimate Music</span>{" "}
        Studio
      </h1>
      <h2 className="h2 text-center text-[#706C6C] mt-0">
        Check Out Some Of The Best Studio That We Got
      </h2>
      <h2 className="h2 text-center text-[#706C6C] mt-0">For Your Band</h2>
      <div className="flex items-center justify-center">
        <div className="p-4 bg-primarygradient text-primarygradient rounded-lg w-4/8 flex items-center justify-center mt-8 gap-20">
          <div className="flex-col justify-center items-center text-center">
            <h1 className="h1">100K+</h1>
            <h3 className="h3">Customers</h3>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <h1 className="h1">500+</h1>
            <h3 className="h3">Studios</h3>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <h1 className="h1">40+</h1>
            <h3 className="h3">Instruments</h3>
          </div>
          <div className="flex-col justify-center items-center text-center">
            <h1 className="h1">150</h1>
            <h3 className="h3">Dolby Atmos</h3>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="mt-20">
        <Carousel />
      </div>

      {/* Other Studios */}
      <h1 className="h1 text-center mt-20">
        Other <span className="text-primary">Studios</span>
      </h1>

      <div className="grid grid-rows-2 grid-cols-3 gap-4 mt-8 p-8">
        <Card2
          title="Harmoni Kreatif"
          image="/studio5.png"
          address="Jl. Merdeka Utama No. 12, Blok 3C, Bandung Barat"
        />
        <Card2
          title="Melodi Indah"
          image="/studio6.png"
          address="Jl. Suka Mulya No. 45, Blok 2B, Bandung Timur"
        />
        <Card2
          title="Suara Emas"
          image="/studio9.png"
          address="Jl. Suka Mulya No. 45, Blok 2B, Bandung Timur"
        />
        <Card2
          title="Vibe Kreatif"
          image="/10.png"
          address="Jl. Suka Mulya No. 45, Blok 2B, Bandung Timur"
        />
        <Card2
          title="Mall Indah"
          image="/11.png"
          address="Jl. Suka Mulya No. 45, Blok 2B, Bandung Timur"
        />
        <Card2
          title="Lily"
          image="/12.png"
          address="Jl. Kembang No. 91, Blok 1E, Bandung Kota"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
