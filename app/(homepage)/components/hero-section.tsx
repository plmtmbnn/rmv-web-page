"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("site-header");

    const measure = () => {
      if (header) setHeaderHeight(header.getBoundingClientRect().height || 0);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  return (
    <section className="relative">
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        {/* Background Image */}
        <Image
          src="/reliance-office.jpg"
          alt="hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-[#021859e6] to-[#021859cc]" />

        {/* Content */}
        <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center px-6 text-center animate-fadeIn">
          <h1 className="text-white text-4xl md:text-6xl font-serif leading-tight max-w-4xl drop-shadow-lg">
            Solusi Bisnis Terbaik
            <br />
            bagi Pengusaha Baru
          </h1>

          <p className="text-slate-200 mt-6 max-w-2xl text-lg md:text-xl leading-relaxed">
            Membantu Anda memulai usaha dengan lebih percaya diri melalui layanan dan dukungan 
            yang relevan untuk tahap awal bisnis.
          </p>

          <div className="mt-16 md:mt-24">
            <Link
              href="#contact"
              className="inline-block rounded-full bg-white text-[#14264A] px-8 py-3 md:px-10 md:py-4 font-semibold shadow-lg hover:bg-slate-100 transition-all duration-200"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
