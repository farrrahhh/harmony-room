import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      

      {/* Main Section */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2 style={{ color: "#ff007a" }}>Find your <strong>BandMates!</strong></h2>
      </div>

      {/* User Profile */}
      <div style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        {/* Left Section */}
        <div style={{ textAlign: "left", flex: 1, marginRight: "20px" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Tedy Ber Uang</h3>
          <p style={{ margin: "5px 0" }}>Jakarta – 25 tahun</p>
          <p style={{ margin: "5px 0" }}>Instrumen: Piano, Gitar</p>
          <p style={{ margin: "5px 0" }}>Genre musik: Jazz</p>
          <button style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#ff007a",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>Chat</button>
        </div>

        {/* Middle Section */}
        <div style={{ textAlign: "left", flex: 2, borderLeft: "1px solid #ddd", paddingLeft: "20px", marginRight: "20px" }}>
          <h4>About me</h4>
          <p>Lorem ipsum lah yaa mager kali aku hehe Lorem ipsum lah yaa mager kali aku hehe Lorem ipsum lah yaa mager kali aku hehe</p>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={{
              borderRadius: "10px",
              width: "100%",
              maxWidth: "150px",
              height: "auto",
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
