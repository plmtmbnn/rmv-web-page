import { solutions } from "@/src/constants/solution";
import { ArrowRight, Banknote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const reliid_logo = '/logo-reliid.png';

export default function SolutionPage() {
return (
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 mt-8">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 bg-linear-to-r text-black bg-clip-text">
            Solusi Keuangan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <article 
              key={solution.title}
              className="group relative rounded-3xl overflow-hidden min-h-80 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover object-center opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-110"
                priority={index === 0}
              />
              
              <div className={`absolute inset-0 bg-linear-to-br ${solution.gradient} transition-all duration-500`}></div>
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-3 mb-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm md:text-base text-white/90 leading-relaxed max-w-prose">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {solution.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="group/btn inline-flex items-center gap-2 rounded-full bg-white text-[#051b5a] py-2.5 px-6 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group rounded-2xl bg-white p-8 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="w-full h-24 relative">
              <Image 
                src={reliid_logo} 
                alt="Reliance Logo" 
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
          </div>

          <div className="group rounded-2xl border border-[#0F3A65] bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 transform hover:scale-105">
            <div>
              <h4 className="text-xl text-[#0F3A65] md:text-2xl font-bold font-serif mb-2">
                INTEGRATED FINTECH
              </h4>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 text-black"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="group col-span-1 md:col-span-2 rounded-2xl bg-linear-to-br from-blue-800/80 to-indigo-800/80 backdrop-blur-sm p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
            <div>
              <div className="inline-block p-3 bg-white/10 rounded-xl mb-4">
                <Banknote className="w-6 h-6" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3">FINANCING</h4>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                Sarana pembiayaan kami, Reliance Finance, Reliance Modal Ventura dan bank mitra,
                menawarkan akses terhadap modal untuk bisnis dan konsumen.
              </p>
            </div>
            <Link 
              href="#" 
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 mt-4 text-[#0F3A65]"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4 text-[#0F3A65]" />
            </Link>
          </div>
        </div>
      </div>
  );
}
