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
			{ href: "/profile/awards", label: "Struktur Organisasi" },
			{ href: "/profile/history", label: "Struktur Kepemilikan Saham" },
		],
	},
	{
		href: "/investor",
		label: "Hubungan Investor",
		submenu: [
			{ href: "/investor/reports", label: "Laporan Keuangan" },
			{ href: "/investor/stock", label: "Berita dan Peristiwa" },
		],
	},
	{
		href: "/solution",
		label: "Solusi Keuangan",
		// No submenu - this will be a direct link
	},
];
