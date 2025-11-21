"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById("site-header");
    const measure = () => {
      if (el) setHeaderHeight(el.getBoundingClientRect().height || 0);
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
        className="w-full relative overflow-hidden"
        style={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <Image src="/reliance-office.jpg" alt="hero" fill className="object-cover object-center" priority />

        <div className="absolute inset-0" style={{ background: "rgba(2,24,89,0.9)" }} />

        <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-serif text-center leading-tight max-w-3xl">
            Solusi Bisnis Terbaik
            <br />
            bagi Pengusaha Baru
          </h1>

          <p className="text-slate-200 mt-6 max-w-2xl text-center">
            Membantu Anda memulai usaha dengan lebih percaya diri melalui layanan dan dukungan yang
            relevan untuk tahap awal bisnis.
          </p>

          <div className="mt-20 lg:mt-32">
            <Link
              href="#contact"
              className="rounded-full bg-white text-[#14264A] px-6 py-3 font-medium"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
