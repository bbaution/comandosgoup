import { motion } from "framer-motion";

const ContactCTA = ({
  image,
  title = "CONTACTANOS AHORA",
  buttonText = "Envíanos un mensaje",
  onClick,
}) => {
  return (
    <section className="relative w-full h-[30vh] min-h-[350px]">
      {/* Imagen */}
      <img
        src={image}
        alt="Contacto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-white text-2xl md:text-4xl font-semibold tracking-wide mb-6">
          {title}
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-md text-sm md:text-base transition-colors"
        >
          {buttonText}
        </motion.button>
      </div>
    </section>
  );
};

export default ContactCTA;