"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";
import { NAV_ITEMS } from "@/app/constants/navigation";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="nav-link text-lg font-serif hover:text-[#CD5C5C] transition-colors duration-300"
  >
    {children}
  </Link>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="relative w-14 h-7 bg-neutral-800 dark:bg-neutral-700 rounded-full flex items-center 
             transition-all duration-500 hover:bg-neutral-700 dark:hover:bg-neutral-600"
    aria-label="Toggle theme"
  >
    <span
      className={`absolute w-5 h-5 bg-[#CD5C5C] rounded-full shadow transform transition-transform duration-500
                ${theme === "dark" ? "translate-x-8" : "translate-x-1"}`}
    />
  </button>
);

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/90 backdrop-blur-sm dark:bg-neutral-900/90 fixed w-full z-10 border-b border-neutral-200/50 dark:border-neutral-800/50">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-serif text-neutral-100 dark:text-neutral-100 flex items-center gap-3">
          <Image
            src="/logo.png"
            width={40}
            height={40}
            alt="Bard Blog Logo"
            className="rotate-[25deg]"
          />
          Bard<span className="font-bold text-[#CD5C5C]">Blog</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} href="/">
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="bg-neutral-300/50 text-neutral-300
                       border border-neutral-700 rounded-lg px-4 py-2 text-sm w-[200px]
                       focus:outline-none focus:ring-2 focus:ring-[#CD5C5C]/30
                       placeholder-neutral-500 dark:placeholder-neutral-100"
            />
            <button
              type="submit"
              className="absolute right-3 top-2.5 text-neutral-400 hover:text-[#CD5C5C] transition-colors"
            >
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;
