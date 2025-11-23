"use client";

import { useState } from "react";
import Image from "next/image";
import { Member, members } from "@/app/management/constant";

export default function ManagementPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  const closeModal = () => setSelected(null);

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-10 md:mb-14">
            <span className="text-black">Manajemen </span>
            <span className="text-[#D25130]">Reliance Modal Ventura</span>
          </h1>

        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
  <button
    key={member.id}
    type="button"
    onClick={() => setSelected(member)}
    className="group relative text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14264A] transition-transform duration-150 hover:-translate-y-1"
  >
    <div className="absolute inset-x-0 bottom-0 top-16 bg-[#14264A] rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.12)]" />

    <div className="relative z-10 px-4">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="relative w-full aspect-371/327">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>

    <div className="relative z-10 px-6 pt-4 pb-6 text-white flex flex-col">
      <div className="flex-1">
        <p className="text-lg md:text-xl font-semibold leading-snug">
          {member.name}
        </p>
        <p className="mt-1 text-sm md:text-base opacity-80">
          {member.position}
        </p>
      </div>
      <div className="mt-3 flex justify-end">
        <span className="text-xs md:text-sm underline decoration-white/60 group-hover:decoration-white">
          Detail
        </span>
      </div>
    </div>
  </button>
))}

        </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="mx-4 max-w-3xl rounded-2xl bg-white shadow-xl p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-full p-1.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#14264A]"
              aria-label="Close"
            >
              <span className="block text-xl leading-none">&times;</span>
            </button>

            <h2 className="text-lg font-semibold mb-4">Detail</h2>
            <p className="whitespace-pre-line text-sm md:text-base leading-relaxed text-slate-800">
              {selected.detail}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
