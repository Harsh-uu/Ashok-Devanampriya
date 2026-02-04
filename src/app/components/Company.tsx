// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// The array of images to cycle through
const carouselImages = [
  "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k1_c4aije_fugbfl.jpg",
  "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k2_ozkugr_qrzvcu.jpg",
  "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k3_yczboa_ctkskw.jpg",
  "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k4_ztjlom_sm0juh.jpg",
  "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k5_e2dspg_wfg7fe.jpg",
];

// --- Internal Carousel Component ---
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Images with Fade Transition */}
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src="/cclogo.jpg"
            alt="Cautilya Capital"
            fill
            className={`object-cover ${
              src === "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k2_ozkugr_qrzvcu.jpg" || src === "https://res.cloudinary.com/dev6vbqlb/image/upload/f_auto,q_auto,w_auto/v1767881792/k5_e2dspg_wfg7fe.jpg" 
                ? "object-center" 
                : "object-center"
            }`}
            sizes="(max-width: 640px) 160px,
       (max-width: 768px) 220px,
       300px"
            priority={index === 0} // Priority load only the first image
          />
        </div>
      ))}

      {/* Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentIndex
                ? "bg-rose-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Company = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading --- */}
        <h2 className="text-4xl md:text-5xl mb-12 md:mb-16 text-center font-poppins font-semibold text-gray-900">
          Cautilya <span className="text-[#e9343b]">Capital</span>
        </h2>

        {/* --- Main Content Container --- */}
        <div className="max-w-6xl mx-auto">
          
          {/* Mobile Layout - Carousel with Text Below */}
          <div className="md:hidden flex flex-col items-center text-center bg-gray-100 shadow-xl border">
            {/* Carousel Container for Mobile */}
            <div className="relative w-full h-64 p-4 overflow-hidden  shadow-inner">
              <ImageCarousel />
            </div>

            {/* Text Content for Mobile */}
            <p className="text-gray-600 leading-relaxed p-4">
              Cautilya Capital is a strategic capital, market-intelligence, and advisory firm built on the principles of disciplined investing and ethical decision-making. Inspired by the timeless wisdom of Chanakya, the firm combines deep strategic insight with modern financial thinking. It supports founders and businesses through rigorous analysis and structured risk management, while playing a pivotal role in shaping India's trading and wealth ecosystem through curated platforms, events, and knowledge-sharing forums.
            </p>
          </div>

          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:flex bg-white/90 shadow-xl border overflow-hidden min-h-[500px]">
            {/* --- Carousel Column (First) --- */}
            <div className="w-full lg:w-1/2 relative bg-gray-100">
               {/* The Carousel Component fills this container */}
               <ImageCarousel />
            </div>

            {/* --- Text Content Column (Second) --- */}
            <div className="lg:w-1/2 w-full flex flex-col justify-center p-8 md:p-12 lg:p-16 text-center lg:text-left bg-gray-100">
              <p className="text-gray-600 hidden md:block lg:hidden leading-relaxed ">
                Cautilya Capital is a strategic capital and advisory firm built on the principles of disciplined investing, long-term value creation, and ethical decision-making. Inspired by Chanakya's timeless wisdom, it combines deep strategic insight with modern financial thinking. The firm integrates time-cycle analysis with rigorous financial frameworks to support founders and businesses across critical growth phases. It plays a pivotal role in shaping India's trading and wealth ecosystem through curated platforms and wealth-focused forums designed to promote long-term thinking and financial clarity.
              </p>
              <p className="text-gray-600 hidden lg:block lg:text-lg leading-relaxed  mt-4">
                Cautilya Capital is a strategic capital, market-intelligence, and advisory firm built on the principles of disciplined investing, long-term value creation, and ethical decision-making. Inspired by Chanakya's timeless wisdom, it integrates time-cycle analysis with rigorous financial frameworks to identify opportunities where capital, strategy, and execution converge. The firm supports ventures across critical growth phases through disciplined analysis and structured risk management. Beyond advisory, it plays a pivotal role in shaping India's trading and wealth ecosystem by curating platforms and hosting forums that promote market intelligence, trading discipline, and long-term wealth thinking. Integrity and responsibility are central to its ethos, partnering with ideas and leaders built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
