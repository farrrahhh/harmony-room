import React from 'react';
import Image from 'next/image';
import UserProfile from '../../components/Profile';

const ProfilePage = () => {
    return (
        <div className='text-black w-full min-h-screen flex flex-col items-center bg-white'>
            <div className='mt-20'></div>
            <h1 className='h2'>Find your <span className='text-primary'>BandMates!</span></h1>
            <UserProfile/>
        </div>
    );
};

export default ProfilePage;