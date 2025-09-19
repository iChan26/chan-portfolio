import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function About() {
   const { ref, inView } = useInView({ threshold: 0.3 });

  const stats = [
    { value: 5, label: "Years\nexperience" },
    { value: 7, label: "Completed\nproject" },
    { value: 5, label: "Companies\nworked" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [direction, setDirection] = useState("up"); // 'up' or 'down'

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          const target = stats[i].value;
          if (direction === "up") {
            return count < target ? count + 1 : count;
          } else {
            return count > 0 ? count - 1 : count;
          }
        })
      );
    }, 300); // Controls speed (lower = faster)

    return () => clearInterval(interval);
  }, [inView, direction]);

  // Flip direction when max or min reached
  useEffect(() => {
    if (!inView) return;

    const allAtTarget = counts.every((count, i) =>
      direction === "up" ? count === stats[i].value : count === 0
    );

    if (allAtTarget) {
      const timeout = setTimeout(() => {
        setDirection((prev) => (prev === "up" ? "down" : "up"));
      }, 1000); // Pause before reversing
      return () => clearTimeout(timeout);
    }
  }, [counts, direction, inView]);
  return (
    <section
      id="about"
      className="relative font-mono min-h-screen flex items-center justify-center text-white bg-[#0d0c0c] px-4 sm:px-6 lg:px-12 overflow-hidden"
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
          {/* ✅ Mobile-Only Image */}
          <div className="md:hidden flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-64 sm:w-72 sm:h-72"
            >
              <img
                src="/img/about-profile.webp"
                alt="About Profile"
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>

          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-2 font-mono leading-tight">
            About Me
          </h2>
          <p className="text-yellow-400 text-base sm:text-lg md:text-xl font-mono font-semibold">
            Introduction
          </p>
          <h3 className="text-sm text-gray-300 uppercase tracking-widest">about</h3>
          <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base font-mono">
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
                      {stats.map(({ label }, i) => (
                          <div key={i}>
                              <h4 className="text-yellow-400 text-3xl sm:text-4xl lg:text-6xl font-extrabold mt-2 font-mono leading-tight">
                                  0{counts[i]}+
                              </h4>
                              <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base font-mono whitespace-pre-line">
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
