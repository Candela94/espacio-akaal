import { useParams, useNavigate } from "react-router";
import { motion } from 'framer-motion'
import { useRef, useState } from "react";
import './css/detalle.css'
import useFetchProductos from '../../hooks/useFetchProducts';
import {HandHeart,} from 'lucide-react'
import { Button } from "../../components/buttons/Button";


const DetalleProducto = () => {

    const { pid } = useParams();

    const sliderRef = useRef(null);
    const [imagenActiva, setImagenActiva] = useState(0);

    const productos = useFetchProductos();
const producto = productos.find(p => p.id === Number(pid));

    const handleScroll = () => {
        const scrollLeft = sliderRef.current.scrollLeft;
        const width = sliderRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / width);
        setImagenActiva(newIndex);
    };

    const scrollToImagen = (index) => {
        const width = sliderRef.current.clientWidth;
        sliderRef.current.scrollTo({
            left: width * index,
            behavior: "smooth",
        });
    };



    const seleccionarProducto = () => {
        // Obtener la lista actual desde localStorage
        const seleccionActual = JSON.parse(localStorage.getItem("seleccionados")) || [];
    
        // Si no está ya seleccionado, lo añadimos
        if (!seleccionActual.includes(producto.id)) {
            const nuevaSeleccion = [...seleccionActual, producto.id];
            localStorage.setItem("seleccionados", JSON.stringify(nuevaSeleccion));
        }
    
        navigate(-1); // Volver a galería
    };
    

    const navigate = useNavigate();


    const handleBack = () => {

        navigate(-1)

    }


    if (!producto) return null;

    return (

        <div className="modal-overlay">
            <motion.div
                className="modal-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <button className="cerrar" onClick={handleBack}>✕</button>
            

                <div className="slider-container">
                    <div className="slider" ref={sliderRef} onScroll={handleScroll}>
                        {producto.imagenes.map((img, index) => (
                            <img  key={index} src={img} alt={`imagen-${index}`} className="slide-img" />
                        ))}
                    </div>

                    <div className="dots">
                        {producto.imagenes.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === imagenActiva ? "active" : ""}`}
                                onClick={() => scrollToImagen(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="producto-info">
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <h3>{producto.precio} </h3>
                </div>


                {/* <div className="producto-labels">
                    <div className="label">
                    <HandHeart strokeWidth={1} />

                        <p className="label-p">Hecho a mano</p>
                    </div>
                    <div className="label">
                        
                        <p className="label-p"></p>
                    </div>
                    <div className="label">
                        
                        <p className="label-p"></p>
                    </div>
                </div> */}


                <div className="btn-seleccion">
                <Button onClick={seleccionarProducto}>SELECCIONAR PRODUCTO</Button>


                </div>

            </motion.div>
        </div>
    );
};

export default DetalleProducto;
