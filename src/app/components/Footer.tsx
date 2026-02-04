// src/components/Footer.tsx
"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="text-gray-900 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Website Name / Brand */}
        <div className="text-center">
          <a
            href="/"
            className="text-2xl md:text-3xl font-poppins font-semibold hover:text-[#e9343b] transition-colors"
          >
            Ashok Devanampriya
          </a>
          <p className="text-gray-600 mt-2 text-sm">
            Author of Middle Class Millionaire
          </p>
        </div>

        {/* Social Media */}
        
        <div>
          <div className="flex justify-center mt-12 space-x-6 flex-wrap">
            <a
              href="https://x.com/AshDevanampriya"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full hover:opacity-80 transition-all"
              title="X"
            >
              <Image src="/x.svg" alt="Email" width={30} height={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/67973995/admin/page-posts/published/"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full hover:opacity-80 transition-all"
              title="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="Email" width={30} height={30} />
            </a>
            <a
              href="https://web.telegram.org/k/#@themcmfamily"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full hover:opacity-80 transition-all"
              title="Telegram"
            >
              <Image src="/telegram.svg" alt="Email" width={30} height={30} />
            </a>
            <a
              href="https://chat.whatsapp.com/EmDSEz7qZN0CBoVQeMYdtY"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full hover:opacity-80 transition-all"
              title="WhatsApp"
            >
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://www.facebook.com/MiddleClassMillionairebyAshokDevanampriya/"
              target="_blank"
              rel="noopener noreferrer"
              className=" rounded-full hover:opacity-80 transition-all"
              title="Facebook"
            >
              <Image src="/facebook.svg" alt="Email" width={30} height={30} />
            </a>
            <a
              href="mailto:author@cautilyacapital.com"
              className=" rounded-full hover:opacity-80 transition-all"
              title="Email"
            >
              <Image src="/gmail.svg" alt="Email" width={30} height={30} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Ashok Devanampriya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
