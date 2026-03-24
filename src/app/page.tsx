// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutTheBook } from "./components/AboutTheBook";
import { BookTrailer } from "./components/BookTrailer";
import { Testimonials } from "./components/Testimonials";
import { BookHighlights } from "./components/BookHighlights";
import { MediaInquiries } from "./components/MediaInquiries";
import { Company } from "./components/Company";
import { ReadMore } from "./components/ReadMore";

export default function Home() {
  return (
    <div className="relative text-gray-800 font-sans">
      {/* Background container with herobg.jpg */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(90deg, #6c1714, #c92929, #6c1714)",
        }}
      >
        <div
          className="absolute inset-0 opacity-60 [background-size:56px_56px] [background-image:linear-gradient(to_right,rgba(243,244,246,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(243,244,246,0.18)_1px,transparent_1px)]"
        />
        {/* Background overlay for better content readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Header and Hero content positioned above background */}
        <div className="relative z-10 h-full flex flex-col overflow-hidden">
          <Header />
          <div className="flex-1 flex items-center md:mt-10 justify-center">
            <Hero />
          </div>
        </div>
      </div>

      <main className="mx-auto">
        <div className="relative isolate overflow-hidden">
          {/* Additional content can go here */}
        </div>
        <div className="px-4 relative overflow-hidden">
          <AboutTheBook />
        </div>

        <div className="px-4 relative overflow-hidden bg-gray-50">
          <BookHighlights />
        </div>

        <div className="px-4 relative overflow-hidden">
          <ReadMore />
        </div>

        <div className="px-4 relative isolate overflow-hidden bg-gray-50">
          <Founder />
        </div>

        <div className="px-4 relative overflow-hidden ">
          <Company />
        </div>
        <BookTrailer />

        <div className="px-4 relative overflow-hidden">
          <Testimonials />
        </div>

        <div className="px-4 relative isolate overflow-hidden bg-gray-50">
          <MediaInquiries />
        </div>
      </main>
      <Footer />
    </div>
  );
}
