import { Shield, TrendingUp } from "lucide-react";

export const shot1 = "/assets/reliance-office-100px.jpg";
export const shot2 = "/assets/reliance-office-100px.jpg";

export const RELIANCE_GROUP = {
	RELIANCE_SECURITY: {
		link: "https://reliancesekuritas.com/",
		company_name: "PT Reliance Sekuritas Indonesia",
	},
	AJRI: {
		link: "https://reliance-life.co.id/",
		company_name: "PT Asuransi Jiwa Reliance Indonesia",
	},
	ARI: {
		link: "https://asuransireliance.com/",
		company_name: "PT Asuransi Reliance Indonesia",
	},
	RELIID: {
		link: "https://staging.reli.id/",
		company_name: "PT Relianceintegrasi Dunia Anda",
	},
	RMI: {
		link: "https://reliance-investasi.com/",
		company_name: "PT Reliance Manajer Investasi",
	},
	REFI: {
		link: "https://reliance-finance.com/",
		company_name: "PT. Usaha Pembiayaan RelianceIndonesia",
	},
};

export const solutions = [
	{
		title: "INVESTMENT",
		description:
			"Melalui anak perusahaan kami yang terkait investasi, Reliance Sekuritas Indonesia dan Reliance Manajer Investasi, kami menawarkan kepada investor ritek semua alat yang mereka butuhkan untuk meningkatkan nilai aset.",
		image: shot1,
		icon: <TrendingUp className="w-8 h-8" />,
		links: [
			{
				label: "Website Reliance Sekuritas",
				href: RELIANCE_GROUP.RELIANCE_SECURITY.link,
			},
			{ label: "Website RMI", href: RELIANCE_GROUP.RMI.link },
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
			{ label: "Website AJRI", href: RELIANCE_GROUP.AJRI.link },
			{ label: "Website ARI", href: RELIANCE_GROUP.ARI.link },
		],
		gradient: "from-indigo-900/90 via-indigo-800/80 to-indigo-900/90",
	},
];
