"use client";

import Image from "next/image";
import React from "react";
import { MapPin, Phone, Mail, Building2, Calendar, Award, ArrowRight } from "lucide-react";

type TileProps = {
  src: string;
  alt?: string;
  className?: string;
  index?: number;
};

function ImageTile({ src, alt = "", className = "", index = 0 }: TileProps) {
  return (
    <div 
      className={`group rounded-2xl overflow-hidden bg-slate-100 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${className}`}
      style={{ 
        animation: `fadeInScale 0.5s ease-out ${index * 100}ms both`
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={520}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}

const rightVertical = [
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
];

const bottomGrid = [
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
  "/assests/reliance-office-100px.jpg",
];

const fallback = "/assests/reliance-office-100px.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
            <Building2 className="w-4 h-4" />
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Profil Perusahaan
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Venture capital terpercaya yang berkomitmen mendukung pertumbuhan ekosistem bisnis Indonesia.
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Main About Card */}
          <article className="lg:col-span-2 relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 p-10 md:p-12 overflow-hidden group">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200/30 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-red-200/30 transition-all duration-700"></div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-full mb-6">
                <Award className="w-4 h-4 text-red-600" />
                <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">Profil Perusahaan</span>
              </div>

              {/* Heading */}
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight text-[#0b203f] mb-6">
                <span className="text-slate-800">Sekilas Tentang</span>
                <br />
                <span className="bg-gradient-to-r from-[#d94e35] to-red-600 bg-clip-text text-transparent font-bold">
                  PT. Reliance Modal Ventura
                </span>
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8">
                Adalah perusahaan yang didirikan berdasarkan akta Nomor 116 tanggal 6 Juni tahun 2015
                yang dibuat dihadapan Rosita Rianauli Sianipar, SH, M.Kn, Notaris di Jakarta dan telah
                memperoleh persetujuan Kementerian Hukum dan Hak Asasi Manusia Nomor
                AHU-2443277.AH.01.01.Tahun 2015 tanggal 11 Juni 2015.
              </p>
            </div>
          </article>

          {/* Right column (top) - vertical 2x2 grid */}
          <div className="hidden lg:grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <ImageTile src={rightVertical[0] ?? fallback} className="h-36" index={0} alt="Office view 1" />
              <ImageTile src={rightVertical[1] ?? fallback} className="h-36" index={1} alt="Office view 2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageTile src={rightVertical[2] ?? fallback} className="h-36" index={2} alt="Office view 3" />
              <ImageTile src={rightVertical[3] ?? fallback} className="h-36" index={3} alt="Office view 4" />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start">
          {/* left: 2x2 image grid */}
          <div className="col-span-1 grid grid-cols-2 gap-4 mb-8 lg:mb-0">
            <ImageTile src={bottomGrid[0] ?? fallback} className="h-40" index={4} alt="Office 1" />
            <ImageTile src={bottomGrid[1] ?? fallback} className="h-40" index={5} alt="Office 2" />
            <ImageTile src={bottomGrid[2] ?? fallback} className="h-40" index={6} alt="Office 3" />
            <ImageTile src={bottomGrid[3] ?? fallback} className="h-40" index={7} alt="Office 4" />
          </div>

          {/* right: contact card */}
          <aside className="col-span-1 lg:col-span-2 relative bg-gradient-to-br from-white via-slate-50 to-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 md:p-10 overflow-hidden group">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-100">
                  <Mail className="w-6 h-6 text-[#d94e35]" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#d94e35]">Kontak Kami</h3>
                  <p className="text-xs text-slate-500 font-medium">Hubungi Tim Kami</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-8">
                Hubungi kami untuk informasi lebih lanjut atau konsultasi bisnis
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                {/* Address */}
                <div className="group/item flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 border border-transparent hover:border-blue-100 transition-all duration-300">
                  <div className="p-2.5 bg-blue-100 rounded-xl shrink-0 group-hover/item:bg-blue-200 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Alamat Kantor</div>
                    <div className="text-sm text-slate-700 leading-relaxed font-medium">
                      Soho West Point, Jalan Macan Kav. 4 - 5, Kedoya Utara, Kebon Jeruk - Jakarta Barat 11520
                    </div>
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="group/item flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 border border-transparent hover:border-green-100 transition-all duration-300">
                    <div className="p-2.5 bg-green-100 rounded-xl shrink-0 group-hover/item:bg-green-200 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Telepon</div>
                      <a href="tel:+622121192288" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
                        (021) 21192288
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/item flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-red-50/50 to-transparent hover:from-red-50 border border-transparent hover:border-red-100 transition-all duration-300">
                    <div className="p-2.5 bg-red-100 rounded-xl shrink-0 group-hover/item:bg-red-200 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-red-700" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:corporate@rmv.co.id" className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors break-all">
                        corporate@rmv.co.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};