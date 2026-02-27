// src/components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export const Founder = () => {
  return (
    <section id="founder" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* --- Heading (Outside the Container) --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-800">
            Meet The <span className="text-[#e9343b]">Author</span>
          </h2>
        </div>

        {/* --- Main Content Container with Background --- */}
        <div className="bg-[white/90] shadow-xl overflow-hidden flex flex-col md:flex-row max-w-6xl mx-auto">
          {/* --- Image Column (First) --- */}
          <div className="md:w-1/2 w-full">
            <div className="relative w-full h-72 md:h-full lg:h-full overflow-clip">
              <Image
                src="/Ashok.jpeg"
                alt="Ashok Devanampriya"
                fill
                className="object-cover object-center scale-125"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* --- Text Content Column (Second) --- */}
          <div className="lg:w-1/2 md:w-[60%] w-full flex flex-col justify-center p-4 md:p-12 lg:p-16 text-center lg:text-left">
            <h1 className="text-3xl font-semibold">Ashok Devanampriya</h1>
           
            <p className="text-gray-600 lg:text-lg leading-relaxed mt-4">
              Ashok is a fintech entrepreneur helping Indian HNIs and global NRIs invest responsibly through AI-driven research and risk-adjusted strategies. He is the founder and CEO of Cautilya Capital, a Bengaluru-based quant wealth management firm. With over a decade of market experience, he combines quantitative models, investing psychology, and risk management to guide long-term wealth creation. A mechanical engineer, MBA, and IIM Bangalore alumnus, Ashok is also a TEDx speaker, mentor, and visiting professor at leading business schools across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
