import { useState, useRef, useEffect } from "react";
import { horarios } from "../../db/imagenes";
import { Button } from "../../components/buttons/Button";
import { CardHorario } from "../../components/cards/Cards";
import { ChevronDown } from "lucide-react";
import "./espacio-akaal.css";

const diasSemana = ['LUN.', 'MAR.', 'MIER.', 'JUE.', 'VIE.'];

const diaCompleto = {
    'LUN.': 'Lunes',
    'MAR.': 'Martes',
    'MIER.': 'Miércoles',
    'JUE.': 'Jueves',
    'VIE.': 'Viernes'
};

const EspacioAkaal = () => {
    const [claseSeleccionada, setClaseSeleccionada] = useState(horarios[0].nombre);
    const [diaSeleccionado, setDiaSeleccionado] = useState(horarios[0].dias[0].dia);
    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleSeleccionClase = (nombreClase) => {
        setClaseSeleccionada(nombreClase);

        const claseElegida = horarios.find(h => h.nombre === nombreClase);
        const primerDiaDisponible = claseElegida?.dias[0]?.dia;

        if (primerDiaDisponible) {
            setDiaSeleccionado(primerDiaDisponible);
        }

        // Pequeño delay para evitar solape con eventos de click
        setTimeout(() => {
            setMostrarDropdown(false);
        }, 100); // 100ms es suficiente
    };


    const clase = horarios.find(h => h.nombre === claseSeleccionada);
    const dia = clase?.dias.find(d => d.dia === diaSeleccionado);

    // Cerrar dropdown al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setMostrarDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section className="akaal-horarios">
            <h1 className="akaal-titulo">HORARIOS</h1>

            {/* DROPDOWN DE CLASES */}
            <div className="tipo-clase-dropdown" ref={dropdownRef}>
                <button
                    className="dropdown-toggle"
                    onClick={() => setMostrarDropdown(prev => !prev)}
                >
                    <h2 className="clase-titulo">{claseSeleccionada}</h2>
                    <ChevronDown size={18} strokeWidth={1} />
                </button>

                {mostrarDropdown && (
                    <ul className="dropdown-menu">
                        {horarios.map((h, i) => (
                            <li
                                key={i}
                                onClick={() => handleSeleccionClase(h.nombre)}
                                className={`dropdown-item ${h.nombre === claseSeleccionada ? "activo" : ""
                                    }`}
                            >
                                {h.nombre}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* DÍAS DE LA SEMANA */}
            <div className="calendario">
                {diasSemana.map((diaAbreviado) => {
                    const diaReal = diaCompleto[diaAbreviado];
                    const existeDia = clase?.dias.some(d => d.dia === diaReal);

                    return (
                        <div
                            key={diaAbreviado}
                            onClick={() => existeDia && setDiaSeleccionado(diaReal)}
                            className={`dia
                ${diaReal === diaSeleccionado ? "seleccionado" : "no-seleccionado"}
                ${!existeDia ? "deshabilitado" : ""}
              `}
                        >
                            {diaAbreviado}
                        </div>
                    );
                })}
            </div>

            {/* LISTADO DE CLASES */}
            <div className="lista-clases">
                {dia?.clases?.length > 0 ? (
                    dia.clases.map((claseItem, index) => (
                        <CardHorario
                            key={index}
                            nombre={claseSeleccionada}
                            hora={claseItem.hora}
                            instructor={claseItem.instructor}
                        />
                    ))
                ) : (
                    <>
                     <div className="sin-clases">No hay clases este día</div>
                    </>
                   
                )}
            </div>


        </section>
    );
};

export default EspacioAkaal;
