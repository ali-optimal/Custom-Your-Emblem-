import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-400" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #006de4 0%, #0052ab 100%)" }}
            >
              <Quote className="w-5 h-5 text-white" fill="white" />
            </div>
          </div>

          {/* Quote text */}
          <blockquote className="relative">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-slate-700 leading-relaxed italic">
              "Remember that a person's name is, to that person, the sweetest and most important sound in any language."
            </p>
          </blockquote>

          {/* Author */}
          <div className="mt-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
              <span className="w-2 h-2 rounded-full" style={{ background: "#006de4" }} />
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
            </div>
            <p className="font-body text-sm" style={{ color: "#006de4" }}>
              <span className="font-medium">Dale Carnegie</span>
              <span className="text-slate-400">, </span>
              <span className="italic text-slate-500">How to Win Friends and Influence People</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;