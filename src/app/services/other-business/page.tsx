import {
	AlertCircle,
	ArrowLeft,
	Building2,
	CheckCircle,
	Clock,
	FileText,
} from "lucide-react";
import Link from "next/link";

export default function OtherBusinessArticle() {
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
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-semibold text-indigo-700 mb-6">
							<Building2 className="w-4 h-4" />
							Produk & Layanan
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Kegiatan Usaha Lain
						</h1>
					</header>

					{/* Content */}
					<div className="prose prose-lg max-w-none">
						{/* Introduction */}
						<p className="text-lg text-slate-700 leading-relaxed mb-8">
							Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) Nomor 25
							Tahun 2023 Tentang Penyelenggaraan Usaha Perusahaan Modal Ventura
							dan Perusahaan Modal Ventura Syariah, Perusahaan dapat
							menyelenggarakan usaha lain dengan persetujuan OJK.
						</p>

						{/* Types of Other Business */}
						<div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12 border border-indigo-100">
							<h3 className="text-xl font-bold text-slate-900 mb-4">
								Adapun usaha lain tersebut adalah:
							</h3>
							<ol className="space-y-4">
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
										1
									</span>
									<span className="text-slate-700 leading-relaxed">
										Kegiatan berbasis imbal jasa; dan/atau
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm mt-0.5">
										2
									</span>
									<span className="text-slate-700 leading-relaxed">
										Kegiatan lain dengan persetujuan Otoritas Jasa Keuangan.
									</span>
								</li>
							</ol>
						</div>

						{/* Section 1: Fee-Based Activities */}
						<section className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-indigo-100 rounded-xl">
									<FileText className="w-6 h-6 text-indigo-600" />
								</div>
								<h2 className="text-3xl font-bold text-slate-900 m-0">
									Kegiatan Berbasis Imbal Jasa
								</h2>
							</div>

							<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-6">
								<p className="text-slate-700 leading-relaxed mb-6">
									Perusahaan yang akan melakukan kegiatan berbasis imbal jasa
									wajib melaporkan kepada Otoritas Jasa Keuangan dengan
									melampirkan dokumen yang paling sedikit mencakup:
								</p>

								<div className="space-y-4">
									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											a
										</span>
										<p className="text-slate-700 leading-relaxed">
											Uraian mengenai produk berbasis imbal jasa yang akan
											dipasarkan;
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											b
										</span>
										<p className="text-slate-700 leading-relaxed">
											Uraian mengenai mekanisme pemasaran;
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											c
										</span>
										<p className="text-slate-700 leading-relaxed">
											Uraian mengenai hak dan kewajiban para pihak;
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											d
										</span>
										<p className="text-slate-700 leading-relaxed">
											Rancangan perjanjian kerja sama; dan
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											e
										</span>
										<p className="text-slate-700 leading-relaxed">
											Fotokopi perizinan dari otoritas yang berwenang, jika ada.
										</p>
									</div>
								</div>
							</div>
						</section>

						{/* Section 2: Other Activities with OJK Approval */}
						<section className="mb-12">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-blue-100 rounded-xl">
									<CheckCircle className="w-6 h-6 text-blue-600" />
								</div>
								<h2 className="text-3xl font-bold text-slate-900 m-0">
									Kegiatan Lain dengan Persetujuan OJK
								</h2>
							</div>

							{/* Requirements */}
							<div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 mb-6">
								<h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
									<AlertCircle className="w-5 h-5 text-blue-600" />
									Persyaratan
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Perusahaan yang akan melakukan kegiatan lain dengan
									persetujuan Otoritas Jasa Keuangan harus memenuhi persyaratan:
								</p>

								<div className="space-y-3">
									<div className="flex items-start gap-3 p-4 bg-white rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mt-0.5">
											a
										</span>
										<p className="text-slate-700 leading-relaxed">
											Rencana untuk melakukan kegiatan lain telah dicantumkan
											dalam rencana bisnis;
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-white rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mt-0.5">
											b
										</span>
										<p className="text-slate-700 leading-relaxed">
											Memiliki penilaian tingkat kesehatan minimum peringkat
											komposit 2 (dua) untuk Perusahaan atau profil risiko
											peringkat 2 (dua) untuk UUS; dan
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-white rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mt-0.5">
											c
										</span>
										<p className="text-slate-700 leading-relaxed">
											Tidak sedang dikenakan sanksi administratif oleh Otoritas
											Jasa Keuangan.
										</p>
									</div>
								</div>
							</div>

							{/* Application Documents */}
							<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-6">
								<h3 className="text-xl font-bold text-slate-900 mb-4">
									Dokumen Permohonan
								</h3>
								<p className="text-slate-700 leading-relaxed mb-4">
									Permohonan persetujuan kegiatan usaha lain diajukan kepada OJK
									dengan melampirkan:
								</p>

								<div className="space-y-4">
									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											a
										</span>
										<p className="text-slate-700 leading-relaxed">
											Skema atau mekanisme kegiatan lain yang akan dilakukan,
											disertai dengan uraian akad yang digunakan bagi PMVS;
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											b
										</span>
										<p className="text-slate-700 leading-relaxed">
											Analisis prospek usaha; dan
										</p>
									</div>

									<div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs mt-0.5">
											c
										</span>
										<p className="text-slate-700 leading-relaxed">
											Contoh perjanjian kegiatan yang akan digunakan yang paling
											sedikit memuat hak dan kewajiban para pihak.
										</p>
									</div>
								</div>
							</div>

							{/* Processing Time */}
							<div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
								<div className="flex items-start gap-4">
									<div className="p-3 bg-green-100 rounded-xl">
										<Clock className="w-6 h-6 text-green-600" />
									</div>
									<div>
										<h4 className="text-lg font-bold text-slate-900 mb-2">
											Waktu Pemrosesan
										</h4>
										<p className="text-slate-700 leading-relaxed">
											Otoritas Jasa Keuangan memberikan persetujuan atau
											penolakan atas permohonan dalam jangka waktu paling lama{" "}
											<strong>20 (dua puluh) hari kerja</strong> sejak
											permohonan diterima secara lengkap.
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
								Butuh Informasi Lebih Lanjut?
							</h3>
							<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
								Hubungi tim kami untuk konsultasi mengenai kegiatan usaha lain
								dan prosedur pengajuannya.
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
