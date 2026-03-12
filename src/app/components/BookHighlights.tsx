"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const chapters = [
  { chapter: 1, title: "One Wallet, Billion Dreams", quote: "Most families fund present needs and future goals from the same income" },
  { chapter: 2, title: "Struggles, Dreams & Silent Aspirations", quote: "Nearly 50% of middle-class households postpone personal dreams indefinitely" },
  { chapter: 3, title: "The Great Tug of War – Spend vs Save?", quote: "Impulse spending accounts for nearly one-third of monthly expenses" },
  { chapter: 4, title: "The Middle-Class Trap – Why You Stay Stuck?", quote: "Wealth stagnation is structural, not individual, for most middle-class families" },
  { chapter: 5, title: "Shocking Money Truths of Middle-Class Indians", quote: "Financial decisions are emotion-led in nearly two-thirds of Indian families" },
  { chapter: 6, title: "Where Is Your Money Really Sleeping?", quote: "Fixed deposits deliver negative real returns during high-inflation years" },
  { chapter: 7, title: "The Invisible Wall Between You & Wealth", quote: "Only 8% of Indians receive formal financial education" },
  { chapter: 8, title: "From Survival Mode to Strategy Mode", quote: "Strategy-based investing improves discipline during volatility" },
  { chapter: 9, title: "Emergency Fund – Your Financial Seatbelt", quote: "Most households underestimate emergency corpus requirements" },
  { chapter: 10, title: "Protect Before You Prosper – Insurance Wisdom for the Middle Class", quote: "Over 70% of Indians remain underinsured" },
  { chapter: 11, title: "Gold 2.0 – How to Turn Jewellery into Generational Wealth", quote: "Idle gold represents locked capital, not active wealth" },
  { chapter: 12, title: "The Safe Illusion – Why Your FD Is Costing You a Fortune", quote: "Safety-focused portfolios underperform growth-focused portfolios over decades" },
  { chapter: 13, title: "SIP Revolution – Your Escape Plan Begins", quote: "SIPs reduce market timing risk significantly" },
  { chapter: 14, title: "SIP Secrets They Never Taught You", quote: "Consistency matters more than fund switching frequency" },
  { chapter: 15, title: "How to Start & Pick the Perfect Mutual Fund SIP", quote: "Goal alignment improves mutual fund holding discipline" },
  { chapter: 16, title: "The SIP Mindset – Power, Patience & Profit", quote: "Disciplined investors stay invested through market cycles" },
  { chapter: 17, title: "SIP Strategy Box – Step-Up, Diversify & Dominate", quote: "Diversification reduces portfolio volatility without sacrificing returns" },
  { chapter: 18, title: "Goal-Based SIP Planning – Dreams, Designed", quote: "Goal clarity reduces emotional decision-making" },
  { chapter: 19, title: "SIP Legacy – Building Wealth Beyond You", quote: "Children exposed to investing early save 40% more as adults" },
  { chapter: 20, title: "SIP Handbook – Rights, Rules & Costly Mistakes", quote: "Less than 20% read scheme information documents fully" },
  { chapter: 21, title: "The Wealth Habit – How SIP Changes You", quote: "Habit-based investing increases savings consistency by over 50%" },
  { chapter: 22, title: "Heroes & Horror Stories – Real People. Real Lessons.", quote: "Panic selling causes average investors to lose 3–6% annually" },
  { chapter: 23, title: "The SIP Blueprint – Grow Bigger, Stay Longer", quote: "SIPs held 15+ years deliver 2–3× higher final corpus" },
  { chapter: 24, title: "Early Retirement SIP Plan – Start Young, Retire Free", quote: "Early planning shortens required working years by nearly 8–10 years" },
  { chapter: 25, title: "Mission Crorepati – ₹1,000 to ₹1 Crore", quote: "Systematic investing makes crore goals mathematically achievable" },
  { chapter: 26, title: "Smart Exit – The Power of SWP", quote: "Exit strategy matters as much as accumulation strategy" },
  { chapter: 27, title: "SIPs for Kids, Women & Future Generations", quote: "Starting SIPs at birth reduces required investment by nearly 70%" },
  { chapter: 28, title: "The Family Financial Club – Get Everyone Onboard", quote: "Financial transparency improves trust and compliance within households" },
  { chapter: 29, title: "The Wealth Booster – Getting Started with Equity Investing", quote: "Time in equities matters more than entry timing" },
  { chapter: 30, title: "The Hidden Wealth – Gateway to Unlisted Pre-IPO Stocks", quote: "India hosts over 1,000 active unlisted growth-stage companies" },
  { chapter: 31, title: "Bricks or Burden – The Real Truth Behind Your Dream Home", quote: "Over 75% of Indian household net worth sits in residential real estate" },
  { chapter: 32, title: "Crypto Dreams or Disasters", quote: "Less than 5% portfolios allocate meaningfully to crypto" },
  { chapter: 33, title: "Chanakya 10P Framework for the Indian Middle Class", quote: "Framework-based investing improves outcomes by 25–35%" },
  { chapter: 34, title: "The Mirror – Mistakes, Mindset & Millionaire Moves", quote: "Emotional selling peaks during 20–30% market corrections" },
  { chapter: 35, title: "My Story – How Arjun Became a Middle-Class Millionaire", quote: "Process adherence enabled sustainable wealth growth" },
  { chapter: 36, title: "The Millionaire Manifesto – 10 Rules, 1 Life, Total Freedom", quote: "Simple systems beat complex tactics over decades" },
];

export const BookHighlights = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <section id="book-highlights" className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Book <span className="text-[#e9343b]">Highlights</span>
          </h2>
        </div>

        <div className="relative md:max-w-3xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{ align: "center", loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {chapters.map((ch) => (
                <CarouselItem key={ch.chapter} className="basis-full">
                  <div className="relative flex flex-col items-center justify-center text-center px-8 md:px-16 py-12 md:py-16 min-h-[320px]">
                    {/* Decorative quotation mark background */}
                    <span
                      className="absolute top-4 left-1/2 -translate-x-1/2 text-[10rem] md:text-[14rem] leading-none font-serif text-gray-100 select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>

                    {/* Chapter badge & title */}
                    <div className="relative z-10 mb-8">
                      <span className="inline-block bg-rose-100 text-[#e9343b] text-xs font-semibold tracking-wider font-poppins uppercase px-4 py-1.5 rounded-full mb-3">
                        Chapter {ch.chapter}
                      </span>
                      <h3 className="text-base md:text-lg font-medium text-gray-500 leading-snug max-w-xl mx-auto font-poppins">
                        {ch.title}
                      </h3>
                    </div>

                    {/* Quote — main visual focus */}
                    <p className="relative z-10 text-xl md:text-3xl lg:text-4xl font-poppins font-medium text-gray-900 leading-relaxed max-w-2xl italic">
                      &ldquo;{ch.quote}&rdquo;
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-2 md:-left-14 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-200 bg-white shadow-md items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-2 md:-right-14 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-200 bg-white shadow-md items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Numeric pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="text-2xl font-poppins font-semibold text-[#e9343b]">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-400 text-lg">/</span>
            <span className="text-lg font-poppins text-gray-400">
              {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
