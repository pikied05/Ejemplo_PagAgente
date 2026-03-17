import { HeroSection } from "../components/HeroSection";
import { SocialProof } from "../components/SocialProof";
import { PainPoint } from "../components/PainPoint";
import { PdfBenefits } from "../components/PdfBenefits";
import { MultiStepForm } from "../components/MultiStepForm";
import { AboutAgent } from "../components/AboutAgent";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export function LandingPage() {
  return (
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <SocialProof />
        <PainPoint />
        <PdfBenefits />
        <MultiStepForm />
        <AboutAgent />
        <Footer />
      </div>
  );
}