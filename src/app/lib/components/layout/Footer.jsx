"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "../features/NewsletterForm";
import { FOOTER_LINKS, CONTACT_INFO } from "@/app/constants/navigation";

const FooterLink = ({ href = "/", children }) => (
  <Link
    href={href}
    className="text-neutral-400 hover:text-[#CD5C5C] transition-colors duration-300"
  >
    {children}
  </Link>
);

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="font-serif text-xl text-neutral-900 dark:text-neutral-100 mb-6">{title}</h3>
    {children}
  </div>
);

const FooterLinkList = ({ items }) => (
  <ul className="space-y-3 text-sm">
    {items.map((item) => (
      <li key={item}>
        <FooterLink>{item}</FooterLink>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const { quickLinks, categories, policies } = FOOTER_LINKS;
  const { email, phone } = CONTACT_INFO;

  const Quote = () => (
    <div className="text-neutral-400 italic font-serif">
      "Bir gün okşarsın yaralarımı belki sevgilim
      <br />
      Bir gün anlarsın beni sevgilim..."
      <div className="mt-2 text-sm">— Ahmed Arif</div>
    </div>
  );

  return (
    <footer className="bg-card-bg dark:bg-neutral-900 font-serif mt-auto border-t border-neutral-800 dark:border-neutral-800/50">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <FooterSection title="Hakkımda">
          <Quote />
          <div className="space-y-3 text-sm mt-8">
            <p>
              <span className="text-neutral-900 dark:text-neutral-100">Email: </span>
              <a
                href={`mailto:${email}`}
                className="text-neutral-400 hover:text-[#CD5C5C] transition-colors"
              >
                {email}
              </a>
            </p>
            <p>
              <span className="text-neutral-900 dark:text-neutral-100">Telefon: </span>
              <span className="text-neutral-400">{phone}</span>
            </p>
          </div>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection title="Hızlı Linkler">
          <nav aria-labelledby="quick-links">
            <FooterLinkList items={quickLinks} />
          </nav>
        </FooterSection>

        {/* Category */}
        <FooterSection title="Kategori">
          <FooterLinkList items={categories} />
        </FooterSection>

        {/* Newsletter */}
        <div className="bg-neutral-300/50 p-8 rounded-xl backdrop-blur-sm lg:w-96">
          <h3
            className="font-serif text-xl mb-4 text-neutral-100"
            id="newsletter"
          >
            Beyaz Tavşan'ı Takip Et
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            Daha fazlası için abone ol.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="text-2xl font-normal text-neutral-100 flex items-center gap-2">
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="Bard Blog Logo"
                className="rotate-[25deg]"
              />
              Bard<span className="font-bold text-[#CD5C5C]">Blog</span>
            </div>
          </div>
          <div className="flex space-x-8 text-sm text-neutral-400">
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
