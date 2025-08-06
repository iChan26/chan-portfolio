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

export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);

  // Lock scroll while loading
  useEffect(() => {
    if (!loadingDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loadingDone]);

  return (
    <>
      <Head>
        <title>Chan. Portfolio</title>
        <link rel="icon" href="/img/profile-logo2.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Chan's personal web portfolio — showcasing projects, skills, and creativity."
        />
      </Head>

      {/* Loader appears before any content */}
      {!loadingDone && <Loader onFinish={() => setLoadingDone(true)} />}

      {/* Main content only after loading */}
      {loadingDone && (
        <main className="relative">
          <Header />
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <ContactMe />
          <Footer />
        </main>
      )}
    </>
  );
}
