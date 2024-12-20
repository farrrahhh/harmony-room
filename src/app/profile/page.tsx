import React from 'react';
import UserProfile from '../../components/Profile';

const ProfilePage = () => {
    return (
        <div className='text-black flex flex-col items-center bg-white'>
            <div className='mt-20'></div>
            <h1 className='h2'>Find your <span className='text-primary'>BandMates!</span></h1>
            <div className="flex justify-center items-center">
            <UserProfile/>
            </div>
        </div>
    );
};

export default ProfilePage;