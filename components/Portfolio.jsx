import React, { useState } from "react";
import { FaEye, FaCode, FaFigma, FaReact} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiHostinger,
  SiGoogleanalytics,
  SiYoast,
  SiCanva,
  SiAdobeaftereffects,
  SiSquarespace,
  SiElementor,
  SiWordpress,
  SiShopify,
  SiWoocommerce
} from "react-icons/si";
import { FiLayers } from "react-icons/fi";

const toolIcons = {
  nextjs: <SiNextdotjs className="text-lg" title="Next.js" />,
  react: <SiReact className="text-lg" title="React" />,
  tailwind: <SiTailwindcss className="text-lg" title="Tailwind CSS" />,
  vercel: <SiVercel className="text-lg" title="Vercel" />,
  photoshop: <SiAdobephotoshop className="text-lg" title="Photoshop" />,
  html: <SiHtml5 className="text-lg" title="HTML5" />,
  css: <SiCss3 className="text-lg" title="CSS3" />,
  javascript: <SiJavascript className="text-lg" title="JavaScript" />,
  php: <SiPhp className="text-lg" title="PHP" />,
  mysql: <SiMysql className="text-lg" title="MySQL" />,
  hostinger: <SiHostinger className="text-lg" title="Hostinger" />,
  googleanalytics: <SiGoogleanalytics className="text-lg" title="Google Analytics" />,
  yoast: <SiYoast className="text-lg" title="Yoast SEO" />,
  canva: <SiCanva className="text-lg" title="Canva" />,
  aftereffects: <SiAdobeaftereffects className="text-lg" title="After Effects" />,
  squarespace: <SiSquarespace className="text-lg" title="Squarespace" />,
  elementor: <SiElementor className="text-lg" title="Elementor" />,
  wordpress: <SiWordpress className="text-lg" title="WordPress" />,
  shopify: <SiShopify className="text-lg" title="Shopify" />,
  woocommerce: <SiWoocommerce className="text-lg" title="WooCommerce" />,

  divi: (
  <span title="Divi">
    <img
      src="/svg/Divi.svg"
      alt="Divi"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),
wpbakery: (
  <span title="WPBakery">
    <img
      src="/svg/wpbakery.svg"
      alt="WPBakery"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),

 GoHighLevel: (
  <span title="GoHighLevel">
    <img
      src="/svg/gohighlevel.svg"
      alt="GoHighLevel"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),

Shogun: (
  <span title="Shogun">
    <img
      src="/svg/shogun.svg"
      alt="Shogun"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),

Foxify: (
  <span title="Foxify">
    <img
      src="/svg/foxify.svg"
      alt="Foxify"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),

Liquid: (
  <span title="Liquid">
    <img
      src="/svg/liquid.svg"
      alt="Liquid"
      className="w-6 h-6 pointer-events-none select-none"
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        filter:
          'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(103%) contrast(103%)',
      }}
    />
  </span>
),
};



// All project data
const allProjects = [
  {
    title: "Reedemer Hospice",
    image: "/img/Web Development/Redeemer Hospice.webp",
    description: "Reedemer Hospice – Web Development",
    category: "Web Development",
    viewLink: "https://redeemerhospice.com/",
     tools: ["wordpress", "elementor", "html", "javascript"]
  }, 
  {
    title: "WeBuilt AI Agents",
    image: "/img/Web Development/WeBuilt.webp",
    description: "Deploy AI Agents – Frontend/Web Design",
    category: "Web Development",
    viewLink: "https://app.gohighlevel.com/v2/preview/dFp5wWMfb2kkwa1xxKO4#col-6u7nxbS48p",
     tools: ["GoHighLevel", "html", "css", "javascript"]
  }, 
   {
    title: "The Shift Method™",
    image: "/img/Web Development/The Shift Method™.webp",
    description: "Shift Toolkit – Web Development",
    category: "Web Development",
    viewLink: "https://theshiftteam.com/",
     tools: ["shopify", "Liquid", "html", "javascript"]
  }, 
  {
    title: "I&A Jewelry",
    image: "/img/Web Development/ia-international-square.webp",
    description: "Luxury Redefined – Next.Js/Web Design",
    category: "Web Development",
    viewLink: "https://ia-international.vercel.app/",
    tools: ["nextjs", "tailwind", "vercel"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS1.webp",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS1.webp",
    tools: ["photoshop"],
  },
  {
    title: "Border DME - Medical Equipment",
    image: "/img/Web Development/BorderDME.webp",
    description: "Medical equipment Informational Site - Web Development",
    category: "Web Development",
    viewLink: "https://borderdme.com/",
    tools: ["wordpress", "elementor","html", "javascript"]
  },
  {
    title: "Blue Sky Company SEO Performance",
    image: "/img/SEO Works/Blue sky company SEO.webp",
    description: "Before & After SEO Optimization Report",
    category: "SEO Works",
    viewLink: "/img/SEO Works/Blue sky company SEO.webp",
    tools: ["googleanalytics", "yoast"]
  },
  {
    title: "Calming Bites",
    image: "/img/Digital Marketing/CalmingBites.webp",
    description: "Product packaging and marketing design",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/CalmingBites.webp",
    tools: ["canva"]
  },
  {
    title: "Car Rental UI",
    image: "/img/Web Development/indOz-cars-square.webp",
    description: "Landing page UI for car rental",
    category: "Web Development",
    viewLink: "https://indoz-cars.vercel.app/",
    tools: ["react", "tailwind", "vercel"]
  },
  {
    title: "New Sneakers Collection",
    image: "/img/Graphic Designs/New Sneakers Collection 1.webp",
    description: "Promotional graphic for Sneakers Collection",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/New Sneakers Collection 1.webp",
    tools: ["canva"]
  },
  {
    title: "Dental Billing",
    image: "/img/Digital Marketing/Dental Billing Poster 1.webp",
    description: "Marketing graphic for healthcare SaaS",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Dental Billing Poster 1.webp",
     tools: ["canva", "photoshop"]
  },
   {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/SING LIKE NEVER BEFORE – TRANSFORM YOUR VOICE!.webm",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/SING LIKE NEVER BEFORE – TRANSFORM YOUR VOICE!.webm",
     tools: ["aftereffects"]
  },
   {
    title: "Stephanie Blum Photography",
    image: "/img/Web Development/stephanie blum photography.webp",
    description: "Blogsite for Stephanie Blum",
    category: "Web Development",
    viewLink: "https://www.stephanieblumphoto.com/",
    tools: ["squarespace", "javascript", "html",]
  },
  {
    title: "Blue Sky Heating and Air",
    image: "/img/Digital Marketing/Blue Sky Heating and Air LLC.webp",
    description: "Promoting Blue Sky Heating and Air",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Blue Sky Heating and Air LLC.webp",
     tools: ["canva"]
  },
  {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/Radical Vocal Breakthrough with Brad Chapman.webm",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Radical Vocal Breakthrough with Brad Chapman.webm",
    tools: ["aftereffects"]
  },
  {
    title: "Queuedial Company SEO Performance",
    image: "/img/SEO Works/Queuedial SEO.webp",
    description: "Before & After SEO Optimization Report",
    category: "SEO Works",
    viewLink: "/img/SEO Works/Queuedial SEO.webp",
    tools: ["googleanalytics", "yoast"]
  },
  {
    title: "Rita's Marketing",
    video: "/vid/Digital Marketing/Rita's Marketing.webm",
    description: "Promoting Rita's Products",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Rita's Marketing.webm",
    tools: ["canva"]
  },
  {
    title: "EuroElektra - Empowered by Innovation",
    image: "/img/Web Development/EuroElektra.webp",
    description: "EuroElektra – Web Development",
    category: "Web Development",
    viewLink: "https://euroelektra.vercel.app/",
    tools: ["nextjs", "tailwind", "vercel"]
  },
  {
    title: "Skin & Coat",
    image: "/img/Digital Marketing/Skin&Coat.webp",
    description: "Product packaging and marketing design",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Skin&Coat.webp",
    tools: ["canva"]
  },
  {
    title: "Zen Diamond - Luxury",
    image: "/img/Web Development/zen-diamond.webp",
    description: "Zen Diamond – Web Development",
    category: "Web Development",
    viewLink: "https://zen-diamond.co.uk/",
    tools: ["wordpress", "elementor","html","javascript"]
  },
  {
    title: "GCM Youth Fellowship",
    image: "/img/Graphic Designs/GCM Event 1.webp",
    description: "Poster Event for GCM",
    category: "Digital Marketing",
    viewLink: "/img/Graphic Designs/GCM Event 1.webp",
    tools: ["canva", "photoshop"]
  },
  {
    title: "Blue Sky Heating and Air LLC",
    video: "/vid/Digital Marketing/Blue Sky Heating and Air LLC.webm ",
    description: "Promoting Blue Sky Heating and Air LLC",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Blue Sky Heating and Air LLC.webm",
     tools: ["canva"]
  },
  {
    title: "Dad's Wallet Finance",
    image: "/img/Web Development/dadswallet.webp",
    description: "Dad's Wallet – Web Development/SEO",
    category: "Web Development",
    viewLink: "https://dadswallet.com.au/",
    tools: ["wordpress", "wpbakery", "yoast"]
  },    
  {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/Your Voice, Your Power – Train with Brad Chapman.webm",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Your Voice, Your Power – Train with Brad Chapman.webm",
    tools: ["aftereffects"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS2.webp",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS2.webp",
    tools: ["photoshop"]
    
  },
  {
    title: "New Sneakers Collection",
    image: "/img/Graphic Designs/New Sneakers Collection 2.webp",
    description: "Promotional graphic for Sneakers Collection",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/New Sneakers Collection 2.webp",
    tools: ["canva"]
  },
  {
    title: "CityHill Church - Official Site",
    image: "/img/Web Development/CityHill Church.webp",
    description: "CityHill Church – Web Development",
    category: "Web Development",
    viewLink: "https://cityhillchurch.co.za/",
    tools: ["wordpress", "divi","html", "javascript"]
  },   
  {
    title: "Dental Billing",
    image: "/img/Digital Marketing/Dental Billing Poster 2.webp",
    description: "Marketing graphic for healthcare SaaS",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Dental Billing Poster 2.webp",
    tools: ["photoshop","canva"]
  },
  {
    title: "Border Store - Medical Equipment",
    image: "/img/Web Development/Border Store.webp",
    description: "Medical Equipment Store – Web Development",
    category: "Web Development",
    viewLink: "https://www.bordersleep.com/",
     tools: ["shopify", "Shogun","html", "Liquid"]
  },  
  {
    title: "Small Business Enterprise Center",
    image: "/img/Web Development/Small Business.webp",
    description: "Small Business – Web Development",
    category: "Web Development",
    viewLink: "https://app.gohighlevel.com/v2/preview/Il9wA6FxqN6HxzSGT9bk",
    tools: ["GoHighLevel", "html", "javascript"]
  },   
  {
    title: "Elite Drip",
    video: "/vid/Digital Marketing/Facebook ads Animated.webm",
    description: "Promoting Elite Drip's Clothes",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Facebook ads Animated.webm",
    tools: ["canva"]
  },
  {
    title: "Dental Billing Innovative – Outsourcing",
    image: "/img/Web Development/DentalBilling.webp",
    description: "Dental Billing – Web Development",
    category: "Web Development",
    viewLink: "https://dentalbillingin.com/",
    tools: ["wordpress", "elementor","html", "php"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS3.webp",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS3.webp",
    tools: ["photoshop"]
    
  },
   {
    title: "Artificial Intelligence Logo",
    image: "/img/Graphic Designs/AI Logo.webp",
    description: "Logo Brand for Artificial Intelligence",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/AI Logo.webp",
    tools: ["photoshop"]
    
  },
  {
    title: "SALS3 - Lifestyle Shopping",
    image: "/img/Web Development/Sals3.webp",
    description: "Lifestyle Store – Web Development",
    category: "Web Development",
    viewLink: "https://sals3.com/",
     tools: ["wordpress", "elementor", "woocommerce"]
  }
];

const categories = ["All", "Graphic Designs", "Web Development", "SEO Works", "Digital Marketing"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (

<section id="portfolio" className="bg-[#0d0c0c] py-20 px-4 sm:px-6">
  <div className="max-w-screen-xl mx-auto text-center">
    {/* Section Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black text-2xl sm:text-3xl lg:text-6xl font-extrabold mb-10"
    >
      <span className="text-white font-extrabold">My</span>{" "}
      <span className="text-yellow-500 font-extrabold">Portfolio</span>
    </motion.h2>

    {/* Category Tabs */}
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 text-xs sm:text-base font-semibold">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-b-2 transition-all duration-200 ${
            activeCategory === category
              ? "border-yellow-500 text-yellow-500"
              : "border-transparent text-white hover:text-yellow-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Projects Grid with Smooth Zoom + Fade Animation */}
    <motion.div
      key={activeCategory} // re-triggers animation when category changes
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-8"
    >
      {filteredProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 25 },
            show: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="relative bg-white rounded-lg overflow-hidden border shadow-lg group transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Media area */}
          <div className="relative z-10 h-[250px] sm:h-[300px] md:h-[350px]">
            {project.video ? (
              <video
                src={project.video}
                className="w-full h-full object-cover transition duration-300"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-300"
              />
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 z-10" />

            {/* Combined bottom panel */}
            <div
              className="absolute left-0 right-0 bottom-0 z-20
                         transform translate-y-[65%] group-hover:translate-y-0
                         transition-transform duration-300"
            >
              {/* Title */}
              <div className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black px-3 sm:px-4 py-2 sm:py-3 font-bold text-sm sm:text-base">
                {project.title}
              </div>

              {/* Description + Buttons */}
              <div className="bg-[#1e1e1e] px-3 sm:px-4 pb-4 pt-3 sm:pt-4">
                <p className="text-white text-xs sm:text-sm mb-3 text-center">
                  {project.description}
                </p>

                <div className="flex gap-2 sm:gap-3 w-full justify-center flex-wrap">
                  {/* Tools */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="flex-1 max-w-[120px] sm:max-w-[130px]">
                      <div className="flex items-center justify-center gap-1 bg-black text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 rounded-full w-full h-8 sm:h-9 transition">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="text-white">
                            {toolIcons[tool]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View button */}
                  <div className="flex-1 max-w-[120px] sm:max-w-[130px]">
                    <a
                      href={project.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 bg-black text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 rounded-full w-full h-8 sm:h-9 hover:bg-yellow-400 hover:text-black transition"
                    >
                      <FaEye className="text-xs sm:text-sm" /> View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Empty State */}
    {filteredProjects.length === 0 && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-gray-400 mt-6 text-center"
      >
        No projects found in this category.
      </motion.p>
    )}
  </div>
</section>


  );
};

export default PortfolioSection;
