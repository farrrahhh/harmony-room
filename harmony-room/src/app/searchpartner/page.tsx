import React from "react";
import Card4 from "@/components/Card4"; // Pastikan jalur impor sudah benar
import Footer from "@/components/Footer";
import SearchBarPartner from "@/components/SearchBarPartner";
import FilterBandMate from "@/components/FilterBandMate";

const HasilSearch = () => {
  return (
    <div className="bg-white min-h-screen text-dark2">
      {/* Search Bar */}
      <div className="p-4 mt-12 mx-10 w-200">
        <SearchBarPartner />
      </div>

      <div className="flex gap-8 px-10 mt-8">
        {/* Filter */}
        <div className="-full md:w-1/4 lg:w-1/5 ">
          <FilterBandMate />
        </div>

        {/* Card Hasil Pencarian */}
        <div className="w-full md:w-3/4 lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card4
            title="Clement Nathanael Lim"
            image="/20.png"
            agepartner={20}
            genre="Pop"
            instrument="Vocal"
          />
          <Card4
            title="Alice Johnson"
            image="/21.png"
            agepartner={25}
            genre="Rock"
            instrument="Guitar"
          />
          <Card4
            title="Bob Smith"
            image="/22.png"
            agepartner={30}
            genre="Jazz"
            instrument="Piano"
          />
          <Card4
            title="Charlie Davis"
            image="/23.png"
            agepartner={28}
            genre="Blues"
            instrument="Bass"
          />
          <Card4
            title="Diana Moore"
            image="/24.png"
            agepartner={26}
            genre="Classical"
            instrument="Violin"
          />
          <Card4
            title="Ethan Wright"
            image="/25.png"
            agepartner={22}
            genre="Hip-Hop"
            instrument="Drums"
          />
          <Card4
            title="Fiona Green"
            image="/26.png"
            agepartner={27}
            genre="Country"
            instrument="Acoustic Guitar"
          />
          <Card4
            title="George Hill"
            image="/27.png"
            agepartner={29}
            genre="Reggae"
            instrument="Keyboard"
          />
          <Card4
            title="Hannah Lee"
            image="/28.png"
            agepartner={23}
            genre="Electronic"
            instrument="Synthesizer"
          />
          <Card4
            title="Ian Carter"
            image="/29.png"
            agepartner={30}
            genre="Folk"
            instrument="Harmonica"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HasilSearch;
