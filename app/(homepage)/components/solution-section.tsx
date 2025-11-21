import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Banknote, Smartphone } from "lucide-react";

export const SolutionSection = () => {
  const shot1 = "/assests/reliance-office-100px.jpg";
  const shot2 = "/assests/reliance-office-100px.jpg";
  const reliid_logo = '/logo-reliid.png';

  const solutions = [
    {
      title: "INVESTMENT",
      description: "Melalui anak perusahaan kami yang terkait investasi, Reliance Sekuritas Indonesia dan Reliance Manajer Investasi, kami menawarkan kepada investor ritek semua alat yang mereka butuhkan untuk meningkatkan nilai aset.",
      image: shot1,
      icon: <TrendingUp className="w-8 h-8" />,
      links: [
        { label: "Website Reliance Sekuritas", href: "#" },
        { label: "Website RMI", href: "#" }
      ],
      gradient: "from-blue-900/90 via-blue-800/80 to-blue-900/90"
    },
    {
      title: "PROTECTION",
      description: "Perusahaan menyediakan rangkaian lengkap produk asuransi untuk bisnis dan individu, melalui dua anak perusahaan asuransi (Asuransi Jiwa Reliance Indonesia dan Asuransi Reliance Indonesia)",
      image: shot2,
      icon: <Shield className="w-8 h-8" />,
      links: [
        { label: "Website AJRI", href: "#" },
        { label: "Website ARI", href: "#" }
      ],
      gradient: "from-indigo-900/90 via-indigo-800/80 to-indigo-900/90"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#021859] via-[#051b5a] to-[#021859] text-white py-20 mt-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Solusi Keuangan
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl">
            Solusi komprehensif untuk semua kebutuhan keuangan Anda
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <article 
              key={solution.title}
              className="group relative rounded-3xl overflow-hidden min-h-[320px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover object-center opacity-20 transition-all duration-700 group-hover:opacity-30 group-hover:scale-110"
                priority={index === 0}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} transition-all duration-500`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                {/* Icon and Title */}
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

                {/* Buttons */}
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

        {/* Middle Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Logo Card */}
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

          {/* Integrated Fintech Card */}
          <div className="group rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
            <div>
              <div className="inline-block p-3 bg-white/10 rounded-xl mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold font-serif mb-2">
                INTEGRATED FINTECH
              </h4>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 group-hover:text-blue-200"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Financing Card */}
          <div className="group col-span-1 md:col-span-2 rounded-2xl bg-gradient-to-br from-blue-800/80 to-indigo-800/80 backdrop-blur-sm p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
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
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 mt-4 group-hover:text-blue-200"
            >
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Row: 2 Large Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="group relative rounded-3xl overflow-hidden min-h-[280px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <Image
              src={shot1}
              alt="Inklusi Keuangan"
              fill
              className="object-cover object-center opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051b5a]/95 via-[#051b5a]/60 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 md:p-10 flex items-end">
              <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3 border border-white/30">
                  FINANCIAL INCLUSION
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight">
                  Inklusi Keuangan
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-prose mb-4">
                  Inklusi keuangan adalah upaya menyediakan akses layanan keuangan untuk
                  meningkatkan kesejahteraan masyarakat.
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 text-blue-200"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          <article className="group relative rounded-3xl overflow-hidden min-h-[280px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
            <Image 
              src={shot2} 
              alt="Kunci Pertumbuhan" 
              fill 
              className="object-cover object-center opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#051b5a]/95 via-[#051b5a]/60 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 md:p-10 flex items-end">
              <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold mb-3 border border-white/30">
                  ECONOMIC GROWTH
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 leading-tight">
                  Kunci Pertumbuhan Ekonomi
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-prose mb-4">
                  Inklusi keuangan merupakan salah satu agenda penting dalam pembangunan ekonomi.
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all duration-300 text-blue-200"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};