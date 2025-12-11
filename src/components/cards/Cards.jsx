


import './cards.css'
import { Button } from '../buttons/Button';
import { NavLink } from 'react-router';
import { MdOutlineNorthEast } from "react-icons/md";







export const ProductCard = () => {
    return (
        <div className='card'>
            <div className="card-img-container">
                <img src="/img/default.png" alt="default" className="card-img" /></div>
            <div className="card-info">
                <h4 className="card-name">Nombre</h4>
                <h4 className="prize">€</h4>
            </div>
        </div>
    );
}









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
    onNextClick
}) => {
    return (
        
        <div className="card-viajes">


            <div className="viajes-icon">{icon}</div>

            <div className="viajes-texto">
                <h1 className="viajes-h1">{title}</h1>
                <p className="viajes-description">{description}</p>
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
export const ViajesGaleria = ({nombre, src, onClick}) => {
    return (           
        <div 
            className="viajes-container" 
            onClick={onClick} 
            style={{cursor: 'pointer'}}
        >
            <img src={src} alt={nombre} className="viajes-img" />
            <div className="viajes-info">
                <h2 className="viajes-titulo">{nombre}</h2>
            </div>
        </div>                  
    ); 
};




























































