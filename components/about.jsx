import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { value: 5, label: "Years\nexperience" },
    { value: 7, label: "Completed\nproject" },
    { value: 5, label: "Companies\nworked" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-white bg-[#0d0c0c] px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12 px-2 sm:px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Right Side - Content */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          {/* Mobile-Only Image (enlarged) */}
          <div className="md:hidden flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-80 h-80 sm:w-96 sm:h-96"
            >
              <img
                src="/img/about-profile.webp"
                alt="About Profile"
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-2 leading-tight">
            About Me
          </h2>
          <p className="text-yellow-400 text-base sm:text-lg md:text-xl font-semibold">
            Introduction
          </p>
          <h3 className="text-sm text-gray-300 uppercase tracking-widest">
            about
          </h3>
          <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I am a 4-year Bachelor's degree holder in Information Technology (BSIT),
            specializing as a Full Stack Web Developer, Graphic Designer, and Web Designer.
            I focus on front-end and back-end development, UI/UX design, SEO, and digital marketing.
            I create high-quality, user-friendly websites that drive engagement and support business growth.
          </p>

          {/* Stats Section */}
          <div
            ref={ref}
            className="grid grid-cols-3 gap-4 mt-6 text-center md:text-left"
          >
            {stats.map(({ value, label }, i) => (
              <div key={i}>
                <h4 className="text-yellow-400 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-2 leading-tight">
                  {inView && (
                    <CountUp
                      start={0}
                      end={value}
                      duration={2}
                      delay={i * 0.3}
                      suffix="+"
                    />
                  )}
                </h4>
                <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base whitespace-pre-line">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Image (Hidden on Mobile) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block w-56 h-60 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-[40rem] lg:h-[40rem]"
        >
          <img
            src="/img/about-profile.webp"
            alt="About Profile"
            className="w-full h-full object-contain pointer-events-none"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
