import { ArrowLeft, Briefcase, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function VentureCapitalArticle() {
	return (
		<div className="bg-white min-h-screen">
			{/* Back Navigation */}
			<div className="border-b border-slate-200 bg-slate-50">
				<div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 text-slate-600 hover:text-[#081A4B] transition-colors font-medium"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Kembali ke Layanan</span>
					</Link>
				</div>
			</div>

			{/* Article Container */}
			<article className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<header className="mb-12 pb-8 border-b border-slate-200">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
							<Briefcase className="w-4 h-4" />
							Produk & Layanan
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Usaha Modal Ventura
						</h1>
					</header>

					{/* Content */}
					<div className="prose prose-lg max-w-none">
						{/* Introduction */}
						<p className="text-lg text-slate-700 leading-relaxed mb-8">
							Sesuai pasal 3 Anggaran Dasar PT Reliance Modal Ventura
							(Perusahaan) bahwa maksud dan tujuan Perusahaan ialah bergerak di
							bidang Perusahaan Modal Ventura berbentuk{" "}
							<strong>Venture Capital Corporation</strong>. Untuk mencapai
							maksud dan tujuan tersebut Perusahaan dapat melaksanakan kegiatan
							usaha menjalankan usaha dalam bidang Perusahaan Modal Ventura yang
							meliputi Perusahaan Modal Ventura Konvensional yaitu meliputi:
						</p>

						{/* List of Services */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-100">
							<ol className="space-y-4">
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
										1
									</span>
									<span className="text-slate-700 leading-relaxed">
										Penyertaan modal (equity participation),
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
										2
									</span>
									<span className="text-slate-700 leading-relaxed">
										Penyertaan melalui pembelian obligasi konversi (quasi equity
										participation),
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
										3
									</span>
									<span className="text-slate-700 leading-relaxed">
										Pembiayaan melalui pembelian surat utang yang diterbitkan
										pasangan usaha pada tahap rintisan awal (start-up) dan/atau
										pengembangan usaha, dan/atau pembiayaan usaha produktif.
									</span>
								</li>
							</ol>
						</div>

						<p className="text-slate-700 leading-relaxed mb-12">
							Dalam melakukan usaha modal ventura, Perusahaan juga dapat
							mengelola dana ventura dan/atau kegiatan usaha lain yaitu kegiatan
							jasa berbasis fee dan/atau kegiatan usaha lain dengan persetujuan
							Otoritas Jasa Keuangan.
						</p>

						{/* Section 1: Penyertaan Modal */}
						<section className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-blue-100 rounded-xl">
									<CheckCircle className="w-6 h-6 text-blue-600" />
								</div>
								<h2 className="text-3xl font-bold text-slate-900 m-0">
									1. Penyertaan Modal
								</h2>
							</div>

							<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
								<p className="text-slate-700 leading-relaxed mb-6">
									Adalah penyertaan modal secara langsung kepada Perusahaan
									Pasangan Usaha (PPU) yang berbentuk badan hukum perseroan
									terbatas untuk jangka waktu tertentu.
								</p>

								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
										<p className="text-slate-700 leading-relaxed">
											Jenis pembiayaan ini berbentuk penyertaan langsung dengan
											pembelian saham Calon Perusahaan Pasangan Usaha (CPPU)
											oleh Perusahaan.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
										<p className="text-slate-700 leading-relaxed">
											Syarat dari pembiayaan ini adalah CPPU harus sudah
											berbentuk Perseroan Terbatas (PT), atau Badan Hukum selain
											Badan Hukum Indonesia yang memiliki kegiatan usaha di
											wilayah Indonesia dalam jangka waktu 10 tahun.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Section 2: Obligasi Konversi */}
						<section className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-indigo-100 rounded-xl">
									<FileText className="w-6 h-6 text-indigo-600" />
								</div>
								<h2 className="text-3xl font-bold text-slate-900 m-0">
									2. Penyertaan melalui Pembelian Obligasi Konversi
								</h2>
							</div>

							<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
								<p className="text-slate-700 leading-relaxed mb-6">
									Adalah penyertaan dalam bentuk pembelian Obligasi Konversi
									(OK) yang diterbitkan oleh CPPU yang berbentuk badan hukum
									perseroan terbatas.
								</p>

								<div className="space-y-4">
									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
										<p className="text-slate-700 leading-relaxed">
											Dengan Obligasi Konversi, CPPU menerbitkan surat Obligasi
											Konversi kepada Perusahaan dengan perjanjian akan dapat
											dikonversikan/ditukar menjadi saham pada waktu yang
											ditetapkan.
										</p>
									</div>

									<div className="flex items-start gap-3">
										<CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
										<p className="text-slate-700 leading-relaxed">
											Syarat dari pembiayaan ini adalah CPPU harus sudah
											berbentuk Perseroan Terbatas (PT), atau Badan Hukum selain
											Badan Hukum Indonesia yang memiliki kegiatan usaha di
											wilayah Indonesia dalam jangka waktu 10 tahun.
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>

					{/* Bottom CTA */}
					<div className="mt-16 pt-8 border-t border-slate-200">
						<div className="bg-gradient-to-r from-[#081A4B] to-blue-900 rounded-3xl p-8 md:p-10 text-white text-center">
							<h3 className="text-2xl md:text-3xl font-bold mb-4">
								Tertarik dengan Layanan Ini?
							</h3>
							<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
								Hubungi tim kami untuk konsultasi lebih lanjut mengenai
								pembiayaan modal ventura.
							</p>
							<Link
								href="/contact"
								className="inline-flex items-center gap-2 bg-white text-[#081A4B] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
							>
								Hubungi Kami
								<ArrowLeft className="w-5 h-5 rotate-180" />
							</Link>
						</div>
					</div>
				</div>
			</article>
		</div>
	);
}
