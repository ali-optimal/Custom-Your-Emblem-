import { useState, useEffect, useCallback, useRef } from "react";
import heroEmblem1 from "@/assets/49_banners.jpg";
import heroEmblem2 from "@/assets/52_banners.jpg";
import heroEmblem3 from "@/assets/46_banners.jpg";
import heroEmblem4 from "@/assets/Screenshot 2026-01-07 144924.png";

const slides = [
  {
    image: heroEmblem1,
    title: "Track Special Emblem in 100% Stainless steel matt finishing installed inside the Ferrari 488 PISTA",
    subtitle: "Ferrari 488 PISTA",
    year: "2024",
  },
  {
    image: heroEmblem2,
    title: "Jayden T Emblem in stainless steel mirror finishing / design done as requested",
    subtitle: "Custom Design",
    year: "2024",
  },
  {
    image: heroEmblem3,
    title: "Electric Emblem in 100% stainless steel installed on his EV 1966 Porsche 912 - design as requested",
    subtitle: "1966 Porsche 912",
    year: "2024",
  },
  {
    image: heroEmblem4,
    title: "Dev Naidu Emblem in 100% Stainless steel matt finishing installed inside the Ferrari",
    subtitle: "Ferrari Custom",
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
    <section id="home" className="relative min-h-screen w-full pt-20 md:pt-32 pb-8 md:pb-16 overflow-hidden bg-black border-b border-white/10">
      {/* Dark background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 w-full max-w-[95vw] xl:max-w-[90vw] mx-auto px-2 mt-12">
        {/* Desktop Gallery - All 4 images visible */}
        <div className="hidden md:flex relative items-center justify-center gap-3 h-[75vh] max-h-[700px]">
          {slides.map((slide, index) => {
            const position = getPosition(index);
            const isActive = position === "center";
            
            // Style based on position - all 4 visible
            let opacity = 1;
            let zIndex = 10;
            let flex = "0.35";
            let height = "55%";
            let grayscale = "60%";
            
            switch (position) {
              case "center":
                opacity = 1;
                zIndex = 30;
                flex = "2.2";
                height = "100%";
                grayscale = "0%";
                break;
              case "left-1":
                opacity = 1;
                zIndex = 20;
                flex = "0.5";
                height = "65%";
                grayscale = "50%";
                break;
              case "right-1":
                opacity = 1;
                zIndex = 20;
                flex = "0.5";
                height = "65%";
                grayscale = "50%";
                break;
              case "right-2":
                opacity = 0.8;
                zIndex = 15;
                flex = "0.35";
                height = "55%";
                grayscale = "70%";
                break;
            }
            
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="relative overflow-hidden rounded-2xl cursor-pointer border-2 border-white/30"
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
                      <p className="font-body text-xs md:text-sm text-white/60 tracking-widest uppercase mb-1.5">
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
        <div className="md:hidden relative h-[65vh] max-h-[550px]">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={index}
                className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-white/30"
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
                  <p className="font-body text-xs text-white/60 tracking-widest uppercase mb-1">
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
              className="relative h-2 rounded-full overflow-hidden transition-all duration-400 border border-white/20"
              style={{
                width: index === activeIndex ? "40px" : "12px",
                backgroundColor: index === activeIndex ? "rgb(104, 152, 204)" : "rgba(255, 255, 255, 0.2)",
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
