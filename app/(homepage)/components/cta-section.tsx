import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export const CTASection = () => {
  const bg = "/assests/rupuah-idr.jpg";

  return (
    <section className="container mx-auto px-4 md:px-8 mt-16 mb-12">
      <div className="relative">
        {/* Main Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
          <div className="relative w-full min-h-[320px] md:min-h-[280px] lg:min-h-[320px]">
            {/* Background Image */}
            <Image
              src={bg}
              alt="CTA background"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Overlay with Pattern */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[#051b5a]/95 via-[#051b5a]/85 to-blue-900/90"></div>
            
            {/* Diagonal Pattern Overlay */}
            <div 
              aria-hidden 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255,255,255,0.1) 10px,
                  rgba(255,255,255,0.1) 20px
                )`
              }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 md:px-10 lg:px-14 py-8">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-7 text-center lg:text-left">
                      {/* Small Label */}
                      <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 bg-blue-400/20 border border-blue-300/30 rounded-full text-xs font-semibold text-blue-100 uppercase tracking-wider">
                          Mari Berkolaborasi
                        </span>
                      </div>

                      {/* Main Heading */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        Tumbuh dan berinovasi <br className="hidden sm:block" />
                        <span className="text-blue-200">bersama kami</span>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-blue-100/90 leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                        Kami membuka peluang bagi para founder berwawasan jauh ke depan untuk
                        menghadirkan inovasi yang mengubah industri. Kirimkan proposal Anda dan mari
                        wujudkan masa depan yang lebih progresif bersama.
                      </p>

                      {/* Contact Info - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:flex items-center gap-6 text-sm text-blue-200/80">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>corporate@rmv.co.id</span>
                        </div>
                        <div className="w-px h-4 bg-blue-300/30"></div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>(021) 21192288</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - CTA */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4">
                      {/* Primary Button */}
                      <Link
                        href="#contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#051b5a] px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        aria-label="Hubungi Kami Sekarang"
                      >
                        <span>Hubungi Kami Sekarang</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      {/* Trust Badge */}
                      <div className="flex items-center gap-2 text-xs text-blue-200/70 mt-2">
                        <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-[#051b5a]"></div>
                          <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-[#051b5a]"></div>
                          <div className="w-6 h-6 rounded-full bg-blue-300 border-2 border-[#051b5a]"></div>
                        </div>
                        <span></span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};