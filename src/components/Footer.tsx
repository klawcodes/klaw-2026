import React from "react";
import { Link } from "gatsby";
import SumpahMatiLogo from "../images/SUMPAH MATI LOGO-01.svg";

interface FooterProps {
  brandName?: string;
  tagline?: string;
  currentYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  brandName = "Sumpah Mati™",
  tagline = "Your aunt favorite designer.",
  currentYear = new Date().getFullYear(),
}) => {
  return (
    <footer className="w-full bg-black/70 backdrop-blur-xl border-t border-white/20 z-50 ">
      <div className="max-w-7xl mx-auto px-8 py-14 lg:px-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start pb-10 border-b border-white/20 mb-10 gap-10">
          <div className="flex-1 max-w-xl">
            <div className="flex justify-start">
              <img
                src={SumpahMatiLogo}
                alt="Sumpah Mati Logo"
                className="w-64 h-64 md:w-48 md:h-48 -m-1"
              />
            </div>
            <p className="text-white/70 text-base leading-relaxed">{tagline}</p>
          </div>

          <nav className="flex flex-col gap-4 items-start lg:items-end w-full lg:w-auto">
            <Link
              to="/"
              className="text-white text-base hover:text-white/70 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/showreel"
              className="text-white text-base hover:text-white/70 transition-colors duration-200"
            >
              Showreel
            </Link>
            <Link
              to="/works"
              className="text-white text-base hover:text-white/70 transition-colors duration-200"
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="text-white text-base hover:text-white/70 transition-colors duration-200"
            >
              Contact
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-base hover:text-white/70 transition-colors duration-200"
            >
              Instagram
            </a>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <p className="text-white/60 text-sm leading-relaxed max-w-3xl">
            © {currentYear} {brandName.replace("™", "")}. All rights reserved.
            Site content and original creative works are property of{" "}
            {brandName.replace("™", "")}.<br className="hidden sm:block" />
            <span className="block sm:inline mt-1 sm:mt-0">
              {" "}
              Third-party materials are copyrighted by their respective owners
              and used with permission.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-shrink-0">
            <Link
              to="/privacy-policy"
              className="text-white/60 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <Link
              to="/licenses"
              className="text-white/60 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Open Source Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
