"use client";

import Image from "next/image";
import Link from "next/link";
import {
	Calendar,
	Tag,
	ArrowLeft,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
	Clock,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { newsData, type NewsItemInterface } from "../news-data-list";
import { notFound } from "next/navigation";

// Helper function to get news by slug
function getNewsBySlug(slug: string): NewsItemInterface | undefined {
	const normalized = slug.trim().toLowerCase();
	return newsData.find((item) => item.slug.toLowerCase() === normalized);
}

// Helper function to get related news
function getRelatedNews(
	currentSlug: string,
	category: string,
	limit: number = 3,
): NewsItemInterface[] {
	return newsData
		.filter((item) => item.slug !== currentSlug && item.category === category)
		.slice(0, limit);
}

// Helper function to calculate reading time
function calculateReadingTime(content: string[]): number {
	const totalWords = content.join(" ").split(/\s+/).length;
	const wordsPerMinute = 200;
	return Math.ceil(totalWords / wordsPerMinute);
}

export default function NewsDetailPage() {
	const pathname = usePathname();
	const targetSlugNews = pathname.replace("/investor/news/", "");

	const newsDetail = getNewsBySlug(targetSlugNews);

	// Redirect to 404 if news not found
	if (!newsDetail) {
		notFound();
	}

	const relatedNews = getRelatedNews(newsDetail.slug, newsDetail.category);
	const readingTime = calculateReadingTime(newsDetail.content);

	// Share handlers
	const handleShare = (platform: string) => {
		const url = window.location.href;
		const title = newsDetail.title;

		switch (platform) {
			case "facebook":
				window.open(
					`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
					"_blank",
				);
				break;
			case "twitter":
				window.open(
					`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
					"_blank",
				);
				break;
			case "linkedin":
				window.open(
					`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
					"_blank",
				);
				break;
			case "copy":
				navigator.clipboard.writeText(url);
				alert("Link berhasil disalin!");
				break;
		}
	};

	return (
		<div className="bg-white min-h-screen">
			{/* Back Button */}
			<div className="border-b border-slate-200 bg-slate-50">
				<div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
					<Link
						href="/investor/news"
						className="inline-flex items-center gap-2 text-slate-600 hover:text-[#081A4B] transition-colors font-medium"
					>
						<ArrowLeft className="w-4 h-4" />
						<span>Kembali ke Berita</span>
					</Link>
				</div>
			</div>

			{/* Article Content */}
			<article className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
				<div className="max-w-4xl mx-auto">
					{/* Article Header */}
					<header className="mb-10">
						<div className="flex flex-wrap items-center gap-4 mb-6">
							<span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 text-[#081A4B] rounded-full text-sm font-semibold">
								<Tag className="w-3.5 h-3.5" />
								{newsDetail.category}
							</span>
							<span className="flex items-center gap-2 text-sm text-slate-500">
								<Calendar className="w-4 h-4" />
								{newsDetail.date}
							</span>
							<span className="flex items-center gap-2 text-sm text-slate-500">
								<Clock className="w-4 h-4" />
								{readingTime} menit baca
							</span>
						</div>

						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081A4B] leading-tight mb-6">
							{newsDetail.title}
						</h1>

						{/* Excerpt */}
						{newsDetail.excerpt && (
							<p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
								{newsDetail.excerpt}
							</p>
						)}

						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-200">
							<p className="text-slate-600">
								Oleh{" "}
								<span className="font-semibold text-slate-800">
									{newsDetail.author}
								</span>
							</p>

							{/* Share Buttons */}
							<div className="flex items-center gap-2">
								<span className="text-sm text-slate-500 mr-2 hidden sm:inline">
									Bagikan:
								</span>
								<button
									onClick={() => handleShare("facebook")}
									className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
									title="Bagikan ke Facebook"
									aria-label="Bagikan ke Facebook"
								>
									<Facebook className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
								</button>
								<button
									onClick={() => handleShare("twitter")}
									className="p-2 hover:bg-sky-50 rounded-lg transition-colors group"
									title="Bagikan ke Twitter"
									aria-label="Bagikan ke Twitter"
								>
									<Twitter className="w-4 h-4 text-slate-600 group-hover:text-sky-500" />
								</button>
								<button
									onClick={() => handleShare("linkedin")}
									className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
									title="Bagikan ke LinkedIn"
									aria-label="Bagikan ke LinkedIn"
								>
									<Linkedin className="w-4 h-4 text-slate-600 group-hover:text-blue-700" />
								</button>
								<button
									onClick={() => handleShare("copy")}
									className="p-2 hover:bg-slate-100 rounded-lg transition-colors group"
									title="Salin link"
									aria-label="Salin link"
								>
									<Share2 className="w-4 h-4 text-slate-600 group-hover:text-slate-800" />
								</button>
							</div>
						</div>
					</header>

					{/* Featured Image */}
					<figure className="relative h-64 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden mb-10 shadow-lg">
						<Image
							src={newsDetail.image}
							alt={newsDetail.title}
							fill
							className="object-cover"
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
						/>
					</figure>

					{/* Article Body */}
					<div className="prose prose-lg max-w-none">
						{newsDetail.content.map((paragraph, index) => (
							<p
								key={index}
								className="text-slate-700 text-base md:text-lg leading-relaxed mb-6"
							>
								{paragraph}
							</p>
						))}
					</div>

					{/* Article Footer */}
					<footer className="mt-12 pt-8 border-t border-slate-200">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<div className="flex items-center gap-2">
								<Tag className="w-4 h-4 text-slate-400" />
								<span className="text-sm text-slate-600">Kategori:</span>
								<Link
									href={`/investor/news?category=${newsDetail.category}`}
									className="text-sm font-semibold text-[#081A4B] hover:underline"
								>
									{newsDetail.category}
								</Link>
							</div>

							{/* Share Again */}
							<div className="flex items-center gap-2">
								<span className="text-sm text-slate-500 hidden sm:inline">
									Bagikan artikel ini:
								</span>
								<button
									onClick={() => handleShare("facebook")}
									className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
									aria-label="Bagikan ke Facebook"
								>
									<Facebook className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
								</button>
								<button
									onClick={() => handleShare("twitter")}
									className="p-2 hover:bg-sky-50 rounded-lg transition-colors group"
									aria-label="Bagikan ke Twitter"
								>
									<Twitter className="w-4 h-4 text-slate-600 group-hover:text-sky-500" />
								</button>
								<button
									onClick={() => handleShare("linkedin")}
									className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
									aria-label="Bagikan ke LinkedIn"
								>
									<Linkedin className="w-4 h-4 text-slate-600 group-hover:text-blue-700" />
								</button>
							</div>
						</div>
					</footer>
				</div>
			</article>

			{/* Related News Section */}
			{relatedNews.length > 0 && (
				<section className="bg-slate-50 py-16 border-t border-slate-200">
					<div className="container mx-auto px-6 md:px-12 lg:px-20">
						<div className="max-w-6xl mx-auto">
							<h2 className="text-2xl md:text-3xl font-bold text-[#081A4B] mb-8">
								Berita Terkait
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{relatedNews.map((news) => (
									<Link
										key={news.slug}
										href={`/investor/news/${news.slug}`}
										className="group block overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-[#081A4B] hover:shadow-lg transition-all duration-300"
									>
										{/* Image */}
										<div className="relative h-48 overflow-hidden bg-slate-100">
											<Image
												src={news.image}
												alt={news.title}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-105"
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
										</div>

										{/* Content */}
										<div className="p-5">
											<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium mb-3">
												<Tag className="w-3 h-3" />
												{news.category}
											</span>

											<h3 className="text-base font-bold text-[#081A4B] mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
												{news.title}
											</h3>

											<div className="flex items-center justify-between pt-3 border-t border-slate-100">
												<span className="flex items-center gap-2 text-xs text-slate-500">
													<Calendar className="w-3.5 h-3.5" />
													{news.date}
												</span>
												<span className="text-sm text-[#081A4B] font-medium">
													Baca
												</span>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</section>
			)}
		</div>
	);
}
