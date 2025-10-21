
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner";

import VideoBanner from "./components/VideoBanner/VideoBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import InfoCard from "./components/Cards/InfoCard.jsx";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero />
        <OverviewCounter />
        <VideoBanner />

        <Banner />
        <h1 className="text-xl font-semibold text-center py-5">Nuestros Servicios</h1>
        <InfoCard
          image="https://scontent.cdninstagram.com/v/t51.82787-15/557444277_17914010760197493_9000974144200326184_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzczNDA4MzI2ODExMjQwMTAyMQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=dMEl3gRc_9sQ7kNvwG1pRua&_nc_oc=AdmovFG0QibBgMdZYzqJZZG6y_jSLMiitzwM9clmVaMbORHaA_FytplEFfV2dUSHW692ezBpzNwZNaxOB4daoLDK&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lF5xMZl9q3n9GNWLD6R66A&oh=00_Afe8JqIFh87_NRVUMZrNszRTqdWqmTaU0E9zaniQizlYVw&oe=68FD6BA3"
          title="Título de ejemplo"
          text="Este es el texto que aparece al tocar la card. Tocá otra vez para cerrarla."
        />
        <InfoCard
          image="https://scontent.cdninstagram.com/v/t51.82787-15/557200364_17914010769197493_551426653840063785_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzczNDA4MzI2ODEwNDAxNjY2NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=cpeYiTMIVqQQ7kNvwG5NIBo&_nc_oc=AdkZ5Bqqw8kgC2a_1V1WzHy7huO4zSywiEEBbspAtu-ve_rg5uv3xrrRsPMj6HAFHHynu22cagW9z3uLa-tLmXDm&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lF5xMZl9q3n9GNWLD6R66A&oh=00_AfcjWYToa1oAILmihlGLxfvSxiCRTinSX4X8rRwA-fML5A&oe=68FD706E"
          title="Título de ejemplo"
          text="Este es el texto que aparece al tocar la card. Tocá otra vez para cerrarla."
        />
        
        <OurVision />
        {/*<Banner2 />*/}

        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default App;
