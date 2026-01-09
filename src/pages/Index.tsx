import Header from "@/components/Header";
import HeroVideo from "@/components/HeroVideo";
import FeaturesSection from "@/components/FeaturesSection";
import WorkSamplesSection from "@/components/WorkSamplesSection";
import QuoteSection from "@/components/QuoteSection";
import EmblemDetailsSection from "@/components/EmblemDetailsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Header />
      <HeroVideo />
      <FeaturesSection />
      <WorkSamplesSection />
      <QuoteSection />
      <EmblemDetailsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
