import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
    return (
      <section className="relative">
        <div className="h-[520px] md:h-[600px] w-full relative overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="hero"
            fill
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-[#12243f] opacity-80 mix-blend-multiply" />

          <div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center px-6">
            <h1 className="text-white text-4xl md:text-6xl font-serif text-center leading-tight max-w-3xl">
              Solusi Bisnis Terbaik
              <br />
              bagi Pengusaha Baru
            </h1>

            <p className="text-slate-200 mt-6 max-w-2xl text-center">
              Membantu Anda memulai usaha dengan lebih percaya diri melalui layanan dan dukungan yang relevan untuk tahap awal bisnis.
            </p>

            <div className="mt-8">
              <Link href="#contact"className="rounded-full bg-white text-[#14264A] px-6 py-3 font-medium" >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

    )
}