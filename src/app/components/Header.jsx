import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow font-mono">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-normal text-gray-800">
          Bard<span className="font-bold">Blog</span>
        </div>

        {/* Navbar */}
        <nav className="hidden md:flex space-x-12">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Single Post
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pages
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>

        {/* Search Input and Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-gray-600 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="absolute right-2 top-2 text-gray-600">
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
            </button>
          </div>

          {/* Dark Mode Button */}
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 12.02l1.41 1.41M6.46 17.54l1.41-1.41M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
