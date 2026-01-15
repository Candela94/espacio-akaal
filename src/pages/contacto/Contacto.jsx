

import './contacto.css'

import { Phone, MapPin } from 'lucide-react';
import { IoLogoInstagram } from "react-icons/io5";


const Contacto = () => {


    return (

        <>
            <section className="contacto-section">

                <h1 className="contacto-titulo">VISITA  AKAAL</h1>
                <p className="contacto-parrafo">Conecta, fluye, vibra </p>


                <div className="contacto-imagen">
                    <img src="https://res.cloudinary.com/dhwd1b4be/image/upload/v1768147279/akaal_1_okynha.png" alt="espacio" className="contacto-img" />
                </div>
                <div className="contacto">


                    <div className="contacto-item">
                        <Phone strokeWidth={1} size={18}/>
                        <p className="contacto-p">+34 614 218 764</p>

                    </div>

                    <div className="contacto-item">
                        <MapPin strokeWidth={1} size={18}/>
                        <p className="contacto-p">C/ENRIC NAVARRO, 28 BAJO. BENIMACLET - VALENCIA</p>

                    </div>
                    <a className='contacto-item' href="https://www.instagram.com/espacio.akaal/" target="_blank" onClick={() => setMenu(false)}>
                        <IoLogoInstagram /> @ESPACIO.AKAAL
                    </a>


                </div>
            </section>

        </>
    );
}

export default Contacto;