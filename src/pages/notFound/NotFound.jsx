

import { Button } from "../../components/buttons/Button";



const NotFound = () => {
    return (  
        <>
         <div className='not-found'>

<h1 className="not-found-titulo">¡OOPS! ALGO SE MOVIÓ EN EL CAMINO</h1>

<div className="not-found-container">
<p className="not-found-texto">Esta página no está disponible o quizá nunca estuvo aquí.</p>
<p className="not-found-texto">A veces perderse también es parte del proceso.</p>
<p className="not-found-texto">Te invitamos a regresar al inicio o a escribirnos por WhatsApp para acompañarte y orientarte.</p>
<p className="not-found-texto">Todo llega a su lugar 🤍</p>

</div>

<div className="privacidad-boton">
    <Button >CONTÁCTANOS</Button>
    <Button >VOLVER AL INICIO</Button>
</div>
</div>
        
        </>
    );
}
 
export default NotFound;