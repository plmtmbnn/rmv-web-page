export const Footer = () => {
    return (
         <footer className="mt-12 bg-[#0f274a] text-slate-200">
        <div className="container mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-white font-semibold text-lg">Reliance</div>
              <p className="text-sm mt-2">Soho West Point, Jalan Macan Kav. 4 - 5, Kedoya Utara, Kebon Jeruk - Jakarta Barat 11520</p>
            </div>

            <div>
              <h4 className="font-medium">Berlangganan</h4>
              <p className="text-sm mt-2">Masukkan email untuk mendapatkan informasi terbaru</p>
              <div className="mt-3 flex gap-2">
                <input className="rounded-l px-3 py-2 text-slate-800" placeholder="Masukan email anda..." />
                <button className="rounded-r bg-amber-600 px-4">Mulai Langganan</button>
              </div>
            </div>

            <div>
              <h4 className="font-medium">Kontak</h4>
              <p className="text-sm mt-2">(021) 21192288</p>
              <p className="text-sm">corporate@rmv.co.id</p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs opacity-70">© Copyright 2025 All Rights Reserved. | Reliance Modal Ventura</div>
        </div>
      </footer>
    )
}