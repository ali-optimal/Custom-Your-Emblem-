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

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Calculate position for each slide: -1 (left), 0 (center), 1 (right)
  const getPosition = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(slides.length - 1)) return 1;
    if (diff === -1 || diff === slides.length - 1) return -1;
    return diff > 0 ? 2 : -2; // Off-screen
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-white pt-36 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Gallery container */}
        <div className="relative flex items-center justify-center h-[65vh] max-h-[550px]">
          {slides.map((slide, index) => {
            const position = getPosition(index);
            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className="absolute cursor-pointer overflow-hidden rounded-2xl"
                style={{
                  width: isActive ? "55%" : "18%",
                  height: isActive ? "100%" : "75%",
                  transform: `translateX(${position * (isActive ? 0 : position === -1 ? -190 : 190)}%) scale(${isActive ? 1 : 0.95})`,
                  zIndex: isActive ? 10 : 5,
                  opacity: isVisible ? 1 : 0,
                  filter: isActive ? "none" : "grayscale(50%)",
                  boxShadow: isActive 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.35)" 
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                  transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
              >
                {/* Image with Ken Burns effect */}
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{
                    transition: "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: isActive ? "scale(1)" : "scale(1.1)",
                      transition: "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    }}
                  />
                </div>
                
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transition: "opacity 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                />
                
                {/* Caption */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s",
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
                    <span className="font-body text-sm text-white/60 hidden md:block">
                      {slide.year}
                    </span>
                  </div>
                </div>

                {/* Hover overlay for inactive */}
                {!isActive && (
                  <div 
                    className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"
                  />
                )}
              </div>
            );
          })}
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: index === activeIndex ? "48px" : "16px",
                backgroundColor: index === activeIndex ? "hsl(var(--primary))" : "#d1d5db",
              }}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <div 
                  className="absolute inset-0 bg-primary/50 origin-left animate-[progress_5s_linear]"
                  style={{
                    animation: "progress 5s linear forwards",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;
