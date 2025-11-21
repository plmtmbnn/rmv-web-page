import {
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-[#081A4B] text-white mt-20">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
					{/* LEFT SECTION */}
					<div>
						<Image
							src="/logo.png"
							width={180}
							height={60}
							alt="Reliance Logo"
							className="mb-6"
							priority
						/>

						<div className="space-y-6 text-[15px] leading-relaxed">
							{/* Address */}
							<div className="flex items-start gap-4">
								<MapPin className="w-6 h-6 text-white/90" />
								<p>
									Soho West Point, Jalan Macan Kav. 4–5, Kedoya Utara, Kebon
									Jeruk, Jakarta Barat 11520
								</p>
							</div>

							{/* Phone */}
							<div className="flex items-start gap-4">
								<Phone className="w-6 h-6 text-white/90" />
								<a
									href="tel:02121192288"
									className="hover:text-white transition-colors"
								>
									(021) 21192288
								</a>
							</div>

							{/* Email */}
							<div className="flex items-start gap-4">
								<Mail className="w-6 h-6 text-white/90" />
								<a
									href="mailto:corporate@rmv.co.id"
									className="hover:text-white transition-colors"
								>
									corporate@rmv.co.id
								</a>
							</div>

							<p className="text-[13px] text-white/70 pt-3">
								PT. Reliance Modal Ventura terdaftar dan diawasi oleh Otoritas
								Jasa Keuangan.
							</p>
						</div>
					</div>

					{/* RIGHT SECTION */}
					<div>
						<h3 className="font-serif text-3xl mb-4">Berlangganan</h3>

						<p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-md">
							Dapatkan informasi terbaru dari kami langsung melalui email.
						</p>

						{/* Responsive Wrapper */}
						<div
							className="
		bg-white rounded-2xl shadow-lg w-full max-w-lg p-3 
		flex flex-col gap-3
		md:flex-row md:items-center md:gap-2
	"
						>
							<input
								type="email"
								placeholder="Masukkan email anda..."
								className="
				flex-1 px-4 py-3 rounded-xl 
				text-[#081A4B] outline-none 
				placeholder:text-[#081A4B]/60
				w-full
			"
							/>

							<button
								className="
				rounded-xl bg-[#081A4B] text-white 
				px-6 py-3 text-sm font-medium 
				hover:bg-[#0A2460] transition-colors
				w-full md:w-auto
			"
							>
								Mulai Langganan
							</button>
						</div>
					</div>
				</div>

				{/* Divider */}
				<hr className="border-white/20 my-12" />

				{/* BOTTOM ROW */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-white/70 text-sm">
						© {new Date().getFullYear()} All Rights Reserved · Reliance Modal
						Ventura
					</p>

					{/* Social Icons */}
					<div className="flex gap-5 text-white">
						<SocialIcon
							href="https://linkedin.com"
							icon={<Linkedin className="w-4 h-4" />}
						/>
						<SocialIcon
							href="https://youtube.com"
							icon={<Youtube className="w-4 h-4" />}
						/>
						<SocialIcon
							href="https://instagram.com"
							icon={<Instagram className="w-4 h-4" />}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

/* ---------------- Social Icon Component ---------------- */
const SocialIcon = ({
	href,
	icon,
}: {
	href: string;
	icon: React.ReactNode;
}) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition"
	>
		{icon}
	</Link>
);
