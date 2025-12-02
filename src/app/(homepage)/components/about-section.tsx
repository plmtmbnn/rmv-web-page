"use client";

import {
	ArrowUpRight,
	Award,
	Building2,
	Check,
	Copy,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

// --- Types ---
type TileProps = {
	src: string;
	alt?: string;
	className?: string;
	priority?: boolean;
};

type ContactCardProps = {
	icon: React.ElementType;
	title: string;
	content: string;
	actionLabel: string;
	type: "link" | "copy";
	href?: string;
	colorClass: string; // e.g. "blue", "red", "green"
};

// --- Components ---

/**
 * Enhanced Image Tile with loading skeleton and hover zoom
 */
function ImageTile({
	src,
	alt = "",
	className = "",
	priority = false,
}: TileProps) {
	return (
		<div
			className={`group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm transition-all duration-500 hover:shadow-xl ${className}`}
		>
			<Image
				src={src}
				alt={alt}
				fill
				priority={priority}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
			/>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
		</div>
	);
}

/**
 * Interactive Contact Card
 */
function ContactItem({
	icon: Icon,
	title,
	content,
	actionLabel,
	type,
	href,
	colorClass,
}: ContactCardProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(content);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const baseColors: Record<string, string> = {
		blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border-blue-100",
		green:
			"bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border-emerald-100",
		red: "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white border-red-100",
	};

	const Wrapper = type === "link" ? "a" : "div";
	const wrapperProps =
		type === "link"
			? { href, target: "_blank", rel: "noopener noreferrer" }
			: { onClick: handleCopy };

	return (
		<Wrapper
			{...wrapperProps}
			className={`group relative flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
		>
			<div className="flex items-start justify-between">
				<div
					className={`rounded-xl p-3 transition-colors duration-300 ${baseColors[colorClass]}`}
				>
					<Icon className="h-5 w-5" />
				</div>
				{type === "copy" && (
					<div className="text-slate-400 transition-colors group-hover:text-slate-600">
						{copied ? (
							<Check className="h-5 w-5 text-green-500" />
						) : (
							<Copy className="h-5 w-5" />
						)}
					</div>
				)}
				{type === "link" && (
					<ArrowUpRight className="h-6 w-6 text-slate-400 transition-colors group-hover:text-slate-600" />
				)}
			</div>

			<div>
				<h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
					{title}
				</h4>
				<p
					className={`mt-1 text-lg font-medium text-slate-900 ${type === "link" ? "break-all" : "break-all"}`}
				>
					{content}
				</p>
			</div>

			<div className="mt-auto pt-2">
				<span
					className={`text-xs font-bold underline decoration-2 underline-offset-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-${colorClass === "green" ? "emerald" : colorClass}-600`}
				>
					{copied ? "Disalin ke clipboard!" : actionLabel}
				</span>
			</div>
		</Wrapper>
	);
}

// --- Data ---
const officeImages = [
	"/assets/iconic-jkt.jpg", // Fallback logic handled in component if needed, but assuming valid paths
	"/assets/fg-jkt.jpg",
	"/assets/reliance-office-100px.jpg",
];

export const AboutSection: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
			{/* Background Pattern */}
			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage: "radial-gradient(#444cf7 0.5px, transparent 0.5px)",
					backgroundSize: "24px 24px",
				}}
			></div>

			<div className="container relative mx-auto px-6 md:px-12 lg:px-20">
				{/* --- Main Grid Layout --- */}
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 mb-20">
					{/* Left Column: About Text (Span 7) */}
					<div className="lg:col-span-7 flex flex-col gap-8">
						<article className="relative h-full overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl ring-1 ring-slate-900/5 md:p-12">
							{/* Decorative blur */}
							<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl"></div>

							<div className="relative z-10">
								<div className="flex items-center gap-3 mb-8">
									<div className="p-2 bg-red-50 rounded-lg">
										<Award className="h-6 w-6 text-[#d94e35]" />
									</div>
									<span className="text-sm font-bold tracking-widest text-[#d94e35] uppercase">
										Profil Perusahaan
									</span>
								</div>

								<h3 className="font-serif text-3xl text-slate-900 mb-6 leading-tight">
									Sekilas Tentang <br />
									<span className="font-bold text-[#0b203f]">
										PT. Reliance Modal Ventura
									</span>
								</h3>

								<div className="space-y-6 text-slate-600 md:text-lg leading-relaxed">
									<p className="text-justify">
										Didirikan berdasarkan akta Nomor 116 tanggal 6 Juni 2015
										dihadapan Rosita Rianauli Sianipar, SH, M.Kn, Notaris di
										Jakarta.
									</p>
									<p>
										Kami telah memperoleh persetujuan resmi dari Kementerian
										Hukum dan Hak Asasi Manusia (Nomor
										AHU-2443277.AH.01.01.Tahun 2015) dan beroperasi dengan
										standar tata kelola perusahaan yang ketat.
									</p>
								</div>
							</div>
						</article>
					</div>

					{/* Right Column: Image Bento Grid (Span 5) */}
					<div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0">
						<div className="grid grid-cols-2 grid-rows-3 gap-4 h-full">
							{/* Large vertical image */}
							<ImageTile
								src={officeImages[0]}
								className="col-span-1 row-span-3 h-full"
								priority
							/>
							{/* Two smaller stacked images */}
							<ImageTile
								src={officeImages[1]}
								className="col-span-1 row-span-2 h-full"
							/>
							<div className="col-span-1 row-span-1 relative rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden group">
								<div className="absolute inset-0 bg-[url('/assets/reliance-office-100px.jpg')] opacity-40 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
								<div className="relative z-10 text-center">
									<span className="block text-3xl font-bold text-white">
										Reliance
									</span>
									<span className="text-xs text-white/80 tracking-widest uppercase">
										Modal Ventura
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* --- Contact Section --- */}
				<div className="relative">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
						<div>
							<h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
								<Mail className="text-[#d94e35]" />
								Hubungi Kami
							</h3>
							<p className="text-slate-600 mt-2">
								Informasi kontak resmi perusahaan
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Address Card */}
						<ContactItem
							icon={MapPin}
							title="Alamat Kantor"
							content="Soho West Point, Jalan Macan Kav. 4 - 5, Kedoya Utara, Kebon Jeruk - Jakarta Barat 11520"
							actionLabel="Buka di Google Maps"
							type="link"
							href="https://maps.app.goo.gl/3K57bLyPfVc5He2Q9"
							colorClass="blue"
						/>

						{/* Phone Card */}
						<ContactItem
							icon={Phone}
							title="Telepon"
							content="(021) 21192288"
							actionLabel="Salin Nomor Telepon"
							type="copy"
							colorClass="green"
						/>

						{/* Email Card */}
						<ContactItem
							icon={Mail}
							title="Email Corporate"
							content="corporate@rmv.co.id"
							actionLabel="Salin Alamat Email"
							type="copy"
							colorClass="red"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
