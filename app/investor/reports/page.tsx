"use client";

import React, { useState } from "react";
import {
	FileText,
	FileSpreadsheet,
	File,
	Download,
	PieChart,
	Leaf,
	ChevronRight,
	Search,
} from "lucide-react";

// --- Types ---
type FileType = "pdf" | "excel" | "doc";

type ReportFile = {
	name: string;
	url: string;
	type: FileType;
	size?: string; // Added optional size for realism
};

type YearReport = {
	year: number;
	files: ReportFile[];
};

// --- Mock Data ---

const financialReports: YearReport[] = [
	{
		year: 2024,
		files: [
			{
				name: "Lampiran 1.c. Tahun Buku 2024",
				url: "/investor/financial_reports/2023/Lampiran 1.b. Tahun Buku 2023.pdf",
				type: "pdf",
			},
		],
	},
	{
		year: 2023,
		files: [
			{
				name: "Lampiran 1.b. Tahun buku 2023",
				url: "/investor/financial_reports/2023/Lampiran 1.b. Tahun Buku 2023.pdf",
				type: "pdf",
			},
		],
	},
];

const sustainabilityReports: YearReport[] = [
	{
		year: 2024,
		files: [
			{
				name: "Lampiran 4.b. LAPORAN KEBERLANJUTAN 2024",
				url: "/investor/sustainability_reports/2022/Lampiran 3 LAPORAN KEEBERLANJUTAN 2022.pdf",
				type: "pdf",
			},
		],
	},
	{
		year: 2023,
		files: [
			{
				name: "Lampiran 4 LAPORAN KEEBERLANJUTAN 2023",
				url: "/investor/sustainability_reports/2023/Lampiran 4 LAPORAN KEBERLANJUTAN 2023.pdf",
				type: "pdf",
			},
		],
	},
	{
		year: 2022,
		files: [
			{
				name: "Lampiran 3 LAPORAN KEEBERLANJUTAN 2022",
				url: "/investor/sustainability_reports/2022/Lampiran 3 LAPORAN KEEBERLANJUTAN 2022.pdf",
				type: "pdf",
			},
		],
	},
];

// --- Helper Functions ---

const getFileIcon = (type: FileType) => {
	switch (type) {
		case "pdf":
			return <FileText className="w-6 h-6 text-red-500" />;
		case "excel":
			return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />;
		case "doc":
			return <File className="w-6 h-6 text-blue-600" />;
	}
};

const getFileLabel = (type: FileType) => {
	switch (type) {
		case "pdf":
			return "PDF Document";
		case "excel":
			return "Excel Spreadsheet";
		case "doc":
			return "Word Document";
	}
};

// --- Sub-Components ---

const ReportList = ({ data }: { data: YearReport[] }) => {
	if (!data || data.length === 0) {
		return (
			<div className="py-12 text-center text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
				<p>Belum ada laporan tersedia untuk kategori ini.</p>
			</div>
		);
	}

	return (
		<div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
			{data.map((yearGroup) => (
				<div key={yearGroup.year} className="relative">
					{/* Sticky Year Header (Optional visual effect) */}
					<div className="flex items-center gap-4 mb-6">
						<h2 className="text-3xl font-bold text-slate-200">
							{yearGroup.year}
						</h2>
						<div className="h-px bg-slate-200 flex-1"></div>
					</div>

					<div className="grid gap-4">
						{yearGroup.files.map((file, index) => (
							<a
								key={index}
								href={file.url}
								target="_blank"
								download
								className="group relative flex items-center justify-between p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
							>
								<div className="flex items-center gap-5">
									{/* Icon Box */}
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
										{getFileIcon(file.type)}
									</div>

									{/* File Info */}
									<div>
										<h3 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
											{file.name}
										</h3>
										<div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
											<span className="uppercase font-medium tracking-wide">
												{file.type}
											</span>
											{file.size && (
												<>
													<span className="w-1 h-1 rounded-full bg-slate-300"></span>
													<span>{file.size}</span>
												</>
											)}
											<span className="w-1 h-1 rounded-full bg-slate-300"></span>
											<span>{getFileLabel(file.type)}</span>
										</div>
									</div>
								</div>

								{/* Action */}
								<div className="flex items-center gap-3 pr-2">
									<span className="text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors hidden sm:block">
										Download
									</span>
									<div className="p-2 rounded-full text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
										<Download className="w-5 h-5" />
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

// --- Main Page Component ---

export default function InvestorPage() {
	const [activeTab, setActiveTab] = useState<"financial" | "sustainability">(
		"financial",
	);

	return (
		<div className="bg-slate-50 min-h-screen">
			{/* Decorative Background */}
			<div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-blue-900 to-slate-50 opacity-10 pointer-events-none" />

			<div className="container relative mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
				{/* Header Section */}
				<div className="mb-12 max-w-3xl">
					<h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
						Pusat Laporan & Publikasi
					</h1>
					<p className="text-slate-600 text-lg leading-relaxed">
						Akses dokumen keuangan dan laporan keberlanjutan kami sebagai wujud
						transparansi dan akuntabilitas perusahaan kepada para pemangku
						kepentingan.
					</p>
				</div>

				{/* Tab Navigation */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 border-b border-slate-200">
					<button
						onClick={() => setActiveTab("financial")}
						className={`pb-4 px-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 flex items-center gap-2 ${
							activeTab === "financial"
								? "border-blue-600 text-blue-600"
								: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
						}`}
					>
						<PieChart className="w-4 h-4" />
						Laporan Keuangan
					</button>

					<button
						onClick={() => setActiveTab("sustainability")}
						className={`pb-4 px-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 border-b-2 flex items-center gap-2 ${
							activeTab === "sustainability"
								? "border-green-600 text-green-600"
								: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
						}`}
					>
						<Leaf className="w-4 h-4" />
						Laporan Keberlanjutan
					</button>
				</div>

				{/* Dynamic Content */}
				<div className="max-w-4xl min-h-[400px]">
					{activeTab === "financial" ? (
						<ReportList data={financialReports} />
					) : (
						<ReportList data={sustainabilityReports} />
					)}
				</div>

				{/* Footer Note */}
				<div className="mt-20 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
					<div className="p-3 bg-blue-50 rounded-full shrink-0">
						<Search className="w-6 h-6 text-blue-600" />
					</div>
					<div className="flex-1">
						<h4 className="text-base font-bold text-slate-900 mb-1">
							Butuh informasi lebih detail?
						</h4>
						<p className="text-sm text-slate-600">
							Jika Anda membutuhkan laporan periode sebelumnya atau dokumen
							spesifik yang tidak tercantum, silakan hubungi tim Corporate
							Secretary kami.
						</p>
					</div>
					<a
						href="mailto:corporate@rmv.co.id"
						className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap"
					>
						Hubungi Kami
					</a>
				</div>
			</div>
		</div>
	);
}
