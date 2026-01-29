import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Pages
import Home from "./pages/Home";
import TuEmpresa from "./pages/TuEmpresa";


const App = () => {
  return (
    <main className="overflow-x-hidden dark:bg-gray-900 bg-white min-h-screen">
      {/* Navbar global */}
      <Navbar />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tu-empresa" element={<TuEmpresa />} />
        
        {/* más rutas después:
        <Route path="/somos-status" element={<SomosStatus />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/novedades" element={<Novedades />} />
        */}
      </Routes>

      {/* Footer global */}
      <Footer />
    </main>
  );
};

export default App;