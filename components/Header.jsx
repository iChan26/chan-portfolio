import { useEffect, useState } from "react";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaTools,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  const [scrolledUp, setScrolledUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrolledUp(false); // scrolling down
      } else {
        setScrolledUp(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl transition-all duration-300 px-4 
          ${scrolledUp ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
        `}
      >
       <div className="glow-border">
  <div className="text-white px-6 py-3 rounded-full flex items-center justify-between shadow-lg transition-all duration-300">

          <Link href="#top">
            <img
  src="/img/chan-logo.png"
  alt="CHAN Logo"
  className="h-8 sm:h-10 object-contain"
/>
</Link>

          <nav className="flex items-center space-x-6 text-sm font-extrabold font-mono">
            <a href="#about" className="hover:text-yellow-400 transition">About Me</a>
            <a href="#resume" className="hover:text-yellow-400 transition">Resume</a>
            <a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact Me</a>
          </nav>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="shine-button ml-4 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 
                       text-[#211c1c] font-semibold px-5 py-2 rounded-full text-sm shadow-md
                       transition-transform duration-200 ease-in-out flex items-center gap-2"
          >
            Hire Me
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
          </button>
        </div>
</div>
      </header>

      {/* Mobile Header (Bottom Nav) */}
      <header
        className={`md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] px-4 transition-all duration-300
          ${scrolledUp ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}
        `}
      >
    <div className="glow-border">
  <div className="text-white px-4 py-3 rounded-full shadow-md flex items-center justify-between">
          <nav className="flex items-center justify-between w-full text-xs font-medium">
            <a href="#about" className="flex flex-col items-center gap-1 hover:text-yellow-400 transition">
              <FaUser className="text-lg" />
              About
            </a>
            <a href="#resume" className="flex flex-col items-center gap-1 hover:text-yellow-400 transition">
              <FaTools className="text-lg" />
              Resume
            </a>
            
            <a href="#portfolio" className="flex flex-col items-center gap-1 hover:text-yellow-400 transition">
              <FaCode className="text-lg" />
              Portfolio
            </a>
            <a
              href="#contact"
              className="shine-button flex flex-col items-center gap-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
               text-[#211c1c] px-3 py-1 rounded-full text-xs font-semibold shadow transition-transform duration-200"
            >
              <FaEnvelope className="text-base" />
              Hire
            </a>
          </nav>
        </div>
</div>
      </header>
    </>
  );
}
