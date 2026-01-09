import { motion } from "framer-motion";
import headerLogo from "@/assets/Gemini_Generated_Image_jrw14vjrw14vjrw1 (1).png";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#070b14]"
    >
      <div className="relative">
        {/* Logo with pop and light animation */}
        <div className="relative z-10 w-72 md:w-[500px] h-auto text-center">
          <motion.img
            src={headerLogo}
            alt="Loading..."
            className="w-full h-auto object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.8, ease: "easeOut" },
              filter: {
                duration: 2,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: Infinity
              }
            }}
          />
        </div>

        {/* Drifting Wheel Loading Design */}
        <div className="mt-8 relative w-24 h-24 mx-auto">
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
              <circle cx="50" cy="50" r="45" stroke="#1a1a1a" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="45" stroke="#dc2626" strokeWidth="2" fill="none" strokeDasharray="10 5" />
              <circle cx="50" cy="50" r="32" fill="#2d2d2d" stroke="#dc2626" strokeWidth="1" />
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
              <circle cx="50" cy="50" r="8" fill="#1a1a1a" stroke="#dc2626" strokeWidth="2" />
              <circle cx="50" cy="50" r="3" fill="#dc2626" />
            </svg>
          </motion.div>
        </div>

        {/* Luxurious glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1.2 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-red-600/10 rounded-full blur-[50px]"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
