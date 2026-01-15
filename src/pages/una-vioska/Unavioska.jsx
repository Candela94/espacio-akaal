import './css/vioska.css'
import { ImgContainer } from '../../components/components/Components';
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { ProductCard } from '../../components/cards/Cards';
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect, useRef } from 'react';
import { Button } from '../../components/buttons/Button';
import useFetchProductos from '../../hooks/useFetchProducts';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Pointer,
    PointerOff,
    ShoppingCart,
    HandHeart,
    MessageCircleMore
} from "lucide-react";

// 📝 Lista de pasos de instrucciones
const pasosInstrucciones = [
    {
        icono: <Pointer strokeWidth={1} />,
        texto: (
            <>
                Pulsa el botón <strong>"Seleccionar"</strong> para poder elegir las joyas que te hayan llegado al alma
            </>
        ),
    },
    {
        icono: <PointerOff strokeWidth={1} />,

        texto: (
            <>
                <strong>"Desactiva"</strong> para volver a vista normal.
            </>
        ),

    },
    {
        icono: <ShoppingCart strokeWidth={1} />,
        texto: (
            <>
                Pulsando  <strong>"Ver pedido"</strong>, verás el resumen de tus productos seleccionados.
            </>
        ),

    },
    {
        icono: <MessageCircleMore strokeWidth={1} />,
        texto: (
            <>
                <strong>"Escribe tu nombre"</strong> para conocerte mejor y contáctanos directamente por WhatsApp para reservar tus joyas.
            </>
        ),
        texto: 'Desde ahí, escribe tu nombre para conocerte mejor y contáctanos directamente por WhatsApp para reservar tu pedido',
    },
    {
        icono: <HandHeart strokeWidth={1} />,
        texto: (
            <>
                Recuerda que todo es <strong>"100% artesanal"</strong> , por lo que te llevarás <strong>una pieza única.</strong>
            </>
        ),

    },
];





const UnaVioska = () => {
    const [modoSeleccion, setModoSeleccion] = useState(false);
    const [seleccionados, setSeleccionados] = useState([]);
    const [menu, setMenu] = useState(false);
    const [filtroActivo, setFiltroActivo] = useState("todo");
    const [tipoActivo, setTipoActivo] = useState("todo");

    const menuRef = useRef(null);

    const productos = useFetchProductos();
    const navigate = useNavigate();

    const toggleSeleccion = () => {
        setModoSeleccion(prev => {
            if (prev) setSeleccionados([]);
            return !prev;
        });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenu(false);
            }
        };

        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);

    useEffect(() => {
        const seleccionGuardada = JSON.parse(localStorage.getItem("seleccionados")) || [];
        setSeleccionados(seleccionGuardada);

        if (seleccionGuardada.length > 0) {
            setModoSeleccion(true); // 💡 Activa el modo selección si hay algo guardado
        }
    }, []);


    const handleSeleccion = (id) => {
        let nuevaSeleccion;
        if (seleccionados.includes(id)) {
            nuevaSeleccion = seleccionados.filter(item => item !== id);
        } else {
            nuevaSeleccion = [...seleccionados, id];
        }
        setSeleccionados(nuevaSeleccion);
        localStorage.setItem("seleccionados", JSON.stringify(nuevaSeleccion));
    };
    




    const borrarSeleccion = () => {
        setSeleccionados([]);
        localStorage.removeItem("seleccionados");
    };
    


    const handleMenu = () => setMenu(!menu);

  
    


    const handleFiltro = (filtro) => {
        setFiltroActivo(filtro);
        setMenu(false);
    };

    const handleTipo = (tipo) => {
        setTipoActivo(tipo);
        setMenu(false);
    };





    const productosFiltrados = productos.filter(producto =>
        (filtroActivo === "todo" || producto.filtro === filtroActivo) &&
        (tipoActivo === "todo" || producto.tipo === tipoActivo)
    );


    const irAResumen = () => {
        const productosSeleccionados = productos.filter(producto =>
            seleccionados.includes(producto.id)
        );

        navigate('/resumen-producto', {
            state: { productos: productosSeleccionados }
        });
    };

    useEffect(() => {
        if (window.location.hash === '#galeria') {
            const section = document.querySelector('.vioska-galeria');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <>
            <ImgContainer>
                <img src="/img/colgante-mb.png" alt="colgante" className="vioska-portada" />
                <div className="vioska-info">
                    <h1 className="vioska-titulo">UNA VIOSKA.</h1>
                </div>
            </ImgContainer>

            <section className="vioska-instrucciones">
                <div className="artesania">
                    <Sparkles strokeWidth={0.7} />
                    <h3 className="instrucciones-texto">Cada pieza está hecha a mano, con mucho mimo y dedicación.</h3>
                    <Sparkles strokeWidth={0.7} />
                </div>

                <h4 className="instrucciones-texto">Pero antes de empezar...</h4>

                <ul className="instrucciones-ul">
                    {pasosInstrucciones.map((item, index) => (
                        <li key={index} className="instrucciones-li">
                            {item.icono}
                            <p className="instrucciones-p">{item.texto}</p>
                        </li>
                    ))}
                </ul>

                <div className="button">
                    <Button as="a" href="#galeria">
                        Ver galería
                    </Button></div>

            </section>

            <section id='galeria' className="vioska-galeria">
                <h2 className="galeria-titulo">Galería de productos</h2>

                <div className="galeria-header-sticky">
                    <div className="modo-seleccion-container">
                        <div className="seleccion-multiple-container">
                            <p className="seleccion-titulo">
                                {modoSeleccion
                                    ? 'Estás en modo selección. Pulsa para volver a vista normal.'
                                    : 'Estás en vista normal. ¿Quieres seleccionar varias piezas a la vez?'}
                            </p>
                            <Button onClick={toggleSeleccion}>
                                {modoSeleccion ? 'DESACTIVAR' : 'ACTIVAR'}
                            </Button>
                        </div>
                    </div>

                    <div className="filtros" ref={menuRef}>
                        <p onClick={handleMenu} className="filtros-texto">
                            FILTRAR{(filtroActivo !== "todo" || tipoActivo !== "todo") && ` · ${filtroActivo !== "todo" ? filtroActivo : ""}${(filtroActivo !== "todo" && tipoActivo !== "todo") ? " / " : ""}${tipoActivo !== "todo" ? tipoActivo : ""}`}
                        </p>

                        {menu && (
                            <ul className="filtro-ul">
                                <li className="filtro-li" onClick={() => handleTipo("todo")}>TODO</li>
                                <li className="filtro-li" onClick={() => handleTipo("pendientes")}>PENDIENTES</li>
                                <li className="filtro-li" onClick={() => handleTipo("colgantes")}>COLGANTES</li>
                                <li className="filtro-li" onClick={() => handleTipo("anillos")}>ANILLOS</li>
                                {/* <li className="filtro-li" onClick={() => handleFiltro("macrame")}>MACRAMÉ</li>
                                <li className="filtro-li" onClick={() => handleFiltro("plata")}>PLATA</li> */}
                            </ul>
                        )}
                    </div>

                    {modoSeleccion && (
                        <div className="cantidad-productos">
                            <p className="texto-productos">
                                Productos seleccionados ({seleccionados.length})
                            </p>
                            <AiOutlineDelete onClick={borrarSeleccion} />
                        </div>
                    )}
                </div>


                <div className="productos">
                    {productosFiltrados.map(producto => (
                        <ProductCard
                            key={producto.id}
                            producto={producto}
                            modoSeleccion={modoSeleccion}
                            seleccionado={seleccionados.includes(producto.id)}
                            onSeleccionar={() => handleSeleccion(producto.id)}
                        />
                    ))}
                </div>
            </section>

            {seleccionados.length > 0 && (
                <footer className="pedido-footer">
                    <Button onClick={irAResumen}>VER PEDIDO</Button>
                </footer>
            )}
        </>
    );
};

export default UnaVioska;
