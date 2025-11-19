import Image from "next/image";
import Link from "next/link";

export const SolutionSection = () => {
  const shot1 = "/mnt/data/Screenshot 2025-11-20 at 00.05.23.png";
  const shot2 = "/mnt/data/Screenshot 2025-11-20 at 00.05.30.png";

  return (
    <section className="w-full bg-[#021859] opacity-90 text-white py-16 mt-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">Solusi Keuangan</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Investment */}
          <article className="relative rounded-2xl overflow-hidden min-h-[280px]">
            <Image
              src={shot1}
              alt="investment"
              fill
              className="object-cover object-center opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-[#123054]/80 p-8 md:p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">INVESTMENT</h3>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 max-w-prose">
                  Melalui anak perusahaan kami yang terkait investasi, Reliance Sekuritas Indonesia
                  dan Reliance Manajer Investasi, kami menawarkan kepada investor ritek semua alat
                  yang mereka butuhkan untuk meningkatkan nilai aset.
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#14264A] py-2 px-6 text-sm font-medium shadow-sm"
                >
                  Website Reliance Sekuritas
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#14264A] py-2 px-6 text-sm font-medium shadow-sm"
                >
                  Website RMI
                </Link>
              </div>
            </div>
          </article>

          {/* Protection */}
          <article className="relative rounded-2xl overflow-hidden min-h-[280px]">
            <Image
              src={shot2}
              alt="protection"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-[#0f2a4a]/60 p-8 md:p-10 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">PROTECTION</h3>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 max-w-prose">
                  Perusahaan menyediakan rangkaian lengkap produk asuransi untuk bisnis dan
                  individu, melalui dua anak perusahaan asuransi (Asuransi Jiwa Reliance Indonesia
                  dan Asuransi Reliance Indonesia)
                </p>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#14264A] py-2 px-6 text-sm font-medium shadow-sm"
                >
                  Website AJRI
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-white text-[#14264A] py-2 px-6 text-sm font-medium shadow-sm"
                >
                  Website ARI
                </Link>
              </div>
            </div>
          </article>
        </div>

        {/* MIDDLE ROW: 3 tiles (logo card, bordered Integrated Fintech, Financing card) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
          <div className="rounded-xl bg-white p-6 flex items-center justify-center shadow-sm">
            {/* logo box */}
            <div className="w-40 h-24">
              <Image src={shot1} alt="logo" width={320} height={160} className="object-contain" />
            </div>
          </div>

          <div className="rounded-xl border border-white/30 p-6 flex flex-col justify-between">
            <h4 className="text-xl font-semibold font-serif">INTEGRATED FINTECH</h4>
            <div className="mt-4">
              <Link href="#" className="text-sm underline">
                Selengkapnya
              </Link>
            </div>
          </div>

          <div className="col-span-2 rounded-xl bg-[#123d60]/80 p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold">FINANCING</h4>
              <p className="text-sm mt-3 text-slate-100/90">
                Sarana pembiayaan kami, Reliance Finance, Reliance Modal Ventura dan bank mitra,
                menawarkan akses terhadap modal untuk bisnis dan konsumen.
              </p>
            </div>

            <div className="mt-4">
              <Link href="#" className="text-sm underline">
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM: 2 large image cards side-by-side (Inklusi / Kunci) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <article className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image
              src={shot1}
              alt="inklusi"
              fill
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#10233d]/60 to-transparent p-8 flex items-end rounded-2xl">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Inklusi Keuangan</h3>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 max-w-prose">
                  Inklusi keuangan adalah upaya menyediakan akses layanan keuangan untuk
                  meningkatkan kesejahteraan masyarakat.
                </p>
              </div>
            </div>
          </article>

          <article className="relative rounded-2xl overflow-hidden min-h-[200px]">
            <Image src={shot2} alt="kunci" fill className="object-cover object-center opacity-30" />
            <div className="absolute inset-0 bg-linear-to-l from-[#10233d]/60 to-transparent p-8 flex items-end rounded-2xl">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">Kunci Pertumbuhan Ekonomi...</h3>
                <p className="mt-3 text-sm md:text-base text-slate-100/90 max-w-prose">
                  Inklusi keuangan merupakan salah satu agenda penting dalam pembangunan ekonomi.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
