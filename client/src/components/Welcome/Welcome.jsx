const Welcome = ({
  image,
  title,
  subtitle,
  height = "h-[60vh]",
}) => {
  return (
    <section className={`relative w-full ${height}`}>
      {/* Imagen */}
      <img
        src={image}
        alt="Welcome background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {title && (
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            {title}
          </h1>
        )}

        {subtitle && (
          <p className="mt-4 text-white/90 text-sm md:text-lg max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Welcome;