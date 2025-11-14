// src/components/AboutTheBook.tsx
"use client";

import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// --- Data Structure for Lost Secret Book ---
const bookData = {
  title: "Lost Secret: The Hidden Truth of Nalanda",
  highlights: [
    "A razor-sharp thriller fusing ancient history with espionage",
    "Features intelligence officer Kabir and historian Reeya Ghosh",
    "Explores legendary wootz steel and thorium energy secrets",
    "Set across India's ancient archaeological sites",
    "High-stakes chase against mercenaries and conspiracies"
  ],
  details: {
    genre: "Historical Fiction",
    category: "Fiction",
    pageExtent: "264",
    releaseType: "English",
    isbn: "978-81-988726-8-5",
    binding: "Royal Format- Paperback",
    hsnCode: "49011010",
    publicationDate: "October 2025",
    publisher: "Nu Voice Press"
  },
  buyLinks: {
    IN: [
      { name: "Amazon", url: "https://www.amazon.in/dp/819887268X?ref=cm_sw_r_ffobk_cp_ud_dp_YFN3753GXXMSF69HSPSV&ref_=cm_sw_r_ffobk_cp_ud_dp_YFN3753GXXMSF69HSPSV&social_share=cm_sw_r_ffobk_cp_ud_dp_YFN3753GXXMSF69HSPSV&bestFormat=true", id: 0, image: "/amazon.png" },
      { name: "Kindle", url: "https://www.amazon.in/dp/B0FY65VSDP?ref=cm_sw_r_ffobk_cp_ud_dp_QMS1F5GBS3AQF19QWFKX&ref_=cm_sw_r_ffobk_cp_ud_dp_QMS1F5GBS3AQF19QWFKX&social_share=cm_sw_r_ffobk_cp_ud_dp_QMS1F5GBS3AQF19QWFKX&bestFormat=true", id: 1, image: "/kindle.png" },
      { name: "Audible", url: "https://www.audible.in/pd/B0G2586LKR?qid=1763107253&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=2d02bc98-4366-4f94-99d9-5e898cda0766&pf_rd_r=Y74NV78NC0H7816885T2&plink=JUGaWumPEuLuz13L&pageLoadId=V1uEtCACJOEgw2VS&creativeId=b2592cc9-1111-40d9-9474-98f67c8075cc&ref=a_search_c3_lProduct_1_1", id: 2, image: "/audible.png" },
    ],
    US: [
      { name: "Amazon", url: "https://www.amazon.com/dp/819887268X", id: 0, image: "/amazon.png" },
      { name: "Kindle", url: "https://www.amazon.com/Lost-Secret-Hidden-Truth-Nalanda-ebook/dp/B0FY65VSDP/ref=tmm_kin_swatch_0", id: 1, image: "/kindle.png" },
      { name: "Audible", url: "https://www.amazon.com/Lost-Secret-Hidden-Truth-Nalanda/dp/B0G25HVFDT/ref=tmm_aud_swatch_0", id: 2, image: "/audible.png" },
    ],
  },
  regionNames: {
    IN: "India",
    US: "United States"
  }
};

// --- Main Component ---
export const AboutTheBook = () => {
  const [keyFeaturesOpen, setKeyFeaturesOpen] = useState(false);
  const [bookDetailsOpen, setBookDetailsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<'IN' | 'US'>('IN');
  const [isLoadingRegion, setIsLoadingRegion] = useState(true);

  // Auto-detect user region using ipapi
  useEffect(() => {
    const detectUserRegion = async () => {
      try {
        const response = await fetch('http://ip-api.com/json/');
        const data = await response.json();
        
        if (data.status === 'success') {
          const countryCode = data.countryCode;
          
          // Map country codes to our regions
          if (countryCode === 'IN') {
            setSelectedRegion('IN');
          } else {
            // Default to US for all other countries
            setSelectedRegion('US');
          }
        }
      } catch (error) {
        console.log('Could not detect region, using default');
        // Keep default region (IN)
      } finally {
        setIsLoadingRegion(false);
      }
    };

    detectUserRegion();
  }, []);

  return (
    <section id="about-the-book" className="py-16 text-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900">
            Uncover The <span className="text-[#e9343b]">Truth</span>
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
                    <span className="font-bold">Lost Secret: The Hidden Truth of Nalanda</span> is a razor-sharp thriller where intelligence officer Kabir and historian Reeya Ghosh race across India’s ancient sites to unravel a conspiracy linking the legendary wootz steel to thorium energy. From a sniper’s bullet to a murdered archaeologist, the duo is hunted at every step as they uncover secrets buried for millennia—secrets powerful enough to reshape the global order. Gripping, intelligent, and disturbingly plausible, this fast-paced novel fuses history, espionage, and science into an unforgettable chase.
                  </p>
              </div>
            </div>

            {/* Key Features Dropdown */}
            <div className="border border-gray-100 overflow-hidden">
              <button
                onClick={() => setKeyFeaturesOpen(!keyFeaturesOpen)}
                className="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-between text-left"
              >
                <h4 className="text-xl font-semibold text-gray-800">Key Features</h4>
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
                      <Check className="w-5 h-5 text-[#e9343b] mt-1 flex-shrink-0" />
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
                <h4 className="text-xl font-semibold text-gray-800">Book Details</h4>
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
                      <span className="font-medium text-gray-600">ISBN:</span>
                      <span className="text-gray-800">{bookData.details.isbn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Binding:</span>
                      <span className="text-gray-800">{bookData.details.binding}</span>
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
                  </div>
                </div>
              )}
            </div>

            {/* Buy Links */}
            <div>
              <h4 className="text-2xl text-center font-semibold text-gray-800 mb-4">
                Get Your Copy
              </h4>
              
              <div className="flex lg:flex-wrap justify-center items-center">
                {isLoadingRegion ? (
                  // Placeholder during loading to prevent layout shift
                  <>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-32 h-20 flex items-center justify-center"
                      >
                        <div className="w-20 h-10 bg-gray-200 animate-pulse rounded"></div>
                      </div>
                    ))}
                  </>
                ) : (
                  // Actual buy links
                  bookData.buyLinks[selectedRegion].map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-32 h-20 flex items-center justify-center transition-colors hover:opacity-80"
                    >
                      <Image
                        src={link.image}
                        alt={link.name}
                        width={link.name === "Kindle" ? 200 : 70}
                        height={link.name === "Kindle" ? 200 : 70}
                        className={`object-cover ${link.name === "Audible" ? "-mt-2" : ""}`}
                      />
                    </a>
                  ))
                )}
              </div>
              
              <p className="text-center text-gray-700 mt-4">or your nearest bookstore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};