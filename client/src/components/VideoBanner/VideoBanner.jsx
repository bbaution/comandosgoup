import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import Carousel from "../Carousel/Carousel.jsx"; // <-- importa el Carousel
import img1 from "../../assets/carouselImg/img1.webp";
import img2 from "../../assets/carouselImg/img2.webp";



// Array de imágenes
const fotos = [img1, img2];

const VideoBanner = () => {
  return (
    <div id="servicios" className="bg-[#1b1b1a]">
      <div className="container py-8 h-[900px] md:py-16 md:h-[700px] flex justify-center">
        <div className="grid grid-cols-1 items-center  md:grid-cols-2 gap-4 md:gap-8">
          
          {/* text section */}
          <div className="space-y-4 text-center md:text-left text-white ">
            <h1 className="text-4xl font-bold">titulo</h1>
            <ul>
              <li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus inventore atque illo ad quisquam assumenda beatae expedita ipsa optio? At, est minus. Sequi laudantium omnis enim sapiente facilis iure nihil?</li>
              
            </ul>
            <motion.a
              href="https://wa.me/5491138796922"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              animate="animate"
              className="btn bg-white text-[#433812] inline-flex items-center rounded-lg gap-2 p-3  text-xl"
            >
              <IoLogoWhatsapp className="text-2xl" />
              <a href="https://wa.me/5491138796922?text">Contactanos</a>
            </motion.a>
          </div>
          {/* Carousel section */}
          <Carousel  images={fotos} />
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
