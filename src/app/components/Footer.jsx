import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 font-mono mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">About</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email: </span>
              <a href="mailto:info@template.net" className="text-gray-500">
                ozangunes2894@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              <span className="text-gray-500">+880 123 456 789</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 px-20">
          <h3 className="font-bold text-xl mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Archived
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Author
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Category</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-black">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Economy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Sports
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-white p-6 rounded-md shadow w-96">
          <h3 className="font-bold text-xl mb-2 ml-14">Weekly Newsletter</h3>
          <p className="text-gray-500 text-sm mb-8">
            Get blog articles and offers via email
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300">
        <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="text-2xl font-normal text-black flex justify-between space-y-4">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="Bard Blog Logo"
              />
              Bard<span className="font-bold">Blog</span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">
              Terms of Use
            </a>
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
