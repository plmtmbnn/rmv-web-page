"use client";

import { useState } from "react";
import Image from "next/image";
import { Member, members } from "@/app/management/constant";
import { X, Award, Briefcase, Mail, Linkedin } from "lucide-react";

export default function ManagementPage() {
	const [selected, setSelected] = useState<Member | null>(null);

	const closeModal = () => setSelected(null);

	return (
		<>
			<section className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-16">
				<div className="container mx-auto px-4 md:px-8 lg:px-12">
					{/* Header */}
					<div className="mb-12 text-center lg:text-left">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-semibold text-blue-700 mb-4">
							<Award className="w-4 h-4" />
							Tim Kami
						</div>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
							<span className="text-slate-900">Manajemen </span>
							<span className="bg-gradient-to-r from-[#D25130] to-red-700 bg-clip-text text-transparent">
								Reliance Modal Ventura
							</span>
						</h1>
						<p className="text-lg text-slate-600 max-w-2xl">
							Dipimpin oleh para profesional berpengalaman yang berkomitmen
							dalam mengembangkan ekosistem bisnis Indonesia.
						</p>
					</div>

					{/* Members Grid */}
					<div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
						{members.map((member, index) => (
							<button
								key={member.id}
								type="button"
								onClick={() => {
									if (member?.detail) {
										setSelected(member);
									}
								}}
								className="group relative text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
								style={{
									animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
								}}
							>
								{/* Card Background */}
								<div className="absolute inset-x-0 bottom-0 top-16 bg-gradient-to-br from-[#14264A] via-[#1a3a6e] to-[#14264A] rounded-3xl shadow-xl transition-all duration-300 group-hover:shadow-2xl" />

								{/* Image Container */}
								<div className="relative z-10 px-4">
									<div className="bg-white rounded-3xl overflow-hidden shadow-lg ring-4 ring-white transition-all duration-300 group-hover:ring-blue-100">
										<div className="relative w-full aspect-[371/327] bg-slate-100">
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											{/* Overlay on hover */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="relative z-10 px-6 pt-6 pb-6 text-white">
									<div className="flex items-start gap-3 mb-3">
										<div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
											<Briefcase className="w-5 h-5 text-blue-200" />
										</div>
										<div className="flex-1">
											<h3 className="text-lg md:text-xl font-bold leading-snug mb-1 group-hover:text-blue-200 transition-colors">
												{member.name}
											</h3>
											<p className="text-sm md:text-base text-blue-100 font-medium">
												{member.position}
											</p>
										</div>
									</div>

									{/* Action Button */}
									<div
										className="mt-4 flex items-center justify-between pt-4 border-t border-white/20"
										hidden={!member?.detail}
									>
										<span className="text-xs text-blue-100">
											Lihat profil lengkap
										</span>
										<div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-[#14264A] transition-all duration-300">
											<span>Detail</span>
											<svg
												className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</div>
									</div>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Modal */}
			{selected && (
				<div
					className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 backdrop-blur-md p-4 overflow-y-auto animate-fadeIn"
					onClick={closeModal}
				>
					<div
						className="w-full max-w-4xl max-h-[95vh] md:max-h-[95vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn my-auto flex flex-col"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="relative bg-gradient-to-r from-[#14264A] to-blue-900 px-6 md:px-8 py-8 text-white">
							<button
								type="button"
								onClick={closeModal}
								className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white z-10"
								aria-label="Close"
							>
								<X className="w-6 h-6" />
							</button>

							<div className="flex flex-col md:flex-row gap-6 items-start">
								{/* Image */}
								<div className="w-32 h-32 rounded-2xl overflow-hidden bg-white shadow-xl ring-4 ring-white/20 flex-shrink-0">
									<div className="relative w-full h-full">
										<Image
											src={selected.image}
											alt={selected.name}
											fill
											className="object-cover"
											sizes="128px"
										/>
									</div>
								</div>

								{/* Info */}
								<div className="flex-1">
									<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
										<Award className="w-3.5 h-3.5" />
										Profil Lengkap
									</div>
									<h2 className="text-2xl md:text-3xl font-bold mb-2">
										{selected.name}
									</h2>
									<p className="text-lg text-blue-100 font-medium mb-4">
										{selected.position}
									</p>

									{/* Social/Contact Icons (Optional) */}
									<div className="flex gap-2">
										<button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
											<Mail className="w-4 h-4" />
										</button>
										<button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
											<Linkedin className="w-4 h-4" />
										</button>
									</div>
								</div>
							</div>
						</div>

						{/* Modal Body */}
						<div
							className="px-6 md:px-8 py-8 overflow-y-auto"
							style={{ maxHeight: "calc(95vh - 300px)" }}
						>
							<h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
								<Briefcase className="w-5 h-5 text-blue-600" />
								Tentang
							</h3>
							<div className="prose prose-slate max-w-none">
								<p className="whitespace-pre-line text-sm md:text-base leading-relaxed text-slate-700">
									{selected.detail}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
		</>
	);
}
