// src/components/Hero.tsx
"use client";

import Image from "next/image";

export const Hero = () => {
  const handleDiscoverClick = () => {
    const aboutSection = document.querySelector("#about-the-book");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative max-w-7xl p-4 mx-auto overflow-hidden md:overflow-visible">      
      <div className="relative z-10 max-w-7xl text-white flex flex-col xl:flex-row md:gap-8 items-center xl:items-start">
        <div className="w-fit z-20 text-center xl:text-center my-auto max-w-2xl">
          <h1 className="text-3xl uppercase md:text-6xl xl:text-7xl font-semibold leading-tight font-poppins">
            The Middle Class <span className="text-5xl relative uppercase md:text-7xl xl:text-8xl font-semibold leading-tight font-poppins">Millionaire <span className="text-5xl absolute bottom-0 left-0.5 md:bottom-4 -z-10 md:left-1 text-black uppercase md:text-7xl xl:text-8xl font-semibold leading-tight font-poppins">Millionaire</span></span>
          </h1>
            
          <h1 className="text-2xl mt-6 sm:mt-8 xl:mt-10 sm:text-3xl md:text-4xl xl:text-5xl leading-tight font-poppins font-semibold tracking-wide uppercase">
          Ashok Devanampriya
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-2xl mx-auto font-poppins">
            A story-driven guide that helps India’s middle class break free from financial fear, shift from survival to strategy, and build wealth through disciplined habits and smart investing.
          </p>
          <div className="mt-6 sm:mt-8 xl:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDiscoverClick}
              className="hidden sm:block px-4 py-2 bg-white text-black font-semibold uppercase hover:text-red-600 transition-all duration-300 cursor-pointer"
            >
              Discover The Story
            </button>
          </div>
        </div>
        
        <div className="relative z-10 flex-shrink-0">          
          <div className="relative z-10 p-3">
            <Image
              src="/mcm_updated.jpeg"
              alt="Middle Class Millionaire Book"
              width={350}
              height={350}
              className=" w-[80%] mx-auto md:w-full h-full object-cover border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.69)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};