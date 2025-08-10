import React, { useState } from "react";
import { FaEye, FaCode } from "react-icons/fa";
import { FaFigma, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
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
} from "react-icons/si";
import { FiLayers } from "react-icons/fi";

const toolIcons = {
  nextjs: <SiNextdotjs className="text-lg" title="Next.js" />,
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
    highlevel: <FiLayers className="text-lg" title="HighLevel" />,
};



// All project data
const allProjects = [
  {
    title: "I&A Jewelry",
    image: "/img/Web Development/ia-international-square.png",
    description: "Luxury Redefined – Web Design",
    category: "Web Development",
    viewLink: "https://ia-international.vercel.app/",
    tools: ["nextjs", "tailwind", "vercel"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS1.png",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS1.png",
    tools: ["photoshop"],
  },
  {
    title: "AgriMart E-commerce",
    image: "/img/Web Development/AgriMart.png",
    description: "Online vegetable store with admin panel",
    category: "Web Development",
    viewLink: "https://agrimart.website/",
    tools: ["javascript", "php", "hostinger"]
  },
  {
    title: "Blue Sky Company SEO Performance",
    image: "/img/SEO Works/Blue sky company SEO.png",
    description: "Before & After SEO Optimization Report",
    category: "SEO Works",
    viewLink: "/img/SEO Works/Blue sky company SEO.png",
    tools: ["googleanalytics", "yoast"]
  },
  {
    title: "Calming Bites",
    image: "/img/Digital Marketing/CalmingBites.png",
    description: "Product packaging and marketing design",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/CalmingBites.png",
    tools: ["canva"]
  },
  {
    title: "Car Rental UI",
    image: "/img/Web Development/indOz-cars-square.png",
    description: "Landing page UI for car rental",
    category: "Web Development",
    viewLink: "https://indoz-cars.vercel.app/",
    tools: ["nextjs", "tailwind", "vercel"]
  },
  {
    title: "New Sneakers Collection",
    image: "/img/Graphic Designs/New Sneakers Collection 1.png",
    description: "Promotional graphic for Sneakers Collection",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/New Sneakers Collection 1.png",
    tools: ["canva"]
  },
  {
    title: "Dental Billing",
    image: "/img/Digital Marketing/Dental Billing Poster 1.png",
    description: "Marketing graphic for healthcare SaaS",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Dental Billing Poster 1.png",
     tools: ["canva", "photoshop"]
  },
   {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/SING LIKE NEVER BEFORE – TRANSFORM YOUR VOICE!.mp4",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/SING LIKE NEVER BEFORE – TRANSFORM YOUR VOICE!.mp4",
     tools: ["aftereffects"]
  },
   {
    title: "Stephanie Blum Photography",
    image: "/img/Web Development/stephanie blum photography.png",
    description: "Blogsite for Stephanie Blum",
    category: "Web Development",
    viewLink: "https://www.stephanieblumphoto.com/",
    tools: ["squarespace", "javascript", "css"]
  },
  {
    title: "Blue Sky Heating and Air",
    image: "/img/Digital Marketing/Blue Sky Heating and Air LLC.png",
    description: "Promoting Blue Sky Heating and Air",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Blue Sky Heating and Air LLC.png",
     tools: ["canva"]
  },
  {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/Radical Vocal Breakthrough with Brad Chapman.mp4",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Radical Vocal Breakthrough with Brad Chapman.mp4",
    tools: ["aftereffects"]
  },
  {
    title: "Queuedial Company SEO Performance",
    image: "/img/SEO Works/Queuedial SEO.png",
    description: "Before & After SEO Optimization Report",
    category: "SEO Works",
    viewLink: "/img/SEO Works/Queuedial SEO.png",
    tools: ["googleanalytics", "yoast"]
  },
  {
    title: "Rita's Marketing",
    video: "/vid/Digital Marketing/Rita's Marketing.mp4",
    description: "Promoting Rita's Products",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Rita's Marketing.mp4",
    tools: ["canva"]
  },
  {
    title: "EuroElektra - Empowered by Innovation",
    image: "/img/Web Development/EuroElektra.png",
    description: "EuroElektra – Web Development",
    category: "Web Development",
    viewLink: "https://euroelektra.vercel.app/",
    tools: ["nextjs", "tailwind", "vercel"]
  },
  {
    title: "Skin & Coat",
    image: "/img/Digital Marketing/Skin&Coat.png",
    description: "Product packaging and marketing design",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Skin&Coat.png",
    tools: ["canva"]
  },
  {
    title: "Zen Diamond - Luxury",
    image: "/img/Web Development/zen diamond.png",
    description: "Zen Diamond – Web Development",
    category: "Web Development",
    viewLink: "https://ia-international.com/zenuk/",
    tools: ["wordpress", "elementor", "javascript"]
  },
  {
    title: "GCM Youth Fellowship",
    image: "/img/Graphic Designs/GCM Event 1.jpg",
    description: "Poster Event for GCM",
    category: "Digital Marketing",
    viewLink: "/img/Graphic Designs/GCM Event 1.jpg",
    tools: ["canva", "photoshop"]
  },
  {
    title: "Blue Sky Heating and Air LLC",
    video: "/vid/Digital Marketing/Blue Sky Heating and Air LLC.mp4 ",
    description: "Promoting Blue Sky Heating and Air LLC",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Blue Sky Heating and Air LLC.mp4",
     tools: ["canva"]
  },
  {
    title: "Dad's Wallet Finance",
    image: "/img/Web Development/dadswallet.png",
    description: "Dad's Wallet – Web Development/SEO",
    category: "Web Development",
    viewLink: "https://dadswallet.com.au/",
    tools: ["wordpress", "yoast", "elementor"]
  },    
  {
    title: "Brad's Services",
    video: "/vid/Digital Marketing/Your Voice, Your Power – Train with Brad Chapman.mp4",
    description: "Promoting Brad's Vocal Coaching Servicing",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Your Voice, Your Power – Train with Brad Chapman.mp4",
    tools: ["aftereffects"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS2.png",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS2.png",
    tools: ["photoshop"]
    
  },
  {
    title: "New Sneakers Collection",
    image: "/img/Graphic Designs/New Sneakers Collection 2.png",
    description: "Promotional graphic for Sneakers Collection",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/New Sneakers Collection 2.png",
    tools: ["canva"]
  },
  {
    title: "Point 1 Shop Retail",
    image: "/img/Web Development/point1ca.png",
    description: "Point 1 Shop Retail – Web Development/SEO",
    category: "Web Development",
    viewLink: "https://point1.ca/",
    tools: ["wordpress", "yoast"]
  },   
  {
    title: "Dental Billing",
    image: "/img/Digital Marketing/Dental Billing Poster 2.png",
    description: "Marketing graphic for healthcare SaaS",
    category: "Digital Marketing",
    viewLink: "/img/Digital Marketing/Dental Billing Poster 2.png",
    tools: ["photoshop","canva"]
  },
  {
    title: "Taco Time Restaurant",
    image: "/img/Web Development/tacotime.png",
    description: "Taco Time – Web Development",
    category: "Web Development",
    viewLink: "https://tacotimesd.com/",
     tools: ["highlevel", "javascript"]
  },  
  {
    title: "Small Business Enterprise Center",
    image: "/img/Web Development/Small Business.png",
    description: "Small Business – Web Development",
    category: "Web Development",
    viewLink: "https://app.gohighlevel.com/v2/preview/Il9wA6FxqN6HxzSGT9bk",
    tools: ["highlevel", "javascript"]
  },   
  {
    title: "Elite Drip",
    video: "/vid/Digital Marketing/Facebook ads Animated.mp4",
    description: "Promoting Elite Drip's Clothes",
    category: "Digital Marketing",
    viewLink: "/vid/Digital Marketing/Facebook ads Animated.mp4",
    tools: ["canva"]
  },
  {
    title: "UDS Logo",
    image: "/img/Graphic Designs/UDS3.png",
    description: "Brand identity for Unique Digital Solution",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/UDS3.png",
    tools: ["photoshop"]
    
  },
   {
    title: "Artificial Intelligence Logo",
    image: "/img/Graphic Designs/AI Logo.png",
    description: "Logo Brand for Artificial Intelligence",
    category: "Graphic Designs",
    viewLink: "/img/Graphic Designs/AI Logo.png",
    tools: ["photoshop"]
    
  },
];

const categories = ["All", "Graphic Designs", "Web Development", "SEO Works", "Digital Marketing"];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#0d0c0c] font-mono py-20 px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-10">
          <span className="text-white font-extrabold ">My</span>{" "}
          <span className="text-yellow-500 font-extrabold">Portfolio</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm sm:text-base font-semibold">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full border-b-2 transition-all duration-200 ${
                activeCategory === category
                  ? "border-yellow-500 text-yellow-500"
                  : "border-transparent text-white hover:text-yellow-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
              {/* Projects Grid */}
<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
  {filteredProjects.map((project, index) => (
    <div
      key={index}
      className="relative bg-white rounded-lg overflow-hidden border shadow-lg group transition-transform duration-300 hover:scale-[1.02]"
      style={{ height: '100%' }}
    >
      {/* Top Section: Media + Title Bar */}
      <div className="relative z-10 h-[350px] transition-all duration-300 group-hover:-translate-y-24">
        
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

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-black px-4 py-3 font-bold text-base z-30">
          {project.title}
        </div>
      </div>

   {/* Hover Reveal Section */}
<div className="bg-[#1e1e1e] absolute bottom-[-20px] left-0 right-0 z-30 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4 pb-5">
  <div className="p-4 flex flex-col items-center">
    <p className="text-white text-sm mb-4 text-center">{project.description}</p>

<div className="flex gap-3 w-full justify-center mb-2">
  {/* Tools Button-like Box */}
  {project.tools && project.tools.length > 0 && (
    <div className="flex-1 max-w-[130px]">
      <div className="flex items-center justify-center gap-1 bg-black text-xs py-1.5 px-4 rounded-full w-full h-9 transition group-hover:bg-yellow-400 group-hover:text-black">
        {project.tools.map((tool, i) => (
          <span
            key={i}
            className="transition-colors text-white group-hover:text-black"
          >
            {toolIcons[tool]}
          </span>
        ))}
      </div>
    </div>
  )}

  {/* View Button */}
  <div className="flex-1 max-w-[130px]">
    <a
      href={project.viewLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1 bg-black text-white text-xs py-1.5 px-4 rounded-full w-full h-9 hover:bg-yellow-400 hover:text-black transition"
    >
      <FaEye className="text-sm" /> View
    </a>
  </div>
</div>







  </div>
</div>

    </div>
  ))}
</div>




{/* Empty state */}
{filteredProjects.length === 0 && (
  <p className="text-gray-400 mt-6 text-center">No projects found in this category.</p>
)}

      </div>
    </section>
  );
};

export default PortfolioSection;
