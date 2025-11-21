import Image from "next/image";
import Link from "next/link";

export const CTASection = () => {
  const bg = "/assests/rupuah-idr.jpg";

  return (
    <section className="container mx-auto px-4 md:px-8 mt-12">
      <div className="relative">
        <div className="rounded-[22px] overflow-hidden shadow-2xl">
          <div className="relative w-full h-56 md:h-60 xl:h-72">
            <Image
              src={bg}
              alt="CTA background"
              fill
              className="object-cover object-center"
              priority
            />

            <div aria-hidden className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0">
              <div className="h-full flex items-center">
                <div className="container mx-auto px-6 md:px-10 lg:px-14">
                  <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex-1 text-white">
                      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight">
                        Tumbuh dan berinovasi bersama kami
                      </h3>
                      <p className="mt-3 text-sm md:text-base max-w-3xl text-white/90">
                        Kami membuka peluang bagi para founder berwawasan jauh ke depan untuk
                        menghadirkan inovasi yang mengubah industri. Kirimkan proposal Anda dan mari
                        wujudkan masa depan yang lebih progresif bersama.
                      </p>
                    </div>

                    <div className="shrink-0">
                      <Link
                        href="#contact"
                        className="inline-block rounded-full bg-white text-[#14264A] px-6 py-3 text-sm md:text-base font-medium shadow-lg transform transition-all hover:-translate-y-0.5"
                        aria-label="Hubungi Kami Sekarang"
                      >
                        Hubungi Kami Sekarang
                      </Link>
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
