import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import heroEmblem1 from "@/assets/hero-emblem-1.jpg";
import heroEmblem2 from "@/assets/hero-emblem-2.jpg";
import heroEmblem3 from "@/assets/hero-emblem-3.jpg";

const samples = [
  {
    id: 1,
    image: heroEmblem1,
    title: "Classic Gold Emblem",
    description: "Premium gold-plated custom design",
  },
  {
    id: 2,
    image: heroEmblem2,
    title: "Silver Excellence",
    description: "316 Stainless steel polished finish",
  },
  {
    id: 3,
    image: heroEmblem3,
    title: "Signature Edition",
    description: "Exclusive personalized masterpiece",
  },
];

const WorkSamplesSection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof samples[0] | null>(null);

  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-slate-200 rounded-full opacity-40" />
        <div className="absolute top-40 left-20 w-16 h-16 border border-slate-200 rounded-full opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 border border-slate-200 rounded-full opacity-40" />
        <div className="absolute bottom-40 right-32 w-20 h-20 border border-slate-200 rounded-full opacity-30" />
        
        {/* Elegant line decorations */}
        <div className="absolute top-1/3 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute top-2/3 right-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-slate-400">
                  Our Craftsmanship
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 mb-4">
                Work Samples
              </h2>
              
              <p className="max-w-2xl mx-auto font-body text-slate-500 leading-relaxed">
                Discover the artistry behind each custom emblem. Click to explore our premium creations.
              </p>
            </motion.div>
          </div>

          {/* Samples Grid - Elegant card style */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {samples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(sample)}
              >
                {/* Elegant frame container */}
                <div className="relative">
                  {/* Outer decorative frame */}
                  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-slate-100 via-white to-slate-100 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Main image container with arch top */}
                  <div className="relative overflow-hidden rounded-t-[6rem] rounded-b-2xl bg-white shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                    {/* Blue accent bar at top */}
                    <div 
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full z-20"
                      style={{ background: "#006de4" }}
                    />
                    
                    {/* Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img 
                        src={sample.image} 
                        alt={sample.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Zoom icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-500">
                          <ZoomIn className="w-6 h-6" style={{ color: "#006de4" }} />
                        </div>
                      </div>
                    </div>

                    {/* Bottom content area */}
                    <div className="relative p-6 bg-white">
                      {/* Decorative corner elements */}
                      <div className="absolute top-0 left-4 w-8 h-[2px] bg-gradient-to-r from-slate-200 to-transparent" />
                      <div className="absolute top-0 right-4 w-8 h-[2px] bg-gradient-to-l from-slate-200 to-transparent" />
                      
                      <h3 className="font-display text-xl font-semibold text-slate-800 text-center group-hover:text-[#006de4] transition-colors duration-300">
                        {sample.title}
                      </h3>
                      <p className="font-body text-sm text-slate-400 text-center mt-2">
                        {sample.description}
                      </p>
                      
                      {/* Bottom accent */}
                      <div className="flex justify-center mt-4">
                        <div className="w-12 h-[2px] rounded-full bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#006de4] transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Side decorative elements */}
                  <div className="absolute top-1/2 -left-2 w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-1/2 -right-2 w-1 h-12 rounded-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative bottom element */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
              <div className="w-2 h-2 rounded-full" style={{ background: "#006de4" }} />
              <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#006de4" }} />
              <div className="w-2 h-2 rounded-full" style={{ background: "#006de4" }} />
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Info bar */}
                <div className="p-6 text-center bg-white">
                  <h3 className="font-display text-2xl font-semibold text-slate-800">
                    {selectedImage.title}
                  </h3>
                  <p className="font-body text-slate-500 mt-1">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-l-2 border-t-2 rounded-tl-xl" style={{ borderColor: "#006de4" }} />
              <div className="absolute -top-2 -right-2 w-12 h-12 border-r-2 border-t-2 rounded-tr-xl" style={{ borderColor: "#006de4" }} />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-l-2 border-b-2 rounded-bl-xl" style={{ borderColor: "#006de4" }} />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 rounded-br-xl" style={{ borderColor: "#006de4" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSamplesSection;