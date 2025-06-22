/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQAccordion from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsFading(true);
      setTimeout(() => setIsLoading(false), 500);
    };

    // Check if all images are loaded
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      handleLoad(); // No images, load immediately
    } else {
      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              handleLoad();
            }
          };
        }
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen isFading={isFading} />
      ) : (
        <div className="bg-[#121212] font-montserrat min-h-screen transition-opacity duration-500">
          <section id="navbar">
            <Navbar />
          </section>

          <section id="hero">
            <HeroSection />
          </section>

          <section id="services">
            <Services />
          </section>

          <section id="why-us">
            <About />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          <section id="faq">
            <FAQAccordion />
          </section>

          <section id="footer">
            <Footer />
          </section>
        </div>
      )}
    </>
  );
};

export default App;
  