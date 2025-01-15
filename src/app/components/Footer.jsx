import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const FooterLink = ({ href = "/", children }) => (
  <Link href={href} className="hover:text-black transition-colors">
    {children}
  </Link>
);

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="font-bold text-xl mb-4">{title}</h3>
    {children}
  </div>
);

const FooterLinkList = ({ items }) => (
  <ul className="space-y-2 text-sm text-gray-500">
    {items.map((item) => (
      <li key={item}>
        <FooterLink>{item}</FooterLink>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const quickLinks = ["Home", "About", "Blog", "Archived", "Author", "Contact"];
  const categories = [
    "Lifestyle",
    "Technology",
    "Travel",
    "Business",
    "Economy",
    "Sports",
  ];
  const policies = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  return (
    <footer className="bg-gray-100 font-mono mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {/* About Section */}
        <FooterSection title="About">
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:ozangunes2894@gmail.com"
                className="text-gray-500"
              >
                ozangunes2894@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone: </span>
              <span className="text-gray-500">+880 123 456 789</span>
            </p>
          </div>
        </FooterSection>

        {/* Quick Links */}
        <div className="space-y-4 px-20">
          <FooterSection title="Quick Link">
            <nav aria-labelledby="quick-links">
              <FooterLinkList items={quickLinks} />
            </nav>
          </FooterSection>
        </div>

        {/* Category */}
        <FooterSection title="Category">
          <FooterLinkList items={categories} />
        </FooterSection>

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
            <div className="text-2xl font-normal text-black flex items-center gap-2">
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
            {policies.map((policy) => (
              <FooterLink key={policy}>{policy}</FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
