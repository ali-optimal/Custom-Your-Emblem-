import { useState, useEffect, useCallback } from "react";
import heroEmblem1 from "@/assets/hero-emblem-1.jpg";
import heroEmblem2 from "@/assets/hero-emblem-2.jpg";
import heroEmblem3 from "@/assets/hero-emblem-3.jpg";

const slides = [
  {
    image: heroEmblem1,
    title: "Precision Crafted Excellence",
    subtitle: "Premium Materials",
    year: "2024",
  },
  {
    image: heroEmblem2,
    title: "Artisan Craftsmanship",
    subtitle: "Traditional Techniques",
    year: "2024",
  },
  {
    image: heroEmblem3,
    title: "Exclusive Collection",
    subtitle: "24K Gold Finishes",
    year: "2024",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get indices for the 3 visible slides
  const getVisibleIndices = () => {
    const prev = (activeIndex - 1 + slides.length) % slides.length;
    const next = (activeIndex + 1) % slides.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#f5f0eb] pt-28 pb-16 overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-6">
        {/* Gallery container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 h-[70vh] max-h-[600px]">
          {visibleIndices.map((slideIndex, position) => {
            const slide = slides[slideIndex];
            const isActive = position === 1;
            
            return (
              <div
                key={slideIndex}
                onClick={() => setActiveIndex(slideIndex)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ease-out ${
                  isActive 
                    ? "flex-[2] h-full" 
                    : "flex-[0.5] h-[85%] grayscale hover:grayscale-0"
                }`}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "scale-100" : "scale-110"
                  }`}
                />
                
                {/* Overlay gradient for active slide */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                )}
                
                {/* Caption - only on active slide */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-end justify-between">
                      <div className="transform transition-all duration-500 delay-200">
                        <p className="font-body text-sm text-white/80 tracking-widest uppercase mb-2">
                          {slide.subtitle}
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                          {slide.title}
                        </h2>
                      </div>
                      <span className="font-body text-sm text-white/60">
                        {slide.year}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Subtle overlay for inactive slides */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                )}
              </div>
            );
          })}
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 bg-primary"
                  : "w-4 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
