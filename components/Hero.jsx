import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white bg-[#0f0f1a] px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 z-0"
        src="/vid/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 px-2 sm:px-4">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <motion.p
            className="text-base sm:text-lg md:text-xl font-mono text-white font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, It's Me
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-2 font-mono leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Christian
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl mt-3 font-bold font-mono text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            And I'm a{" "}
            <span className="text-yellow-400 font-extrabold font-mono neon-text block sm:inline">
              <Typewriter
                words={[
                  "Web Developer",
                  "Graphic Designer",
                  "SEO Specialist",
                  "Full Stack Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I help businesses grow with expert digital services, including web development, graphic design, front-end and back-end optimization, SEO, and digital marketing. I've got you covered every step of the way.
          </motion.p>

          
  {/* Social Icons */}
<motion.div
  className="flex gap-6 mt-6 justify-center md:justify-start"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  {[
    {
      Icon: FaFacebookF,
      link: "https://www.facebook.com/chan092600",
    },
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/_e.chan/",
    },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/christian-penales-35aa98346",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/iChan26",
    },
  ].map(({ Icon, link }, idx) => (
    <a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-10 h-5 sm:h-6 overflow-hidden border-b-2 border-white hover:border-yellow-400"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <Icon className="text-white group-hover:text-yellow-400 text-xl" />
      </div>
    </a>
  ))}
</motion.div>








                  <motion.a
                      href="/cv.pdf"
                      download
                      className="shine-button relative group mt-8 w-[160px] h-[48px] inline-block rounded-full overflow-hidden bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 shadow-lg font-mono text-[#211c1c] font-semibold transition-shadow duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                  >
                      {/* Shine layer handled by CSS */}
                      <div className="absolute inset-0 flex items-center justify-center text-base transition-transform duration-500 group-hover:-translate-y-full z-10">
                          Download CV
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 z-10">
                          <img src="/svg/download.png" alt="Download" className="w-8 h-8" />
                      </div>
                  </motion.a>


        </div>

        {/* Profile Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2, // ⏩ Faster float (was 4)
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-40 h-44 sm:w-56 sm:h-60 md:w-72 md:h-80 lg:w-80 lg:h-96"
          >
            <img
              src="/img/profile-logo2.png"
              alt="Christian"
              className="relative z-10 w-full h-full object-cover rounded-md scale-150 pointer-events-none"
            />
          </motion.div>
        </motion.div>

      </div>
      
    </section>
    
  );
}
