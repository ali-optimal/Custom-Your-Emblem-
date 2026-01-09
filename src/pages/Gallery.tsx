import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const GalleryRow = ({ 
  items, 
  direction = "left", 
  onClick 
}: { 
  items: typeof albums, 
  direction?: "left" | "right", 
  onClick: (name: string) => void 
}) => {
  return (
    <div className="w-full overflow-hidden group/row h-[350px] md:h-[450px] relative bg-black border-y border-white/5">
      <div 
        className="flex w-fit h-full hover:pause-animation"
        style={{
          animation: `marquee 60s linear infinite ${direction === "right" ? "reverse" : "normal"}`,
          width: "max-content" 
        }}
      >
        {/* Render items 4 times to ensure smooth loop on wide screens */}
        {[...items, ...items, ...items, ...items].map((album, idx) => (
          <div 
            key={`${album.name}-${idx}`}
            onClick={() => onClick(album.name)}
            className="relative w-[300px] md:w-[20vw] h-full flex-shrink-0 cursor-pointer group/item border-r border-white/10 overflow-hidden"
          >
            {album.isVideo ? (
              <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center group-hover/item:scale-105 transition-transform duration-700">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover/item:bg-white/10 transition-colors z-10">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
                {/* Abstract pattern bg for video placeholder */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              </div>
            ) : (
              <img 
                src={album.image} 
                alt={album.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover/item:scale-110 group-hover/item:blur-[2px]"
              />
            )}
            
            {/* Bottom Gradient overlay matching footer color */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none opacity-90 z-10" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 md:bg-black/0 group-hover/item:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center z-20">
               <div className="text-center p-4 transform translate-y-0 md:translate-y-8 opacity-100 md:opacity-0 group-hover/item:translate-y-0 group-hover/item:opacity-100 transition-all duration-500">
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-blue-400 mb-2 block">
                    Collection
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-2">
                    {album.name.replace("photos", "").replace(" collection", "")}
                  </h3>
                   <span className="font-body text-xs text-white/60">
                    {album.count} shots
                  </span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAlbumClick = (albumName: string) => {
    const slug = albumName.toLowerCase().replace(/ /g, "-");
    navigate(`/gallery/${slug}`);
  };

  const row1 = albums.slice(0, 5);
  const row2 = albums.slice(5, 10);
  const row3 = albums.slice(10, 15);

  return (
    <div className="min-h-screen bg-black">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Since we quadrupled the items, 1 set is 25% */
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused !important;
        }
      `}</style>
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
      >
        <div className="absolute inset-0 z-0 opacity-20" style={{ 
          backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4 tracking-tighter">
              MASTERPIECES
            </h1>
            <p className="font-body text-[#6898cc] tracking-[0.1em] uppercase text-sm md:text-base mb-8 font-semibold">
              Automotive Jewelry Collection
            </p>
            <div className="w-24 h-1 bg-[#6898cc] mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>
      
      {/* Marquee Rows */}
      <main className="relative z-10 bg-[#0f172a]">
        <GalleryRow items={row1} direction="left" onClick={handleAlbumClick} />
        <GalleryRow items={row2} direction="right" onClick={handleAlbumClick} />
        <GalleryRow items={row3} direction="left" onClick={handleAlbumClick} />
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
