// src/components/CTASection.tsx
"use client";

import Image from "next/image";

export const Company = () => {
  return (
    <section id="company" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-800">
            Company <span className="text-[#e9343b]">Bio</span>
          </h2>
        </div>

        <div className="bg-white shadow-xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">
          <div className="relative overflow-hidden w-full lg:w-1/2 bg-gray-100 p-8 md:p-10 flex items-center justify-center min-h-[250px]">
            <div className="absolute inset-0 opacity-70 [background-size:56px_56px] [background-image:linear-gradient(to_right,rgba(156,163,175,0.24)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,163,175,0.24)_1px,transparent_1px)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-100 to-transparent pointer-events-none w-96 lg:h-[200px]" />
            <div className="relative z-10 w-full shadow-[0_0_80px_rgba(243,244,246,1)] bg-gray-100 h-[100px]">
              <Image
                src="/logo.png"
                alt="Cautilya Capital"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center py-6 px-4 md:p-10 lg:p-12 font-poppins text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Cautilya Capital
            </h2>

            <p className="mt-5 text-gray-700 text-base md:text-md leading-relaxed lg:hidden">
              Cautilya Capital is a strategic capital and advisory firm built on the principles of disciplined investing and long-term value creation. It blends time-cycle analysis with strong financial frameworks to identify opportunities where capital, strategy, and execution align.
            </p>

            <p className="mt-5 text-gray-700 text-base md:text-md leading-relaxed hidden lg:block">
              Cautilya Capital is a strategic capital and advisory firm built on
              the principles of disciplined investing, long-term value creation,
              and ethical decision-making. Its philosophy is rooted in a deep
              understanding of time cycles, market behavior, and capital
              allocation. The firm blends time-cycle analysis with strong
              financial frameworks to identify opportunities where capital,
              strategy, and execution align.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-md leading-relaxed block lg:hidden">
              It supports founders and businesses with scalable potential through disciplined analysis and risk management. Beyond investing, Cautilya Capital contributes to India's trading ecosystem through curated platforms and forums.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-md leading-relaxed hidden lg:block">
              By focusing beyond short-term noise, it supports founders and
              businesses with scalable potential through disciplined analysis,
              risk management, and strategic guidance. Beyond investing,
              Cautilya Capital actively contributes to India&apos;s trading and
              wealth ecosystem by curating large traders&apos; platforms and
              wealth forums that promote long-term thinking, market discipline,
              and financial clarity.
            </p>

            <p className="mt-7 text-black text-sm lg:text-lg uppercase tracking-wide font-semibold">
              Cautilya Capital with Conviction. <br />
              Strategy with Purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};