import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
  <footer className="bg-[#0f0f0f] text-gray-300 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-sm sm:text-base">
    {/* Branding / Intro */}
    <div>
      <Link href="#top">
        <img
          src="/img/chan-logo.webp"
          alt="Chan Logo"
          className="w-28 mb-4 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <p className="text-gray-400 leading-relaxed">
        Creative developer & designer from the Philippines.  
        Let’s build something amazing together.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-yellow-400 font-semibold text-lg mb-4">
        Quick Links
      </h4>
      <ul className="space-y-3">
        <li>
          <a
            href="#about"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>

    {/* Social / Contact */}
    <div>
      <h4 className="text-yellow-400 font-semibold text-lg mb-4">
        Connect
      </h4>
      <div className="flex gap-5 text-xl">
        <a
          href="https://www.facebook.com/chan092600"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/_e.chan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-penales-35aa98346"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/iChan26"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom line */}
  <div className="mt-14 border-t border-gray-700 pt-5 text-center text-xs sm:text-sm text-gray-500">
    &copy; {new Date().getFullYear()} <span className="text-yellow-400">Chan</span>. All rights reserved.
  </div>
</footer>


  );
};

export default Footer;
