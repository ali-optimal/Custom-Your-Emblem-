import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "@/assets/Screenshot 2026-01-08 095545.png";
import img2 from "@/assets/Screenshot 2026-01-08 095526.png";
import img3 from "@/assets/49_banners.jpg";

const slides = [
  {
    image: img1,
    mention: "(on the back of your car )",
    description: "Almarzouq Emblem in stainless steel mirror finishing",
  },
  {
    image: img2,
    mention: "(on both sides of your car)",
    description: "Boxrocket Designs in stainless steel matt finishing",
  },
  {
    image: img3,
    mention: "(on your dashboard)",
    description: "Track Special Emblem in Stainless steel matt finishing",
  },
];

const OrdersHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [nextSlide]);

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[5000ms] scale-110"
            style={{ 
              backgroundImage: `url(${slides[activeIndex].image})`,
              transform: "scale(1.05)"
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body text-white font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4"
            >
              {slides[activeIndex].mention}
            </motion.span>
            
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-heading text-3xl md:text-5xl lg:text-7xl text-white font-extrabold max-w-5xl leading-tight"
            >
              {slides[activeIndex].description}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default OrdersHero;
