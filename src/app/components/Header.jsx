import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
    />
  </svg>
);

const NavLink = ({ href, children }) => (
  <Link href={href} className="hover:text-black transition-colors">
    {children}
  </Link>
);

const Header = () => {
  const navItems = ["Home", "Blog", "Single Post", "Pages", "Contact"];

  return (
    <header className="bg-white font-mono">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-normal text-black flex items-center gap-2">
          <Image src="/logo.png" width={32} height={32} alt="Bard Blog Logo" />
          Bard<span className="font-bold">Blog</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-12 text-gray-500">
          {navItems.map((item) => (
            <NavLink key={item} href="/">
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-gray-500 border border-gray-300 rounded px-4 py-2 text-sm 
                       focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 text-gray-500"
            >
              <SearchIcon />
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className="relative w-12 h-6 bg-gray-200 rounded-full flex items-center 
                         transition-all duration-300 hover:bg-gray-300"
          >
            <span
              className="absolute left-1 w-4 h-4 bg-white rounded-full shadow 
                         transform transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
