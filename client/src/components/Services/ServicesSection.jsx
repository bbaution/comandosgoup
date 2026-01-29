import InfoCard from "../Cards/InfoCard";

const ServicesSection = ({
  id,
  title,
  subtitle,
  services = [],
}) => {
  return (
    <section id={id} className="py-16">
      {/* Título */}
      {title && (
        <h1 className="text-center text-[#000000] text-xl md:text-3xl lg:text-4xl font-light tracking-widest uppercase pb-10">
          {title}
        </h1>
      )}

      {subtitle && (
        <p className="text-center max-w-3xl mx-auto text-sm md:text-base text-gray-600 dark:text-gray-300 pb-10 px-4">
          {subtitle}
        </p>
      )}

      {/* Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const isLast = idx === services.length - 1;
            const isOdd = services.length % 2 !== 0;

            return (
              <div
                key={idx}
                className={
                  isLast && isOdd
                    ? "md:col-span-2 md:flex md:justify-center"
                    : ""
                }
              >
                <div className={isLast && isOdd ? "md:w-1/2" : ""}>
                  <InfoCard {...service} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;