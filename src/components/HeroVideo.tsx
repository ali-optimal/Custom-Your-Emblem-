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
                <div className="relative w-24 h-24 mx-auto mb-6">
                  {/* Drifting Smoke/Skid Marks */}
                  <div className="absolute -bottom-2 -left-8 right-0 flex justify-center items-end pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          opacity: [0, 0.4, 0], 
                          scale: [0.5, 1.2, 1.8],
                          x: [-10, -40 - (i * 10)],
                          y: [-5, -15]
                        }}
                        transition={{ 
                          duration: 1.2, 
                          repeat: Infinity, 
                          delay: i * 0.2,
                          ease: "easeOut" 
                        }}
                        className="absolute w-6 h-6 bg-white/20 rounded-full blur-md"
                      />
                    ))}
                  </div>

                  {/* The Wheel */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      x: [0, -1, 1, 0],
                      y: [0, -0.5, 0.5, 0]
                    }}
                    transition={{ 
                      rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                      x: { duration: 0.2, repeat: Infinity },
                      y: { duration: 0.15, repeat: Infinity }
                    }}
                    className="relative z-10 w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                      {/* Tire */}
                      <circle cx="50" cy="50" r="45" stroke="#1a1a1a" strokeWidth="8" fill="none" />
                      <circle cx="50" cy="50" r="45" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                      
                      {/* Rim */}
                      <circle cx="50" cy="50" r="32" fill="#2d2d2d" stroke="#dc2626" strokeWidth="1" />
                      
                      {/* Spokes */}
                      {[0, 60, 120, 180, 240, 300].map((angle) => (
                        <line
                          key={angle}
                          x1="50" y1="50"
                          x2={50 + 30 * Math.cos(angle * Math.PI / 180)}
                          y2={50 + 30 * Math.sin(angle * Math.PI / 180)}
                          stroke="#dc2626"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      ))}
                      
                      {/* Center hub */}
                      <circle cx="50" cy="50" r="8" fill="#1a1a1a" stroke="#dc2626" strokeWidth="2" />
                      <circle cx="50" cy="50" r="3" fill="#dc2626" />
                    </svg>
                  </motion.div>
                </div>
                <p className="text-white/60 font-light tracking-wider uppercase">Unleashing Experience...</p>
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
            preload="auto"
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
