import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPhp,
  SiWordpress,
  SiYoast,
  SiShopify,
  SiSquarespace,
  SiWebflow,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiGithub,
  SiCpanel,
  SiVercel,
  SiElementor,
  SiGoogleanalytics,
  SiHostinger,
} from "react-icons/si";
import { FiLayers } from "react-icons/fi";
import { FaRegCalendarAlt, FaServer} from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { MdOutlineStorage } from "react-icons/md";
import { BiPaint } from "react-icons/bi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { RiCloudLine } from "react-icons/ri";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [modalImage, setModalImage] = useState(null);

  const tabs = ["Skills", "Experience", "Education", "Achievements"];

  const experiences = [
  {
    image: "/img/Experience/borderdme.webp",
    role: "WordPress & Shopify Web Developer",
    company: "Border Medical Supplies & Equipment (Remote from Mexico border)",
    year: "2025",
  },
  {
    image: "/img/Experience/SALS3.webp",
    role: "Shopify Web Developer",
    company: "SALS3 - Online Lifestyle Shopping platform (Remote from Australia)",
    year: "2025",
  },
  {
    image: "/img/Experience/CityHill.webp",
    role: "WordPress Developer",
    company: "CityHill Church (Remote from South Africa)",
    year: "2024",
  },
  {
    image: "/img/Experience/I&A.webp",
    role: "Full Stack Web Developer",
    company: "Glimbyte - I&A International (Remote from Albania, Ireland)",
    year: "2024",
  },
  {
    image: "/img/Experience/phrmdologo.webp",
    role: "Database Management",
    company: "PHRMDO, Misamis Occidental (Local From Philippines)",
    year: "2024",
  },
  {
    image: "/img/Experience/AgriMart.webp",
    role: "Web Developer",
    company: "AgriMart - USTP (Local From Philippines)",
    year: "2024",
  },
  {
    image: "/img/Experience/DentalBilling.webp",
    role: "Web Developer and Graphics Designer",
    company: "Dental Billing Innovative (Remote from U.S)",
    year: "2023",
  },
  {
    image: "/img/Experience/Brad.webp",
    role: "Graphics and Web Designer",
    company: "Brad Chapman Vocal Coach (Remote from Las Vegas, Nevada)",
    year: "2023",
  },
  {
    image: "/img/Experience/Dad'sWallet.webp",
    role: "Web Developer and SEO Optimization",
    company: "Dad's Wallet (Remote from Australia)",
    year: "2022",
  },
  {
    image: "/img/Experience/gcmlogo.webp",
    role: "Graphic Designer",
    company: "GCM Church Oroquieta (Local From Philippines)",
    year: "2022",
  },
  {
    image: "/img/Experience/penguinpr.webp",
    role: "Web Developer and Graphics Designer",
    company: "Penguin PR - Marketing Agency (Remote from U.S)",
    year: "2021",
  },
  {
    image: "/img/Experience/dure&dunelogo.webp",
    role: "Computer System Servicing",
    company: "Deor & Dune Academe School of Technology Inc. (Local From Philippines)",
    year: "2020",
  },
];


  const education = [
    {
      image: "/img/Education/MU Logo.webp",
      year: "2023 - 2024",
      school: "Misamis University",
      course: "Bachelor of Science in Information Technology",
    },
    {
      image: "/img/Education/MONHS.webp",
      year: "2019 - 2020",
      school: "Misamis Occidental National Highschool",
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
      description: `"Mikrotik: Managing Networks" at Misamis University.`,
      date: "May 13, 2023",
    },
  ];

 const skills = {
  frontend: [
    { name: "HTML", icon: <SiHtml5 className="text-black text-xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-black text-xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-black text-xl" /> },
    { name: "React", icon: <SiReact className="text-black text-xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-black text-xl" /> },
    { name: "Liquid",icon: (<img src="/svg/liquid.svg" alt="Liquid" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Elementor", icon: <SiElementor className="text-black text-xl" /> },
    { name: "Divi",icon: (<img src="/svg/Divi.svg" alt="Divi" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Gutenberg",icon: (<img src="/svg/Gutenberg.svg" alt="Gutenberg" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Shogun",icon: (<img src="/svg/shogun.svg" alt="Shogun" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Foxify",icon: (<img src="/svg/foxify.svg" alt="Foxify" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},

  ],
  backend: [
    { name: "PHP", icon: <SiPhp className="text-black text-xl" /> },
    { name: "MySQL",icon: (<img src="/svg/MySQL.svg"alt="MySQL" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Yoast SEO", icon: <SiYoast className="text-black text-xl" /> },
    { name: "Google Analytics", icon: < SiGoogleanalytics className="text-black text-xl" /> },
  ],
  cms: [
    { name: "WordPress", icon: <SiWordpress className="text-black text-xl" /> },
    { name: "Shopify", icon: <SiShopify className="text-black text-xl" /> },
    { name: "Wix",icon: (<img src="/svg/Wix.svg" alt="Wix" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},
    { name: "Squarespace", icon: <SiSquarespace className="text-black text-xl" /> },
    { name: "Webflow", icon: <SiWebflow className="text-black text-xl" /> },
    { name: "GoHighLevel",icon: (<img src="/svg/gohighlevel.svg" alt="GoHighLevel" className="w-6 h-6 brightness-0 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()}/>),},


  ],
  deploy: [
    { name: "GitHub", icon: <SiGithub className="text-black text-xl" /> },
    { name: "cPanel", icon: <SiCpanel className="text-black text-xl" /> },
    { name: "Hostinger", icon: <SiHostinger className="text-black text-xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-xl" /> },
  ],
  design: [
    { name: "Figma", icon: <SiFigma className="text-black text-xl" /> },
    { name: "Canva", icon: <SiCanva className="text-black text-xl" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-black text-xl" /> },
    { name: "After Effects", icon: <SiAdobeaftereffects className="text-black text-xl" /> },
  ],
};

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="resume" className="bg-black text-white py-24 px-8 md:px-24 xl:px-32 scroll-mt-24">
      {/* --- Modal Image --- */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-3xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
          </div>
        </div>
      )}

      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-12">
        {/* --- Left Side Tabs --- */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">Why Hire Me?</h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            I bring real-world experience from local institutions to global companies.
            From full-stack development to design and SEO, I help brands shine online.
          </p>

          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`w-full text-left px-5 py-3 rounded-md border text-base transition ${
                  activeTab === tab.toLowerCase()
                    ? "border-transparent bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black font-semibold"
                    : "bg-[#0d0c0c] text-white border-[#201d1d] hover:bg-[#1d1b1b]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* --- Right Side Content --- */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 mb-4">
            My {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h3>
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            Here's a look at my {activeTab}.
          </p>

          <div className="max-h-[600px] overflow-y-auto pr-3 gradient-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="space-y-12"
                >
                  {Object.entries(skills).map(([category, list]) => {
                    const categoryLabels = {
                      frontend: {
                        label: "Frontend Development",
                        icon: <LuMonitorSmartphone className="text-yellow-400 text-lg mr-2" />,
                      },
                      backend: {
                        label: "Backend Development",
                        icon: <MdOutlineStorage className="text-yellow-400 text-lg mr-2" />,
                      },
                      cms: {
                        label: "CMS Builders",
                        icon: <FiLayers className="text-yellow-400 text-lg mr-2" />,
                      },
                      deploy: {
                        label: "Deployment & Hosting",
                        icon: <RiCloudLine className="text-yellow-400 text-lg mr-2" />,
                      },
                      design: {
                        label: "Design & Creative Tools",
                        icon: <BiPaint className="text-yellow-400 text-lg mr-2" />,
                      },
                    };

                    const section = categoryLabels[category] || { label: category, icon: <SiCodepen className="text-yellow-400 text-lg mr-2" /> };

                    return (
                      <div key={category} className="space-y-4">
                        {/* Divider with icon and label */}
                        <div className="relative flex items-center justify-center">
                          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                          <h3 className="relative flex items-center px-4 text-lg font-semibold text-yellow-400 bg-black uppercase tracking-wide">
                            {section.icon}
                            {section.label}
                          </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                          {list.map((skill, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ y: -5 }}
                              className="relative flex flex-col items-center justify-center px-4 py-4 text-sm font-semibold text-black rounded-md bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 shadow-md overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(255,215,0,0.6)] hover:scale-[1.05]"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                              <div className="mb-1 relative z-10">{skill.icon}</div>
                              <div className="text-xs sm:text-sm text-center relative z-10">{skill.name}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4">
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
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4">
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
                </motion.div>
              )}

              {activeTab === "achievements" && (
                <motion.div
                  key="achievements"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {achievements.map((ach, idx) => (
                    <div key={idx} className="bg-[#0d0c0c] rounded-md p-5 shadow border border-[#201d1d] flex gap-4">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
