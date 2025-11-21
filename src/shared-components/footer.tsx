import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-[#081A4B] text-white pt-16 pb-10 mt-20">
			<div className="container mx-auto px-6 md:px-12 lg:px-20">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div>
						<Image
							src="/logo.png"
							width={180}
							height={60}
							alt="Reliance Logo"
							className="mb-6"
						/>

						{/* Address */}
						<div className="space-y-5 text-[15px] leading-relaxed">
							<div className="flex gap-3">
								<svg
									className="w-6 h-6 text-white/90"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 10.5c0 7-7.5 11-7.5 11S4.5 17.5 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
								<p>
									Soho West Point, Jalan Macan Kav. 4 – 5, Kedoya Utara, Kebon
									Jeruk - Jakarta Barat 11520
								</p>
							</div>

							{/* Phone */}
							<div className="flex gap-3">
								<svg
									className="w-6 h-6 text-white/90"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 4.5l3-1a2 2 0 012.1.5l2.2 2.2a2 2 0 01.5 2.1l-1 3a16 16 0 006.3 6.3l3-1a2 2 0 012.1.5l2.2 2.2a2 2 0 01.5 2.1l-1 3"
									/>
								</svg>
								<p>(021) 21192288</p>
							</div>

							{/* Email */}
							<div className="flex gap-3">
								<svg
									className="w-6 h-6 text-white/90"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75L12 13.5l9.75-6.75"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 17.25V6.75l19.5 10.5"
									/>
								</svg>
								<p>corporate@rmv.co.id</p>
							</div>

							<p className="text-[14px] text-white/80 pt-2">
								PT. Reliance Modal Ventura terdaftar dan diawasi oleh Otoritas
								Jasa Keuangan
							</p>
						</div>
					</div>

					{/* RIGHT SIDE — SUBSCRIPTION */}
					<div>
						<h3 className="font-serif text-3xl mb-3">Berlangganan</h3>
						<p className="text-white/90 text-[15px] leading-relaxed mb-6 max-w-md">
							Berlangganan untuk Langganan untuk mengetahui informasi terbaru
							dari kami
						</p>

						<div className="bg-white rounded-2xl flex items-center p-2 pr-1 w-full max-w-xl shadow-md">
							<input
								type="email"
								placeholder="Masukkan email anda..."
								className="flex-1 outline-none text-[#081A4B] px-4 py-3 rounded-xl"
							/>
							<button className="rounded-xl bg-[#081A4B] text-white px-6 py-3 text-sm font-medium">
								Mulai Langganan
							</button>
						</div>
					</div>
				</div>

				<div className="w-full border-t border-white/20 my-10"></div>

				<div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-white/70 text-sm">
						© Copyright 2025 All Rights Reserved. | Reliance Modal Ventura
					</p>

					<div className="flex gap-5 text-white">
						<Link href="#">
							<svg className="w-6 h-6" fill="currentColor">
								<circle cx="12" cy="12" r="3" />
							</svg>
						</Link>
						<Link href="#">
							<svg className="w-6 h-6" fill="currentColor">
								<circle cx="12" cy="12" r="3" />
							</svg>
						</Link>
						<Link href="#">
							<svg className="w-6 h-6" fill="currentColor">
								<circle cx="12" cy="12" r="3" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
