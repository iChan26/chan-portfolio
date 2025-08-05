import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
  <footer className="bg-[#0f0f0f] font-mono text-gray-300 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-base">
    {/* Branding / Intro */}
  <div>
 <Link href="#top">
  <img
    src="/img/chan-logo.png"
    alt="Chan Logo"
    className="w-28 mb-4 cursor-pointer"
  />
</Link>


  <p className="text-gray-300 leading-relaxed">
    Creative developer & designer from the Philippines. Let’s build something amazing together.
  </p>
</div>


    {/* Quick Links */}
    <div>
      <h4 className="text-yellow-400 font-semibold text-lg mb-4">Quick Links</h4>
      <ul className="space-y-3">
        <li><a href="#about" className="hover:text-yellow-400 transition">About Me</a></li>
        <li><a href="#resume" className="hover:text-yellow-400 transition">Resume</a></li>
        <li><a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 transition">Contact Me</a></li>
      </ul>
    </div>

{/* Social / Contact */}
<div>
  <h4 className="text-yellow-400 font-semibold text-lg mb-4">Connect</h4>
  <div className="flex gap-6 text-xl">
    <a
      href="https://www.facebook.com/chan092600"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.instagram.com/_e.chan/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/christian-penales-35aa98346"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/iChan26"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-yellow-400 transition"
    >
      <FaGithub />
    </a>
  </div>
</div>


  </div>

  {/* Bottom line */}
  <div className="mt-16 border-t border-yellow-400 pt-5 text-center text-sm text-gray-300">
    &copy; {new Date().getFullYear()} Chan. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
