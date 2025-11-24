import { HeroSection } from "@/app/(homepage)/components/hero-section";
import { AboutSection } from "@/app/(homepage)/components/about-section";
import { CTASection } from "@/app/(homepage)/components/cta-section";
import SolutionPage from "../solution/page";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-slate-50 text-slate-900">
			<HeroSection />
			<AboutSection />
			<SolutionPage />
			<CTASection />
		</main>
	);
}
