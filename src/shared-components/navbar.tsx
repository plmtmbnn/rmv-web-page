"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/management", label: "Manajemen" },
  { href: "/profile", label: "Profil Perusahaan" },
  { href: "/investor", label: "Hubungan Investor" },
  { href: "/solution", label: "Solusi Keuangan" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // measure height for spacer
    setHeight(header.getBoundingClientRect().height);

    const onScroll = () => {
      // threshold you can tune (40 px looks nice)
      setIsScrolled(window.scrollY > 40);
    };

    // initial check (in case user refreshes mid-scroll)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      if (header) setHeight(header.getBoundingClientRect().height);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /**
   * Visual behavior:
   * - When NOT scrolled: header is absolute over hero, transparent background,
   *   text white, CTA is white with dark text.
   * - When scrolled: header becomes fixed, white background, dark text, CTA becomes black.
   */
  const headerClasses = [
    "transition-all duration-300 ease-in-out z-50",
    isScrolled
      ? "fixed top-0 left-0 right-0 bg-white text-[#14264A] shadow-md"
      : "absolute top-0 left-0 right-0 bg-transparent text-white",
  ].join(" ");

  const linkClass = (scrolled: boolean) =>
    [
      "text-sm transition-colors duration-200",
      scrolled ? "text-[#14264A] hover:text-[#0f274a]" : "text-white hover:underline",
    ].join(" ");

  return (
    <>
      {/* Spacer to prevent content jump when header becomes fixed */}
      {isScrolled && <div style={{ height }} aria-hidden="true" />}

      <header ref={headerRef} className={headerClasses} role="banner">
        <div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center">
              {/* Logo swap: white logo on hero, color logo on white header */}
              {!isScrolled ? (
                // white logo when on top (place public/logo-white.png)
                <Image src="/logo-white.png" alt="Reliance Logo" width={160} height={52} priority />
              ) : (
                // color logo when scrolled (place public/logo-color.png)
                <Image src="/logo-blue.png" alt="Reliance Logo" width={160} height={52} priority />
              )}
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(isScrolled)}>
                {link.label}
              </Link>
            ))}
            {/* CTA button: white on hero, black when scrolled */}
            <Link
              href="/contact"
              className={`ml-4 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                isScrolled
                  ? "bg-[#0f274a] text-white shadow-sm hover:scale-[1.02]"
                  : "bg-white text-[#14264A] shadow-sm hover:scale-[1.02]"
              }`}
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile button */}
          <div className="lg:hidden">
            <button
              aria-label="Open menu"
              className={`p-2 rounded border transition ${
                isScrolled ? "text-[#14264A] border-slate-200" : "text-white border-white/30"
              }`}
            >
              {/* simple hamburger icon */}
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <rect width="20" height="2" rx="1" fill="currentColor" />
                <rect y="5" width="20" height="2" rx="1" fill="currentColor" />
                <rect y="10" width="20" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
