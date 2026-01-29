import { useState } from "react";
import { motion } from "framer-motion";

const fadeAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeInOut" },
  },
});

const InfoCard = ({ image, title, text, delay = 0.2 }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeAnimation(delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer my-5"
      onClick={() => setOpen(!open)}
    >
      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Título */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Overlay con blur y texto (también animado con fade) */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 text-center text-white"
        >
          <p>{text}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InfoCard;
