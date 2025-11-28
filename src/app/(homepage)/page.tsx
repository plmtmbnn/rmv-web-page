import SolutionPage from "../solution/page";
import { AboutSection } from "./components/about-section";
import { CTASection } from "./components/cta-section";
import { HeroSection } from "./components/hero-section";

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
