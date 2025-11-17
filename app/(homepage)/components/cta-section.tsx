export const CTASection = () => {
    return (
      <section className="container mx-auto px-4 md:px-8 mt-12">
        <div className="rounded-xl bg-white shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">Tumbuh dan berinovasi bersama kami</h3>
            <p className="mt-3 text-sm text-slate-700">Kami membuka peluang bagi para founder berwawasan jauh ke depan untuk menghadirkan inovasi yang mengubah industri.</p>
          </div>
          <div>
            <button className="rounded-full bg-[#14264A] text-white px-6 py-3">Hubungi Kami Sekarang</button>
          </div>
        </div>
      </section>
    )
}