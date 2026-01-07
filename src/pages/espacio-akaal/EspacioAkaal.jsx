import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { horarios } from "../../db/imagenes";
import { Button } from "../../components/buttons/Button";
import { CardHorario } from "../../components/cards/Cards";
import { ChevronDown } from "lucide-react";
import "./espacio-akaal.css";
import { ImgContainer } from "../../components/components/Components";
import { Galeria } from "../../components/galeria/Galeria";
import { GaleriaSlider } from "../../components/galeria/GaleriaSlider";

const diasSemana = ["LUN.", "MAR.", "MIER.", "JUE.", "VIE."];

const diaCompleto = {
  "LUN.": "Lunes",
  "MAR.": "Martes",
  "MIER.": "Miércoles",
  "JUE.": "Jueves",
  "VIE.": "Viernes",
};

const imagenesYoga = [
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  "https://images.unsplash.com/photo-1593896366973-22e0a9883215?w=800&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
];

const EspacioAkaal = () => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(
    horarios[0].nombre
  );
  const [diaSeleccionado, setDiaSeleccionado] = useState(
    horarios[0].dias[0].dia
  );
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [sliderOpen, setSliderOpen] = useState(false);
  const [sliderInitialIndex, setSliderInitialIndex] = useState(0);

  const dropdownRef = useRef(null);

  const handleSeleccionClase = (nombreClase) => {
    setClaseSeleccionada(nombreClase);

    const claseElegida = horarios.find((h) => h.nombre === nombreClase);
    const primerDiaDisponible = claseElegida?.dias[0]?.dia;

    if (primerDiaDisponible) {
      setDiaSeleccionado(primerDiaDisponible);
    }
    setMostrarDropdown(false);
  };

  const handleOpenSlider = (index) => {
    setSliderInitialIndex(index);
    setSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setSliderOpen(false);
  };

  const clase = horarios.find((h) => h.nombre === claseSeleccionada);
  const dia = clase?.dias.find((d) => d.dia === diaSeleccionado);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMostrarDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <ImgContainer>
       <div className="imagen-provisional">
        <img src="/img/yoga.jpg" alt="" className="img-prov" />
        <p className="texto-provisional">TU MOMENTO  <br />DE PAUSA, <br /> EMPIEZA AQUÍ</p>
       </div>
      </ImgContainer>

      <section className="akaal-horarios">
        <h1 className="akaal-titulo">NUESTROS HORARIOS</h1>
        <p className="akaal-subtitulo">Escucha tu cuerpo, respeta tus límites y disfruta de cada movimiento </p>

        {/* DROPDOWN DE CLASES */}
        <div className="tipo-clase-dropdown" ref={dropdownRef}>
          <motion.button
            className="dropdown-toggle"
            onClick={() => setMostrarDropdown((prev) => !prev)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="clase-titulo">{claseSeleccionada}</h2>
            <motion.div
              animate={{ rotate: mostrarDropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={18} strokeWidth={1} />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {mostrarDropdown && (
              <motion.ul
                className="dropdown-menu"
                initial={{ opacity: 0, y: -10, scaleY: 0.8 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              >
                {horarios.map((h, i) => (
                  <motion.li
                    key={i}
                    onClick={() => handleSeleccionClase(h.nombre)}
                    className={`dropdown-item ${
                      h.nombre === claseSeleccionada ? "activo" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {h.nombre}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* DÍAS DE LA SEMANA */}
        <div className="calendario">
          {diasSemana.map((diaAbreviado) => {
            const diaReal = diaCompleto[diaAbreviado];
            const existeDia = clase?.dias.some((d) => d.dia === diaReal);

            return (
              <motion.div
                key={diaAbreviado}
                onClick={() => existeDia && setDiaSeleccionado(diaReal)}
                className={`dia ${
                  diaReal === diaSeleccionado ? "seleccionado" : ""
                } ${!existeDia ? "deshabilitado" : ""}`}
                whileHover={{ scale: existeDia ? 1.05 : 1 }}
                whileTap={{ scale: existeDia ? 0.95 : 1 }}
                transition={{ duration: 0.2 }}
                layout
              >
                {diaAbreviado}
              </motion.div>
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
                      nombre={claseSeleccionada}
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
      </section>

      {/* SECCIÓN GALERÍA */}

      
       
    </>
  );
};

export default EspacioAkaal;
