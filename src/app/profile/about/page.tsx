import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-20">
			<div className="max-w-7xl mx-auto">
				<section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
					<div className="md:col-span-7 lg:col-span-8">
						<h1 className="text-4xl md:text-5xl font-serif text-black">
							Tentang{" "}
							<span className="text-[#ED3424]">Reliance Modal Ventura</span>
						</h1>

						<p className="mt-6 text-sm md:text-base text-gray-700 font-semibold">
							PT RELIANCE MODAL VENTURA ("Perusahaan")
						</p>

						<div className="mt-6 prose prose-sm md:prose-base max-w-none text-gray-700">
							<p className="mt-2.5 text-justify">
								Adalah perusahaan yang didirikan berdasarkan akta Nomor 116
								tanggal 5 Juni tahun 2015 yang dibuat dihadapan Rosita Rianauli
								Sianipar, SH, M.Kn, Notaris di Jakarta, dan telah memperoleh
								persetujuan Kementerian Hukum dan Hak Asasi Manusia Nomor
								AHU-2443277.AH.01.01.Tahun 2015 tanggal 11 Juni 2015.
							</p>

							<p className="mt-2.5 text-justify">
								Sesuai pasal 3 Anggaran Dasar Perusahaan, maksud dan tujuan
								Perusahaan ialah bergerak di bidang Perusahaan Modal Ventura
								berbentuk Venture Capital Corporation. Untuk mencapai maksud dan
								tujuan tersebut Perusahaan dapat melaksanakan kegiatan usaha
								menjalankan usaha dalam bidang Perusahaan Modal Ventura yang
								meliputi Perusahaan Modal Ventura Konvensional yaitu meliputi
								penyertaan saham (equity participation), penyertaan melalui
								pembelian obligasi konversi (quasi equity participation),
								pembiayaan melalui pembelian surat utang yang diterbitkan
								pasangan usaha pada tahap rintisan awal (start-up) dan/atau
								pengembangan usaha, dan/atau pembiayaan usaha produktif.
							</p>

							<p className="mt-2.5 text-justify">
								Struktur Modal Perusahaan terdiri dari Modal Dasar sejumlah
								Rp.50.000.000.000 yang terbagi atas 50.000 saham masing-masing
								saham senilai Rp 1.000.000. Dari Modal Dasar tersebut telah
								Ditempatkan dan Disetor sejumlah 50% atau sejumlah 27.000 saham
								dengan nilai nominal seluruhnya sebesar Rp27.000.000.000 oleh
								para pemegang saham yang telah mengambil bagian saham tersebut
								yaitu PT Reliance Capital Management sejumlah 26.900 saham (atau
								99,6%) dengan nilai nominal seluruhnya Rp26.900.000.000, dan
								Tuan Anton Budidjaja sejumlah 100 saham (atau 0,4%) dengan nilai
								nominal seluruhnya Rp100.000.000.
							</p>
						</div>
					</div>

					<div className="md:col-span-5 lg:col-span-4">
						<div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
							<Image
								src="/assets/reliance-office-100px.jpg"
								alt="Reliance building"
								width={800}
								height={600}
								className="object-cover w-full h-64 md:h-full"
							/>
						</div>
					</div>
				</section>

				{/* Contact card */}
				<section className="mt-12">
					<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
						<h2 className="text-2xl font-serif text-[#D9534F]">Kontak Kami</h2>

						<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
							<div className="flex items-center gap-4">
								<div className="shrink-0 mt-1">
									<MapPin className="h-6 w-6 text-black" />
								</div>
								<div>
									<p className="text-sm text-black">
										Soho West Point, Jalan Macan Kav. 4 – 5, Kedoya Utara, Kebon
										Jeruk - Jakarta Barat 11520
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="shrink-0 mt-1">
									<Phone className="h-6 w-6 text-black" />
								</div>
								<div>
									<p className="text-sm text-black">(021) 21192288</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="shrink-0 mt-1">
									<Mail className="h-6 w-6 text-black" />
								</div>
								<div>
									<p className="text-sm text-black">corporate@rmv.co.id</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
