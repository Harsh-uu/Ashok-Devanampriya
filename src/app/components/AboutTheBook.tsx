// src/components/AboutTheBook.tsx
"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// --- Data Structure for Lost Secret Book ---
const bookData = {
  title: "The Middle Class Millionaire",
  highlights: [
    "The simplest and safest way to build long-term wealth",
    "Learn how to choose funds and create your own SIP strategy",
    "Why discipline and consistency beat market timing",
    "Real stories of big wins—and costly early exits",
  ],
  details: {
    genre: "Financial",
    category: "Non-fiction",
    pageExtent: "",
    releaseType: "English",
    isbn10: "014347619X",
    isbn13: "978-0143476191",
    binding: "Hardcover",
    price: "",
    hsnCode: "49011010",
    publicationDate: "",
    publisher: "NuVoice Press",
  },
  buyLinks: [{ name: "Amazon", url: "", id: 0 }],
};

// --- Main Component ---
export const AboutTheBook = () => {
  const [keyFeaturesOpen, setKeyFeaturesOpen] = useState(false);
  const [bookDetailsOpen, setBookDetailsOpen] = useState(false);

  return (
    <section id="about-the-book" className="py-16 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold">
            About the <span className="text-[#e9343b]">Book</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Left Column - Book Cover */}
          <div className="order-1 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-full">
              <Image
                src="/book-mcm.png"
                alt={bookData.title}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column - Book Content */}
          <div className="order-2 lg:order-2 space-y-6 md:space-y-8 text-center md:text-left">
            {/* Title */}
            <div>
              <div className="space-y-4 text-base lg:text-lg text-justify leading-relaxed">
                <p className="text-gray-700">
                  <span className="font-bold">The Middle-Class Millionaire</span> is a practical, emotional, and transformational money guide for India’s middle class that explains why millions of hardworking Indians earn well yet remain trapped in EMIs, fear, and financial confusion. Told through relatable, story-driven chapters following Arjun, his family, and everyday Indians, the book takes readers from financial stress to clarity and control by exposing behavioural traps, money myths, and hidden leaks that silently drain wealth. Before diving into investments, it lays down the non-negotiable foundations—emergency funds, term and health insurance, and clear thinking around gold and fixed deposits—helping readers build a strong financial safety engine and make small, powerful shifts toward long-term wealth and independence.

                </p>
              </div>
            </div>

            {/* Key Features Dropdown */}
            <div className="border border-gray-100 overflow-hidden">
              <button
                onClick={() => setKeyFeaturesOpen(!keyFeaturesOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-black">
                  Key Features
                </h4>
                {keyFeaturesOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {keyFeaturesOpen && (
                <div className="px-6 py-4 space-y-3 bg-white">
                  {bookData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-left"
                    >
                      <Check className="w-5 h-5 text-[#df5128] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Book Details Dropdown */}
            <div className="border border-gray-100 overflow-hidden">
              <button
                onClick={() => setBookDetailsOpen(!bookDetailsOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-black">
                  Book Details
                </h4>
                {bookDetailsOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {bookDetailsOpen && (
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Genre:</span>
                      <span className="text-gray-800">
                        {bookData.details.genre}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        Category:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Pages:</span>
                      <span className="text-gray-800">
                        {bookData.details.pageExtent}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        Language:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.releaseType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        ISBN-10:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.isbn10}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        ISBN-13:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.isbn13}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        Binding:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.binding}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Price:</span>
                      <span className="text-gray-800">
                        {bookData.details.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        HSN Code:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.hsnCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        Publication Date:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.publicationDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">
                        Publisher:
                      </span>
                      <span className="text-gray-800">
                        {bookData.details.publisher}
                      </span>
                    </div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>

            {/* Buy Links */}
            <div>
              <h4 className="text-2xl text-center font-semibold text-black mb-4 ">
                Get Your Copy
              </h4>
              <div className="flex justify-center">
                {bookData.buyLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 h-16 overflow-hidden px-4 flex items-center justify-center"
                  >
                    <Image
                      src="/amazon.png"
                      alt="Amazon"
                      width={100}
                      height={100}
                      className="object-cover object-center"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
