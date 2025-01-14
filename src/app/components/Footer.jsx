import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form işlemleri burada yapılacak
  };

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
          <nav aria-labelledby="quick-links">
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Archived
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Author
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Category */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Category</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Travel
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Business
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Economy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Sports
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-white p-6 rounded-md shadow w-full lg:w-96">
          <h3 className="font-bold text-xl mb-2 ml-14" id="newsletter">
            Weekly Newsletter
          </h3>
          <p className="text-gray-500 text-sm mb-8">
            Get blog articles and offers via email
          </p>
          <NewsletterForm />
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
            <Link href="/" className="hover:text-black transition-colors">
              Terms of Use
            </Link>
            <Link href="/" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-black transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
