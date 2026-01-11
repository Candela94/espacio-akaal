import { CardInicio } from "../../components/cards/Cards";
import { Button } from "../../components/buttons/Button";
import './inicio.css';
import { ImgContainer } from "../../components/components/Components";
import { MdOutlineNorthEast } from "react-icons/md";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Inicio = () => {
    return (
        <>
            <ImgContainer>
                <img src="https://res.cloudinary.com/dhwd1b4be/image/upload/v1768034551/img8_lzki0q.png" alt="inicio" className="inicio-imagen" />
            </ImgContainer>

            <section className='section-inicio'>
                <div className="titulo-container">
                    <h1 className="titulo-linea-izquierda">MANERAS DE</h1>
                    <h1 className="titulo-linea-derecha"> PENSAR EN TI</h1>
                </div>

                <div className="cards-galeria">
                    {[
                        {
                            text: 'Sesiones que conectan y equilibran el cuerpo y la mente',
                            buttonText: 'ESPACIO AKAAL',
                            to: '/espacio-akaal',
                        },
                        {
                            text: 'Piezas hechas a mano, con propósito',
                            buttonText: 'UNA VIOSKA',
                            to: '/una-vioska',
                        },
                        {
                            text: 'Experiencias pensadas para desconectar y renovarte',
                            buttonText: 'AKAAL VIAJES',
                            to: '/akaal-viajes',
                        },
                        {
                            text: 'Reconecta contigo lejos del ruido',
                            buttonText: 'AKAAL RETIROS',
                            to: '/akaal-retiros',
                        }
                    ].map((card, index) => (
                        <motion.div
                            key={card.to}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="cards-galeria"
                        >
                            <CardInicio buttonText={card.buttonText} to={card.to}>
                                {card.text}
                            </CardInicio>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-final">
                <div className="section-content">
                    <h1 className="titulo-final">
                        ESCUCHA <br /> TU CUERPO <br /> ENERGÍA <br /> RITMO
                    </h1>
                    <Button
                        icon={<MdOutlineNorthEast />}
                        iconPosition="right"
                        as={NavLink}
                        to='/about'
                        variant="noOutlined"
                    >
                        CONÓCENOS
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Inicio;