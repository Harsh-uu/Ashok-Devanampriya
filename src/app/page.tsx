// src/app/page.tsx (or your main file)
"use client";

import { Founder } from "./components/Founder";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutTheBook } from "./components/AboutTheBook";
import { BookTrailer } from "./components/BookTrailer";
import { Testimonials } from "./components/Testimonials";
import { MediaInquiries } from "./components/MediaInquiries";
import { Company } from "./components/Company";

export default function Home() {
  return (
    <div className="relative text-gray-800 font-sans">
      {/* Background container with herobg.jpg */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image.png')" }}
      >
        {/* Background overlay for better content readability */}
        <div className="absolute inset-0 bg-black/40" />

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
