"use client";

import { FileText, FileSpreadsheet, File, Download } from "lucide-react";

type ReportFile = {
	name: string;
	url: string;
	type: "pdf" | "excel" | "doc";
};

type YearReport = {
	year: number;
	files: ReportFile[];
};

const financialReports: YearReport[] = [
	{
		year: 2025,
		files: [
			{ name: "Laporan Tahunan 2025", url: "/reports/2025/annual-report.pdf", type: "pdf" }
		],
	},
	{
		year: 2024,
		files: [
			{ name: "Laporan Kuartal 1 2024", url: "/reports/2024/q1.xlsx", type: "excel" },
			{ name: "Laporan Kuartal 2 2024", url: "/reports/2024/q2.xlsx", type: "excel" },
			{ name: "Laporan Tahunan 2024", url: "/reports/2024/annual.pdf", type: "pdf" },
		],
	},
	{
		year: 2023,
		files: [
			{ name: "Laporan Tahunan 2023", url: "/reports/2023/annual.docx", type: "doc" }
		],
	},
];

const getFileIcon = (type: "pdf" | "excel" | "doc") => {
	switch (type) {
		case "pdf":
			return <FileText className="w-5 h-5 text-red-600" />;
		case "excel":
			return <FileSpreadsheet className="w-5 h-5 text-green-600" />;
		case "doc":
			return <File className="w-5 h-5 text-blue-600" />;
	}
};

export default function InvestorPage() {
	return (
		<div className="bg-white min-h-screen">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
				
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-slate-200">
					<h1 className="text-3xl md:text-4xl font-bold text-[#081A4B] mb-3">
						Laporan Keuangan
					</h1>
					<p className="text-slate-600 text-lg max-w-2xl">
						Transparansi dan akuntabilitas kepada para investor dan stakeholder.
					</p>
				</div>

				{/* Reports List */}
				<div className="max-w-4xl space-y-12">
					{financialReports.map((report) => (
						<div key={report.year}>
							{/* Year Title */}
							<h2 className="text-2xl font-bold text-[#081A4B] mb-6">
								{report.year}
							</h2>

							{/* Files */}
							<div className="space-y-3">
								{report.files.map((file, index) => (
									<a
										key={index}
										href={file.url}
										target="_blank"
										download
										className="group flex items-center justify-between p-5 border border-slate-200 rounded-lg hover:border-[#081A4B] hover:shadow-md transition-all duration-200"
									>
										<div className="flex items-center gap-4">
											<div className="p-2 bg-slate-50 rounded-lg group-hover:bg-slate-100 transition-colors">
												{getFileIcon(file.type)}
											</div>
											<span className="font-medium text-slate-800">
												{file.name}
											</span>
										</div>

										<div className="flex items-center gap-2 text-[#081A4B] font-medium">
											<Download className="w-4 h-4" />
											<span className="hidden sm:inline">Download</span>
										</div>
									</a>
								))}
							</div>
						</div>
					))}
				</div>

				{/* Footer Note */}
				<div className="mt-16 pt-8 border-t border-slate-200 max-w-4xl">
					<p className="text-sm text-slate-600 leading-relaxed">
						Semua laporan keuangan telah diaudit oleh auditor independen dan disusun sesuai dengan 
						Standar Akuntansi Keuangan yang berlaku. Untuk informasi lebih lanjut, hubungi 
						<a href="mailto:corporate@rmv.co.id" className="text-[#081A4B] font-medium hover:underline ml-1">
							corporate@rmv.co.id
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}