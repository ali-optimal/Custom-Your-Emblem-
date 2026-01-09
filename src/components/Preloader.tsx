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

        {/* Luxurious glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.6, scale: 1.2 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-[#6898cc]/20 rounded-full blur-[50px]"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
