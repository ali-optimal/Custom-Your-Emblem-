import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Download, ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all assets for testing purposes
import img1 from "@/assets/396_portfolio.jpg";
import img2 from "@/assets/397_portfolio.jpg";
import img3 from "@/assets/398_portfolio.jpg";
import img4 from "@/assets/hero-emblem-2.jpg";
import img5 from "@/assets/gallery albums/all photos.png";
import img6 from "@/assets/gallery albums/Bikes photos.png";
import img7 from "@/assets/gallery albums/Boats photos.png";
import img8 from "@/assets/gallery albums/dashboard emblems photos.png";
import img9 from "@/assets/gallery albums/Engraved emblems.png";
import img10 from "@/assets/gallery albums/ferari photos.png";
import img11 from "@/assets/gallery albums/Home photos.png";
import img12 from "@/assets/gallery albums/lamborghini photos.png";
import img13 from "@/assets/gallery albums/Music instruments photos.png";
import img14 from "@/assets/gallery albums/names photos.png";
import img15 from "@/assets/gallery albums/Outloaw photos.png";
import img16 from "@/assets/gallery albums/Porsche photos.png";
import img17 from "@/assets/gallery albums/Random designs.png";
import img18 from "@/assets/gallery albums/RWB Porsche photos.png";

// Mock data array using imported images
const allImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, 
  img10, img11, img12, img13, img14, img15, img16, img17, img18
];

const albumCovers: Record<string, string> = {
  "all-photos": img5,
  "all-videos": img4, // Fallback for video
  "ferrari-photos": img10,
  "boats-photos": img7,
  "porsche-photos": img16,
  "bikes-photos": img6,
  "lamborghini-photos": img12,
  "home-photos": img11,
  "music-instruments-photos": img13,
  "outlaw-photos": img15,
  "names-photos": img14,
  "dashboard-emblems-photos": img8,
  "random-designs": img17,
  "rwb-porsche-photos": img18,
  "engraved-emblems": img9,
};

const Album = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Scroll to top when album opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [albumId]);

  // Format album name from URL param (e.g., "ferrari-photos" -> "Ferrari Photos")
  const albumName = albumId
    ?.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  // Get specific cover image or fallback to random
  const coverImage = (albumId && albumCovers[albumId]) || allImages[0];

  // Lightbox handlers
  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === allImages.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? allImages.length - 1 : (prev as number) - 1
      );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Main Image - Full Width Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 text-center">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 left-6 md:left-0"
            >
              <button 
                onClick={() => navigate("/gallery")}
                className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="font-body text-sm tracking-widest uppercase hidden md:block">Back to Gallery</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-body text-sm md:text-base tracking-[0.3em] text-[#6898cc] uppercase block mb-4">
                Album Collection
              </span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {albumName || "Album Details"}
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#6898cc] animate-pulse" />
                <span className="font-body text-xs md:text-sm text-white/80">
                  {allImages.length} High-Res Images
                </span>
              </div>
            </motion.div>
        </div>

        {/* Wavy bottom edge - Inverted like Gallery */}
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

      {/* Grid Content */}
      <main className="py-20 px-4 sm:px-6 bg-slate-50 min-h-screen">
        <div className="container mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {allImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div 
                  className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={img} 
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                        <ZoomIn className="w-5 h-5 text-slate-800" />
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-20">
              <span className="text-white/60 font-body text-sm tracking-widest">
                {selectedImageIndex + 1} / {allImages.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Buttons - Desktop */}
            <button 
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[70]"
              onClick={prevImage}
            >
              <ChevronLeft size={40} />
            </button>
            <button 
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[70]"
              onClick={nextImage}
            >
              <ChevronRight size={40} />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) prevImage();
                  else if (info.offset.x < -100) nextImage();
                }}
                src={allImages[selectedImageIndex]}
                alt="Fullview"
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
              />
            </div>
            
            {/* Bottom Controls / Info */}
            <div 
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-4 md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
               <button 
                className="p-4 bg-white/10 rounded-full backdrop-blur-md active:scale-95 transition-transform"
                onClick={prevImage}
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button 
                className="p-4 bg-white/10 rounded-full backdrop-blur-md active:scale-95 transition-transform"
                onClick={nextImage}
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Album;
