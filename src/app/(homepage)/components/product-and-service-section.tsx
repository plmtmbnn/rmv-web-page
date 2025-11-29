"use client";

import Link from "next/link";
import {
	Briefcase,
	Building2,
	Users,
	ArrowRight,
	FileText,
} from "lucide-react";

const services = [
	{
		id: 1,
		title: "Usaha Modal Ventura",
		icon: <Briefcase className="w-8 h-8" />,
		description:
			"Sesuai pasal 3 Anggaran Dasar PT Reliance Modal Ventura (Perusahaan) bahwa maksud dan tujuan Perusahaan ialah bergerak di bidang Perusahaan Modal Ventura berbentuk Venture Capital Corporation...",
		color: "from-blue-600 to-blue-700",
		bgColor: "bg-blue-50",
		iconColor: "text-blue-600",
		link: "/services/venture-capital",
	},
	{
		id: 2,
		title: "Kegiatan Usaha Lain",
		icon: <Building2 className="w-8 h-8" />,
		description:
			"Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK) Nomor 25 Tahun 2023 Tentang Penyelenggaraan Usaha Perusahaan Modal Ventura dan Perusahaan Modal Ventura Syariah, Perusahaan dapat menyelenggarakan...",
		color: "from-indigo-600 to-indigo-700",
		bgColor: "bg-indigo-50",
		iconColor: "text-indigo-600",
		link: "/services/other-business",
	},
	{
		id: 3,
		title: "Pasangan Usaha",
		icon: <Users className="w-8 h-8" />,
		description: "Penyertaan saham PT Reliance Modal Ventura...",
		color: "from-purple-600 to-purple-700",
		bgColor: "bg-purple-50",
		iconColor: "text-purple-600",
		link: "/services/business-partners",
	},
];

export function ProductsServicesSection() {
	return (
		<div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen py-16">
			<div className="container mx-auto px-6 md:px-12 lg:px-20">
				{/* Header Section */}
				<div className="mb-16 text-center lg:text-left">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
						<FileText className="w-4 h-4" />
						Layanan Kami
					</div>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
						Produk & Layanan
					</h1>

					<p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto lg:mx-0">
						Mitra strategis untuk pertumbuhan bisnis yang berkelanjutan
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<article
							key={service.id}
							className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
							style={{
								animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
							}}
						>
							{/* Decorative Background */}
							<div
								className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500"
								style={{
									background: `linear-gradient(to bottom right, ${service.color})`,
								}}
							></div>

							{/* Content */}
							<div className="relative p-8 flex flex-col h-full">
								{/* Icon */}
								<div
									className={`inline-flex p-4 ${service.bgColor} rounded-2xl mb-6 w-fit transition-transform duration-300 group-hover:scale-110`}
								>
									<span className={service.iconColor}>{service.icon}</span>
								</div>

								{/* Title */}
								<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
									{service.title}
								</h2>

								{/* Description */}
								<p className="text-slate-600 leading-relaxed mb-6 flex-1">
									{service.description}
								</p>

								{/* CTA Link */}
								<Link
									href={service.link}
									className={`group/btn inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-fit`}
								>
									Lihat Selengkapnya
									<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
								</Link>

								{/* Bottom Border Accent */}
								<div
									className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
								></div>
							</div>
						</article>
					))}
				</div>

				{/* Bottom CTA Section */}
				<div className="mt-20 bg-gradient-to-r from-[#081A4B] to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
					{/* Decorative Elements */}
					<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

					<div className="relative z-10">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
							Tertarik dengan Layanan Kami?
						</h2>
						<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
							Hubungi tim kami untuk konsultasi gratis dan temukan solusi
							terbaik untuk kebutuhan bisnis Anda.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 bg-white text-[#081A4B] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
						>
							Hubungi Kami Sekarang
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</div>

			<style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
		</div>
	);
}
