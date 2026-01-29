import { useEffect, useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import iconoFondoAzul from "../../assets/iconoSinFondo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [theme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Bloquear scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  // Items (ajustá anchors si tus secciones tienen otros ids)
  const menuItems = [
    { label: "Inicio", to: "/" },
    { label: "Tu empresa", to: "/tu-empresa" }, // 👈 nueva vista
  ];

  return (
    <>
      <nav className="md:static fixed top-0 left-0 w-full z-50 bg-[#111110] text-white">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="#inicio" className="w-[60px]">
                <img src={iconoFondoAzul} alt="icono" />
              </a>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        className="text-sm font-semibold tracking-wide hover:text-[#0a88b6] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.hash}
                        className="text-sm font-semibold tracking-wide hover:text-[#0a88b6] transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>


            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center gap-4">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                  aria-label="Cerrar menú"
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                  aria-label="Abrir menú"
                />
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <ResponsiveMenu
        showMenu={showMenu}
        onClose={closeMenu}
        items={menuItems}
      />
    </>
  );
};

export default Navbar;