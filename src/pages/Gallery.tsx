import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Import images
import allPhotosImg from "@/assets/gallery albums/all photos.png";
import bikesPhotosImg from "@/assets/gallery albums/Bikes photos.png";
import boatsPhotosImg from "@/assets/gallery albums/Boats photos.png";
import dashboardEmblemsImg from "@/assets/gallery albums/dashboard emblems photos.png";
import engravedEmblemsImg from "@/assets/gallery albums/Engraved emblems.png";
import ferariPhotosImg from "@/assets/gallery albums/ferari photos.png";
import homePhotosImg from "@/assets/gallery albums/Home photos.png";
import lamborghiniPhotosImg from "@/assets/gallery albums/lamborghini photos.png";
import musicInstrumentsImg from "@/assets/gallery albums/Music instruments photos.png";
import namesPhotosImg from "@/assets/gallery albums/names photos.png";
import outlawPhotosImg from "@/assets/gallery albums/Outloaw photos.png";
import porschePhotosImg from "@/assets/gallery albums/Porsche photos.png";
import randomDesignsImg from "@/assets/gallery albums/Random designs.png";
import rwbPorscheImg from "@/assets/gallery albums/RWB Porsche photos.png";

const albums = [
  { name: "All photos", count: "120", image: allPhotosImg },
  { name: "All videos", count: "15", isVideo: true },
  { name: "Ferrari photos", count: "24", image: ferariPhotosImg },
  { name: "Boats photos", count: "18", image: boatsPhotosImg },
  { name: "Porsche photos", count: "32", image: porschePhotosImg },
  { name: "Bikes photos", count: "21", image: bikesPhotosImg },
  { name: "Lamborghini photos", count: "14", image: lamborghiniPhotosImg },
  { name: "Home photos", count: "12", image: homePhotosImg },
  { name: "Music instruments photos", count: "9", image: musicInstrumentsImg },
  { name: "Outlaw photos", count: "16", image: outlawPhotosImg },
  { name: "Names photos", count: "45", image: namesPhotosImg },
  { name: "Dashboard emblems photos", count: "28", image: dashboardEmblemsImg },
  { name: "Random designs", count: "50", image: randomDesignsImg },
  { name: "RWB Porsche photos", count: "11", image: rwbPorscheImg },
  { name: "Engraved emblems", count: "19", image: engravedEmblemsImg },
];

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAlbumClick = (albumName: string) => {
    const slug = albumName.toLowerCase().replace(/ /g, "-");
    navigate(`/gallery/${slug}`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-white/10 opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-white/5 opacity-40" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/40" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-white/60">
                  Our Portfolio
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/40" />
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
                Gallery
              </h1>
              <p className="max-w-2xl mx-auto text-white/60 font-body text-lg">
                Explore our collection of custom emblems across various categories.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Wavy bottom edge - Rotated to curve upwards */}
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
      
      {/* Albums Content Section */}
      <main className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          {/* Albums Grid - 3 rows and 5 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {albums.map((album, index) => (
              <motion.div
                key={album.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              >
                <div 
                  className="group cursor-pointer"
                  onClick={() => handleAlbumClick(album.name)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#6898cc]/10 hover:-translate-y-2">
                    {/* Image Container with Aspect Ratio */}
                    <div className="aspect-[4/5] w-full overflow-hidden relative">
                      {album.isVideo ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500">
                           <div className="relative z-10 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                            <div className="absolute inset-0 rounded-full bg-[#6898cc]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Play className="w-8 h-8 text-white fill-white relative z-10 ml-1" />
                          </div>
                          <span className="font-body text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white/80 transition-colors duration-500">
                            Video Collection
                          </span>
                        </div>
                      ) : (
                        <>
                          <img 
                            src={album.image} 
                            alt={album.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Very subtle gradient only at bottom for depth */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        </>
                      )}
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  </div>

                  {/* Title outside card - Clean & Modern */}
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-lg font-medium text-slate-800 group-hover:text-[#6898cc] transition-colors duration-300">
                      {album.name}
                    </h3>
                    <div className="h-[1px] w-0 bg-[#6898cc] mx-auto mt-2 transition-all duration-300 group-hover:w-12 opacity-50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
