
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import img1 from "../assets/cartelInterior.png";
import img2 from "../assets/cartelafuera.png";


import Welcome from "../components/Welcome/Welcome";
import familiaImg from "../assets/facundo.png";
import ServicesSection from "../components/Services/ServicesSection";
import s1 from "../assets/cartelInterior.png";



import ContactCTA from "../components/Contact/ContactCTA";
import contactoImg from "../assets/facundo.png";



const Home = () => {
    return (
        <>
            <main className="overflow-x-hidden dark:bg-gray-900 bg-white">

                <Welcome
                    image={familiaImg}
                    title="SERVIR Y PROTEGER"
                    subtitle="Seguridad privada al servicio de personas y empresas."
                    height="h-[70vh]"
                />
                <ServicesSection
                    id="servicios"
                    title="SEGURIDAD FÍSICA Y MONITOREO DE ALARMAS PARA TU EMPRESA O NEGOCIO"
                    services={[
                        {
                            image: s1,
                            title: "Seguridad física",
                            text: "En Comandos Group brindamos servicios de seguridad privada profesional, orientados a la prevención, el control y la protección de personas, empresas e instalaciones.Nuestro trabajo se apoya en la presencia activa, la disciplina operativa y el cumplimiento de protocolos, con control operativo permanente, garantizando un servicio confiable.Nuestro servicio principal está a cargo de guardias de seguridad, que actúan con responsabilidad, criterio y supervisión constante en cada puesto.",
                        },

                    ]}
                />
                <Banner
                    id="nosotros"
                    title="Nosotros"
                    image={img1}
                    bullets={[
                        "Somos una empresa de seguridad privada de gestión familiar, con más de 20 años de trayectoria en el rubro. Desde nuestros inicios, la empresa se formó sobre una base operativa sólida, con una manera de trabajar marcada por la disciplina, el orden y la responsabilidad.",
                        "La conducción de la empresa se apoya en experiencia real, lo que definió una forma concreta de entender la seguridad: orden, cumplimiento de protocolos y presencia constante en cada servicio.",
                        "Con el tiempo, Comandos Group fue incorporando distintas áreas de gestión, manteniendo siempre una conducción cercana y activa. Cada operación es supervisada de manera directa por quienes forman parte de la empresa, garantizando control, continuidad y atención personalizada.",
                        "Hoy, nuestra empresa consolida su crecimiento sobre una gestión cercana, control operativo permanente y una manera de trabajar que prioriza la responsabilidad en cada servicio.",
                    ]}
                />

                <Banner2
                    id="filosofia"
                    title="POLÍTICAS DE CALIDAD DE
COMANDOS GROUP"
                    image={img2}
                    bullets={[
                        <p key="intro">
                            Las políticas de calidad definen la personalidad de esta empresa y son
                            vitales para su óptimo funcionamiento:
                        </p>,

                        <ul key="list" className="list-disc pl-6 space-y-2">
                            <li>Satisfacer las necesidades de los clientes, con un servicio de calidad y eficiencia.</li>
                            <li>Capacitación constante del personal.</li>
                            <li>Perseguir la mejora continua del sistema de gestión de calidad.</li>
                            <li>Cumplir los requisitos legales y los aplicables a los productos y servicios brindados.</li>
                            <li>Ejecutar con eficacia los proyectos propuestos.</li>
                        </ul>,

                    ]}
                />
                <ContactCTA
                    image={contactoImg}
                    onClick={() => {
                        window.open("https://wa.me/549XXXXXXXXXX", "_blank");
                    }}
                />

            </main>
        </>
    );
};

export default Home;