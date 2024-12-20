"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const UserProfile: React.FC = () => {
  const router = useRouter();

  // Fungsi navigasi
  const handleClick = () => {
    console.log("Navigating to chat page...");
    router.push('/chatpage'); // Mengarahkan ke halaman chat
  };

  return (
    <div className="text-black w-full flex items-center justify-center bg-white">
      {/* User Profile */}
      <div className="max-w-3xl mx-auto mb-48 rounded-lg p-5 bg-white border border-gray-300 flex items-center">
  {/* Konten lainnya */}


        {/* Left Section */}
        <div style={{ textAlign: "left", flex: 1, marginRight: "20px" }}>
          <h3 className="sb1">Clement</h3>
          <p className="b1">Jakarta – 25 tahun</p>
          <p className="b1">Instrumen: Piano, Gitar</p>
          <p className="b1">Genre musik: Jazz</p>

          <button
            className="bg-primary text-white sb2 py-2 px-4 rounded-lg mt-4"
            onClick={handleClick}
          >
            Chat me!
          </button>
        </div>

        {/* Middle Section */}
        <div
          style={{
            textAlign: "left",
            flex: 2,
            borderLeft: "1px solid #ddd",
            paddingLeft: "20px",
            marginRight: "20px"
          }}
        >
          <p className="sb1">About me</p>
          <p className="b1">
            Seorang pecinta musik yang selalu terinspirasi oleh melodi dan
            harmoni. Mulai dari bermain alat musik hingga menjelajahi berbagai
            genre, musik adalah bahasa universal yang selalu menemani perjalanan
            hidupku.
          </p>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="/image.png"
            alt="Profile"
            style={{
              borderRadius: "10px",
              width: "100%",
              maxWidth: "150px",
              height: "150px",
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
