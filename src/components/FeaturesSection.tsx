import { Palette, BadgeCheck, Truck } from "lucide-react";

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
  return (
    <section className="relative py-32 overflow-hidden">
      {/* White background base */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Main violet hard angled shape */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #4338ca 0%, #3730a3 50%, #312e81 100%)",
          clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)",
        }}
      />
      
      {/* Hard edge accent - top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[60%]"
        style={{
          background: "linear-gradient(160deg, #4f46e5 0%, transparent 60%)",
          clipPath: "polygon(0 0, 100% 0, 100% 25%, 0 45%)",
        }}
      />
      
      {/* Hard edge accent - right side */}
      <div 
        className="absolute top-0 right-0 w-[40%] h-full"
        style={{
          background: "linear-gradient(200deg, #6366f1 0%, transparent 70%)",
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 20% 100%)",
          opacity: 0.4,
        }}
      />
      
      {/* Sharp bottom left accent */}
      <div 
        className="absolute bottom-0 left-0 w-[60%] h-[50%]"
        style={{
          background: "linear-gradient(45deg, #1e1b4b 0%, transparent 60%)",
          clipPath: "polygon(0 30%, 80% 0, 100% 100%, 0 100%)",
          opacity: 0.5,
        }}
      />
      
      {/* Geometric hard lines */}
      <div 
        className="absolute top-[8%] left-0 right-0 h-[2px] bg-white/20"
        style={{ transform: "rotate(-2deg)" }}
      />
      <div 
        className="absolute bottom-[8%] left-0 right-0 h-[2px] bg-white/20"
        style={{ transform: "rotate(2deg)" }}
      />
      <div 
        className="absolute top-[40%] left-0 right-0 h-[1px] bg-white/10"
        style={{ transform: "rotate(-1deg)" }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-white/60" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-indigo-200">
              Why Choose Us
            </span>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-white/60" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Custom Made Design
          </h2>
          
          <p className="max-w-3xl mx-auto font-body text-indigo-100/80 leading-relaxed text-base md:text-lg">
            Ready to offer personalized emblems to your friends and family or perhaps a treat for you as well to be installed on your car, bike... or anywhere you feel like?
          </p>
        </div>

        {/* Features Grid - 3D Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ 
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Card Shadow Layer */}
              <div 
                className="absolute inset-0 rounded-2xl bg-indigo-950/50 transition-all duration-500 group-hover:translate-y-4 group-hover:blur-xl"
                style={{
                  transform: "translateZ(-40px) translateY(20px)",
                }}
              />
              
              {/* Main Card */}
              <div
                className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 border border-indigo-400/20"
                style={{
                  transform: "translateZ(0)",
                  boxShadow: "0 25px 50px -12px rgba(67, 56, 202, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Card inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
                
                {/* Icon with 3D effect */}
                <div className="relative mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/20"
                    style={{
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-white mb-3 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-indigo-100/70 leading-relaxed relative z-10">
                  {feature.description}
                </p>
                
                {/* Card number indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="font-display text-sm text-white/80">{index + 1}</span>
                </div>

                {/* Bottom highlight */}
                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-4 h-4 rounded-full bg-white/80 shadow-lg shadow-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
