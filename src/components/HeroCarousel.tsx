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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  // Auto-scroll every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  // Reset interval when manually clicking
  const handleClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goToSlide(index);
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  // Get position relative to active (circular) - now showing all 4
  const getPosition = (index: number) => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right-1";
    if (diff === 2) return "right-2";
    if (diff === slides.length - 1) return "left-1";
    return "hidden";
  };

  return (
    <section id="home" className="relative min-h-screen w-full pt-32 pb-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-blue-200/20 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Animated gradient lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[95vw] xl:max-w-[90vw] mx-auto px-2">
        {/* Desktop Gallery - All 4 images visible */}
        <div className="hidden md:flex relative items-center justify-center gap-3 h-[60vh] max-h-[520px]">
          {slides.map((slide, index) => {
            const position = getPosition(index);
            const isActive = position === "center";
            
            // Style based on position - all 4 visible
            let opacity = 1;
            let zIndex = 10;
            let flex = "0.5";
            let height = "75%";
            let grayscale = "60%";
            
            switch (position) {
              case "center":
                opacity = 1;
                zIndex = 30;
                flex = "1.8";
                height = "100%";
                grayscale = "0%";
                break;
              case "left-1":
                opacity = 1;
                zIndex = 20;
                flex = "0.7";
                height = "85%";
                grayscale = "50%";
                break;
              case "right-1":
                opacity = 1;
                zIndex = 20;
                flex = "0.7";
                height = "85%";
                grayscale = "50%";
                break;
              case "right-2":
                opacity = 0.8;
                zIndex = 15;
                flex = "0.5";
                height = "75%";
                grayscale = "70%";
                break;
            }
            
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  flex,
                  height,
                  opacity,
                  zIndex,
                  filter: `grayscale(${grayscale})`,
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: isActive 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)" 
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{
                    transform: isActive ? "scale(1)" : "scale(1.08)",
                    transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    transition: "opacity 0.5s ease-out",
                  }}
                />
                
                {/* Caption - only on active slide */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-5 md:p-7"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(15px)",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s",
                  }}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-body text-xs md:text-sm text-primary tracking-widest uppercase mb-1.5">
                        {slide.subtitle}
                      </p>
                      <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                        {slide.title}
                      </h2>
                    </div>
                    <span className="font-body text-sm text-white/50">
                      {slide.year}
                    </span>
                  </div>
                </div>
                
                {/* Hover overlay for inactive */}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Gallery - Single full-width image */}
        <div className="md:hidden relative h-[55vh] max-h-[450px]">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className="absolute inset-0 overflow-hidden rounded-2xl"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.95)",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: isActive ? 20 : 10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
                }}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Caption */}
                <div 
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(10px)",
                    transition: "all 0.5s ease-out 0.2s",
                  }}
                >
                  <p className="font-body text-xs text-primary tracking-widest uppercase mb-1">
                    {slide.subtitle}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-white leading-tight">
                    {slide.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2.5 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="relative h-2 rounded-full overflow-hidden transition-all duration-400"
              style={{
                width: index === activeIndex ? "40px" : "12px",
                backgroundColor: index === activeIndex ? "hsl(var(--primary))" : "hsl(var(--muted))",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
