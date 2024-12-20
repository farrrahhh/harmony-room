import React from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import Link from "next/link";
const HasilSearch = () => {
  return (
    <div className="bg-white min-h-screen text-dark2 pb-16">
      {/* Search Bar */}
      <div className="p-4 mt-12 mx-10">
        <SearchBar linkNavigate={"#"} height={45} />
      </div>

      <div className="flex gap-8 px-10 mt-10">
        {/* Filter */}
        <div className="w-full md:w-1/4 lg:w-1/5 ">
          <Filter />
        </div>

        {/* Card Hasil Pencarian */}
        <div className="w-full md:w-3/4 lg:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link href="/detailstudio">
            <Card
              title="SoulChord Studio"
              price="Rp 199.000"
              image="/10.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Ritme Ria Studio"
              price="Rp 201.000"
              image="/studio6.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Byte Studio"
              price="Rp 80.000"
              image="/studio7.png"
              rating={3}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Sinar Musik Studio"
              price="Rp 100.000"
              image="/studio5.png"
              rating={5}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Init Studio"
              price="Rp 112.000"
              image="/12.png"
              rating={2}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Zero Studio"
              price="Rp 107.000"
              image="/13.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Physics Studio"
              price="Rp 50.000"
              image="/14.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="ITB Studio"
              price="Rp 69.000"
              image="/15.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="BEC Studio"
              price="Rp 81.000"
              image="/16.png"
              rating={5}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Tamfes Studio"
              price="Rp 78.000"
              image="/17.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Ganyang Studio"
              price="Rp 90.000"
              image="/18.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Dago Studio"
              price="Rp 78.000"
              image="/19.png"
              rating={5}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Kinasih Studio"
              price="Rp 200.000"
              image="/12.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Moli Studio"
              price="Rp 300.000"
              image="/11.png"
              rating={4}
            />
          </Link>
          <Link href="/detailstudio">
            <Card
              title="Banana Studio"
              price="Rp 450.000"
              image="/13.png"
              rating={3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HasilSearch;
