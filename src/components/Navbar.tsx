"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@Images/logo.png";
import ChatIcon from "@Images/navbar-icons/chat-icon.png";
import HistoryIcon from "@Images/navbar-icons/history-icon.png";
import UserIcon from "@Images/navbar-icons/user-icon.png";

const NavbarLogin = () => {
  const router = usePathname();
  if (router === "/") {
    return (
      <nav className="bg-dark1 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
          <Link href="./">
            <div className="flex items-center space-x-2 ml-0">
              <Image src={Logo} alt="Logo" className="h-10 w-10" />

              <span className="sb1 text-white font-bold">Harmony Room</span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="b1 text-white hover:text-primary">
              Login
            </Link>
            <div className="bg-primary text-white px-4 py-2 rounded-md">
              <Link href="/register" className="b1 hover:text-white">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-dark1 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
          <Link href="/dashboard">
            <div className="flex items-center space-x-2 ml-0">
              <Image src={Logo} alt="Logo" className="h-10 w-10" />

              <span className="sb1 text-white font-bold">Harmony Room</span>
            </div>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/searchpartner">
              <p className="hover:text-primary transition-transform transform hover:scale-110">
                Find Your Mate!
              </p>
            </Link>
            <Link href="/chatpage">
              <Image
                src={ChatIcon}
                alt="Chat"
                className="h-8 w-8 transition-transform transform hover:scale-110"
              />
            </Link>
            <Link href="/bookinghistory">
              <Image
                src={HistoryIcon}
                alt="History"
                className="h-8 w-8 transition-transform transform hover:scale-110"
              />
            </Link>
            <Link href="/dashboard">
              <Image
                src={UserIcon}
                alt="User"
                className="h-8 w-8 transition-transform transform hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarLogin;
