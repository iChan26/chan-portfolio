import { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/about";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  // Lock scroll while loading
  useEffect(() => {
    document.body.style.overflow = loadingDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loadingDone]);

  return (
    <>
      <Head>
        <title>Chan. Portfolio</title>
        <link rel="icon" href="/img/profile-logo2.webp" type="image/webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Chan's personal web portfolio — showcasing projects, skills, and creativity."
        />
      </Head>

      {/* Loader appears before any content */}
      <AnimatePresence>
        {!loadingDone && <Loader onFinish={() => setLoadingDone(true)} />}
      </AnimatePresence>

      {/* Fade-in Header & Main Content after loader */}
      {loadingDone && (
        <motion.main
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Header />
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <ContactMe />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
