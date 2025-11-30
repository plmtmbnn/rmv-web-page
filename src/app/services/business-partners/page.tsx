"use client";

import { ArrowLeft, Building2, Globe, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const investments = [
	{
		id: 1,
		name: "PT Reliance Integrasi Dunia Anda",
		shortName: "RIDA",
		amount: "Rp 9.600.000.000",
		icon: <Building2 className="w-8 h-8" />,
		color: "from-blue-600 to-blue-700",
		bgColor: "bg-blue-50",
		details: {
			date: "21 September 2021",
			shares: "240 saham",
			nominal: "Rp 240.000.000",
			ownership: "48%",
			description:
				"Berdasarkan Perjanjian Jual Beli Saham tanggal 21 September 2021, Perusahaan membeli dan menerima 240 saham RIDA dari PT Reliance Capital Management, pemegang saham, dengan nilai nominal seluruhnya Rp240.000.000 yang mewakili 48% kepemilikan saham dengan nilai transaksi Rp9.600.000.000.",
		},
	},
	{
		id: 2,
		name: "PT Klik Beres Semua",
		shortName: "KBS",
		amount: "Rp 1.665.000.000",
		icon: <TrendingUp className="w-8 h-8" />,
		color: "from-indigo-600 to-indigo-700",
		bgColor: "bg-indigo-50",
		details: {
			location: "Jakarta Barat",
			year: "2016",
			shares: "1.665 saham",
			nominal: "Rp 1.000.000 per saham",
			ownership: "45%",
			description:
				"Berkedudukan di Jakarta Barat. KBS melakukan kegiatan jasa sarana teknologi. Pada tahun 2016, Perusahaan melakukan investasi sebanyak 1.665 saham dengan nilai nominal Rp1.000.000 per saham atau 45% kepemilikan.",
		},
	},
	{
		id: 3,
		name: "CredoLab Pte Ltd",
		shortName: "CL",
		amount: "Rp 1.336.000.000",
		icon: <Globe className="w-8 h-8" />,
		color: "from-purple-600 to-purple-700",
		bgColor: "bg-purple-50",
		details: {
			location: "Singapura",
			year: "2017",
			shares: "8.811 saham",
			initialOwnership: "2,33%",
			currentOwnership: "1,76%",
			amount: "USD 100.000",
			description:
				"Berdomisili di Singapura, merupakan penyedia solusi fintech berbasis smartphone berbayar. Pada tahun 2017, Perusahaan melakukan penyertaan sebanyak 8.811 saham (2,33% kepemilikan) dengan jumlah sebesar USD100.000. Berdasarkan Subscription Agreement Schedule No.3 tahun 2020, investasi di Credo Lab mengalami Kapitalisasi Indikatif Terdilusi Sepenuhnya segera setelah Penyelesaian Kedua. Kepemilikan Perusahaan berubah menjadi 1,76%.",
		},
	},
];

export default function EquityParticipationArticle() {
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
				<div className="max-w-6xl mx-auto">
					{/* Header */}
					<header className="mb-12 pb-8 border-b border-slate-200">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-sm font-semibold text-purple-700 mb-6">
							<Users className="w-4 h-4" />
							Portofolio Investasi
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Penyertaan Saham
						</h1>
						<p className="text-lg text-slate-600">
							PT Reliance Modal Ventura - Investasi Penyertaan Saham
						</p>
					</header>

					{/* Investment Summary Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
						{investments.map((investment, index) => (
							<div
								key={investment.id}
								className="group relative bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
								style={{
									animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
								}}
							>
								{/* Decorative gradient */}
								<div
									className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${investment.color}`}
								></div>

								<div className="p-6">
									{/* Icon */}
									<div
										className={`inline-flex p-3 ${investment.bgColor} rounded-xl mb-4`}
									>
										<span className="text-slate-700">{investment.icon}</span>
									</div>

									{/* Number */}
									<div className="text-sm text-slate-500 font-medium mb-2">
										Investasi #{investment.id}
									</div>

									{/* Company Name */}
									<h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
										{investment.name}
									</h3>

									{/* Amount */}
									<div
										className={`text-2xl font-bold bg-gradient-to-r ${investment.color} bg-clip-text text-transparent`}
									>
										{investment.amount}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Detailed Information */}
					<div className="space-y-12">
						{investments.map((investment, index) => (
							<section
								key={investment.id}
								className="scroll-mt-8"
								id={`investment-${investment.id}`}
							>
								<div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
									{/* Section Header */}
									<div
										className={`bg-gradient-to-r ${investment.color} p-6 md:p-8`}
									>
										<div className="flex items-center gap-4 text-white">
											<div className="p-3 bg-white/20 rounded-xl">
												{investment.icon}
											</div>
											<div>
												<div className="text-sm font-semibold opacity-90 mb-1">
													{investment.shortName}
												</div>
												<h2 className="text-2xl md:text-3xl font-bold">
													{investment.name}
												</h2>
											</div>
										</div>
									</div>

									{/* Content */}
									<div className="p-6 md:p-8">
										{/* Description */}
										<p className="text-slate-700 leading-relaxed mb-8">
											{investment.details.description}
										</p>

										{/* Key Information Grid */}
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
											{investment.details.date && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Tanggal
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.date}
													</div>
												</div>
											)}

											{investment.details.year && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Tahun
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.year}
													</div>
												</div>
											)}

											{investment.details.location && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Lokasi
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.location}
													</div>
												</div>
											)}

											<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
												<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
													Jumlah Saham
												</div>
												<div className="text-sm font-bold text-slate-900">
													{investment.details.shares}
												</div>
											</div>

											{investment.details.nominal && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Nilai Nominal
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.nominal}
													</div>
												</div>
											)}

											{investment.details.ownership && (
												<div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
													<div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
														Kepemilikan
													</div>
													<div className="text-sm font-bold text-blue-700">
														{investment.details.ownership}
													</div>
												</div>
											)}

											{investment.details.amount && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Nilai Investasi
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.amount}
													</div>
												</div>
											)}

											{investment.details.initialOwnership && (
												<div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
													<div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">
														Kepemilikan Awal
													</div>
													<div className="text-sm font-bold text-slate-900">
														{investment.details.initialOwnership}
													</div>
												</div>
											)}

											{investment.details.currentOwnership && (
												<div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
													<div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
														Kepemilikan Saat Ini
													</div>
													<div className="text-sm font-bold text-blue-700">
														{investment.details.currentOwnership}
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
							</section>
						))}
					</div>

					{/* Bottom CTA */}
					<div className="mt-16 pt-8 border-t border-slate-200">
						<div className="bg-gradient-to-r from-[#081A4B] to-blue-900 rounded-3xl p-8 md:p-10 text-white text-center">
							<h3 className="text-2xl md:text-3xl font-bold mb-4">
								Tertarik dengan Portofolio Investasi Kami?
							</h3>
							<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
								Hubungi tim kami untuk informasi lebih lanjut mengenai peluang
								investasi dan kemitraan.
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
