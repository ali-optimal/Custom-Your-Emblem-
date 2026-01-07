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
      
      {/* Placeholder sections for future development */}
      <section id="testimonials" className="min-h-[50vh] bg-secondary/20" />
      <section id="order" className="min-h-[50vh]" />
      <section id="gallery" className="min-h-[50vh] bg-secondary/20" />
      <section id="faq" className="min-h-[50vh]" />
      <section id="contact" className="min-h-[50vh] bg-secondary/20" />
      
      <Footer />
    </div>
  );
};

export default Index;
