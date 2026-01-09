import { Palette, BadgeCheck, Truck } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const features = [
  {
    icon: Palette,
    title: "Custom Made Design",
    description:
      "Every Emblem has its own design. Our designer will choose the most suitable design according to your name. If you have your own design already done, you can send it by e-mail as a vector design and we'll make sure you receive it as an emblem! In both ways, we are sure that you'll love it!",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "Custom made Emblems are either made of 100% 316 stainless steel or painted or gold plated depending on your request. 316 Stainless steel metal is a versatile material offering corrosion resistance, staining & strength. All Emblems will be polished with the latest tools in order to have the best finishing.",
  },
  {
    icon: Truck,
    title: "Fast Shipping & Easy Installation",
    description:
      "All orders will be shipped within three weeks after receiving cleared payment. All shipping will include tracking number. Every Emblem will include double-sided tape for easy installation. In case you will install your Emblems outside of a car/boat/bike, it is recommended to stick it with glue. The Emblem can be removed easily if installed using the double sided tape.",
  },
];

const FeatureCard = ({ feature, index, allCardsControls }: { 
  feature: typeof features[0]; 
  index: number;
  allCardsControls: ReturnType<typeof useAnimation>;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
        z: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white rounded-2xl p-8 shadow-2xl border border-slate-100/50 hover:border-slate-200 transition-colors duration-300"
      initial={{ 
        opacity: 0, 
        rotateY: -90,
        rotateX: 15,
        z: -200,
      }}
      animate={controls}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #1e4266, #0d2847)", boxShadow: "0 10px 25px -5px rgba(30, 66, 102, 0.4)" }}>
          <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </div>
        
        {/* Number badge */}
        <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center font-display text-sm shadow-md" style={{ color: "#1e4266" }}>
          {index + 1}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-slate-800 mb-4">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-slate-500 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const allCardsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // After all cards have animated in, do the combined animation
      const timer = setTimeout(() => {
        allCardsControls.start({
          scale: [1, 1.03, 1],
          rotateY: [0, 5, 0],
          transition: { duration: 0.6, ease: "easeInOut" }
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInView, allCardsControls]);

  return (
    <section ref={sectionRef} className="relative z-50 pt-20 pb-40 overflow-hidden">
      
      {/* Deep Luxury Atmosphere Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#070b14]" 
        />
        
        {/* Animated gradient sweep */}
        <div 
          className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_-20%,_#1e293b_0%,_transparent_70%)]"
        />
        
        {/* High-End Surface Texture (Micro-Lines) */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='2px' viewBox='0 0 100 2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '100% 4px',
          }}
        />
      </div>

      {/* Volumetric Glow where video meets the edge */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none z-10" 
        style={{ transform: 'translate(-50%, 50px)' }}
      />

      {/* Volumetric Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Chrome Highlight Edge */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />

      {/* SVG angled bottom */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-10"
        viewBox="0 0 1440 150" 
        preserveAspectRatio="none"
        fill="#ffffff"
      >
        <polygon points="0,150 1440,0 1440,150 0,150" />
      </svg>
      
      {/* Secondary angled accent - top right */}
      <div 
        className="absolute top-20 right-0 w-1/3 h-1/2"
        style={{
          background: "linear-gradient(180deg, #334155 0%, transparent 100%)",
          clipPath: "polygon(40% 0%, 100% 0%, 100% 60%, 0% 100%)",
          opacity: 0.2,
        }}
      />
      
      {/* Third angled accent - bottom left */}
      <div 
        className="absolute bottom-20 left-0 w-1/2 h-1/3"
        style={{
          background: "linear-gradient(0deg, #1e293b 0%, transparent 100%)",
          clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 0.2,
        }}
      />
      
      {/* Geometric lines */}
      <div 
        className="absolute top-[20%] left-0 right-0 h-[1px] bg-white/10"
        style={{ transform: "rotate(-2deg)" }}
      />
      <div 
        className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-white/10"
        style={{ transform: "rotate(2deg)" }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-slate-400" />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-slate-500/50" />
              <span className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-slate-400 font-bold">
                Why Choose Us
              </span>
              <div className="w-1 h-1 rounded-full bg-slate-500/50" />
            </div>
            <span className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent via-slate-500/50 to-slate-400" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter">
            Custom Made <span className="bg-gradient-to-r from-[#cbd5e1] via-white to-[#cbd5e1] bg-clip-text text-transparent italic font-serif">Design</span>
          </h2>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent mx-auto mb-8 opacity-60" />
          
          <p className="max-w-2xl mx-auto font-body text-slate-400 leading-relaxed text-lg md:text-xl font-light tracking-wide">
            Where your vision meets <span className="text-white font-normal">absolute precision</span>. Every emblem is a unique masterpiece, forged for those who demand the extraordinary.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8" 
          style={{ perspective: "1200px" }}
          animate={allCardsControls}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              index={index}
              allCardsControls={allCardsControls}
            />
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-3 h-3 rounded-full bg-white" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
