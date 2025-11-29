"use client";

import Link from "next/link";
import Image from "next/image";
import {
	ArrowLeft,
	Check,
	Download,
	FileText,
	Mail,
	Phone,
} from "lucide-react";

// This would typically come from props or API
const serviceDetail = {
	id: 1,
	title: "Usaha Modal Ventura",
	subtitle: "Venture Capital Corporation",
	description:
		"Sesuai pasal 3 Anggaran Dasar PT Reliance Modal Ventura (Perusahaan) bahwa maksud dan tujuan Perusahaan ialah bergerak di bidang Perusahaan Modal Ventura berbentuk Venture Capital Corporation.",
	image: "/assests/reliance-office-100px.jpg",

	sections: [
		{
			title: "Tentang Layanan",
			content:
				"PT Reliance Modal Ventura adalah perusahaan yang bergerak di bidang modal ventura berbentuk Venture Capital Corporation. Kami menyediakan pembiayaan dalam bentuk penyertaan modal kepada perusahaan-perusahaan yang memiliki potensi pertumbuhan tinggi namun memerlukan dukungan modal untuk pengembangan usaha.",
		},
		{
			title: "Ruang Lingkup",
			content:
				"Kegiatan usaha modal ventura meliputi penyertaan saham, penyertaan melalui pembelian obligasi konversi, dan/atau pembiayaan berdasarkan pembagian atas hasil usaha. Kami fokus pada perusahaan-perusahaan yang berada pada tahap pengembangan (expansion stage) dan membutuhkan pendanaan untuk pertumbuhan bisnis.",
		},
	],

	benefits: [
		"Akses pendanaan untuk pertumbuhan bisnis",
		"Pendampingan dan konsultasi manajemen",
		"Jaringan bisnis dan koneksi strategis",
		"Dukungan operasional dan tata kelola perusahaan",
		"Fleksibilitas struktur pembiayaan",
		"Nilai tambah melalui expertise tim",
	],

	requirements: [
		"Perusahaan berbadan hukum PT yang telah beroperasi minimal 2 tahun",
		"Memiliki proyeksi pertumbuhan bisnis yang jelas",
		"Laporan keuangan yang audited",
		"Business plan yang komprehensif",
		"Tim manajemen yang solid dan berpengalaman",
		"Potensi pasar yang besar",
	],

	documents: [
		{
			name: "Brosur Modal Ventura",
			type: "PDF",
			size: "2.4 MB",
		},
		{
			name: "Formulir Pengajuan",
			type: "PDF",
			size: "850 KB",
		},
		{
			name: "Syarat dan Ketentuan",
			type: "PDF",
			size: "1.2 MB",
		},
	],
};

export default function ServiceDetailPage() {
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

			{/* Hero Section */}
			<div className="relative bg-gradient-to-br from-[#081A4B] to-blue-900 text-white py-16 md:py-20 overflow-hidden">
				{/* Decorative Elements */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

				<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
					<div className="max-w-4xl">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold mb-6">
							<FileText className="w-4 h-4" />
							{serviceDetail.subtitle}
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
							{serviceDetail.title}
						</h1>

						<p className="text-lg md:text-xl text-blue-100 leading-relaxed">
							{serviceDetail.description}
						</p>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left Content - Main Information */}
					<div className="lg:col-span-2 space-y-12">
						{/* Featured Image */}
						<div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-xl">
							<Image
								src={serviceDetail.image}
								alt={serviceDetail.title}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 66vw"
							/>
						</div>

						{/* Content Sections */}
						{serviceDetail.sections.map((section, index) => (
							<div key={index} className="prose prose-lg max-w-none">
								<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
									{section.title}
								</h2>
								<p className="text-slate-600 leading-relaxed">
									{section.content}
								</p>
							</div>
						))}

						{/* Benefits Section */}
						<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 border border-blue-100">
							<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
								<div className="p-2 bg-blue-100 rounded-lg">
									<Check className="w-6 h-6 text-blue-600" />
								</div>
								Keuntungan
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{serviceDetail.benefits.map((benefit, index) => (
									<div key={index} className="flex items-start gap-3">
										<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-0.5">
											<Check className="w-4 h-4 text-white" />
										</div>
										<span className="text-slate-700 leading-relaxed">
											{benefit}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Requirements Section */}
						<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-10 border border-slate-200">
							<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
								<div className="p-2 bg-slate-200 rounded-lg">
									<FileText className="w-6 h-6 text-slate-700" />
								</div>
								Persyaratan
							</h2>
							<ul className="space-y-4">
								{serviceDetail.requirements.map((requirement, index) => (
									<li key={index} className="flex items-start gap-3">
										<span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-sm mt-0.5">
											{index + 1}
										</span>
										<span className="text-slate-700 leading-relaxed">
											{requirement}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Right Sidebar */}
					<div className="lg:col-span-1">
						<div className="sticky top-8 space-y-6">
							{/* Contact Card */}
							<div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg">
								<h3 className="text-xl font-bold text-slate-900 mb-6">
									Butuh Informasi Lebih?
								</h3>

								<div className="space-y-4 mb-6">
									<a
										href="tel:+622121192288"
										className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
									>
										<div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
											<Phone className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<div className="text-xs text-slate-500 font-medium">
												Telepon
											</div>
											<div className="text-sm font-semibold text-slate-900">
												(021) 21192288
											</div>
										</div>
									</a>

									<a
										href="mailto:corporate@rmv.co.id"
										className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
									>
										<div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
											<Mail className="w-5 h-5 text-blue-600" />
										</div>
										<div>
											<div className="text-xs text-slate-500 font-medium">
												Email
											</div>
											<div className="text-sm font-semibold text-slate-900">
												corporate@rmv.co.id
											</div>
										</div>
									</a>
								</div>

								<Link
									href="/contact"
									className="block w-full text-center rounded-full bg-[#081A4B] text-white px-6 py-3 font-bold hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg"
								>
									Ajukan Sekarang
								</Link>
							</div>

							{/* Documents Download */}
							<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
								<h3 className="text-xl font-bold text-slate-900 mb-6">
									Dokumen Terkait
								</h3>

								<div className="space-y-3">
									{serviceDetail.documents.map((doc, index) => (
										<button
											key={index}
											className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
										>
											<div className="flex items-center gap-3">
												<div className="p-2 bg-red-50 rounded-lg">
													<FileText className="w-5 h-5 text-red-600" />
												</div>
												<div className="text-left">
													<div className="text-sm font-semibold text-slate-900">
														{doc.name}
													</div>
													<div className="text-xs text-slate-500">
														{doc.type} • {doc.size}
													</div>
												</div>
											</div>
											<Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom CTA */}
			<div className="bg-slate-50 border-t border-slate-200 py-12">
				<div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
						Siap Untuk Memulai?
					</h2>
					<p className="text-slate-600 mb-8 max-w-2xl mx-auto">
						Tim kami siap membantu Anda menemukan solusi pembiayaan yang tepat
						untuk bisnis Anda.
					</p>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 bg-[#081A4B] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					>
						Hubungi Kami Sekarang
						<ArrowLeft className="w-5 h-5 rotate-180" />
					</Link>
				</div>
			</div>
		</div>
	);
}
