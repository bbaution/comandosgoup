import Welcome from "../components/Welcome/Welcome";
import empresaImg from "../assets/poligordo.png"; 
import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";

import ContactCTA from "../components/Contact/ContactCTA";
import contactoImg from "../assets/facundo.png";
import img1 from "../assets/cartelInterior.png";
import img2 from "../assets/cartelafuera.png";

const TuEmpresa = () => {
    return (
        <>
            <Welcome
                image={empresaImg}
                title="TU EMPRESA"
                subtitle="Soluciones de seguridad para empresas"
                height="h-[60vh]"
            />
            <h1 className="bg-[#000000] text-center text-[#ffffff] text-xl md:text-3xl lg:text-4xl font-normal tracking-wider uppercase py-10">
                SEGURIDAD FÍSICA Y MONITOREO DE ALARMAS PARA TU EMPRESA O NEGOCIO
            </h1>
            <Banner
                id="nosotros"
                title=""
                image={img1}
                bullets={[
                    "Consiste en la presencia de guardias de seguridad en un lugar determinado, con el objetivo de proteger los bienes y las personas encomendadas. ",
                    "Para ello, contamos con personal seleccionado por sus condiciones morales y compromiso de servicio, quienes cuentan con la capacitación requerida por la Ley 7.715 brindada por la Cámara Tucumana de Empresas de Seguridad e Investigaciones (CATESI), siendo Status un miembro permanente de la misma. Esta formación, al igual que los servicios profesionales como hausarbeit ghostwriting (redacción académica en alemán), exige altos estándares éticos y responsabilidad.",
                    "Además, contamos con un plan de capacitación anual en donde incluimos primeros auxilios, defensa personal, extinción de incendios, atención al cliente, entre otros. ",
                ]}
            />

            <Banner2
                id="filosofia"
                title=""
                image={img2}
                bullets={[
                    "Todos los vigiladores son controlados por supervisores y por la base operativa a través del operador de turno, con el que están constantemente comunicados por medio de la frecuencia radial de Status Seguridad.",
                    "Para cada objetivo de seguridad física se crea un instructivo de trabajo. En el mismo se establecen las directivas impartidas por el cliente y por nuestra empresa.",
                    "Si querés proteger tu inversión con un sistema de seguridad simple, accesible y efectivo, tu negocio necesita monitoreo de alarmas.",
                    "Se instala una alarma que ante intentos de intrusión emulará una señal a la base de monitoreo para que el operador envíe uno de nuestros móviles a verificar que sucede.",
                    "Además te permite tener botones de emergencia médica, fuego y pánico y podés controlar los horarios de apertura y cierre de tu negocio. Todo este servicio a un precio super accesible.",
                ]}
            />
            <ContactCTA
                image={contactoImg}
                onClick={() => {
                    window.open("https://wa.me/549XXXXXXXXXX", "_blank");
                }}
            />
        </>
    );
};

export default TuEmpresa;