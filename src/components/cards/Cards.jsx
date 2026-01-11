


import './cards.css'
import { Button } from '../buttons/Button';
import { NavLink } from 'react-router';
import { MdOutlineNorthEast } from "react-icons/md";

import { useNavigate, useLocation } from 'react-router';

export const ProductCard = ({ producto, modoSeleccion, seleccionado, onSeleccionar }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (modoSeleccion) {
            onSeleccionar();
        } else {
            navigate(`/producto/${producto.id}`);
            state: { background: location }

        }
    };

    return (
        <div
            className={`card ${seleccionado ? 'card-seleccionada' : ''}`}
            onClick={handleClick}
        >
            <div className="card-img-container">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="card-img"
                />
            </div>

            <div className="card-info">
                <p className="card-name">{producto.nombre}</p>
                <p className="card-prize">{producto.precio} </p>
            </div>
        </div>
    );
};





export const CardPedido = ({ producto, onEliminar }) => {

    return (

        <div className=" card-pedido">

            <div className="imagen-info">
                <div className="card-img-container-resumen">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="card-img-resumen"
                    />
                </div>

                <div className="card-info-resumen">
                    <p className="card-name">{producto.nombre}</p>
                    <p className="prize">{producto.precio}</p>
                </div>

            </div>
            <Button
                variant="noOutlined"
                onClick={() => onEliminar(producto.id)}
                className="btn-eliminar"
            >
                Eliminar
            </Button>

        </div>
    );
};





export const CardInicio = ({
    children,
    buttonText,
    to
}) => {

    return (
        <NavLink to={to} className="card-inicio card-clickable">
            <p className="card-text">{children}</p>

            <Button
                as="div"
                icon={<MdOutlineNorthEast />}
                iconPosition="right"
                variant="noOutlined"
                className='btn-icon-only'
            >
                {buttonText}
            </Button>
        </NavLink>
    );
};





export const CardViajes = ({
    icon,
    title,
    description,
    totalSteps,
    currentStep,
    onStepClick,
    onNextClick,
    cta
}) => {
    return (

        <div className="card-viajes">


            <div className="viajes-icon">{icon}</div>

            <div className="viajes-texto">
                <h1 className="viajes-h1">{title}</h1>
                <p className="viajes-description">{description}</p>
                {cta && cta !== null && (
                    <div className="viajes-cta">
                        {cta}
                    </div>
                )}

            </div>



            <div className="viajes-footer">
                {/* Indicadores */}
                <div className="step-indicators">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <span
                            key={index}
                            className={`step-dot ${index === currentStep ? 'active' : ''}`}
                            onClick={() => onStepClick(index)}
                        />
                    ))}
                </div>

                {/* Botón "SIG." */}
                <Button variant='noOutlined' onClick={onNextClick}>
                    SIG.
                </Button>



            </div>
        </div>
    );
};





// ViajesGaleria Component (va en Cards.jsx)
export const ViajesGaleria = ({ nombre, src, onClick }) => {
    return (
        <div
            className="viajes-container"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <img src={src} alt={nombre} className="viajes-img" />
            <div className="viajes-info">
                <h2 className="viajes-titulo">{nombre}</h2>
            </div>
        </div>
    );
};




// card horario 

export const CardHorario = ({ nombre, hora, instructor }) => {
    return (
        <div className="card-horario">
            <div>
                <h4 className="clase">{nombre}</h4>
                <p className="hora">{hora}</p>
            </div>

        </div>
    );
};































































