"use client";

import { FileText, FileSpreadsheet, File } from "lucide-react";

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
		files: [{ name: "Laporan Tahunan 2025", url: "/reports/2025/annual-report.pdf", type: "pdf" }],
	},
	{
		year: 2024,
		files: [
			{ name: "Quarter 1", url: "/reports/2024/q1.xlsx", type: "excel" },
			{ name: "Quarter 2", url: "/reports/2024/q2.xlsx", type: "excel" },
			{ name: "Annual Report", url: "/reports/2024/annual.pdf", type: "pdf" },
		],
	},
	{
		year: 2023,
		files: [{ name: "Annual Report", url: "/reports/2023/annual.docx", type: "doc" }],
	},
];

const iconMap = {
	pdf: <FileText className="w-5 h-5 text-red-500" />,
	excel: <FileSpreadsheet className="w-5 h-5 text-green-600" />,
	doc: <File className="w-5 h-5 text-blue-600" />,
};

export default function InvestorPage() {
	return (
		<div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
			
			{/* HEADER */}
			<h1 className="text-4xl font-serif mb-4 text-[#081A4B]">Laporan Keuangan</h1>
			
			<p className="text-gray-600 mb-12 max-w-2xl">
				Unduh dokumen laporan keuangan dari tahun 2015 hingga 2025. 
				Setiap tahun dapat memiliki satu atau beberapa dokumen berbeda.
			</p>

			{/* YEAR LIST */}
			<div className="space-y-10">
				{financialReports.map((report) => (
					<div
						key={report.year}
						className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white"
					>
						<h2 className="text-2xl font-semibold mb-4 text-[#081A4B]">
							{report.year}
                        </h2>

						<div className="space-y-4">
							{report.files.map((file, index) => (
								<a
									key={index}
									href={file.url}
									download
									className="
										flex items-center justify-between 
										bg-gray-50 border border-gray-200   
										hover:bg-gray-100 transition 
										p-4 rounded-lg cursor-pointer
									"
								>
									<div className="flex items-center gap-3">
										{iconMap[file.type]}
										<span className="font-medium text-gray-800">
											{file.name}
										</span>
									</div>

									<span className="text-sm text-gray-500">Download</span>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
