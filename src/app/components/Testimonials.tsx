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
    title: "MCM Social Media",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col font-poppins p-6">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-rose-100 rounded p-2">
                    {React.createElement(testimonial.icon, {
                      className: "w-5 h-5 text-[#e9343b]",
                    })}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {testimonial.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};