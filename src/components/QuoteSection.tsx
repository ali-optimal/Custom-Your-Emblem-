import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden -mt-8">
      {/* Decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[180px] font-display text-slate-100 leading-none select-none hidden md:block">"</div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[180px] font-display text-slate-100 leading-none select-none rotate-180 hidden md:block">"</div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative top line */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgb(104, 152, 204), transparent)" }} />
          </div>

          {/* Quote text */}
          <blockquote>
            <p className="font-display text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
              <span className="italic">"Remember that a person's name is, to that person, the sweetest and most important sound in any language."</span>
            </p>
          </blockquote>

          {/* Author with elegant styling */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-6 h-[1px]" style={{ background: "rgb(104, 152, 204)" }} />
            <p className="font-body text-sm">
              <span className="font-semibold" style={{ color: "rgb(104, 152, 204)" }}>Dale Carnegie</span>
              <span className="text-slate-300 mx-2">|</span>
              <span className="italic text-slate-500">How to Win Friends and Influence People</span>
            </p>
            <span className="w-6 h-[1px]" style={{ background: "rgb(104, 152, 204)" }} />
          </div>

          {/* Decorative bottom line */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgb(104, 152, 204), transparent)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;