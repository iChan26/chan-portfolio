import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const statusText = "Initializing Portfolio...";

  useEffect(() => {
    // Progress bar logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add small delay before fading out for smoother transition
          setTimeout(() => {
            setIsVisible(false); // triggers AnimatePresence exit
          }, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Once loader is fully hidden, trigger onFinish
    if (!isVisible && progress === 100) {
      const timeout = setTimeout(() => {
        onFinish(); // Only finish AFTER fade-out
      }, 800); // Match motion exit duration

      return () => clearTimeout(timeout);
    }
  }, [isVisible, progress, onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* BW background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover filter grayscale"
            src="/vid/loader-bg.webm"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Strong dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80" />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
            {/* Gold Title */}
            <motion.img
              src="/img/chan-logo.webp"
              alt="CHAN Logo"
              className="h-16 sm:h-24 object-contain"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />

            {/* Subtitle */}
            <motion.p
              className="mt-4 text-lg sm:text-xl font-mono text-gray-300 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9, 1] }}
              transition={{ duration: 2, delay: 0.4 }}
            >
              WEB DEVELOPER & GRAPHICS DESIGNER
            </motion.p>

            {/* Gold Progress Bar */}
            <div className="mt-10 w-full max-w-md">
              <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-yellow-400 font-mono">
                {progress}%
              </div>
            </div>

            {/* Typewriter synced to progress */}
            <p className="mt-4 text-sm text-gray-400 font-mono">
              {statusText.slice(0, Math.floor((progress / 100) * statusText.length))}
              <span className="border-r-2 border-gray-400 ml-1 animate-pulse" />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
