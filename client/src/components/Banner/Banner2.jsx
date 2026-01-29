import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

const Banner2 = ({
  id,
  title,
  bullets = [],
  image,
  
}) => {
  return (
    <div
      id={id}
      className="bg-slate-100 dark:bg-slate-900 dark:text-white"
    >
      <div className="container flex items-center justify-center py-16">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6 px-4">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
              {title}
            </h1>

            <ul className="space-y-4 text-sm md:text-base">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            
          </div>

          {/* img container */}
          <div>
            <img
              src={image}
              alt={title}
              className="mx-auto w-[500px] p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner2;