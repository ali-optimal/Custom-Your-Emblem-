import { motion } from "framer-motion";
import headerLogo from "@/assets/header logo.png";

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          <img
            src={headerLogo}
            alt="Loading..."
            className="w-72 md:w-[500px] h-auto object-contain"
          />
        </motion.div>

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
        
        {/* Loading bar */}
        <div className="mt-8 w-48 h-[1px] bg-white/10 mx-auto overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-gradient-to-r from-transparent via-[#6898cc] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
