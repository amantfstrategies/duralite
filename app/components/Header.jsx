"use client";
import { useState } from "react";
import Link from "next/link";

import { FaFacebookF, FaLink } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Header() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); 
  };

  const navLinks = [
    { title: "HOME", path: "/home" },
    { title: "ABOUT", path: "/about" },
    { title: "PRODUCTS", path: "/product" },
    { title: "WHY US?", path: "/whyus" },
  ];

  return (
    <>
      <div className="bg-white md:px-40 py-4">
        <div className="flex justify-between items-center">
          <div className="relative flex items-center justify-center h-8 md:h-16 border-r-2 pr-3">
            <Image
              src="/logo.png"
              alt="Logo"
              className="h-8 md:h-16"
              layout="responsive"
              width={256}
              height={64}
            />
          </div>

          <h1 className="mr-auto text-xs md:text-base ml-3 font-[500] text-gray-500">
            Duralite Solutions Icn.
          </h1>
          <div className="flex mx-2 text-xl space-x-2 md:space-x-6">
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaInstagram />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaTwitter />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaFacebookF />
            </button>
            <button className="transition-transform transform duration-300 hover:scale-110 active:scale-90">
              <FaLinkedin />
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-[#F5F5F5] shadow-md">
        {/* Hamburger Menu button */}
        <div className="md:hidden ml-auto right-4 top-4 z-50">
          <button
            className="w-8 h-8 ml-auto py-8 mr-4 flex justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-8 h-8 text-[#004185]" />
            ) : (
              <HiMenuAlt3 className="w-8 h-8 text-black" />
            )}
          </button>
        </div>
        <nav className="flex justify-between items-center md:mx-40 relative">
          <ul
            className={`${
              isMobileMenuOpen
                ? "flex flex-col space-y-4 w-full text-center mt-4 bg-gray-200 p-4"
                : "hidden md:flex md:flex-row md:space-x-8"
            } transition-all duration-300 ease-in-out text-sm font-medium`}
          >
            {navLinks.map(({ title, path }) => (
              <Link key={title} href={path}>
                <li
                  className={`cursor-pointer md:py-4 transition-all duration-300 ${
                    activeTab === title
                      ? "text-[#004185] border-b-[3px] border-[#004185]"
                      : "text-black border-b-[3px] border-transparent hover:border-[#004185] hover:text-blue-700"
                  }`}
                  onClick={() => handleTabClick(title)}
                >
                  {title}
                </li>
              </Link>
            ))}
          </ul>

          <div className="hidden md:flex flex-row font-[400] text-sm md:text-base">
            <button className="text-black py-4 px-4">+91 9529575726</button>
            <button className="text-white font-sans bg-[#004185] py-4 px-4 rounded-sm">
              CONTACT US
            </button>
          </div>
        </nav>
      </div>


    </>
  );
}
