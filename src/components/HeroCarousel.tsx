import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroEmblem1 from "@/assets/hero-emblem-1.jpg";
import heroEmblem2 from "@/assets/hero-emblem-2.jpg";
import heroEmblem3 from "@/assets/hero-emblem-3.jpg";

const slides = [
  {
    image: heroEmblem1,
    title: "Precision Crafted Excellence",
    description: "Every emblem is meticulously designed with premium materials, ensuring your vehicle stands apart from the ordinary.",
  },
  {
    image: heroEmblem2,
    title: "Artisan Craftsmanship",
    description: "Our master craftsmen bring decades of experience to every piece, blending traditional techniques with modern precision.",
  },
  {
    image: heroEmblem3,
    title: "Exclusive Collection",
    description: "From chrome to 24k gold finishes, choose from our curated collection of luxury emblems tailored to your vision.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

          {/* Content */}
          <div className="relative h-full container mx-auto px-6 flex items-center">
            <div className="max-w-2xl">
              <h2
                className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.title}
              </h2>
              <p
                className={`font-body text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed transition-all duration-700 delay-400 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {slide.description}
              </p>
              <div
                className={`transition-all duration-700 delay-500 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <a
                  href="#order"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-luxury rounded-sm font-body font-semibold text-foreground 
                    shadow-luxury hover:shadow-glow transition-all duration-300 hover:scale-105 border border-primary/30"
                >
                  Explore Collection
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/30 backdrop-blur-sm 
          border border-border/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/30 backdrop-blur-sm 
          border border-border/50 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 700);
              }
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-accent"
                : "w-6 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroCarousel;
