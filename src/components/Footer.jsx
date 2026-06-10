import React from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const quickLinks = ["Contact Us", "Shipping", "Sitemap", "FAQs", "Stores"];
const services = [
  "Policy for Buyers",
  "Privacy Policy",
  "Refund Policy",
  "Shipping Policy",
  "Terms of Service",
];
const information = [
  "Delivery Information",
  "About Us",
  "Privacy Policy",
  "Terms and Conditions",
  "Search",
];

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

const socialIcons = [
  { Component: FacebookIcon, label: "Facebook" },
  { Component: InstagramIcon, label: "Instagram" },
  { Component: YoutubeIcon, label: "YouTube" },
  { Component: TwitterIcon, label: "Twitter" },
  { Component: PinterestIcon, label: "Pinterest" },
];

function FooterColumn({ title, links, darkMode }) {
  return (
    <div>
      <h4
        className={`text-sm font-semibold mb-5 ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}
      >
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li
            key={link}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <ArrowRight
              size={12}
              className={`flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                darkMode ? "text-neutral-600" : "text-neutral-400"
              }`}
            />
            <span
              className={`text-sm font-light transition-colors ${
                darkMode
                  ? "text-neutral-400 group-hover:text-neutral-200"
                  : "text-neutral-500 group-hover:text-neutral-800"
              }`}
            >
              {link}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ darkMode }) {
  const iconBtnClass = `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
    darkMode
      ? "border-neutral-700 text-neutral-500 hover:text-neutral-300 hover:border-neutral-500"
      : "border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-400"
  }`;

  return (
    <footer
      className={`border-t pt-14 pb-8 ${darkMode ? "bg-neutral-950 border-neutral-800" : "bg-white border-neutral-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact Us */}
          <div>
            <h4
              className={`text-sm font-semibold mb-5 ${darkMode ? "text-neutral-200" : "text-neutral-800"}`}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className={`mt-0.5 flex-shrink-0 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                />
                <span
                  className={`text-sm font-light leading-relaxed ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  Artistic – Art & Craft Store
                  <br />
                  507-Union Trade, Chennai
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={14}
                  className={`flex-shrink-0 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                />
                <span
                  className={`text-sm font-light ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  hello@artistic.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={14}
                  className={`flex-shrink-0 ${darkMode ? "text-neutral-500" : "text-neutral-400"}`}
                />
                <span
                  className={`text-sm font-light ${darkMode ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  (+91) 9876-543-210
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-6">
              {socialIcons.map(({ Component, label }) => (
                <button key={label} aria-label={label} className={iconBtnClass}>
                  <Component />
                </button>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Quick Links"
            links={quickLinks}
            darkMode={darkMode}
          />
          <FooterColumn title="Services" links={services} darkMode={darkMode} />
          <FooterColumn
            title="Information"
            links={information}
            darkMode={darkMode}
          />
        </div>

        <div
          className={`border-t pt-6 text-center ${darkMode ? "border-neutral-800" : "border-neutral-100"}`}
        >
          <p
            className={`text-xs font-light ${darkMode ? "text-neutral-600" : "text-neutral-400"}`}
          >
            © {new Date().getFullYear()} Artistic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
