// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


// --- Internal Carousel Component ---
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-full">
      {/* Images with Fade Transition */}
        <div
          className={`absolute bg-white inset-0 transition-opacity duration-1000 ease-in-out`}
        >
          <Image
            src="/logo.png"
            alt="Cautilya Capital"
            fill
            className="object-contain w-10 h-10 object-center"
            sizes="(max-width: 640px) 160px,
       (max-width: 768px) 220px,
       300px"
          />
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
          Company <span className="text-[#e9343b]">Bio</span>
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
            <div className="w-full lg:w-1/2 relative p-4">
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
