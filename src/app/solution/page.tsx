"use client";

import { ArrowRight, Banknote, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RELIANCE_GROUP, solutions } from "@/src/constants/solution";

const reliid_logo = "/logo-reliid.png";

export default function SolutionPage() {
	return (
		<div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-16">
				{/* Header Section */}
				<div className="mb-16 text-center lg:text-left">
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-6">
						<TrendingUp className="w-4 h-4" />
						Layanan Kami
					</div>
					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-slate-900">
						Solusi Keuangan
					</h1>
					<p className="text-lg md:text-xl text-slate-600 max-w-3xl">
						Solusi keuangan komprehensif untuk mendukung pertumbuhan bisnis dan
						investasi Anda dengan layanan terpercaya dan inovatif.
					</p>
				</div>

				{/* Main Solutions Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{solutions.map((solution, index) => (
						<article
							key={solution.title}
							className="group relative rounded-3xl overflow-hidden min-h-[465px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
							style={{
								animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
							}}
						>
							{/* Background Image */}
							<div className="absolute inset-0">
								<Image
									src={solution.image}
									alt={solution.title}
									fill
									className="object-cover object-center opacity-25 transition-all duration-700 group-hover:opacity-35 group-hover:scale-110"
									priority={index === 0}
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>

							{/* Gradient Overlay */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} transition-all duration-500`}
							></div>

							{/* Decorative Elements */}
							<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
							<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

							{/* Content */}
							<div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
								<div>
									{/* Title Badge */}
									<div className="inline-flex items-center gap-3 mb-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/30 shadow-lg">
										<div className="p-2 bg-white/20 rounded-lg text-white">
											{solution.icon}
										</div>
										<h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
											{solution.title}
										</h3>
									</div>

									{/* Description */}
									<p className="text-sm md:text-base text-white leading-relaxed max-w-prose backdrop-blur-sm bg-black/10 p-4 rounded-xl">
										{solution.description}
									</p>
								</div>

								{/* Action Buttons */}
								<div className="mt-8 flex flex-wrap gap-3">
									{solution.links.map((link) => (
										<Link
											key={link.label}
											href={link.href}
											target="_blank"
											className="group/btn inline-flex items-center gap-2 rounded-full bg-white text-[#051b5a] py-3 px-6 text-sm font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
										>
											{link.label}
											<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
										</Link>
									))}
								</div>
							</div>
						</article>
					))}
				</div>

				{/* Additional Services Section */}
				<div className="mb-16">
					<div className="text-center mb-10">
						<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
							Layanan Lainnya
						</h2>
						<p className="text-slate-600">
							Ekosistem lengkap untuk kebutuhan finansial Anda
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Logo Card */}
						<div className="group rounded-2xl bg-white p-8 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200">
							<div className="w-full h-24 relative">
								<Image
									src={reliid_logo}
									alt="Reliance Logo"
									fill
									className="object-contain transition-transform duration-300 group-hover:scale-110"
									sizes="200px"
								/>
							</div>
						</div>

						{/* Integrated Fintech Card */}
						<div className="group rounded-2xl border-2 border-[#0F3A65] bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:scale-105">
							<div>
								<div className="inline-block p-3 bg-blue-100 rounded-xl mb-4">
									<Sparkles className="w-6 h-6 text-[#0F3A65]" />
								</div>
								<h4 className="text-xl md:text-2xl font-bold text-[#0F3A65] mb-3">
									INTEGRATED FINTECH
								</h4>
								<p className="text-sm text-slate-600 leading-relaxed">
									Platform teknologi finansial terintegrasi untuk kemudahan
									transaksi digital.
								</p>
							</div>
							<Link
								href={RELIANCE_GROUP.RELIID.link}
								target="_blank"
								className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 text-[#0F3A65] mt-6 group-hover:text-blue-700"
							>
								Selengkapnya
								<ArrowRight className="w-4 h-4" />
							</Link>
						</div>

						{/* Financing Card - Spans 2 columns */}
						<div className="group col-span-1 md:col-span-2 rounded-2xl bg-gradient-to-br from-[#0F3A65] via-blue-900 to-[#0F3A65] p-8 md:p-10 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] text-white relative overflow-hidden">
							{/* Decorative Elements */}
							<div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>

							<div className="relative z-10">
								<div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 mb-4 border border-white/30">
									<Banknote className="w-5 h-5" />
									<span className="text-xs font-semibold uppercase tracking-wider">
										Pembiayaan
									</span>
								</div>
								<h4 className="text-2xl md:text-3xl font-bold mb-4">
									FINANCING SOLUTIONS
								</h4>
								<p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-2xl">
									Sarana pembiayaan kami, Reliance Finance, Reliance Modal
									Ventura dan bank mitra, menawarkan akses terhadap modal untuk
									bisnis dan konsumen dengan syarat yang kompetitif.
								</p>
							</div>

							<Link
								href={RELIANCE_GROUP.REFI.link}
								target="_blank"
								className="relative z-10 inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all duration-300 mt-6 bg-white text-[#0F3A65] px-6 py-3 rounded-full w-fit shadow-lg hover:shadow-xl hover:scale-105"
							>
								Pelajari Lebih Lanjut
								<ArrowRight className="w-4 h-4" />
							</Link>
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="bg-gradient-to-r from-[#0F3A65] to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
					{/* Decorative Elements */}
					<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

					<div className="relative z-10">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
							Siap Memulai Perjalanan Finansial Anda?
						</h2>
						<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
							Hubungi tim kami untuk konsultasi gratis dan temukan solusi
							keuangan yang tepat untuk kebutuhan Anda.
						</p>
						<Link
							href="/contact"
							className="inline-flex items-center gap-2 bg-white text-[#0F3A65] px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
						>
							Hubungi Kami
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
