

import './privacidad.css'
import { Button } from '../../components/buttons/Button';
import { useNavigate } from 'react-router';


const Privacidad = () => {

    const navigate = useNavigate()

    const handleAceptar = () => {

        navigate(-1)
    }


    return ( 
        <div className='privacidad'>

        <h1 className="privacidad-titulo">POLÍTICA DE PRIVACIDAD</h1>

        <div className="texto-container">
        <p className="privacidad-texto">En Espacio Akaal cuidamos tu privacidad y respetamos la información que decides compartir con nosotros.</p>
        <p className="privacidad-texto">Este sitio web no utiliza formularios ni sistemas de registro. El único medio de contacto disponible es WhatsApp, y la comunicación se inicia siempre de manera voluntaria por parte del usuario.</p>
        <p className="privacidad-texto">La información que compartas a través de este medio, como tu nombre, número de teléfono o mensajes, será utilizada únicamente para responder a tus consultas, brindarte información sobre nuestros servicios o coordinar una visita o sesión. Tus datos no se comparten, venden ni utilizan para fines distintos a este propósito.</p>
        <p className="privacidad-texto">La comunicación se realiza mediante WhatsApp, una plataforma externa que cuenta con sus propias políticas de privacidad, por lo que el tratamiento de la información también se rige por sus términos.</p>
        <p className="privacidad-texto">En cualquier momento puedes solicitar que no se conserve tu información o que se eliminen los mensajes compartidos.
        </p>
        </div>

        <div className="privacidad-boton">
            <Button onClick={handleAceptar}>ACEPTAR</Button>
        </div>
        </div>
     );
}
 
export default Privacidad;