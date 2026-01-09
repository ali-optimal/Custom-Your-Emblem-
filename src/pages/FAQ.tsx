import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "What materials are used for the emblems?",
    answer: "Our emblems are crafted from high-quality materials including 316 stainless steel, premium ABS plastic with chrome/gold plating, and aerospace-grade aluminum. Each material is selected for durability, weather resistance, and a luxurious finish that lasts for years."
  },
  {
    question: "How long does it take to create a custom emblem?",
    answer: "Custom emblem production typically takes 5-7 business days, depending on the complexity of your design. Rush orders can be accommodated for an additional fee, with delivery in 2-3 business days. We'll send you design proofs within 24-48 hours of placing your order."
  },
  {
    question: "Can I see a preview before production?",
    answer: "Absolutely! We provide detailed 3D mockups and digital proofs of your custom emblem before manufacturing begins. You can request unlimited revisions until you're 100% satisfied with the design. Production only starts after your final approval."
  },
  {
    question: "What sizes are available for custom emblems?",
    answer: "We offer a wide range of sizes from small 2-inch badges to large 12-inch statement pieces. The most popular sizes are 3-4 inches for car hoods and 5-6 inches for motorcycle tanks. Custom dimensions are also available upon request."
  },
  {
    question: "Are the emblems weather-resistant?",
    answer: "Yes! All our emblems are designed to withstand extreme weather conditions. They're UV-protected, waterproof, and resistant to temperatures ranging from -40°F to 180°F. The adhesive backing is automotive-grade 3M VHB tape that maintains its bond in all climates."
  },
  {
    question: "How do I install the emblem on my vehicle?",
    answer: "Installation is simple! Clean the surface thoroughly with rubbing alcohol, peel the protective backing, align the emblem carefully, and press firmly for 30 seconds. For best results, avoid washing the vehicle for 48 hours. Detailed instructions and installation tools are included with every order."
  },
  {
    question: "Can I remove the emblem without damaging my vehicle?",
    answer: "Yes, our emblems can be removed safely. Use a heat gun or hair dryer to warm the adhesive for 30-60 seconds, then gently peel from one corner. Any remaining adhesive can be removed with automotive adhesive remover or rubbing alcohol without harming your vehicle's paint."
  },
  {
    question: "Do you offer emblems for motorcycles and boats?",
    answer: "Absolutely! We specialize in custom emblems for cars, motorcycles, boats, RVs, and more. Our marine-grade emblems are specifically treated for saltwater resistance, making them perfect for boats. We also create emblems for helmets, guitars, and other personal items."
  },
  {
    question: "What file format should I send for custom designs?",
    answer: "We accept vector files (AI, EPS, SVG, PDF) for the best results, but we can also work with high-resolution images (PNG, JPG) at 300 DPI or higher. If you only have a sketch or idea, our design team can create professional artwork from your concept."
  },
  {
    question: "Is there a minimum order quantity?",
    answer: "No minimum! We're happy to create a single custom emblem just for you. However, we do offer volume discounts for orders of 10+ pieces, making it cost-effective for car clubs, businesses, or events. Contact us for bulk pricing."
  },
  {
    question: "What's your return and warranty policy?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with your emblem, we'll remake it free of charge or provide a full refund within 30 days. All emblems come with a 3-year warranty against fading, peeling, or manufacturing defects."
  },
  {
    question: "Can you match my vehicle's specific color?",
    answer: "Yes! We can color-match to any paint code, Pantone reference, or sample you provide. Our advanced color-matching technology ensures your emblem perfectly complements your vehicle's finish, whether it's factory paint or a custom color."
  }
];

const FAQItem = ({ item, index }: { item: typeof faqs[0], index: number }) => {
  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div 
        initial={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -15, 
          scale: 1.02,
          rotateX: 2,
          rotateY: 2,
          boxShadow: "0 25px 50px -12px rgba(104, 152, 204, 0.2)"
        }}
        className="group bg-white p-8 md:p-10 h-full border border-slate-200/60 md:hover:border-[#6898cc]/40 transition-all duration-500 relative shadow-xl md:hover:shadow-2xl overflow-hidden rounded-2xl"
      >
        {/* Decorative corner shape */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-slate-100 rounded-full group-hover:bg-[#6898cc]/10 transition-colors duration-500" />
        
        {/* Background Index Number */}
        <div className="absolute top-4 right-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
          <span className="font-display font-bold text-7xl md:text-9xl text-slate-900 leading-none">
            {(index + 1).toString().padStart(2, '0')}
          </span>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Floating Icon/Shape */}
          <div className="w-12 h-12 mb-8 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-[#6898cc] group-hover:text-white transition-all duration-500 border border-slate-200 group-hover:border-[#6898cc] group-hover:rotate-[15deg] shadow-md">
            <span className="font-display font-bold text-xl text-slate-700 group-hover:text-white">{(index + 1)}</span>
          </div>

          <div className="mb-6">
             <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-tight group-hover:text-[#6898cc] transition-colors duration-300 leading-tight">
              {item.question}
             </h3>
          </div>
          
          <div className="mt-auto">
            <p className="font-body text-slate-500 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-8 group-hover:border-slate-200 transition-colors">
              {item.answer}
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#6898cc] group-hover:w-full transition-all duration-700" />
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Full Screen with Spotlight */}
      <section 
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        }}
      >
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              x: [0, -80, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/20 rounded-[40%]"
          />
          <motion.div
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-10 w-px h-screen bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </div>

        {/* Dynamic Spotlight Effect */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>
         
         <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <span className="py-1 px-3 border border-white/20 rounded-full text-[10px] md:text-xs font-body tracking-[0.3em] text-[#6898cc] uppercase bg-white/5 backdrop-blur-sm">
                Help Center
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-none">
              FREQUENTLY<br />
              ASKED<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">QUESTIONS</span>
            </h1>
            
            <p className="max-w-md mx-auto text-slate-400 font-body text-sm md:text-base tracking-wide leading-relaxed">
              Everything you need to know about our custom emblem process, materials, and shipping.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <ArrowDown className="text-white/60 w-5 h-5" />
        </motion.div>
      </section>
      
      {/* FAQ Grid Section */}
      <main className="bg-slate-50 pt-16 md:pt-48 pb-40 px-4 md:px-6 min-h-screen relative z-10">
        <div className="container mx-auto max-w-7xl">
           {/* Section Title */}
           <div className="mb-20 flex items-end justify-between border-b border-slate-200 pb-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-2">Q&A</h2>
                <p className="font-body text-slate-500 text-sm tracking-wider uppercase">General Information</p>
              </div>
              <div className="hidden md:block text-right">
                 <span className="font-display text-6xl font-bold text-slate-300">12</span>
                 <span className="font-body text-slate-500 text-sm ml-2">Total Questions</span>
              </div>
           </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} item={faq} index={index} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
