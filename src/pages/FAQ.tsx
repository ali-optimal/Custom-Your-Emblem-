import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Shield, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqIllustration from "@/assets/Gemini_Generated_Image_jrw14vjrw14vjrw1 (1).png";

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

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-white/10 opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-white/5 opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Title and Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60">
                  Your Custom Emblem
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              
              <p className="text-white/70 font-body text-lg md:text-xl leading-relaxed max-w-xl">
                Find answers to common questions about our custom emblem services, materials, 
                installation, and ordering process.
              </p>
            </motion.div>

            {/* Right: Custom Icon Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                {/* Background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#6898cc]/10 animate-pulse" />
                  <div className="absolute w-4/5 h-4/5 rounded-full bg-[#6898cc]/20" />
                  <div className="absolute w-3/5 h-3/5 rounded-full bg-[#6898cc]/30" />
                </div>
                
                {/* Center Logo */}
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-full p-8 border-2 border-white/20 shadow-2xl">
                  <img 
                    src={faqIllustration} 
                    alt="FAQ Support" 
                    className="w-32 h-32 object-contain drop-shadow-xl"
                  />
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-xl"
                >
                  <HelpCircle className="w-6 h-6 text-[#6898cc]" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute bottom-8 left-4 bg-white/90 p-3 rounded-full shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 text-[#6898cc]" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute top-1/3 left-2 bg-white/90 p-3 rounded-full shadow-xl"
                >
                  <Shield className="w-6 h-6 text-[#6898cc]" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="absolute bottom-1/4 right-8 bg-white/90 p-3 rounded-full shadow-xl"
                >
                  <Award className="w-6 h-6 text-[#6898cc]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wavy bottom edge */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none rotate-180">
          <svg 
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-slate-50"
            ></path>
          </svg>
        </div>
      </section>

      {/* FAQ Content Section */}
      <main className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-display text-lg md:text-xl font-semibold text-slate-800 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 font-body text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/70 font-body text-lg mb-6 max-w-2xl mx-auto">
              Our team is here to help! Reach out and we'll get back to you within 24 hours.
            </p>
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-[#6898cc] hover:bg-[#5a86b8] text-white font-body font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
