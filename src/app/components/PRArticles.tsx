"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

// PR Articles data
const prArticles = [
  {
    id: 1,
    image: "/pr1.png",
    alt: "Lost Secret featured in Tribune India",
    link: "https://www.tribuneindia.com/news/business/lost-secret-the-hidden-truth-of-nalanda-a-smart-intricate-thriller-that-reimagines-indias-forgotten-genius/",
    title: "Lost Secret - Tribune India",
  },
  {
    id: 2,
    image: "/pr2.png",
    alt: "Lost Secret featured in The Week",
    link: "https://www.theweek.in/wire-updates/business/2025/12/08/dcm37-akash-pasricha%E2%80%99s-lost-secret.html",
    title: "Lost Secret - The Week",
  },
  {
    id: 3,
    image: "/pr3.png",
    alt: "Lost Secret featured in The Wire",
    link: "https://thewire.in/ptiprnews/lost-secret-the-hidden-truth-of-nalanda-a-smart-intricate-thriller-that-reimagines-indias-forgotten-genius",
    title: "Lost Secret - The Wire",
  },
  {
    id: 4,
    image: "/pr4.png",
    alt: "Lost Secret featured in PTI News",
    link: "https://www.ptinews.com/press-release/lost-secret-the-hidden-truth-of-nalanda-%E2%80%94-a-smart-intricate-thriller-that-reimagines-india%E2%80%99s-forgotten-genius/3168949",
    title: "Lost Secret - PTI News",
  },
  {
    id: 5,
    image: "/pr5.png",
    alt: "Lost Secret featured in Karnataka News Network",
    link: "https://karnatakanewsnetwork.in/lost-secret-the-hidden-truth-of-nalanda-a-smart-intricate-thriller-that-reimagines-indias-forgotten-genius/",
    title: "Lost Secret - Karnataka News Network",
  },
];

export const PRArticles = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Press & <span className="text-rose-600">Media</span>
          </h2>
          <p className="text-lg text-gray-600">
            Featured coverage and press articles about Lost Secret
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
            className="relative w-full"
          >
            <CarouselContent className="flex items-center -ml-6">
              {prArticles.map((article, index) => (
                <CarouselItem
                  key={article.id}
                  className="pl-6 basis-4/5 md:basis-3/4 lg:basis-3/5 xl:basis-1/2"
                >
                  <div className="relative group cursor-pointer">
                    <div
                      className={`transition-all duration-500 ease-out transform ${
                        index === current
                          ? "scale-105 opacity-100 z-10"
                          : "scale-95 opacity-60"
                      }`}
                    >
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative"
                      >
                        {/* Image */}
                        <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                          <Image
                            src={article.image}
                            alt={article.alt}
                            width={800}
                            height={500}
                            className="object-cover w-full h-full"
                            priority={index < 3}
                          />
                        </div>

                        {/* Hover Overlay with Icon */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <ExternalLink className="w-6 h-6 text-gray-800" />
                          </div>
                        </div>

                        {/* Article Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-medium text-sm leading-tight">
                            {article.title}
                          </h3>
                        </div>
                      </a>
                    </div>

                    {/* Subtle indicator for active image */}
                    {index === current && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-rose-600 rounded-full"></div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Minimal Navigation */}
            <CarouselPrevious className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
            <CarouselNext className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
          </Carousel>

          {/* Minimal Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {prArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current
                    ? "w-6 h-2 bg-rose-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
