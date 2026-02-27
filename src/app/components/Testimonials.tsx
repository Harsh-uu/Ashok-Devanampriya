// src/components/Testimonials.tsx
"use client";

import React from "react";
import { Book, Smartphone, Play, Zap, Users, Share2 } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    title: "MCM Book",
    icon: Book,
    description: "The Middle Class Millionaire is a foundational guide helping readers understand and achieve financial independence. It covers essential investment principles and practical financial planning techniques tailored for middle class wealth builders.",
  },
  {
    id: 2,
    title: "MCM App",
    icon: Smartphone,
    description: "A streamlined digital platform for modern investment and portfolio management with real-time market data. Manage your investments efficiently on the go with an intuitive interface and personalized recommendations.",
  },
  {
    id: 3,
    title: "MCM Web Series",
    icon: Play,
    description: "An engaging animated series featuring character-driven stories that simplify complex financial concepts. Making financial education entertaining and accessible to viewers of all knowledge levels.",
  },
  {
    id: 4,
    title: "MCM Bootcamp",
    icon: Zap,
    description: "An intensive 7-day immersive program exploring diverse wealth-building products and strategies with expert guidance. Participants gain practical knowledge on investment options, asset allocation, and long-term wealth management.",
  },
  {
    id: 5,
    title: "MCM Conclave",
    icon: Users,
    description: "A premier wealth management summit hosted across six major cities bringing together financial experts and entrepreneurs. Discuss market trends, investment opportunities, and cutting-edge wealth-building strategies in an interactive environment.",
  },
  {
    id: 6,
    title: "MCM Social Media Channel",
    icon: Share2,
    description: "A dedicated video hub offering regular updates, tutorials, and valuable financial education content. Stay informed about wealth management and financial growth opportunities through bite-sized learning modules and market analysis.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            MCM <span className="text-[#e9343b]">Ecosystem</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="h-[280px]">
              <div className="bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-200 h-full flex flex-col">
                {/* Header with Icon and Title */}
                <div className="text-center pb-6 border-b-2 border-gray-200 flex items-center justify-center gap-4 px-6 pt-6">
                  <div className="rounded-full border-rose-500 bg-rose-100 border p-2 flex-shrink-0">
                    {React.createElement(testimonial.icon, {
                      className: "w-5 h-5 text-red-500",
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex-1 flex items-center justify-center px-6">
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};