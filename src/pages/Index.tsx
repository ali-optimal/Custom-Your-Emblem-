import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      
      {/* Placeholder sections for future development */}
      <section id="testimonials" className="min-h-[50vh] bg-secondary/20" />
      <section id="order" className="min-h-[50vh]" />
      <section id="gallery" className="min-h-[50vh] bg-secondary/20" />
      <section id="faq" className="min-h-[50vh]" />
      <section id="contact" className="min-h-[50vh] bg-secondary/20" />
    </div>
  );
};

export default Index;
