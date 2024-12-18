import React from 'react';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';

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
                        <h1 className="h1 text-white text-left">
                            Music is life
                        </h1>
                        <h2 className="h2 text-white">
                            Feel The <span className="text-primary">Rhythm & Melody</span>
                        </h2>
                    </div>
                </div>

                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10"></div>

                {/* Search Bar */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 z-20">
                    <SearchBar linkNavigate="/hasilsearch" height={60}/>
                </div>
            </div>

            {/* Additional Content */}
            <h1 className="h1 text-center mt-20">
                Experience The <span className="text-primary">Ultimate Music</span> Studio
            </h1>
            <h2 className='h2 text-center text-[#706C6C] mt-0'>Check Out Some Of The Best Studio That We Got</h2>
            <h2 className='h2 text-center text-[#706C6C] mt-0'>For Your Band</h2>
        </div>
    );
};

export default DashboardPage;
