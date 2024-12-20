import React from "react";
import UserProfile from "../../components/Profile";

const ProfilePage = () => {
  return (
    <div className="text-black flex flex-col items-center bg-white">
      <div className="mt-36"></div>
      <h1 className="h2">
        Find your <span className="text-primary">BandMates!</span>
      </h1>
      <div className="flex justify-center mt-8 mb-8">
        <UserProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
