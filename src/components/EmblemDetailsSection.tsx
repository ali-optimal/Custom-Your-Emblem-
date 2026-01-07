import { motion } from "framer-motion";
import heroEmblem1 from "@/assets/hero-emblem-1.jpg";

const EmblemDetailsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-t from-slate-100 via-slate-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-blue-50 to-transparent rounded-full blur-3xl opacity-50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-slate-100 to-white shadow-xl" />
            
            {/* Blue accent corners */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-l-3 border-t-3 rounded-tl-xl" style={{ borderWidth: "3px", borderColor: "#006de4", borderRight: "none", borderBottom: "none" }} />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-3 border-b-3 rounded-br-xl" style={{ borderWidth: "3px", borderColor: "#006de4", borderLeft: "none", borderTop: "none" }} />
            
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img 
                src={heroEmblem1} 
                alt="Custom Emblem Details"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <div 
              className="absolute -bottom-4 -right-4 px-5 py-3 rounded-xl shadow-lg"
              style={{ background: "linear-gradient(135deg, #006de4, #0052ab)" }}
            >
              <p className="font-display text-white text-sm font-medium">Premium Quality</p>
            </div>
          </motion.div>

          {/* Text - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ background: "#006de4" }} />
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "#006de4" }}>
                Emblem Details
              </span>
            </div>

            {/* Main heading */}
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-6">
              Crafted to Your <span style={{ color: "#006de4" }}>Specifications</span>
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-4 font-body text-slate-600 leading-relaxed">
              <p>
                Whether you choose your Emblem to be in <strong className="text-slate-700">stainless steel</strong>, <strong className="text-slate-700">gold plated</strong> or <strong className="text-slate-700">painted in any color</strong>, our designer will try to stick all letters together. If there are numbers or if the designer finds that sticking all letters is not suitable for the design, he'll leave a space.
              </p>

              {/* Specifications with icons */}
              <div className="py-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#006de4" }} />
                  <p>
                    <strong className="text-slate-700">Length:</strong> Between 14cm (5.5 in) & 20cm (7.9 in) — dimensions depend on the number of characters.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#006de4" }} />
                  <p>
                    <strong className="text-slate-700">Thickness:</strong> 3.0 millimeters (1/8 inch).
                  </p>
                </div>
              </div>

              <p>
                If you want another specific length or thickness please <strong className="text-slate-700">contact us</strong>.
              </p>

              <p>
                If you want a specific design or a design related to a car brand please <strong className="text-slate-700">contact us before ordering</strong>.
              </p>

              <p>
                If you have your own design already done, you can send it by e-mail as a <strong className="text-slate-700">vector design</strong> and we'll make sure you receive it as an Emblem!
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-body text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #006de4, #0052ab)" }}
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmblemDetailsSection;