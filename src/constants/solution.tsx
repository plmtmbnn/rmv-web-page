import { Shield, TrendingUp } from "lucide-react";

export const shot1 = "/assests/reliance-office-100px.jpg";
export const shot2 = "/assests/reliance-office-100px.jpg";

export const solutions = [
	{
		title: "INVESTMENT",
		description:
			"Melalui anak perusahaan kami yang terkait investasi, Reliance Sekuritas Indonesia dan Reliance Manajer Investasi, kami menawarkan kepada investor ritek semua alat yang mereka butuhkan untuk meningkatkan nilai aset.",
		image: shot1,
		icon: <TrendingUp className="w-8 h-8" />,
		links: [
			{ label: "Website Reliance Sekuritas", href: "#" },
			{ label: "Website RMI", href: "#" },
		],
		gradient: "from-blue-900/90 via-blue-800/80 to-blue-900/90",
	},
	{
		title: "PROTECTION",
		description:
			"Perusahaan menyediakan rangkaian lengkap produk asuransi untuk bisnis dan individu, melalui dua anak perusahaan asuransi (Asuransi Jiwa Reliance Indonesia dan Asuransi Reliance Indonesia)",
		image: shot2,
		icon: <Shield className="w-8 h-8" />,
		links: [
			{ label: "Website AJRI", href: "#" },
			{ label: "Website ARI", href: "#" },
		],
		gradient: "from-indigo-900/90 via-indigo-800/80 to-indigo-900/90",
	},
];
