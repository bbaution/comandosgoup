import iconoFondoBlanco from "../../assets/iconoSinFondo.png";

const ResponsiveMenu = ({ showMenu, onClose, items = [] }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 md:hidden ${
          showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[78%] max-w-[340px] bg-[#111110] text-white md:hidden
        transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="pt-6 pb-6 px-8 flex flex-col h-full justify-between">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between">
              <div className="w-[100px]">
                <img src={iconoFondoBlanco} alt="icono" />
              </div>

              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-2xl leading-none"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="mt-10">
              <ul className="space-y-6 text-lg font-semibold">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block hover:text-[#0a88b6] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* CTA dentro del menú */}
              
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-300/30 pt-6 text-center text-sm text-white/90">
            <p>© 2025. Todos los derechos reservados.</p>
            <p className="mt-2">
              Diseñado y desarrollado por{" "}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0a88b6] hover:underline"
              >
                UnicornTech
              </a>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ResponsiveMenu;