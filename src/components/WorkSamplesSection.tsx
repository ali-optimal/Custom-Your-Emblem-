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
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-100 to-transparent rounded-full blur-3xl opacity-60" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
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

          {/* Samples Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
                {/* Custom diamond/rhombus shape container */}
                <div className="relative mx-auto w-56 h-56 md:w-64 md:h-64">
                  {/* Outer glow ring */}
                  <div 
                    className="absolute inset-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, #006de4 0%, #0052ab 100%)",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                      opacity: 0.1,
                    }}
                  />
                  
                  {/* Border frame */}
                  <div 
                    className="absolute inset-2 transition-all duration-500"
                    style={{
                      background: "linear-gradient(135deg, #006de4 0%, #0052ab 50%, #006de4 100%)",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  />
                  
                  {/* Image container */}
                  <div 
                    className="absolute inset-4 overflow-hidden transition-all duration-500 group-hover:inset-3"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    }}
                  >
                    <img 
                      src={sample.image} 
                      alt={sample.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                      <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 border-l-2 border-t-2 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ borderColor: "#006de4" }} />
                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 border-r-2 border-b-2 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ borderColor: "#006de4" }} />
                </div>

                {/* Title and description */}
                <div className="text-center mt-6">
                  <h3 className="font-display text-xl font-semibold text-slate-800 group-hover:text-[#006de4] transition-colors duration-300">
                    {sample.title}
                  </h3>
                  <p className="font-body text-sm text-slate-400 mt-1">
                    {sample.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative bottom element */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
              <div 
                className="w-3 h-3"
                style={{
                  background: "linear-gradient(135deg, #006de4, #0052ab)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
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
              {/* Diamond frame for modal */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1 shadow-2xl">
                <div className="bg-slate-900 rounded-xl p-4">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                  />
                  
                  {/* Info bar */}
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {selectedImage.title}
                    </h3>
                    <p className="font-body text-slate-400 mt-1">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: "#006de4" }} />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg" style={{ borderColor: "#006de4" }} />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg" style={{ borderColor: "#006de4" }} />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: "#006de4" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSamplesSection;