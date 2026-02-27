// src/components/CTASection.tsx
"use client";

import Image from "next/image";

// --- Internal Carousel Component ---
const ImageCarousel = () => {
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
          className="object-contain h-10 w-10 object-center"
        />
      </div>
    </div>
  );
};

export const Company = () => {
  return (
    <section className="py-16 md:py-24 bg-whitey">
      <div className="max-w-6xl mx-auto px-4">
        {/* --- Title Section (Centered at Top) --- */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl text-center font-poppins font-semibold text-gray-900">
            Company <span className="text-[#e9343b]">Bio</span>
          </h2>
        </div>

        {/* --- Main Content Container (Centered) --- */}
        <div className="flex flex-col items-center">
          {/* Logo/Carousel Container */}
          <div className="relative w-[100%] md:w-[70%] h-20 md:h-40 mb-10">
            <ImageCarousel />
          </div>

          {/* Bio Text (Centered) */}
          <div className="max-w-3xl text-center space-y-4">
            <p className="text-gray-700 text-base md:text-lg lg:text-lg">
              <span className="font-semibold">Cautilya Capital</span> is a strategic capital and advisory firm built on the principles of disciplined investing, long-term value creation, and ethical decision-making.
            </p>

            <p className="text-gray-600 text-base md:text-lg md:hidden">
              Cautilya Capital is built on a deep understanding of time cycles, market behavior, and disciplined capital allocation. The firm looks beyond short-term noise to back scalable businesses with strong fundamentals, offering strategic guidance and structured risk management for long-term growth.
            </p>
            <p className="text-gray-600 text-base md:text-lg hidden md:block">
              Cautilya Capital’s philosophy is rooted in a deep understanding of time cycles, market behavior, and capital allocation. The firm blends time-cycle analysis with strong financial frameworks to identify opportunities where capital, strategy, and execution align. By focusing beyond short-term noise, it supports founders and businesses with scalable potential through disciplined analysis, risk management, and strategic guidance.
            </p>

            <p className="text-gray-600 text-base md:text-lg md:hidden">
              Beyond investing, Cautilya Capital strengthens India’s trading and wealth ecosystem through curated platforms and forums. Guided by integrity and purpose, it focuses on creating lasting value for investors, businesses, and the broader financial community.
            </p>
            <p className="text-gray-600 text-base md:text-lg hidden md:block">
              Beyond investing, Cautilya Capital actively contributes to India’s trading and wealth ecosystem. It curates large traders’ platforms and wealth forums that promote long-term thinking, market discipline, and financial clarity. Guided by integrity and purpose, the firm is committed to building enduring value for investors, businesses, and the broader ecosystem.
            </p>

          </div>
            <div className="pt-6">
              <p className="text-black text-md text-center uppercase md:text-[1.4rem] font-semibold font-poppins">
                Cautilya Capital with Conviction. Strategy with Purpose.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};
