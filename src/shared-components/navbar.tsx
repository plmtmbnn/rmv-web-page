"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
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

export function Navbar() {
	const pathname = usePathname();
	console.log(
		pathname,
		!!(pathname === "/" || pathname === "/home" || pathname === "/beranda"),
	);

	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
		null,
	);
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
		null,
	);
	const headerRef = useRef<HTMLElement | null>(null);
	const [height, setHeight] = useState(0);
	const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;

		setHeight(header.getBoundingClientRect().height);

		const onScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};

		onScroll();

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", () => {
			if (header) setHeight(header.getBoundingClientRect().height);
		});

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", () => {});
		};
	}, []);

	useEffect(() => {
		if (isScrolled && isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	}, [isScrolled, isMobileMenuOpen]);

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const headerClasses = [
		"transition-all duration-500 ease-in-out z-50",
		isScrolled
			? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md text-[#051b5a] shadow-lg"
			: "absolute top-0 left-0 right-0 bg-transparent text-white",
	].join(" ");

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		setOpenMobileDropdown(null);
	};

	const toggleMobileDropdown = (label: string) => {
		setOpenMobileDropdown(openMobileDropdown === label ? null : label);
	};

	const handleDesktopMouseEnter = (label: string) => {
		if (dropdownTimerRef.current) {
			clearTimeout(dropdownTimerRef.current);
		}
		setOpenDesktopDropdown(label);
	};

	const handleDesktopMouseLeave = () => {
		dropdownTimerRef.current = setTimeout(() => {
			setOpenDesktopDropdown(null);
		}, 200);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setOpenMobileDropdown(null);
	};

	return (
		<>
			{isScrolled && <div style={{ height }} aria-hidden="true" />}

			<header ref={headerRef} className={headerClasses}>
				<div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
					{/* Logo */}
					<div className="flex items-center gap-4">
						<Link
							href="/"
							className="inline-flex items-center transition-transform duration-300 hover:scale-105"
							onClick={closeMobileMenu}
						>
							{!isScrolled ? (
								<Image
									src="/logo-white.png"
									alt="Reliance Logo"
									width={160}
									height={52}
									priority
									className="h-auto w-auto"
								/>
							) : (
								<Image
									src="/logo-blue.png"
									alt="Reliance Logo"
									width={160}
									height={52}
									priority
									className="h-auto w-auto"
								/>
							)}
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => {
							const hasSubmenu = link.submenu && link.submenu.length > 0;

							return (
								<div
									key={link.href}
									className="relative"
									onMouseEnter={() =>
										hasSubmenu && handleDesktopMouseEnter(link.label)
									}
									onMouseLeave={handleDesktopMouseLeave}
								>
									{hasSubmenu ? (
										// Menu item with submenu
										<button
											className={`flex items-center gap-1 text-sm font-medium transition-all duration-300 relative group ${
												isScrolled
													? "text-[#051b5a] hover:text-[#1d2778]"
													: "text-white hover:text-white-200"
											}`}
										>
											{link.label}
											<ChevronDown
												size={16}
												className={`transition-transform duration-300 ${
													openDesktopDropdown === link.label ? "rotate-180" : ""
												}`}
											/>
											<span
												className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
													isScrolled ? "bg-[#eb3527]" : "bg-[#ed3424]"
												}`}
											></span>
										</button>
									) : (
										// Direct link without submenu
										<Link
											href={link.href}
											className={`text-sm font-medium transition-all duration-300 relative group ${
												isScrolled
													? "text-[#051b5a] hover:text-[#1d2778]"
													: "text-white hover:text-white-200"
											}`}
										>
											{link.label}
											<span
												className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
													isScrolled ? "bg-[#eb3527]" : "bg-[#ed3424]"
												}`}
											></span>
										</Link>
									)}

									{/* Desktop Dropdown */}
									{hasSubmenu && (
										<div
											className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top ${
												openDesktopDropdown === link.label
													? "opacity-100 scale-100 visible translate-y-0"
													: "opacity-0 scale-95 invisible -translate-y-2"
											}`}
										>
											<div className="py-2">
												{link.submenu?.map((sublink, index) => (
													<Link
														key={sublink.href}
														href={sublink.href}
														className="block px-5 py-3 text-sm text-[#051b5a] hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-blue-700 transition-all duration-200 transform hover:translate-x-1"
														style={{
															transitionDelay: `${index * 30}ms`,
														}}
													>
														{sublink.label}
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
							className={`ml-4 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
								isScrolled
									? "bg-[#051b5a] text-white hover:bg-blue-700"
									: "bg-white text-[#051b5a] hover:bg-blue-50"
							}`}
						>
							Hubungi Kami
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<div className="lg:hidden">
						<button
							onClick={toggleMobileMenu}
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMobileMenuOpen}
							className={`p-2 rounded-lg border transition-all duration-300 hover:scale-110 ${
								isScrolled
									? "text-[#051b5a] border-slate-200 hover:bg-slate-50"
									: "text-white border-white/30 hover:bg-white/10"
							}`}
						>
							{isMobileMenuOpen ? (
								<X size={22} aria-hidden="true" />
							) : (
								<Menu size={22} aria-hidden="true" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
						isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
					onClick={toggleMobileMenu}
					aria-hidden="true"
				/>

				{/* Mobile Menu Panel */}
				<div
					className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className="flex flex-col h-full">
						{/* Mobile Menu Header */}
						<div className="flex items-center justify-between p-5 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white">
							<Image
								src="/logo-blue.png"
								alt="Reliance Logo"
								width={130}
								height={42}
								className="h-auto w-auto"
							/>
							<button
								onClick={toggleMobileMenu}
								aria-label="Close menu"
								className="p-2 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:rotate-90"
							>
								<X size={24} className="text-[#051b5a]" />
							</button>
						</div>

						{/* Mobile Menu Links */}
						<nav className="flex flex-col p-4 space-y-1 flex-1 overflow-y-auto">
							{navLinks.map((link) => {
								const hasSubmenu = link.submenu && link.submenu.length > 0;

								return (
									<div key={link.href}>
										{hasSubmenu ? (
											// Menu item with submenu
											<>
												<button
													onClick={() => toggleMobileDropdown(link.label)}
													className="flex items-center justify-between w-full text-[#051b5a] text-base font-semibold hover:text-blue-600 transition-all duration-200 py-3 px-3 rounded-lg hover:bg-blue-50"
												>
													<span>{link.label}</span>
													<ChevronDown
														size={20}
														className={`transition-transform duration-300 ${
															openMobileDropdown === link.label
																? "rotate-180"
																: ""
														}`}
													/>
												</button>

												{/* Mobile Dropdown */}
												<div
													className={`overflow-hidden transition-all duration-300 ease-in-out ${
														openMobileDropdown === link.label
															? "max-h-[600px] opacity-100 mt-1"
															: "max-h-0 opacity-0"
													}`}
												>
													<div className="pl-4 py-1 space-y-0.5">
														{link.submenu?.map((sublink) => (
															<Link
																key={sublink.href}
																href={sublink.href}
																onClick={closeMobileMenu}
																className="block text-slate-600 text-sm hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-2.5 px-4 rounded-lg transform hover:translate-x-1"
															>
																{sublink.label}
															</Link>
														))}
													</div>
												</div>
											</>
										) : (
											// Direct link without submenu
											<Link
												href={link.href}
												onClick={closeMobileMenu}
												className="flex items-center justify-between w-full text-[#051b5a] text-base font-semibold hover:text-blue-600 transition-all duration-200 py-3 px-3 rounded-lg hover:bg-blue-50"
											>
												<span>{link.label}</span>
											</Link>
										)}
									</div>
								);
							})}
						</nav>

						{/* Mobile CTA Button */}
						<div className="p-5 border-t border-slate-200 bg-gradient-to-r from-blue-50 to-white">
							<Link
								href="/contact"
								onClick={closeMobileMenu}
								className="block w-full text-center rounded-full px-6 py-3.5 text-sm font-semibold bg-[#051b5a] text-white shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							>
								Hubungi Kami
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
