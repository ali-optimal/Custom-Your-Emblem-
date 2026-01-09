import { motion } from "framer-motion";

const phrases = [
  "Premium Quality Materials",
  "Factory-Perfect Fit",
  "Bespoke Design",
  "Exceeded Expectations",
  "Luxury Quality",
  "Fast Shipping",
  "Excellent Communication",
  "Stunning Finish",
  "Precision Crafted",
  "Review from USA",
  "Review from Germany",
  "Review from Japan"
];

const TestimonialMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50 border-y border-slate-200 py-6 mb-16">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {phrases.map((phrase, index) => (
            <div key={index} className="flex items-center gap-16">
               <span className="text-sm font-display font-medium text-slate-500 uppercase tracking-[0.2em]">
                 {phrase}
               </span>
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {phrases.map((phrase, index) => (
            <div key={index} className="flex items-center gap-16">
               <span className="text-sm font-display font-medium text-slate-500 uppercase tracking-[0.2em]">
                 {phrase}
               </span>
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
