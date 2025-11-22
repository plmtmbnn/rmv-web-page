"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useNavbarScroll() {
	const pathname = usePathname();
	const headerRef = useRef<HTMLElement | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const header = headerRef.current;
		if (!header) return;

		const updateHeight = () => {
			setHeight(header.getBoundingClientRect().height);
		};

		updateHeight();

		// Halaman home
		const isHome =
			pathname === "/" || pathname === "/home" || pathname === "/beranda";

		if (!isHome) {
			// Force scrolled untuk semua halaman selain home
			setIsScrolled(true);
			return;
		}

		// Jika halaman home → pakai scroll behavior
		const onScroll = () => {
			setIsScrolled(window.scrollY > 40);
		};

		onScroll();

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", updateHeight);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", updateHeight);
		};
	}, [pathname]);

	return { isScrolled, headerRef, height };
}
