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
	};

	const headerClasses = [
		"transition-all duration-500 ease-in-out z-50",
		isScrolled
			? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md text-[#051b5a] shadow-lg"
			: "absolute top-0 left-0 right-0 bg-transparent text-white",
	].join(" ");

	return (
		<>
			{/* Spacer to prevent layout shift when navbar changes height */}
			{isScrolled && <div style={{ height }} />}

			<header ref={headerRef} className={headerClasses}>
				<div className="container mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
					{/* Logo */}
					<Link
						href="/"
						onClick={closeMobileMenu}
						className="inline-flex items-center transition-transform duration-300 hover:scale-105"
					>
						<Image
							src={isScrolled ? "/logo-blue.png" : "/logo-white.png"}
							alt="Reliance Logo"
							width={160}
							height={52}
							priority
							className="h-auto w-auto"
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center gap-8">
						{navLinks.map((link) => {
							const hasSubmenu = link.submenu?.length;

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
											className={`flex items-center gap-1 text-sm font-medium group ${
												isScrolled
													? "text-[#051b5a] hover:text-[#1d2778]"
													: "text-white hover:text-white-200"
											}`}
										>
											{link.label}
											<ChevronDown
												size={16}
												className={`transition-transform ${
													openDesktopDropdown === link.label ? "rotate-180" : ""
												}`}
											/>
										</button>
									) : (
										<Link
											href={link.href}
											className={`text-sm font-medium group ${
												isScrolled
													? "text-[#051b5a] hover:text-[#1d2778]"
													: "text-white hover:text-white-200"
											}`}
										>
											{link.label}
										</Link>
									)}

									{/* Desktop Submenu */}
									{hasSubmenu && (
										<div
											className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border transition-all ${
												openDesktopDropdown === link.label
													? "opacity-100 scale-100 visible translate-y-0"
													: "opacity-0 scale-95 invisible -translate-y-2"
											}`}
										>
											<div className="py-2">
												{link.submenu!.map((sublink) => (
													<Link
														key={sublink.href}
														href={sublink.href}
														className="block px-5 py-3 text-sm text-[#051b5a] hover:bg-blue-50 hover:text-blue-700 transition"
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

						{/* CTA */}
						<Link
							href="/contact"
							className={`ml-4 rounded-full px-6 py-2.5 text-sm font-semibold transition ${
								isScrolled
									? "bg-[#051b5a] text-white"
									: "bg-white text-[#051b5a]"
							}`}
						>
							Hubungi Kami
						</Link>
					</nav>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className={`lg:hidden p-2 rounded-lg border ${
							isScrolled
								? "text-[#051b5a] border-slate-200"
								: "text-white border-white/30"
						}`}
					>
						{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				{/* Mobile Overlay */}
				<div
					className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity ${
						isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
					onClick={toggleMobileMenu}
				/>

				{/* Mobile Panel */}
				<div
					className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white shadow-2xl z-50 transition-transform lg:hidden ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<nav className="flex flex-col p-4 space-y-1">
						{navLinks.map((link) => {
							const hasSubmenu = link.submenu?.length;

							return (
								<div key={link.href}>
									{hasSubmenu ? (
										<>
											<button
												onClick={() => toggleMobileDropdown(link.label)}
												className="flex items-center justify-between w-full py-3 px-3 font-semibold"
											>
												{link.label}
												<ChevronDown
													size={20}
													className={`transition-transform ${
														openMobileDropdown === link.label
															? "rotate-180"
															: ""
													}`}
												/>
											</button>

											<div
												className={`overflow-hidden transition-all ${
													openMobileDropdown === link.label
														? "max-h-[500px]"
														: "max-h-0"
												}`}
											>
												{link.submenu!.map((sublink) => (
													<Link
														key={sublink.href}
														href={sublink.href}
														onClick={closeMobileMenu}
														className="block py-2 pl-6 text-sm"
													>
														{sublink.label}
													</Link>
												))}
											</div>
										</>
									) : (
										<Link
											href={link.href}
											onClick={closeMobileMenu}
											className="block py-3 px-3 font-semibold"
										>
											{link.label}
										</Link>
									)}
								</div>
							);
						})}
					</nav>
				</div>
			</header>
		</>
	);
}
