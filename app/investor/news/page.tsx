"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Tag, Search } from "lucide-react";
import { newsData } from "./news-list";
import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const categories = ["Semua", "Investasi", "Keuangan", "Kemitraan", "Program", "Penghargaan"];
const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	
	// Get initial values from URL
	const initialCategory = searchParams.get('category') || 'Semua';
	const initialSearch = searchParams.get('search') || '';
	
	const [selectedCategory, setSelectedCategory] = useState(initialCategory);
	const [searchQuery, setSearchQuery] = useState(initialSearch);
	const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

	// Filter and search news
	const filteredNews = useMemo(() => {
		return newsData.filter((news) => {
			const matchesCategory = selectedCategory === "Semua" || news.category === selectedCategory;
			const matchesSearch = searchQuery === '' || 
				news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
			
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchQuery]);

	// Get visible news items
	const displayedNews = filteredNews.slice(0, visibleItems);
	const hasMore = visibleItems < filteredNews.length;

	// Update URL when filters change
	const updateURL = (category: string, search: string) => {
		const params = new URLSearchParams();
		if (category !== 'Semua') params.set('category', category);
		if (search) params.set('search', search);
		
		const queryString = params.toString();
		router.push(queryString ? `/investor/news?${queryString}` : '/investor/news', { scroll: false });
	};

	// Handle category change
	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setVisibleItems(ITEMS_PER_PAGE);
		updateURL(category, searchQuery);
	};

	// Handle search
	const handleSearchChange = (value: string) => {
		setSearchQuery(value);
		setVisibleItems(ITEMS_PER_PAGE);
		updateURL(selectedCategory, value);
	};

	// Load more
	const handleLoadMore = () => {
		setVisibleItems(prev => prev + ITEMS_PER_PAGE);
	};

	// Reset filters
	const handleReset = () => {
		setSelectedCategory('Semua');
		setSearchQuery('');
		setVisibleItems(ITEMS_PER_PAGE);
		router.push('/investor/news');
	};

	return (
		<div className="bg-white min-h-screen">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
				
				{/* Header */}
				<div className="mb-12 pb-8 border-b border-slate-200">
					<h1 className="text-3xl md:text-4xl font-bold text-[#081A4B] mb-3">
						Berita & Artikel
					</h1>
					<p className="text-slate-600 text-lg max-w-2xl">
						Informasi terkini seputar investasi, kemitraan, dan perkembangan perusahaan.
					</p>
					
					{/* Stats */}
					<div className="mt-6 flex items-center gap-4 text-sm">
						<span className="text-slate-600">
							Menampilkan <span className="font-semibold text-[#081A4B]">{displayedNews.length}</span> dari <span className="font-semibold text-[#081A4B]">{filteredNews.length}</span> berita
						</span>
						{(selectedCategory !== 'Semua' || searchQuery) && (
							<button
								onClick={handleReset}
								className="text-[#081A4B] hover:underline font-medium"
							>
								Reset Filter
							</button>
						)}
					</div>
				</div>

				{/* Search and Filter Bar */}
				<div className="mb-10 space-y-6">
					{/* Search Input */}
					<div className="relative max-w-md">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
						<input
							type="text"
							placeholder="Cari berita..."
							value={searchQuery}
							onChange={(e) => handleSearchChange(e.target.value)}
							className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#081A4B] focus:border-transparent transition-all text-gray-900"
						/>
					</div>

					{/* Category Filter */}
					<div className="flex items-center gap-3 flex-wrap">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryChange(category)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
									category === selectedCategory
										? "bg-[#081A4B] text-white shadow-md"
										: "bg-slate-100 text-slate-700 hover:bg-slate-200"
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Featured News - First Item (only if showing all or matches filter) */}
				{displayedNews.length > 0 && selectedCategory === "Semua" && !searchQuery && (
					<div className="mb-12">
						<Link
							href={`/investor/news/${newsData[0].slug}`}
							className="group block overflow-hidden rounded-2xl border border-slate-200 hover:border-[#081A4B] hover:shadow-xl transition-all duration-300"
						>
							<div className="grid grid-cols-1 lg:grid-cols-2">
								{/* Image */}
								<div className="relative h-64 lg:h-auto overflow-hidden bg-slate-100">
									<Image
										src={newsData[0].image}
										alt={newsData[0].title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
								</div>

								{/* Content */}
								<div className="p-8 lg:p-10 flex flex-col justify-center">
									<div className="flex items-center gap-4 mb-4">
										<span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-[#081A4B] rounded-full text-xs font-semibold">
											<Tag className="w-3 h-3" />
											{newsData[0].category}
										</span>
										<span className="flex items-center gap-2 text-sm text-slate-500">
											<Calendar className="w-4 h-4" />
											{newsData[0].date}
										</span>
									</div>

									<h2 className="text-2xl md:text-3xl font-bold text-[#081A4B] mb-4 group-hover:text-blue-700 transition-colors">
										{newsData[0].title}
									</h2>

									<p className="text-slate-600 leading-relaxed mb-6">
										{newsData[0].excerpt}
									</p>

									<div className="inline-flex items-center gap-2 text-[#081A4B] font-medium group-hover:gap-3 transition-all">
										Baca Selengkapnya
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</div>
						</Link>
					</div>
				)}

				{/* News Grid */}
				{displayedNews.length > 0 ? (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
							{displayedNews
								.slice(selectedCategory === "Semua" && !searchQuery ? 1 : 0)
								.map((news, index) => (
									<Link
										key={news.slug}
										href={`/investor/news/${news.slug}`}
										className="group block overflow-hidden rounded-xl border border-slate-200 hover:border-[#081A4B] hover:shadow-lg transition-all duration-300"
										style={{
											animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
										}}
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
										<div className="p-6">
											<div className="flex items-center gap-3 mb-3">
												<span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
													<Tag className="w-3 h-3" />
													{news.category}
												</span>
											</div>

											<h3 className="text-lg font-bold text-[#081A4B] mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
												{news.title}
											</h3>

											<p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
												{news.excerpt}
											</p>

											<div className="flex items-center justify-between pt-4 border-t border-slate-100">
												<span className="flex items-center gap-2 text-xs text-slate-500">
													<Calendar className="w-3.5 h-3.5" />
													{news.date}
												</span>
												<span className="inline-flex items-center gap-1 text-sm text-[#081A4B] font-medium group-hover:gap-2 transition-all">
													Baca
													<ArrowRight className="w-3.5 h-3.5" />
												</span>
											</div>
										</div>
									</Link>
								))}
						</div>

						{/* Load More Button */}
						{hasMore && (
							<div className="mt-12 text-center">
								<button 
									onClick={handleLoadMore}
									className="px-8 py-3 bg-[#081A4B] text-white rounded-full font-medium hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg"
								>
									Muat {Math.min(ITEMS_PER_PAGE, filteredNews.length - visibleItems)} Berita Lagi
								</button>
							</div>
						)}
					</>
				) : (
					/* Empty State */
					<div className="text-center py-16">
						<div className="inline-flex p-4 bg-slate-100 rounded-full mb-4">
							<Search className="w-8 h-8 text-slate-400" />
						</div>
						<h3 className="text-xl font-bold text-slate-800 mb-2">
							Tidak ada berita ditemukan
						</h3>
						<p className="text-slate-600 mb-6">
							Coba ubah kata kunci pencarian atau filter kategori Anda
						</p>
						<button
							onClick={handleReset}
							className="px-6 py-2 bg-[#081A4B] text-white rounded-full font-medium hover:bg-blue-900 transition-colors"
						>
							Reset Filter
						</button>
					</div>
				)}
			</div>

			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			`}</style>
		</div>
	);
}