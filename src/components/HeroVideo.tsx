import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sentences = [
  "FORGED IN Chrome",
  "DOMINATE THE ROAD",
  "PRECISION CRAFTED.",
  "UNLEASH YOUR VEHICLE'S IDENTITY",
];

const HeroVideo = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    if (isTyping) {
      if (displayedText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayedText("");
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, currentSentenceIndex]);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent border-b border-white/10"
    >
      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full">
        {/* Typing Text Overlay - Center Left */}
        <div className="absolute top-[42%] -translate-y-1/2 left-0 z-30 px-8 md:px-16 lg:px-24 w-full">
          <div className="text-left">
            <h1 
              className="text-4xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter uppercase opacity-100 max-w-sm md:max-w-5xl leading-[0.85] italic"
            >
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Luxurious scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-40">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center gap-4"
        >
          <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
          <p className="text-white/60 text-[9px] font-bold uppercase tracking-[0.5em] italic">Start Your Build</p>
          <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
        </motion.div>
        
        <div className="relative h-16 w-px overflow-hidden bg-white/10">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#6898cc]/30 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
