import React from "react";
import Image from "next/image";
import Link from "next/link";
const UserProfile: React.FC = () => {
  return (
    <div className="bg-white mb-48 w-[70%] text-dark1 p-6 rounded-lg flex shadow-md style2">
      {/* Left Section */}
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          <h3 className="sb1">Clement</h3>
          <p className="b1">Jakarta – 25 tahun</p>
          <p className="b1">Instrumen: Piano, Gitar</p>
          <p className="b1">Genre musik: Jazz</p>
          <Link href="/chatpage">
            <button className="bg-primary text-white sb2 py-2 px-4 rounded-lg mt-4">
              Chat me!
            </button>
          </Link>
        </div>
        <hr className="w-0.5 h-full rounded-lg my-0 mx-4 border-dark2 border-2" />
        <div className="grid grid-cols-[4fr_2fr]">
          <div>
            <p className="sb1">About me</p>
            <p className="b1">
              Seorang pecinta musik yang selalu terinspirasi oleh melodi dan
              harmoni. Mulai dari bermain alat musik hingga menjelajahi berbagai
              genre, musik adalah bahasa universal yang selalu menemani
              perjalanan hidupku.
            </p>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col justify-end">
              <div className="flex-col text-center">
                <Image
                  src="/image.png"
                  alt="Profile"
                  width={500}
                  height={200}
                  className="rounded-lg"
                  objectFit="cover"
                />

                <div className="flex gap-6 mt-4 justify-center">
                  <Image src={"/social1.png"} width={30} height={30} alt={""} />
                  <Image src={"/social2.png"} width={30} height={30} alt={""} />
                  <Image src={"/social3.png"} width={30} height={30} alt={""} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
      </div>
    </div>
  );
};

export default UserProfile;
