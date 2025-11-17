import Image from "next/image"

export const Navbar = () => {
    return (
         <header className="bg-[#14264A] text-white">
                <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-8">
                  <div className="flex items-center gap-3">
                   <Image src="/logo.png" alt="Reliance Logo" width={177} height={60} />
                  </div>
        
                  <nav className="hidden md:flex items-center gap-6">
                    <a className="hover:underline" href="#manajemen">Manajemen</a>
                    <a className="hover:underline" href="#profil">Profil Perusahaan</a>
                    <a className="hover:underline" href="#investor">Hubungan Investor</a>
                    <a className="hover:underline" href="#solusi">Solusi Keuangan</a>
                    <button className="ml-4 rounded-full bg-white/10 px-4 py-2 text-sm">Hubungi Kami</button>
                  </nav>
        
                  <button className="md:hidden p-2 border rounded text-white/90">Menu</button>
                </div>
              </header>
        
    )
}