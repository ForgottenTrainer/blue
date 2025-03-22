"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);


  // 📌 Función para toggle del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };


  return (
    <>
      <div className="flex sticky px-5 bg-black text-white shadow-sm items-center justify-between text-blue-gray-900">
        <Link
          href="/"
          className="block antialiased font-sans text-base leading-relaxed text-inherit mr-4 cursor-pointer py-1.5 font-medium"
        >
          <Image
            className="w-[5em] mx-auto h-auto object-contain"
            src="/logo.png"
            alt="Copy Blue"
            width={1000} height={1000}
          />
        </Link>
        <div className="flex items-center gap-4">
          {/* Menú para pantallas grandes */}
          <div className="mr-4 hidden lg:block">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/" className="flex items-center">
                  Home
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#horarios" className="flex items-center">
                  Products
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#about" className="flex items-center">
                  About us
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#servicios" className="flex items-center">
                  OEM/ODM
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#contactanos" className="flex items-center">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Botones para pantallas grandes */}

          {/* Botón hamburguesa para móviles */}
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none max-w-[40px] max-h-[40px] rounded-lg text-xs ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`w-full bg-black text-white  basis-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
            <ul className="px-5 mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block  antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/" className="flex items-center">
                  Home
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#horarios" className="flex items-center">
                  Products
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#about" className="flex items-center">
                  About us
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#servicios" className="flex items-center">
                  OEM/ODM
                </Link>
              </li>
              <li className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 p-1 font-normal">
                <Link href="/#contactanos" className="flex items-center">
                  Contact Us
                </Link>
              </li>
            </ul>
      </div>
    </>
  );
};

export default Navbar;