// src/components/AboutTheBook.tsx
"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// --- Data Structure for Lost Secret Book ---
const bookData = {
  title: "The Middle Class Millionaire",
  highlights: [
    "Why SIP is the simplest, safest path to wealth",
    "How to pick funds and build a personalised SIP strategy",
    "How habits, consistency, and behaviour matter more than market timing",
    "Real stories of people who won big (and those who lost by quitting early)",
  ],
  details: {
    genre: "",
    category: "Non-fiction",
    pageExtent: "",
    releaseType: "English",
    isbn13: "978-81-996715-3-9",
    binding: "Paperback",
    price: "",
    publicationDate: "",
    publisher: "Nu VoicePress",
    distributer: "Penguin Random House India",
  },
  buyLinks: [{ name: "Amazon", url: "", id: 0 }],
};

// --- Main Component ---
export const ReadMore = () => {
  const [bookDetailsOpen, setBookDetailsOpen] = useState(false);

  return (
    <section id="about-the-book" className="py-16 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold">
            What Readers <span className="text-[#e9343b]">Learn</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Left Column - Book Cover */}
          <div className="order-2">
            <div className=" h-[20rem] md:h-[29rem] w-full relative">
              <Image
                src="/mcm2.png"
                alt={bookData.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Book Content */}
          <div className="order-1 space-y-4 text-center md:text-left">
            {/* Title */}
            <span className="w-full px-6 py-4 bg-gray-100 flex items-center justify-between text-left">Why SIP is one of the simplest and safest ways to build long term wealth, and how to choose the right funds to create a personalised plan that fits their life.</span>
            <span className="w-full px-6 py-4 bg-gray-100 flex items-center justify-between text-left">Why habits, discipline and consistency matter more than trying to time the market, along with real stories of people who built wealth and those who lost out by quitting too early.</span>
            <span className="w-full px-6 py-4 bg-gray-100 flex items-center justify-between text-left">How to build multi asset and multi generational wealth in an Indian context, including SIPs for children and women, along with equity, unlisted shares, real estate and crypto.</span>
            <span className="w-full px-6 py-4 bg-gray-100 flex items-center justify-between text-left">How to shift from a survival mindset to a wealth creator mindset through a clear step by step execution system and a powerful 10 rule manifesto.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
