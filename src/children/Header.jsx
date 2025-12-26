"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Font definition — only change */}
      <style jsx>{`
        @font-face {
          font-family: 'Organix';
          src: url('/font/Organix.otf') format('opentype');
        }
        .nav-font {
          font-family: 'Organix', sans-serif;
        }
      `}</style>

      {/* Desktop + Tablet */}
      <nav className="hidden lg:flex items-center justify-center w-full fixed top-6 inset-x-0 z-50 pointer-events-none px-2">
        <div className="flex items-center justify-between w-full max-w-7xl bg-[#06191a] rounded-full backdrop-blur-xl border border-cyan-500/20 ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/10 px-8 py-4 pointer-events-auto">
          
          {/* Left-aligned Logo - Only Image */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-full h-10 flex items-center justify-center">
                <img 
                  src="/Nimlacc-2.svg" 
                  alt="nimlacc logo" 
                  className="w-full h-full scale-200 object-cover"
                />
              </div>
              <div className="absolute -inset-3 bg-cyan-500/30 blur-2xl rounded-full animate-pulse -z-10"></div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex items-center space-x-10">
            <Link
              href="/"
              className="text-[#03ffff] font-medium hover:text-white transition text-lg nav-font"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-gray-300 hover:text-white transition text-lg nav-font"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-gray-300 hover:text-white transition text-lg nav-font"
            >
              Contact
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white transition text-lg nav-font"
            >
              Courses
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Version */}
      <nav className="lg:hidden w-[94%] max-w-md mx-auto my-4 bg-[#06191a] rounded-3xl backdrop-blur-xl border-b border-cyan-500/20 fixed inset-x-0 top-4 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          
          {/* Logo - Only Image */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/Nimlacc-2.svg" 
                  alt="nimlacc logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -inset-1 bg-cyan-500/30 blur-xl rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-12 h-12 flex items-center justify-center group"
          >
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
            <div className="absolute inset-1 rounded-full border border-cyan-400/80"></div>
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/80 flex items-center justify-center">
              <svg
                className={`w-5 h-5 text-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d={
                    mobileOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-out overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-3 bg-[#06191a]/95 backdrop-blur-xl border border-cyan-500/20 rounded-3xl pb-6">
            <div className="px-8 pt-4 space-y-5 text-lg">
              <Link
                href="/"
                className="block text-[#03ffff] font-medium hover:text-white nav-font"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/About"
                className="block text-gray-300 hover:text-white nav-font"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/Contact"
                className="block text-gray-300 hover:text-white nav-font"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/Courses"
                className="block text-gray-300 hover:text-white nav-font"
                onClick={() => setMobileOpen(false)}
              >
                Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}