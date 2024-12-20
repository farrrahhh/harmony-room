import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div className="text-black w-full min-h-screen flex flex-col items-center bg-white">
      {/* User Profile */}
      <div style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Left Section */}
        <div style={{ textAlign: "left", flex: 1, marginRight: "20px" }}>
          <h3 className="sb1">Clement</h3>
          <p className="b1">Jakarta – 25 tahun</p>
          <p className="b1">Instrumen: Piano, Gitar</p>
          <p className="b1">Genre musik: Jazz</p>
          <button className="bg-primary text-white sb2 py-2 px-4 rounded-lg mt-4">Chat me!</button>
        </div>

        {/* Middle Section */}
        <div style={{ textAlign: "left", flex: 2, borderLeft: "1px solid #ddd", paddingLeft: "20px", marginRight: "20px" }}>
          <p className="sb2">About me</p>
          <p className="b1">"Seorang pecinta musik yang selalu terinspirasi oleh melodi dan harmoni. Mulai dari bermain alat musik hingga menjelajahi berbagai genre, musik adalah bahasa universal yang selalu menemani perjalanan hidupku. 🎶"</p>
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
