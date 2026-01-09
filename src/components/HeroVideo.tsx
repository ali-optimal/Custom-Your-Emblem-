import { useRef, useEffect, useState } from "react";
import heroVideo from "@/assets/hero video.mov";
import { motion } from "framer-motion";

const sentences = [
  "FORGED IN STAINLESS STEEL",
  "DOMINATE THE ROAD",
  "PRECISION CRAFTED. HAND FINISHED.",
  "UNLEASH YOUR VEHICLE'S IDENTITY",
];

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    }
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    if (isTyping) {
      // Typing forward
      if (displayedText.length < currentSentence.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentSentence.slice(0, displayedText.length + 1));
        }, 50); // 50ms per character
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait 2 seconds then move to next sentence
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setDisplayedText("");
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Quick reset before next sentence
      const timeout = setTimeout(() => {
        setIsTyping(true);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, currentSentenceIndex]);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#070b14] border-b border-white/10"
    >
      {/* Premium Navy Top Shadow - Displaying blue background above/over the video */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0f172a] to-transparent z-40 pointer-events-none" />

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none" />
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Video Container - Full Width */}
      <div className="absolute inset-0 z-20">
        <div className="relative w-full h-full">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black z-30">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/60 font-light tracking-wider">Loading Experience...</p>
              </div>
            </div>
          )}
          
          {/* Video Element - Full Width */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

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
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-red-500 to-transparent"
          />
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </section>
  );
};

export default HeroVideo;
