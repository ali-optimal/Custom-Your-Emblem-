import { useState, useEffect, useCallback, useRef } from "react";
import heroEmblem1 from "@/assets/hero-emblem-1.jpg";
import heroEmblem2 from "@/assets/hero-emblem-2.jpg";
import heroEmblem3 from "@/assets/hero-emblem-3.jpg";
import heroEmblem4 from "@/assets/hero-emblem-4.jpg";

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
  {
    image: heroEmblem4,
    title: "Modern Elegance",
    subtitle: "Chrome & Blue Metallic",
    year: "2024",
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % slides.length);
    
    // Reset transition lock after animation completes
    transitionRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    
    transitionRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [nextSlide]);

  // Calculate positions for all 4 slides with smooth circular layout
  const getSlideStyles = (index: number) => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    
    // Position mapping: 0 = center, 1 = right, 2 = far right (hidden), 3 = left
    if (diff === 0) {
      // Active center slide
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        zIndex: 30,
        flex: "2.2",
        filter: "grayscale(0%)",
      };
    } else if (diff === 1) {
      // Right side
      return {
        transform: "translateX(5%) scale(0.92)",
        opacity: 0.85,
        zIndex: 20,
        flex: "0.7",
        filter: "grayscale(50%)",
      };
    } else if (diff === slides.length - 1) {
      // Left side
      return {
        transform: "translateX(-5%) scale(0.92)",
        opacity: 0.85,
        zIndex: 20,
        flex: "0.7",
        filter: "grayscale(50%)",
      };
    } else {
      // Hidden (far sides)
      return {
        transform: "translateX(0%) scale(0.85)",
        opacity: 0,
        zIndex: 10,
        flex: "0",
        filter: "grayscale(80%)",
      };
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-white pt-36 pb-16 overflow-hidden">
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Gallery container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 h-[65vh] max-h-[550px]">
          {slides.map((slide, index) => {
            const styles = getSlideStyles(index);
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer will-change-transform"
                style={{
                  transform: styles.transform,
                  opacity: styles.opacity,
                  zIndex: styles.zIndex,
                  flex: styles.flex,
                  filter: styles.filter,
                  height: isActive ? "100%" : "85%",
                  transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  boxShadow: isActive 
                    ? "0 25px 60px -15px rgba(0, 0, 0, 0.35)" 
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(1.05)",
                    transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                />
                
                {/* Overlay gradient for active slide */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transition: "opacity 0.6s ease-out",
                  }}
                />
                
                {/* Caption - only on active slide */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) 0.2s",
                  }}
                >
                  <div className="flex items-end justify-between">
                    <div>
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
              </div>
            );
          })}
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative h-2 rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: index === activeIndex ? "48px" : "16px",
                backgroundColor: index === activeIndex ? "transparent" : "hsl(var(--muted))",
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <span 
                  className="absolute inset-0 bg-primary rounded-full"
                  style={{
                    animation: "expandIndicator 5s linear forwards",
                  }}
                />
              )}
              <span 
                className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes expandIndicator {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
