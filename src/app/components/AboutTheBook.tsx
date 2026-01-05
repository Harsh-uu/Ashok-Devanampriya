// src/components/AboutTheBook.tsx
"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// --- Data Structure for Lost Secret Book ---
const bookData = {
  title: "Lost Secret: The Hidden Truth of Nalanda",
  highlights: [
    "A powerful story of turning vision into a billion-dollar reality",
    "Real strategies behind building Maser in African markets",
    "Honest lessons in resilience, risk, and leadership",
    "A vivid look at Africa’s people, culture, and opportunities",
    "A roadmap for sustainable growth and lasting impact"
  ],
  details: {
    genre: "Historical Fiction",
    category: "Non-fiction",
    pageExtent: "168",
    releaseType: "English",
    isbn10: "014347619X",
    isbn13: "978-0143476191",
  binding: "Hardcover",
  price: "₹349",
    hsnCode: "49011010",
    publicationDate: "30 August 2025",
    publisher: "Penguin Enterprise",
    itemWeight: "500 g",
    dimensions: "13 x 3 x 22 cm",
    countryOfOrigin: "India",
    importer: "Penguin Random House India Pvt Ltd",
    packer: "Penguin Random House India Pvt Ltd",    
  },
  buyLinks: [
    { name: "Amazon", url: "https://amzn.in/d/6qQ2QU7", id: 0 },
  ],
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
            About the  <span className="text-[#e9343b]">Book</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          
          {/* Left Column - Book Cover */}
          <div className="order-1 lg:order-1">
            <div className="relative aspect-[5/6] max-w-md mx-auto lg:max-w-full">
              <Image
                src="/book2.png"
                alt={bookData.title}
                fill
                className="object-cover"
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
                    <span className="font-bold">Gateway to Africa</span>  gives an honest and personal look at how a bold dream took shape and grew into a billion-dollar success. Prateek Suri shares his journey from Delhi to Africa, showing how grit, curiosity, and smart decision-making turned Maser from a small electronics trading firm into a thriving $5 billion enterprise. Along the way, he captures the spirit of the continent through real experiences in cities like Lagos and Nairobi and highlights the lessons that come from truly understanding people and places. This isn’t just a story about building a business; it’s about vision, values, and the power of believing in potential where others see uncertainty.
                  </p>
              </div>
            </div>

            {/* Key Features Dropdown */}
            <div className="border border-gray-100 overflow-hidden">
              <button
                onClick={() => setKeyFeaturesOpen(!keyFeaturesOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-[#184151]">Key Features</h4>
                {keyFeaturesOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {keyFeaturesOpen && (
                <div className="px-6 py-4 space-y-3 bg-white">
                  {bookData.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-left">
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
                <h4 className="text-xl font-semibold text-[#184151]">Book Details</h4>
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
                      <span className="text-gray-800">{bookData.details.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Category:</span>
                      <span className="text-gray-800">{bookData.details.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Pages:</span>
                      <span className="text-gray-800">{bookData.details.pageExtent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Language:</span>
                      <span className="text-gray-800">{bookData.details.releaseType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">ISBN-10:</span>
                      <span className="text-gray-800">{bookData.details.isbn10}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">ISBN-13:</span>
                      <span className="text-gray-800">{bookData.details.isbn13}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Binding:</span>
                      <span className="text-gray-800">{bookData.details.binding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Price:</span>
                      <span className="text-gray-800">{bookData.details.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">HSN Code:</span>
                      <span className="text-gray-800">{bookData.details.hsnCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Publication Date:</span>
                      <span className="text-gray-800">{bookData.details.publicationDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Publisher:</span>
                      <span className="text-gray-800">{bookData.details.publisher}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Item Weight:</span>
                      <span className="text-gray-800">{bookData.details.itemWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Dimensions:</span>
                      <span className="text-gray-800">{bookData.details.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Country of Origin:</span>
                      <span className="text-gray-800">{bookData.details.countryOfOrigin}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Importer:</span>
                      <span className="text-gray-800">{bookData.details.importer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Packer:</span>
                      <span className="text-gray-800">{bookData.details.packer}</span>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Buy Links */}
            <div>
              <h4 className="text-2xl text-center font-semibold text-[#184151] mb-4 ">
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