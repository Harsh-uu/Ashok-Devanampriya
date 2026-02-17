// src/components/Testimonials.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Book, Smartphone, Play, Zap, Users, Share2 } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel"; // Import the API type
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      api.off("select", () => {});
    };
  }, [api]);



  return (
    <section id="testimonials" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            MCM <span className="text-[#e9343b]">Ecosystem</span>
          </h2>
        </div>

                <div className="mt-16 max-w-6xl mx-auto">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full px-2 md:px-4"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="basis-full sm:basis-4/5 lg:basis-3/5 xl:basis-1/2 pl-4 md:pl-8"
              >
                <div className="px-1 py-8 md:px-2">
                  <div
                    className={`transition-all duration-700 ease-in-out ${
                      index === current ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    }`}
                  >
                    <div className="relative bg-white shadow-xl transition-all duration-300 border border-gray-200 min-h-[300px] flex flex-col">
                      {/* Icon - Fixed positioning */}
                      <div className="absolute -top-6 left-8 z-10">
                        <div className="bg-[#e9343b] p-4 shadow-lg">
                          {React.createElement(testimonial.icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                      </div>

                      {/* Content Container with proper padding */}
                      <div className="flex-1 flex flex-col p-8 pt-12">
                        {/* Title */}
                        <div className="text-center mb-6 pb-6 border-b-2 border-gray-200">
                          <h3 className="text-2xl font-semibold text-gray-900">
                            {testimonial.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 text-base leading-relaxed flex-1 flex text-center">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
          <CarouselNext className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current
                  ? "w-6 h-2 bg-[#e9343b]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        </div>

      </div>
    </section>
  );
};