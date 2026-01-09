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

const imagesToPreload = [
  allPhotosImg,
  bikesPhotosImg,
  boatsPhotosImg,
  dashboardEmblemsImg,
  engravedEmblemsImg,
  ferariPhotosImg,
  homePhotosImg,
  lamborghiniPhotosImg,
  musicInstrumentsImg,
  namesPhotosImg,
  outlawPhotosImg,
  porschePhotosImg,
  randomDesignsImg,
  rwbPorscheImg,
];

const ImagePreloader = () => {
  return (
    <div className="hidden" aria-hidden="true">
      {imagesToPreload.map((src, index) => (
        <link key={index} rel="preload" as="image" href={src} />
      ))}
    </div>
  );
};

export default ImagePreloader;
