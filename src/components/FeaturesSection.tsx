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
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        
        {/* Top fade from white */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 pt-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/60" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              Why Choose Us
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Custom Made Design
          </h2>
          
          <p className="max-w-3xl mx-auto font-body text-slate-300 leading-relaxed text-base md:text-lg">
            Ready to offer personalized emblems to your friends and family or perhaps a treat for you as well to be installed on your car, bike... or anywhere you feel like?
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-primary/30 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Number badge */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 border border-primary/30 flex items-center justify-center font-display text-sm text-primary">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
