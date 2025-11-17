import { ArrowRightIcon } from "lucide-react"

export const SolutionSection = () => {
    return (
      <section id="solusi" className="container mx-auto px-4 md:px-8 mt-12">
        <h3 className="text-3xl font-semibold text-[#14264A] mb-6">Solusi Keuangan</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Investment', desc: 'Melalui anak perusahaan kami yang terkait investasi.' },
            { title: 'Protection', desc: 'Perusahaan menyediakan perlindungan finansial.' },
            { title: 'Financing', desc: 'Sarana pembiayaan kami untuk memenuhi kebutuhan modal.' },
            { title: 'Integrated Fintech', desc: 'Layanan teknologi finansial terintegrasi.' },
          ].map((card) => (
            <div key={card.title} className="rounded-xl bg-[#f8fafc] p-6 shadow-md">
              <div className="text-sm font-medium text-amber-600">{card.title}</div>
              <p className="text-sm text-slate-700 mt-3">{card.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <a className="text-sm font-medium underline" href="#">Website</a>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl overflow-hidden h-48 bg-linear-to-br from-slate-200 to-slate-300 p-6 flex items-end">
            <div>
              <h4 className="text-lg font-semibold">Inklusi Keuangan</h4>
              <p className="text-sm mt-2 text-slate-700">Inklusi keuangan adalah upaya menyediakan akses layanan keuangan untuk masyarakat.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-48 bg-linear-to-br from-slate-200 to-slate-300 p-6 flex items-end">
            <div>
              <h4 className="text-lg font-semibold">Kunci Pertumbuhan Ekonomi</h4>
              <p className="text-sm mt-2 text-slate-700">Inklusi keuangan merupakan salah satu agenda penting dalam pembangunan ekonomi.</p>
            </div>
          </div>
        </div>
      </section>

    )
}