import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import QuoteSection from "@/components/QuoteSection";
import EmblemDetailsSection from "@/components/EmblemDetailsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <FeaturesSection />
      <WorkSamplesSection />
      <QuoteSection />
      <EmblemDetailsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
