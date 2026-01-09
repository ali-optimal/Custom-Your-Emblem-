import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import heroVideo from "@/assets/hero video (1).mp4";
import heroPoster from "@/assets/hero-emblem-2.jpg";
import { motion, AnimatePresence } from "framer-motion";

const PersistentBackground = () => {
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (videoRef.current) {
      if (isHomePage) {
        videoRef.current.play().catch(e => console.log("Video play failed", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHomePage]);

  return (
    <div 
      className={`fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${
        isHomePage ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      {/* Heavy Blue/Navy Overlay for depth consistent with the site */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/60 via-transparent to-[#070b14] z-10" />
      
      {/* Ambient Blue Glow consistent with Header color */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6898cc]/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={heroPoster}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Loading Wheel - Only shown on initial load of the video */}
      <AnimatePresence>
        {!isLoaded && isHomePage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-[#070b14] z-30 pointer-events-auto"
          >
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute -bottom-2 -left-8 right-0 flex justify-center items-end">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0, 0.4, 0], 
                        scale: [0.5, 1.2, 1.8],
                        x: [-10, -40 - (i * 10)],
                        y: [-5, -15]
                      }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      className="absolute w-6 h-6 bg-white/10 rounded-full blur-md"
                    />
                  ))}
                </div>
                <motion.div
                  animate={{ rotate: 360, x: [0, -1, 1, 0], y: [0, -0.5, 0.5, 0] }}
                  transition={{ 
                    rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
                    x: { duration: 0.2, repeat: Infinity },
                    y: { duration: 0.15, repeat: Infinity }
                  }}
                  className="relative z-10 w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(104,152,204,0.6)]">
                    <circle cx="50" cy="50" r="45" stroke="#111" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="#6898cc" strokeWidth="2" fill="none" strokeDasharray="10 5" />
                    <circle cx="50" cy="50" r="32" fill="#1a1a1a" stroke="#6898cc" strokeWidth="1" />
                    {[0, 60, 120, 180, 240, 300].map((angle) => (
                      <line
                        key={angle}
                        x1="50" y1="50"
                        x2={50 + 30 * Math.cos(angle * Math.PI / 180)}
                        y2={50 + 30 * Math.sin(angle * Math.PI / 180)}
                        stroke="#6898cc"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    ))}
                    <circle cx="50" cy="50" r="8" fill="#111" stroke="#6898cc" strokeWidth="2" />
                    <circle cx="50" cy="50" r="3" fill="#6898cc" />
                  </svg>
                </motion.div>
              </div>
              <p className="text-white/40 text-xs font-light tracking-[0.2em] uppercase">Unleashing Experience</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersistentBackground;
