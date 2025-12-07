


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
                icon={<MdOutlineNorthEast/>}
                iconPosition="right"
                variant="noOutlined"
                className='btn-icon-only'
            >
                {buttonText}
            </Button>
        </NavLink>
    );
};
  
  

  
  
  
  
  
  
  
  
  
  
  
  










