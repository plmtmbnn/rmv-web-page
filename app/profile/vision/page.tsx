import Image from "next/image";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 lg:col-span-8">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight text-black">
              Visi dan Misi <span className="text-[#ED3424]">Reliance Modal Ventura</span>
            </h1>

            <h2 className="mt-10 text-xl font-semibold text-black">Visi Perusahaan</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Menjadi Perusahaan Modal Ventura terkemuka di Indonesia sebagai bagian dari jasa keuangan terintegrasi
              Reliance Group dan pemberdayaan ekonomi masyarakat sektor usaha rintisan awal (startup) dan/atau berada
              dalam tahap pengembangan usaha.
            </p>

            <h2 className="mt-10 text-xl font-semibold text-black">Misi Perusahaan</h2>
            <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
              <li>
                Memberikan solusi pembiayaan kepada Pasangan Usaha melalui penyertaan modal dan/atau penyertaan melalui
                pembelian obligasi konversi dalam jangka waktu tertentu dalam rangka pengembangan usaha pada Pasangan
                Usaha dengan tetap prinsip tata kelola perusahaan yang baik dan asas kehati-hatian.
              </li>
              <li>
                Memberikan akses permodalan bagi para usaha rintisan (startup), pengembangan perusahaan atau yang
                mengalami kesulitan dana.
              </li>
              <li>
                Membantu dan/atau mengambil alih Perusahaan yang berada pada tahap pengembangan atau tahap kemunduran usaha.
              </li>
              <li>
                Menciptakan sinergi dan memberikan nilai tambah melalui berbagai saluran pembiayaan kepentingan.
              </li>
              <li>
                Menghadirkan layanan yang berkualitas dan inovatif sehingga tercipta kepercayaan yang tinggi secara berkelanjutan.
              </li>
            </ul>
          </div>

          <div className="md:col-span-5 lg:col-span-4">
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/assets/reliance-office-100px.jpg"
                alt="Reliance Building"
                width={800}
                height={600}
                className="object-cover w-full h-64 md:h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
