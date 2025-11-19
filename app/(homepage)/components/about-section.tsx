import Image from "next/image";
import React from "react";

type TileProps = {
  src: string;
  alt?: string;
  className?: string;
};

function ImageTile({ src, alt = "", className = "" }: TileProps) {
  return (
    <div className={`rounded-xl overflow-hidden bg-slate-100 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={520}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

const rightVertical = [
  "/about/about-1.png",
  "/about/about-1.png",
  "/about/about-1.png",
  "/about/about-1.png",
];

const bottomGrid = [
  "/about/about-1.png",
  "/about/about-1.png",
  "/about/about-1.png",
  "/about/about-1.png",
];

const fallback = "/mnt/data/Screenshot 2025-11-19 at 23.50.31.png";

export const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
      {/* TOP ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <article className="lg:col-span-2 bg-white rounded-[28px] border border-slate-100 shadow-sm p-10">
          <h2 className="font-serif text-[48px] leading-[1.02] text-[#0b203f] mb-6">
            <span className="text-black/90">Sekilas Tentang </span>
            <span className="text-[#d94e35]">PT. Reliance Modal Ventura</span>
          </h2>

          <p className="text-[16px] leading-relaxed text-slate-700 max-w-none mb-8">
            Adalah perusahaan yang didirikan berdasarkan akta Nomor 116 tanggal 6 Juni tahun 2015
            yang dibuat dihadapan Rosita Rianauli Sianipar, SH, M.Kn, Notaris di Jakarta dan telah
            memperoleh persetujuan Kementerian Hukum dan Hak Asasi Manusia Nomor
            AHU-2443277.AH.01.01.Tahun 2015 tanggal 11 Juni 2015.
          </p>
        </article>

        {/* Right column (top) - vertical 2x2 grid */}
        <div className="hidden lg:grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <ImageTile src={rightVertical[0] ?? fallback} className="h-36" />
            <ImageTile src={rightVertical[1] ?? fallback} className="h-36" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImageTile src={rightVertical[2] ?? fallback} className="h-36" />
            <ImageTile src={rightVertical[3] ?? fallback} className="h-36" />
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 items-start mt-8">
        {/* left: 2x2 image grid */}
        <div className="col-span-1 grid grid-cols-2 gap-4">
          <ImageTile src={bottomGrid[0] ?? fallback} className="h-40" />
          <ImageTile src={bottomGrid[1] ?? fallback} className="h-40" />
          <ImageTile src={bottomGrid[2] ?? fallback} className="h-40" />
          <ImageTile src={bottomGrid[3] ?? fallback} className="h-40" />
        </div>

        {/* right: contact card */}
        <aside className="col-span-2 bg-white rounded-[28px] border border-slate-100 shadow-sm p-8 mt-8 lg:mt-0">
          <h3 className="font-serif text-[34px] text-[#d94e35] mb-6">Kontak Kami</h3>

          <div className="text-sm text-slate-700 space-y-5 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 shrink-0 text-[#0b203f] mt-1" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C8 2 5 5 5 9c0 6.5 7 11 7 11s7-4.5 7-11c0-4-3-7-7-7z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="9" r="1.8" fill="currentColor" />
              </svg>
              <div>
                Soho West Point, Jalan Macan Kav. 4 - 5, Kedoya Utara, Kebon Jeruk - Jakarta Barat
                11520
              </div>
            </div>

            <div className="flex space-x-10">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0b203f]" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.04.37 2.05.74 3.01a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45c.96.37 1.97.62 3.01.74A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>(021) 21192288</div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#0b203f]" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 8.5l-9 6-9-6"
                    stroke="currentColor"
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>corporate@rmv.co.id</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
