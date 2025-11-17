import { HeroSection } from "@/app/(homepage)/components/hero-section";
import { AboutSection } from "@/app/(homepage)/components/about-section";
import { SolutionSection } from "@/app/(homepage)/components/solution-section";
import { CTASection } from "@/app/(homepage)/components/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">     
     <HeroSection />
     <AboutSection />
     <SolutionSection />
     <CTASection />
    </main>
  );
}
