import { IoLogoInstagram } from "react-icons/io";
import Image2 from "../../assets/cartelInterior.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div id="nosotros" className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* img container */}
          <div>
            <img
              src={Image2}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
              Nosotros
            </h1>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, enim et optio vero, sapiente pariatur tempora quaerat praesentium facere eos quod rem officiis molestias commodi delectus quidem! Vel, harum odio.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis ab id voluptatum consectetur. Omnis minima vero maxime iure sunt eos ratione inventore corrupti ut, doloribus nemo ducimus, voluptates accusamus!</li>
            </ul>
            <a href=""><motion.a
              href="https://www.instagram.com/comandos.group/"
              target="_blank"
              rel="noopener noreferrer"
              initial="initial"
              animate="animate"
              className=" bg-transparent text-[#d29b44] inline-flex justify-center items-center w-full gap-2 p-3  text-xl"
            >
              <IoLogoInstagram className="text-2xl text-center" />
              comandos.group
            </motion.a></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
