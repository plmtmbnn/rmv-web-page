export const navLinks = [
	{
		href: "/management",
		label: "Manajemen",
	},
	{
		href: "/profile",
		label: "Profil Perusahaan",
		submenu: [
			{ href: "/profile/about", label: "Sekilas RMV" },
			{ href: "/profile/vision", label: "Visi & Misi" },
			{ href: "/profile/organization-structure", label: "Struktur Organisasi" },
			{
				href: "/profile/shareholding-structure",
				label: "Struktur Kepemilikan Saham",
			},
		],
	},
	{
		href: "/corporate-governance",
		label: "Tata Kelola Perusahaan",
		submenu: [
			{
				href: "/corporate-governance/articles-of-association",
				label: "Anggaran Dasar",
			},
			{ href: "/corporate-governance/code-of-conduct", label: "Kode Etik" },
			{
				href: "/corporate-governance/bod-charter",
				label: "Piagam Pengurus (BOD Charter)",
			},
			{
				href: "/corporate-governance/whistleblowing-policy",
				label: "Kebijakan Whistleblowing",
			},
			{
				href: "/corporate-governance/training-and-development-policy",
				label: "Kebijakan Pelatihan dan Pengembangan Karyawan",
			},
			{
				href: "/corporate-governance/anti-fraud-policy",
				label: "Kebijakan Anti Fraud",
			},
			{
				href: "/corporate-governance/aml-cft-ppspf-policy",
				label: "Kebijakan APU/PPT/PPSPM",
			},
			{ href: "/corporate-governance/annual-gms", label: "RUPS Tahunan" },
			{
				href: "/corporate-governance/extraordinary-gms",
				label: "RUPS Luar Biasa",
			},
			{
				href: "/corporate-governance/governance-report",
				label: "Laporan Tata Kelola",
			},
			{
				href: "/corporate-governance/supporting-professionals",
				label: "Profesi Penunjang",
			},
			{
				href: "/corporate-governance/aml-cft",
				label: "Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme",
			},
		],
	},
	{
		href: "/investor",
		label: "Hubungan Investor",
		submenu: [
			{ href: "/investor/report/financial", label: "Laporan Keuangan Tahunan" },
			{ href: "/investor/report/yearly", label: "Laporan Tahunan" },
			{
				href: "/investor/report/sustainability",
				label: "Laporan Keberlanjutan",
			},
			{ href: "/investor/news", label: "Berita dan Peristiwa" },
			{
				href: "/investor/financial-literacy-and-inclusion",
				label: "Literasi dan Inklusi Keuangan",
			},
		],
	},
	{
		href: "/solution",
		label: "Solusi Keuangan",
		// No submenu - this will be a direct link
	},
];
