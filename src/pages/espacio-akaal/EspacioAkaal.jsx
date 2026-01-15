import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { horarios } from "../../db/imagenes";
import { CardHorario } from "../../components/cards/Cards";
import "./espacio-akaal.css";
import { ImgContainer } from "../../components/components/Components";
import WhatsAppLink from "../../components/whatsapp-link/WhatsappLink";
import { espacioAkaalImgs } from "../../db/imagenes";
import Masonry from "../../components/masonry/Masonry";

const diasSemana = ["LUN.", "MAR.", "MIER.", "JUE.", "VIE."];

const diaCompleto = {
  "LUN.": "Lunes",
  "MAR.": "Martes",
  "MIER.": "Miércoles",
  "JUE.": "Jueves",
  "VIE.": "Viernes",
};

const EspacioAkaal = () => {
  // Filtrar solo la clase de Yoga
  const claseYoga = horarios.find((h) => h.nombre === "YOGA");

  const [diaSeleccionado, setDiaSeleccionado] = useState(
    claseYoga?.dias[0]?.dia || "Lunes"
  );
  const [sliderOpen, setSliderOpen] = useState(false);
  const [sliderInitialIndex, setSliderInitialIndex] = useState(0);

  const handleOpenSlider = (index) => {
    setSliderInitialIndex(index);
    setSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
  };

  const dia = claseYoga?.dias.find((d) => d.dia === diaSeleccionado);

  const galeriaItems = espacioAkaalImgs.map((img, index) => ({
    id: `akaal-${index}`,
    img,
    height: 300 + Math.floor(Math.random() * 100),
    url: img,
    }));

  return (
    <>
      <ImgContainer>
        <div className="imagen-provisional">
          <img src="https://res.cloudinary.com/dhwd1b4be/image/upload/v1767985131/img4_its4nr.png" alt="" className="img-prov" />
          <h1 className="texto-provisional">
           ESPACIO <br /> AKAAL
          </h1>
        </div>
      </ImgContainer>

      <section className="akaal-horarios">
        <div className="akaal-titulo-subtitulo">
          <h1 className="akaal-titulo">NUESTROS HORARIOS</h1>
          <p className="akaal-subtitulo">
            Escucha tu cuerpo, respeta tus límites y disfruta de cada movimiento
          </p>
        </div>

        {/* TÍTULO DE LA DISCIPLINA */}
        {/* <div className="tipo-clase-titulo">
          <h2 className="clase-titulo">YOGA</h2>
        </div> */}

        {/* DÍAS DE LA SEMANA */}
        <div className="calendario">
          {diasSemana.map((diaAbreviado) => {
            const diaReal = diaCompleto[diaAbreviado];

            return (
              <motion.button
                key={diaAbreviado}
                onClick={() => setDiaSeleccionado(diaReal)}
                className={`dia ${diaReal === diaSeleccionado ? "seleccionado" : ""
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                layout
              >
                {diaAbreviado}
              </motion.button>
            );
          })}
        </div>

        {/* LISTADO DE CLASES */}
        <div className="lista-clases">
          <AnimatePresence mode="wait">
            {dia?.clases?.length > 0 ? (
              <motion.div
                key={`con-clases-${diaSeleccionado}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="clases-container"
              >
                {dia.clases.map((claseItem, index) => (
                  <motion.div
                    key={`${diaSeleccionado}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <CardHorario
                      nombre="YOGA"
                      hora={claseItem.hora}
                      instructor={claseItem.instructor}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`sin-clases-${diaSeleccionado}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="sin-clases">No hay clases este día</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="akaal-button">
        <WhatsAppLink>MÁS INFORMACIÓN</WhatsAppLink>
      </div>
      </section>

      

      {/* SECCIÓN GALERÍA */}

      <section className="akaal-galeria">

        <h1 className="galeria-titulo">CONOCE <br /> ESPACIO AKAAL</h1>
      <Masonry items={galeriaItems} />

      </section>
    </>
  );
};

export default EspacioAkaal;