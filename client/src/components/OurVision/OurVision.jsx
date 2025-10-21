
import { motion } from "framer-motion";

const fadeAnimation = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const OurVision = () => {
  return (
    <div id="testimonios" className="container my-16 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-semibold text-center py-5">5 Razones para elegirnos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-10">
        <motion.div
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#1b1b1a] dark:bg-slate-800"
        >
          <p>
            Presencia disuasiva y profesional en todo momento
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#1b1b1a] dark:bg-slate-800"
        >
          <p>
            Vigilancia 24/7 para maxima seguridad
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#1b1b1a] dark:bg-slate-800"
        >
          <p>
           Reaccion rapida ante cualquier incidente
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#1b1b1a] dark:bg-slate-800"
        >
          <p>
            Solidez y trayectoria en el rubro
          </p>
        </motion.div>
        <motion.div
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className="mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-[#1b1b1a] dark:bg-slate-800"
        >
          <p>
            Confianza y compromiso con cada cliente
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;
