"use client";

import { useState, useRef } from "react";

export function useNavbarDropdown() {
	// Desktop dropdown
	const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
		null,
	);
	const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

	const handleDesktopEnter = (label: string) => {
		if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
		setOpenDesktopDropdown(label);
	};

	const handleDesktopLeave = () => {
		dropdownTimerRef.current = setTimeout(() => {
			setOpenDesktopDropdown(null);
		}, 150);
	};

	// Mobile dropdown
	const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
		null,
	);

	const toggleMobileDropdown = (label: string) => {
		setOpenMobileDropdown(openMobileDropdown === label ? null : label);
	};

	return {
		openDesktopDropdown,
		handleDesktopEnter,
		handleDesktopLeave,

		openMobileDropdown,
		toggleMobileDropdown,
	};
}
