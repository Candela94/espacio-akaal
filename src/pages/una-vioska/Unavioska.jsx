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





const UnaVioska = () => {
    const [modoSeleccion, setModoSeleccion] = useState(false);
    const [seleccionados, setSeleccionados] = useState([]);
    const [menu, setMenu] = useState(false);
    const [filtroActivo, setFiltroActivo] = useState("todo");
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


    const handleSeleccion = (id) => {
        if (seleccionados.includes(id)) {
            setSeleccionados(seleccionados.filter(item => item !== id));
        } else {
            setSeleccionados([...seleccionados, id]);
        }
    };

    const borrarSeleccion = () => setSeleccionados([]);

    const handleMenu = () => setMenu(!menu);

    const handleFiltro = (filtro) => {
        setFiltroActivo(filtro);
        setMenu(false);
    };

    const productosFiltrados = productos.filter(producto =>
        filtroActivo === "todo" ? true : producto.filtro === filtroActivo
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
                    <h1 className="vioska-titulo">ARTESANÍA HECHA CON AMOR</h1>
                </div>
            </ImgContainer>

            <section className="vioska-galeria">
                <h2 className="galeria-titulo">Galería de productos</h2>

                <div className="modo-seleccion-container">
  <AnimatePresence mode="wait">
    {!modoSeleccion && (
      <motion.p
        className="texto-explicativo"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        Puedes seleccionar tus productos favoritos haciendo clic aquí
      </motion.p>
    )}
  </AnimatePresence>

  <AnimatePresence mode="wait">
    <motion.div
      key={modoSeleccion ? 'activo' : 'inactivo'} // fuerza reinicio de animación
      className={`vioska-seleccionar ${modoSeleccion ? 'activo' : ''}`}
      onClick={toggleSeleccion}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {modoSeleccion ? 'MODO SELECCIÓN ACTIVADO' : 'Pulsa aquí'}
    </motion.div>
  </AnimatePresence>
</div>












              
              
              
              
              







                <div className="filtros" ref={menuRef}>
                    <p onClick={handleMenu} className="filtros-texto">FILTRAR</p>
                    {menu && (
                        <ul className="filtro-ul">
                            <li className="filtro-li" onClick={() => handleFiltro("todo")}>TODO</li>
                            <li className="filtro-li" onClick={() => handleFiltro("macrame")}>MACRAMÉ</li>
                            <li className="filtro-li" onClick={() => handleFiltro("plata")}>PLATA</li>
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
