"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "./navbar-links";
import { useNavbarDropdown } from "./use-navbar-dropdown";
import { useNavbarScroll } from "./use-navbar-scroll";

export function Navbar() {
	const { isScrolled, headerRef, height } = useNavbarScroll();
	const {
		openDesktopDropdown,
		handleDesktopEnter,
		handleDesktopLeave,
		openMobileDropdown,
		toggleMobileDropdown,
	} = useNavbarDropdown();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		if (!isMobileMenuOpen) {
			// Reset mobile dropdown when opening menu
			toggleMobileDropdown("");
		}
	};

	// Prevent background scroll when mobile menu open
	useEffect(() => {
		document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		toggleMobileDropdown("");
	};

	const headerClasses = [
		"transition-all duration-500 ease-in-out z-50",
		isScrolled
			? "fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-lg text-[#051b5a] shadow-xl border-b border-slate-100"
			: "absolute top-0 left-0 right-0 bg-transparent text-white",
	].join(" ");

	return (
		<>
			{/* Spacer to prevent layout shift when navbar changes height */}
			{isScrolled && <div style={{ height }} aria-hidden="true" />}

			<header ref={headerRef} className={headerClasses}>
				<div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
					{/* Logo */}
					<Link
						href="/"
						onClick={closeMobileMenu}
						className="relative inline-flex items-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg z-10"
					>
						<Image
							src={isScrolled ? "/logo-blue.png" : "/logo-white.png"}
							alt="Reliance Modal Ventura"
							width={160}
							height={52}
							priority
							className="h-auto w-auto"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav
						className="hidden lg:flex items-center gap-8"
						aria-label="Main navigation"
					>
						{navLinks.map((link) => {
							const hasSubmenu = link.submenu && link.submenu.length > 0;

							return (
								<div
									key={link.href}
									className="relative"
									onMouseEnter={() =>
										hasSubmenu && handleDesktopEnter(link.label)
									}
									onMouseLeave={handleDesktopLeave}
								>
									{hasSubmenu ? (
										<button
											aria-expanded={openDesktopDropdown === link.label}
											aria-haspopup="true"
											className={`relative flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 py-2 px-1 group ${
												isScrolled
													? "text-[#051b5a] hover:text-blue-700"
													: "text-white hover:text-blue-100"
											}`}
										>
											<span className="relative">
												{link.label}
												<span
													className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
														isScrolled ? "bg-blue-700" : "bg-white"
													}`}
												></span>
											</span>
											<ChevronDown
												size={16}
												className={`transition-all duration-300 ${
													openDesktopDropdown === link.label ? "rotate-180" : ""
												}`}
											/>
										</button>
									) : (
										<Link
											href={link.href}
											className={`relative text-sm font-semibold transition-all duration-300 py-2 px-1 group ${
												isScrolled
													? "text-[#051b5a] hover:text-blue-700"
													: "text-white hover:text-blue-100"
											}`}
										>
											<span className="relative">
												{link.label}
												<span
													className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
														isScrolled ? "bg-blue-700" : "bg-white"
													}`}
												></span>
											</span>
										</Link>
									)}

									{/* Desktop Submenu */}
									{hasSubmenu && (
										<div
											className={`absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-top ${
												openDesktopDropdown === link.label
													? "opacity-100 scale-100 visible translate-y-0"
													: "opacity-0 scale-95 invisible -translate-y-2 pointer-events-none"
											}`}
											role="menu"
										>
											<div className="py-2">
												{link.submenu!.map((sublink, index) => (
													<Link
														key={sublink.href}
														href={sublink.href}
														role="menuitem"
														className="group/item flex items-center justify-between px-5 py-3 text-sm font-medium text-[#051b5a] hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-1"
														style={{
															transitionDelay: `${index * 30}ms`,
														}}
													>
														<span>{sublink.label}</span>
														<ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							);
						})}

						{/* CTA Button */}
						<Link
							href="/contact"
							className={`ml-4 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
								isScrolled
									? "bg-[#051b5a] text-white hover:bg-blue-900 focus:ring-blue-500 shadow-md"
									: "bg-white text-[#051b5a] hover:bg-blue-50 focus:ring-white shadow-lg"
							}`}
						>
							Hubungi Kami
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
						aria-expanded={isMobileMenuOpen}
						className={`lg:hidden p-2.5 rounded-xl border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10 ${
							isScrolled
								? "text-[#051b5a] border-slate-200 hover:bg-slate-50 hover:border-[#051b5a] focus:ring-blue-500"
								: "text-white border-white/40 hover:bg-white/10 hover:border-white focus:ring-white"
						}`}
					>
						{isMobileMenuOpen ? (
							<X
								size={22}
								className="transition-transform duration-300 rotate-90"
							/>
						) : (
							<Menu size={22} className="transition-transform duration-300" />
						)}
					</button>
				</div>

				{/* Mobile Overlay */}
				<div
					className={`fixed inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300 ${
						isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
					onClick={toggleMobileMenu}
					aria-hidden="true"
				/>

				{/* Mobile Panel */}
				<div
					className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white shadow-2xl z-50 transition-transform duration-300 ease-out lg:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					{/* Mobile Header */}
					<div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50">
						<Image
							src="/logo-blue.png"
							alt="Reliance Modal Ventura"
							width={140}
							height={45}
							className="h-auto w-auto"
						/>
						<button
							onClick={toggleMobileMenu}
							aria-label="Tutup menu"
							className="p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-200 hover:rotate-90"
						>
							<X size={24} className="text-[#051b5a]" />
						</button>
					</div>

					{/* Mobile Navigation */}
					<nav
						className="flex flex-col p-5 space-y-2 overflow-y-auto"
						style={{ maxHeight: "calc(100vh - 180px)" }}
						aria-label="Mobile navigation"
					>
						{navLinks.map((link, linkIndex) => {
							const hasSubmenu = link.submenu && link.submenu.length > 0;

							return (
								<div
									key={link.href}
									className="animate-slideIn"
									style={{
										animationDelay: `${linkIndex * 50}ms`,
										animationFillMode: "both",
									}}
								>
									{hasSubmenu ? (
										<>
											<button
												onClick={() => toggleMobileDropdown(link.label)}
												aria-expanded={openMobileDropdown === link.label}
												className="flex items-center justify-between w-full py-3.5 px-4 font-bold text-[#051b5a] rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200 text-left"
											>
												<span>{link.label}</span>
												<ChevronDown
													size={20}
													className={`transition-transform duration-300 flex-shrink-0 ${
														openMobileDropdown === link.label
															? "rotate-180"
															: ""
													}`}
												/>
											</button>

											<div
												className={`overflow-hidden transition-all duration-300 ease-in-out ${
													openMobileDropdown === link.label
														? "max-h-[500px] opacity-100 mt-1"
														: "max-h-0 opacity-0"
												}`}
											>
												<div className="pl-4 py-1 space-y-1">
													{link.submenu!.map((sublink) => (
														<Link
															key={sublink.href}
															href={sublink.href}
															onClick={closeMobileMenu}
															className="block py-2.5 px-4 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
														>
															{sublink.label}
														</Link>
													))}
												</div>
											</div>
										</>
									) : (
										<Link
											href={link.href}
											onClick={closeMobileMenu}
											className="flex items-center justify-between w-full py-3.5 px-4 font-bold text-[#051b5a] rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-200"
										>
											<span>{link.label}</span>
										</Link>
									)}
								</div>
							);
						})}
					</nav>

					{/* Mobile CTA */}
					<div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 bg-white shadow-lg">
						<Link
							href="/contact"
							onClick={closeMobileMenu}
							className="block w-full text-center rounded-full px-6 py-3.5 text-sm font-bold bg-[#051b5a] text-white shadow-lg hover:bg-blue-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
						>
							Hubungi Kami
						</Link>
					</div>
				</div>
			</header>

			<style jsx>{`
				@keyframes slideIn {
					from {
						opacity: 0;
						transform: translateX(20px);
					}
					to {
						opacity: 1;
						transform: translateX(0);
					}
				}

				.animate-slideIn {
					animation: slideIn 0.3s ease-out;
				}
			`}</style>
		</>
	);
}
