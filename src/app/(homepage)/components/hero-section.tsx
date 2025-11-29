"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroContent = [
	{
		id: 1,
		title: "Solusi Bisnis Terbaik",
		subtitle: "bagi Pengusaha Baru",
		description:
			"Membantu Anda memulai usaha dengan lebih percaya diri melalui layanan dan dukungan yang relevan untuk tahap awal bisnis.",
	},
	{
		id: 2,
		title: "Pembiayaan tepat",
		subtitle: "bagi UMKM",
		description:
			"Memberikan akses permodalan yang mudah dan terjangkau agak UMKM dapat berkembang, bertumbuh, dan memperluas peluang.",
	},
];

export const HeroSection = () => {
	const [headerHeight, setHeaderHeight] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const header = document.getElementById("site-header");

		const measure = () => {
			if (header) setHeaderHeight(header.getBoundingClientRect().height || 0);
		};

		measure();
		window.addEventListener("resize", measure);
		window.addEventListener("load", measure);
		return () => {
			window.removeEventListener("resize", measure);
			window.removeEventListener("load", measure);
		};
	}, []);

	// Auto-slide carousel
	useEffect(() => {
		const timer = setInterval(() => {
			nextSlide();
		}, 3000); // Change slide every 6 seconds

		return () => clearInterval(timer);
	}, [currentSlide]);

	const nextSlide = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentSlide((prev) => (prev + 1) % heroContent.length);
		setTimeout(() => setIsAnimating(false), 800);
	};

	const prevSlide = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setCurrentSlide(
			(prev) => (prev - 1 + heroContent.length) % heroContent.length,
		);
		setTimeout(() => setIsAnimating(false), 800);
	};

	const goToSlide = (index: number) => {
		if (isAnimating || index === currentSlide) return;
		setIsAnimating(true);
		setCurrentSlide(index);
		setTimeout(() => setIsAnimating(false), 800);
	};

	return (
		<section className="relative">
			<div
				className="relative w-full overflow-hidden"
				style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
			>
				{/* Background Image */}
				<Image
					src="/reliance-office.jpg"
					alt="hero"
					fill
					priority
					className="object-cover object-center"
				/>

				{/* Overlay with Gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#021859e6] to-[#021859cc]" />

				{/* Content */}
				<div className="absolute inset-0 container mx-auto flex flex-col items-center justify-center px-6 text-center">
					{/* Carousel Content */}
					<div className="relative w-full max-w-4xl">
						{heroContent.map((content, index) => (
							<div
								key={content.id}
								className={`transition-all duration-700 ${
									index === currentSlide
										? "opacity-100 translate-y-0"
										: "opacity-0 absolute inset-0 translate-y-8 pointer-events-none"
								}`}
							>
								<h1 className="text-white text-4xl md:text-6xl font-serif leading-tight drop-shadow-lg">
									{content.title}
									<br />
									{content.subtitle}
								</h1>

								<p className="text-slate-200 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
									{content.description}
								</p>
							</div>
						))}
					</div>

					{/* CTA Button */}
					{/* <div className="mt-16 md:mt-24 relative z-10">
						<Link
							href="/contact"
							className="inline-block rounded-full bg-white text-[#14264A] px-8 py-3 md:px-10 md:py-4 font-semibold shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300"
						>
							Hubungi Kami
						</Link>
					</div> */}

					{/* Carousel Navigation */}
					<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
						{/* Previous Button */}
						<button
							onClick={prevSlide}
							disabled={isAnimating}
							className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Previous slide"
						>
							<ChevronLeft className="w-5 h-5" />
						</button>

						{/* Dots Indicator */}
						<div className="flex gap-2">
							{heroContent.map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									disabled={isAnimating}
									className={`transition-all duration-300 rounded-full ${
										index === currentSlide
											? "w-8 h-2 bg-white"
											: "w-2 h-2 bg-white/40 hover:bg-white/60"
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>

						{/* Next Button */}
						<button
							onClick={nextSlide}
							disabled={isAnimating}
							className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Next slide"
						>
							<ChevronRight className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
