export const AboutSection = () => {
    return(
      <section className="container mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="col-span-2 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-serif text-amber-600">Sekilas Tentang <span className="text-slate-900">PT. Reliance Modal Ventura</span></h2>
            <p className="mt-3 text-sm text-slate-700">
              Adalah perusahaan yang didirikan berdasarkan akta No. 116 tanggal 6 Juni tahun 2015 yang dibuat dihadapan Rosita Rosnani Supartini, SH, MKn. ...
              {/* shortened placeholder text - replace with real content */}
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="h-24 rounded bg-slate-100 flex items-center justify-center">Img</div>
              <div className="h-24 rounded bg-slate-100 flex items-center justify-center">Img</div>
              <div className="h-24 rounded bg-slate-100 flex items-center justify-center">Img</div>
            </div>
          </article>

          <aside id="contact" className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-medium text-amber-600">Kontak Kami</h3>
            <address className="not-italic mt-3 text-sm text-slate-700">
              Soho West Point, Jalan Macan Kav. 4 - 5, Kedoya Utara, Kebon Jeruk - Jakarta Barat 11520
              <br />
              <a href="tel:+6221" className="block mt-2">(021) 21192288</a>
              <a className="block" href="mailto:corporate@rmv.co.id">corporate@rmv.co.id</a>
            </address>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded bg-amber-600 text-white py-2 text-sm">Lihat Lokasi</button>
              <button className="rounded border border-slate-200 py-2 text-sm">Download Profil</button>
            </div>
          </aside>
        </div>
      </section>

    )
}