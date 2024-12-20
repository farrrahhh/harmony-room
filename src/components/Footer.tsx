"use client";

import Image from "next/image";
import Logo from "@Images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const router = usePathname();

  if (
    router != "/chatpage" &&
    router != "/register" &&
    router != "/"
  ) {
    return (
      <footer className="dark3 text-white p-8 flex flex-col md:flex-row gap-8 border-t border-grey">
        {/* About Section */}
        <div className="flex-1">
          <p className="sb1 mb-2">About Us</p>
          <p className="b1">
            Experience the Ultimate Music Studio by checking out some of the
            best studios that we got for your band!
          </p>
        </div>

        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-center gap-2 text-center">
          <Link href="/dashboard">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" className="w-12 h-12" />
              <p className="sb1">HarmonyRoom</p>
            </div>
          </Link>
          <p className="sb1">@2024 II3120-K2-Kel4</p>
        </div>

        {/* Team Section */}
        <div className="flex-1 text-right">
          <p className="sb1 mb-2">Who Are We?</p>
          <ul className="space-y-1">
            <li className="b1">Clement Nathanael Lim</li>
            <li className="b1">Mattheuw Suciadi Wijaya</li>
            <li className="b1">Irfan Musthofa</li>
            <li className="b1">Farah Aulia</li>
            <li className="b1">Ervina Limka</li>
          </ul>
        </div>
      </footer>
    );
  } else {
    return null;
  }
};

export default Footer;
