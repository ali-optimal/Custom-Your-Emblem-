import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import heroEmblem1 from "@/assets/396_portfolio.jpg";
import heroEmblem2 from "@/assets/397_portfolio.jpg";
import heroEmblem3 from "@/assets/398_portfolio.jpg";
import heroEmblem4 from "@/assets/46_banners.jpg";
import heroEmblem5 from "@/assets/49_banners.jpg";

const samples = [
  { id: 1, image: heroEmblem1 },
  { id: 2, image: heroEmblem2 },
  { id: 3, image: heroEmblem3 },
  { id: 4, image: heroEmblem4 },
  { id: 5, image: heroEmblem5 },
];

const fonts = [
  "font-display italic tracking-tight capitalize", // Elegant Luxury
  "font-sans font-black italic tracking-tighter uppercase", // Motorsports/Speed
  "font-serif font-bold tracking-widest uppercase", // Vintage Badge
  "font-mono font-medium tracking-tight uppercase", // Modern Tech/Industrial
  "font-display font-black uppercase tracking-[-0.05em]", // Bold Statement
  "font-body font-light tracking-[0.4em] uppercase", // Minimalist Boutique
  "font-serif italic font-light", // Signature/Handcrafted
  "font-sans font-extrabold tracking-[-0.02em] skew-x-[-10deg] uppercase", // Racing/Dynamic
  "font-serif font-semibold tracking-normal", // Classic Heritage
  "font-mono font-bold tracking-widest uppercase", // Precision/Watchmaking
];

const WorkSamplesSection = () => {
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Triple the items to ensure seamless transition even on very wide screens
  const marqueeItems = [...samples, ...samples, ...samples];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative z-10 w-full pt-16">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-slate-200" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-slate-400">
                Our Portfolio
              </span>
              <span className="w-12 h-[1px] bg-slate-200" />
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl lg:text-[120px] font-bold text-slate-900 leading-[0.8] uppercase flex flex-col items-center justify-center md:flex-row md:gap-x-10">
              <span className="tracking-tighter">Work</span>
              <div className="relative inline-block h-[1em] min-w-[300px] md:min-w-[500px] text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={fontIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute inset-0 block ${fonts[fontIndex]} tracking-tighter`}
                  >
                    Samples
                  </motion.span>
                </AnimatePresence>
              </div>
            </h2>
          </motion.div>
        </div>

        {/* Marquee Container - Diagonal Skew */}
        <div className="relative w-full overflow-hidden -rotate-2 scale-105">
          <div className="flex w-full">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{
                x: ["0%", "-33.333%"] // Move by one full set of images (since we have 3 sets)
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {marqueeItems.map((sample, index) => (
                <div 
                  key={`${sample.id}-${index}`} 
                  className="w-[300px] md:w-[450px] lg:w-[600px] flex-shrink-0"
                >
                  <img 
                    src={sample.image} 
                    alt={`Work Sample ${sample.id}`}
                    className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover border-x border-white/10"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSamplesSection;