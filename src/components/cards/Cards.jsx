


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
    buttonIcon, 
    to // <--- ruta a donde debe ir la card
}) => {

    return (
        <div className="card-inicio">
            <p className="card-text">{children}</p>

            <Button
                as={NavLink}   // <-- convierte el botón en un enlace
                to={to}        // <-- ruta recibida por props
                icon={<MdOutlineNorthEast/>}
                iconPosition="right"
                variant="noOutlined"
            >
                {buttonText}
            </Button>
        </div>
    );
};









