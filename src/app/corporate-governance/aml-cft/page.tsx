"use client";

import {
	ArrowLeft,
	Download,
	ExternalLink,
	FileText,
	Maximize2,
	ZoomIn,
	ZoomOut,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PDF_FILE =
	"/corporate-governance/Lampiran 12 Pernyataan APU PPT PPSPM 2025.pdf";
const PDF_TITLE = "Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme";

export default function PDFPreviewPage() {
	const [zoom, setZoom] = useState(100);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = PDF_FILE;
		link.download = `${PDF_TITLE}.pdf`;
		link.click();
	};

	const handleZoomIn = () => {
		setZoom((prev) => Math.min(prev + 25, 200));
	};

	const handleZoomOut = () => {
		setZoom((prev) => Math.max(prev - 25, 50));
	};

	const handleFullscreen = () => {
		const iframe = document.getElementById("pdf-iframe") as HTMLIFrameElement;
		if (iframe?.requestFullscreen) {
			iframe.requestFullscreen();
		}
	};

	return (
		<div className="bg-slate-50 min-h-screen flex flex-col">
			{/* Header */}
			<header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
				<div className="container mx-auto px-6 md:px-12 lg:px-20 py-4">
					<div className="flex items-center justify-between">
						{/* Left - Back button and title */}
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-3">
								<div className="p-2 bg-red-50 rounded-lg">
									<FileText className="w-5 h-5 text-red-600" />
								</div>
								<div>
									<h1 className="text-lg font-bold text-slate-900">
										{PDF_TITLE}
									</h1>
									<p className="text-xs text-slate-500">Dokumen PDF</p>
								</div>
							</div>
						</div>

						{/* Right - Actions */}
						<div className="flex items-center gap-2">
							{/* Fullscreen - Hidden on mobile */}
							<button
								onClick={handleFullscreen}
								className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
								title="Fullscreen"
							>
								<Maximize2 className="w-5 h-5 text-slate-700" />
							</button>

							{/* Open in new tab */}
							<a
								href={PDF_FILE}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors"
								title="Buka di tab baru"
							>
								<ExternalLink className="w-5 h-5 text-slate-700" />
								<span className="hidden sm:inline text-sm font-medium text-slate-700">
									Buka
								</span>
							</a>

							{/* Download Button */}
							<button
								onClick={handleDownload}
								className="flex items-center gap-2 px-4 py-2 bg-[#081A4B] text-white rounded-lg font-medium hover:bg-blue-900 transition-colors shadow-sm"
							>
								<Download className="w-5 h-5" />
								<span className="hidden sm:inline">Download</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* PDF Viewer */}
			<main className="flex-1 container mx-auto px-6 md:px-12 lg:px-20 py-8">
				<div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-full">
					<div className="relative w-full h-[calc(100vh-200px)]">
						<iframe
							id="pdf-iframe"
							src={`${PDF_FILE}#zoom=${zoom}`}
							className="w-full h-full"
							title={PDF_TITLE}
							style={{
								border: "none",
								display: "block",
							}}
						/>

						{/* Fallback message */}
						<div className="absolute inset-0 flex items-center justify-center bg-slate-50 -z-10">
							<div className="text-center p-8">
								<FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
								<p className="text-slate-600 mb-4">
									Browser Anda tidak mendukung preview PDF
								</p>
								<button
									onClick={handleDownload}
									className="inline-flex items-center gap-2 px-6 py-3 bg-[#081A4B] text-white rounded-lg font-medium hover:bg-blue-900 transition-colors"
								>
									<Download className="w-5 h-5" />
									Download PDF
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile Controls */}
				<div className="md:hidden mt-4 flex items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200">
					<div className="flex items-center gap-2">
						<button
							onClick={handleZoomOut}
							disabled={zoom <= 50}
							className="p-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
						>
							<ZoomOut className="w-5 h-5 text-slate-700" />
						</button>

						<span className="text-sm font-medium text-slate-700 min-w-[50px] text-center">
							{zoom}%
						</span>

						<button
							onClick={handleZoomIn}
							disabled={zoom >= 200}
							className="p-2 rounded-lg hover:bg-slate-100 transition-colors disabled:opacity-50"
						>
							<ZoomIn className="w-5 h-5 text-slate-700" />
						</button>
					</div>
				</div>
			</main>

			{/* Footer Info */}
			<footer className="bg-white border-t border-slate-200 py-4">
				<div className="container mx-auto px-6 md:px-12 lg:px-20">
					<p className="text-sm text-slate-500 text-center">
						Untuk pengalaman terbaik, gunakan browser modern seperti Chrome,
						Firefox, atau Edge
					</p>
				</div>
			</footer>
		</div>
	);
}
