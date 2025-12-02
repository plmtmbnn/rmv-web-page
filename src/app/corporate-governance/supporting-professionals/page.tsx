export default function Page() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-16">
			{/* Heading */}
			<h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-700">
				Profesi Penunjang{" "}
				<span className="text-[#E4473B]">Reliance Modal Ventura</span>
			</h1>

			<p className="text-lg text-gray-700 mb-12">
				Didukung oleh profesi penunjang bersertifikasi untuk memastikan kualitas
				dan kepatuhan.
			</p>

			{/* Card */}
			<div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
				<h2 className="text-3xl text-[#E4473B] font-semibold mb-4">
					Kantor Akuntan Publik
				</h2>

				<p className="text-xl font-medium mb-6 text-gray-700">
					Djoko, Sidik, dan Indra
				</p>

				{/* Address */}
				<div className="flex items-start gap-3 mb-4">
					<span className="text-2xl">📍</span>
					<p className="text-gray-800 leading-relaxed">
						Graha Mandiri, Lantai 17, Jl. Imam Bonjol No. 61, Menteng, Jakarta
						Pusat 10310.
					</p>
				</div>

				{/* Phone */}
				<div className="flex items-center gap-3">
					<span className="text-2xl">📞</span>
					<p className="text-gray-800">(021) 4259570</p>
				</div>
			</div>
		</div>
	);
}
