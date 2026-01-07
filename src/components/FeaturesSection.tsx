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
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        {/* Subtle shapes */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Why Choose Us
            </span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient-luxury mb-6">
            Custom Made Design
          </h2>
          
          <p className="max-w-3xl mx-auto font-body text-muted-foreground leading-relaxed text-base md:text-lg">
            Ready to offer personalized emblems to your friends and family or perhaps a treat for you as well to be installed on your car, bike... or anywhere you feel like?
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: "0 4px 30px -5px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              
              {/* Card border */}
              <div className="absolute inset-0 rounded-2xl border border-primary/5 group-hover:border-primary/20 transition-colors duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-blue-100/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                
                {/* Decorative number */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-white border border-primary/10 flex items-center justify-center font-display text-sm text-primary/60">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/30" />
            <span className="w-3 h-3 rounded-full bg-primary/50" />
            <span className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
