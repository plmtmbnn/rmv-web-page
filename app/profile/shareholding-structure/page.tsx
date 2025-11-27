import Image from 'next/image';

export default function ShareholdingStructurePage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black">
            Struktur Kepemilikan Saham <span className="text-[#ED3424]">Reliance Modal Ventura</span>
          </h1>
        </header>

        <section className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white p-8">
              <div className="w-full h-96 md:h-[520px] flex items-center justify-center rounded-lg">
                <Image
                  src="/structure/shareholding.png"
                  alt="Shareholding Structure Diagram"
                  width={1200}
                  height={700}
                  className="object-contain w-full h-full"
                />
              </div>         
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}