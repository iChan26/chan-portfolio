import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiYoast,
  SiShopify,
  SiSquarespace,
  SiWix,
  SiWebflow,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import { FiLayers } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";


const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [modalImage, setModalImage] = useState(null);

  const tabs = ["Skills", "Experience", "Education", "Achievements"];

  const experiences = [
    {
      image: "/img/Experience/dure&dunelogo.webp",
      role: "Computer System Servicing",
      company: "Deor & Dune Academe School of Technology Inc. (Local From Philippines)",
      year: "September 2019 - Feb 2020",
    },
    {
      image: "/img/Experience/phrmdologo.webp",
      role: "Database Management",
      company: "PHRMDO, Misamis Occidental (Local From Philippines)",
      year: "Feb - June 2024",
    },
    {
      image: "/img/Experience/AgriMart.webp",
      role: "Web Developer",
      company: "AgriMart - USTP (Local From Philippines)",
      year: "October 2021 - November 2024",
    },
    {
      image: "/img/Experience/gcmlogo.webp",
      role: "Graphic Designer",
      company: "GCM Oroquieta (Local From Philippines)",
      year: "March 2022 - January 2025",
    },
    {
      image: "/img/Experience/penguinpr.webp",
      role: "Web and Graphics Designer",
      company: "Penguin PR - Marketing Agency (Remote from U.S)",
      year: "2025",
    },
    {
      image: "/img/Experience/I&A.webp",
      role: "Full Stack Web Developer",
      company: "Glimbyte - I&A International (Remote from Albania, Ireland)",
      year: "2025",
    },
    {
      image: "/img/Experience/Brad.webp",
      role: "Graphics and Web Designer",
      company: "Brad Chapman Vocal Coach (Remote from Las Vegas, Nevada)",
      year: "2025",
    },
    {
      image: "/img/Experience/point1.webp",
      role: "Web Developer and SEO Optimization",
      company: "Dad's Wallet (Remote from Australia)",
      year: "2025",
    },
     {
      image: "/img/Experience/borderdme.webp",
      role: "Wordpress & Shopify Web Developer",
      company: "Border Medical Supplies & Equipment (Remote from Mexico border)",
      year: "2025",
    },
  ];

  const education = [
    {
      image: "/img/Education/MU Logo.webp",
      year: "2023 - 2024",
      school: "Misamis University (Misamis Occidental, Oroquieta City, Philippines)",
      course: "Bachelor of Science in Information Technology",
    },
    {
      image: "/img/Education/MONHS.webp",
      year: "2019 - 2020",
      school: "Misamis Occidental National Highschool (Misamis Occidental, Oroquieta City, Philippines)",
      course: "Information and Communication Technology",
    },
  ];

  const achievements = [
    {
      image: "/img/acheivements/nc2certificate.webp",
      title: "National Certificate II | Computer System Servicing",
      description: "Certified under Philippine TVET Competency System.",
      date: "February 05, 2020",
    },
    {
      image: "/img/acheivements/phrmdoaward.webp",
      title: "Certificate of Completion",
      description: "Completed 486-hour Work Immersion at PHRMDO.",
      date: "May 27, 2024",
    },
    {
      image: "/img/acheivements/mkrotikcertificate.webp",
      title: "Certificate of Participation",
      description: `Attended "Mikrotik: Managing Networks" at Misamis University.`,
      date: "May 13, 2023",
    },
  ];

  const skills = [
  // Frontend
  { name: "HTML", icon: <SiHtml5 className="text-black text-xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-black text-xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-black text-xl" /> },
  { name: "React", icon: <SiReact className="text-black text-xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-black text-xl" /> },
  { name: "Yoast SEO", icon: <SiYoast className="text-black text-xl" /> },

  // Backend
  { name: "PHP", icon: <SiPhp className="text-black text-xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-black text-xl" /> },

  // CMS / Builders
  { name: "WordPress", icon: <SiWordpress className="text-black text-xl" /> },
  { name: "Shopify", icon: <SiShopify className="text-black text-xl" /> },
  { name: "Wix", icon: <SiWix className="text-black text-xl" /> },
  { name: "Squarespace", icon: <SiSquarespace className="text-black text-xl" /> },
  { name: "Webflow", icon: <SiWebflow className="text-black text-xl" /> },
  { name: "GHL", icon: <FiLayers className="text-black text-xl" /> },

  // Design Tools
  { name: "Figma", icon: <SiFigma className="text-black text-xl" /> },
  { name: "Canva", icon: <SiCanva className="text-black text-xl" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-black text-xl" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-black text-xl" /> },
];

  return (
    
   <section
  id="resume"
  className="bg-black text-white py-24 px-8 md:px-24 xl:px-32 scroll-mt-24"
>
  {/* Image Modal */}
  {modalImage && (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={() => setModalImage(null)}
    >
      <div
        className="relative max-w-3xl w-full px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setModalImage(null)}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
        >
          &times;
        </button>
        <img
          src={modalImage}
          alt="Achievement Preview"
          className="w-full max-h-[80vh] object-contain rounded-md"
        />
      </div>
    </div>
  )}

  <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-12">
    <div>
      <h2 className="text-4xl font-extrabold mb-6">Why Hire Me?</h2>
      <p className="text-base text-gray-300 mb-8 leading-relaxed">
        I bring real-world experience from local institutions to global
        companies. From full-stack development to design and SEO, I help brands
        shine online.
      </p>
      <div className="space-y-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`w-full text-left px-5 py-3 rounded-md border text-base ${
              activeTab === tab.toLowerCase()
                ? 'border-2 border-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black font-semibold'
                : 'bg-[#0d0c0c] text-white border-[#201d1d] hover:bg-[#1d1b1b]'
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

    <div className="md:col-span-2">
      <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 mb-4">
        My {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h3>
      <p className="text-base text-gray-300 mb-8 leading-relaxed">
        Here's a quick look at my {activeTab}.
      </p>

      {/* Skills */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center px-4 py-4 text-sm font-semibold text-black rounded-md bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 shadow-md transition-all duration-200 hover:ring-2 hover:ring-yellow-400 hover:shadow-[0_0_15px_4px_rgba(255,255,0,0.6)]"
            >
              <div className="mb-1">{skill.icon}</div>
              <div className="text-xs sm:text-sm text-center">{skill.name}</div>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {activeTab === 'experience' && (
        <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-3 gradient-scrollbar">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4"
            >
              <img
                src={exp.image}
                alt={exp.company}
                onClick={() => setModalImage(exp.image)}
                className="w-16 h-16 object-contain rounded cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div>
                <p className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-amber-300" />
                  {exp.year}
                </p>
                <h4 className="text-lg font-semibold mt-1">{exp.role}</h4>
                <p className="text-sm text-gray-300 mt-1">{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {activeTab === 'education' && (
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4"
            >
              <img
                src={edu.image}
                alt={edu.school}
                onClick={() => setModalImage(edu.image)}
                className="w-16 h-16 object-contain rounded cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div>
                <p className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-amber-300" />
                  {edu.year}
                </p>
                <h4 className="text-lg font-semibold mt-1">{edu.school}</h4>
                <p className="text-sm text-gray-300 mt-1">{edu.course}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Achievements */}
      {activeTab === 'achievements' && (
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4"
            >
              <img
                src={ach.image}
                alt={ach.title}
                onClick={() => setModalImage(ach.image)}
                className="w-16 h-16 object-contain rounded cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div>
                <p className="text-sm font-bold text-yellow-400 flex items-center gap-2">
                  <FaRegCalendarAlt className="text-amber-300" />
                  {ach.date}
                </p>
                <h4 className="text-lg font-semibold mt-1">{ach.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{ach.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</section>

  );
};

export default Resume;
