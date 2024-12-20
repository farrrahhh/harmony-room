"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" }); // Perbarui nama field menjadi username
  const router = useRouter(); // Inisialisasi useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="bg-white text-foreground flex flex-col lg:flex-row h-screen">
      <div className="hidden lg:block flex-1 relative h-full">
        <Image
          src="/picture-band.png"
          alt="band-music"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-white text-center px-4">
          <h2 className="sb1">
            Find Your <span className="text-primary">Rhythm</span>
          </h2>
          <h2 className="sb1">
            <span className="text-primary">Connect</span> the Beats!
          </h2>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-50"></div>
      </div>
      <div className="flex-1 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <article className="prose">
            <h2 className="h2 mt-4 mb-2 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex flex-col">
                <div>
                  <span className="text-dark1">SignUp</span>
                  <span className="text-dark1 ml-4 font-bold">to</span>
                </div>
                <div>
                  <span className="text-primary">HarmonyRoom</span>
                </div>
              </div>
            </h2>

            <p className="b1 mb-4">
              Ready to book your studio and find your perfect bandmate? Let’s
              jam together! 🎶
            </p>
          </article>

          {/* Form */}
          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                placeholder="Username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                placeholder="••••••••"
              />
            </div>
            {/* Input age */}
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-black"
              >
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                placeholder="Age"
              />
            </div>
            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-black"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                placeholder="City"
              />
            </div>
            {/* Input Genre drop down */}
            <div>
              <label
                htmlFor="genre"
                className="block text-sm font-medium text-black"
              >
                Genre
              </label>
              <select
                id="genre"
                name="genre"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              >
                <option>Rock</option>
                <option>Pop</option>
                <option>Jazz</option>
                <option>Blues</option>
                <option>Country</option>
              </select>
            </div>

            {/* Drop down instrument */}
            <div>
              <label
                htmlFor="instrument"
                className="block text-sm font-medium text-black"
              >
                Instrument
              </label>
              <select
                id="instrument"
                name="instrument"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              >
                <option>Guitar</option>
                <option>Bass</option>
                <option>Drum</option>
                <option>Keyboard</option>
                <option>Vocal</option>
              </select>
            </div>

            <button
              type="submit"
              className="sb1 w-full h-12 bg-primary hover:bg-primary-opacity-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-primary"
            >
              SignUp
            </button>
          </form>

          {/* Footer */}
          <p className="b1 mt-6 text-left text-bold text-dark1">
            Already have an account? {/* back to login */}
            <Link href="/" className="b1 text-primary hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
