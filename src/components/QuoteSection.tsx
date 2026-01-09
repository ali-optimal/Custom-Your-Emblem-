import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const QuoteSection = () => {
  const quote = "Remember that a person's name is, to that person, the sweetest and most important sound in any language.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Start typing after a short delay or when in view
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isTyping && displayedText.length < quote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(quote.slice(0, displayedText.length + 1));
      }, 40); // Slightly faster typing for longer quote
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, quote]);

  return (
    <section className="relative pt-24 pb-0 bg-white overflow-hidden -mt-8">
      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[180px] font-display text-slate-100 leading-none select-none hidden md:block">"</div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[180px] font-display text-slate-100 leading-none select-none rotate-180 hidden md:block">"</div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative top line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgb(104, 152, 204), transparent)" }} />
          </motion.div>

          {/* Quote text with writing animation */}
          <div className="min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed font-light italic">
              "{displayedText}"
              <span className="animate-pulse ml-1 text-slate-400">|</span>
            </h3>
          </div>

          {/* Author with elegant styling - Fades in after text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={displayedText.length === quote.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <span className="w-6 h-[1px]" style={{ background: "rgb(104, 152, 204)" }} />
            <p className="font-body text-sm">
              <span className="font-semibold" style={{ color: "rgb(104, 152, 204)" }}>Dale Carnegie</span>
              <span className="text-slate-300 mx-2">|</span>
              <span className="italic text-slate-500">How to Win Friends and Influence People</span>
            </p>
            <span className="w-6 h-[1px]" style={{ background: "rgb(104, 152, 204)" }} />
          </motion.div>

          {/* Decorative bottom line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={displayedText.length === quote.length ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mt-8"
          >
            <div className="w-20 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgb(104, 152, 204), transparent)" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;