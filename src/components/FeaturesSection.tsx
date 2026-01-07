import { Palette, BadgeCheck, Truck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [allCardsLoaded, setAllCardsLoaded] = useState(false);
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      // After all cards have animated in (stagger * 3 + duration)
      const timer = setTimeout(() => {
        setAllCardsLoaded(true);
        setTimeout(() => setShowSecondAnimation(true), 100);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Seamless gradient from white to violet */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, white 0%, #4f46e5 8%, #4338ca 50%, #3730a3 92%, white 100%)",
        }}
      />
      
      {/* Angled accent shapes */}
      <div 
        className="absolute top-0 left-0 w-full h-32"
        style={{
          background: "linear-gradient(165deg, white 45%, transparent 45.5%)",
        }}
      />
      <div 
        className="absolute top-0 right-0 w-2/3 h-40"
        style={{
          background: "linear-gradient(195deg, white 35%, transparent 35.5%)",
        }}
      />
      
      {/* Secondary angled accent - top right */}
      <div 
        className="absolute top-20 right-0 w-1/3 h-1/2"
        style={{
          background: "linear-gradient(180deg, #6366f1 0%, transparent 100%)",
          clipPath: "polygon(40% 0%, 100% 0%, 100% 60%, 0% 100%)",
          opacity: 0.3,
        }}
      />
      
      {/* Third angled accent - bottom left */}
      <div 
        className="absolute bottom-20 left-0 w-1/2 h-1/3"
        style={{
          background: "linear-gradient(0deg, #312e81 0%, transparent 100%)",
          clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)",
          opacity: 0.4,
        }}
      />
      
      {/* Bottom angled shapes */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: "linear-gradient(345deg, white 45%, transparent 45.5%)",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-2/3 h-40"
        style={{
          background: "linear-gradient(15deg, white 35%, transparent 35.5%)",
        }}
      />
      
      {/* Geometric lines */}
      <div 
        className="absolute top-[15%] left-0 right-0 h-[1px] bg-white/10"
        style={{ transform: "rotate(-3deg)" }}
      />
      <div 
        className="absolute bottom-[15%] left-0 right-0 h-[1px] bg-white/10"
        style={{ transform: "rotate(3deg)" }}
      />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-400/15 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-indigo-200">
              Why Choose Us
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/50" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Custom Made Design
          </h2>
          
          <p className="max-w-3xl mx-auto font-body text-indigo-100/80 leading-relaxed text-base md:text-lg">
            Ready to offer personalized emblems to your friends and family or perhaps a treat for you as well to be installed on your car, bike... or anywhere you feel like?
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 shadow-xl"
              initial={{ 
                opacity: 0, 
                rotateY: -90,
                rotateX: 15,
                z: -200,
              }}
              animate={
                showSecondAnimation
                  ? {
                      opacity: 1,
                      rotateY: [0, 15, 0],
                      rotateX: [0, -5, 0],
                      z: [0, 50, 0],
                      scale: [1, 1.05, 1],
                    }
                  : isInView
                  ? { 
                      opacity: 1, 
                      rotateY: 0,
                      rotateX: 0,
                      z: 0,
                    }
                  : {}
              }
              transition={
                showSecondAnimation
                  ? {
                      duration: 0.8,
                      ease: "easeInOut",
                    }
                  : {
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }
              }
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                z: 30,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg -z-10" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/30">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Number badge */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center font-display text-sm text-indigo-600 shadow-md">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

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
