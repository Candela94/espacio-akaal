import './viajes.css';
import { ImgContainer } from '../../components/components/Components';
import { useState } from 'react';
import { CardViajes } from '../../components/cards/Cards';
import { FaSuitcaseRolling, FaMapMarkedAlt, FaPlaneDeparture } from "react-icons/fa";
import { ViajesGaleria } from '../../components/cards/Cards';
import { GaleriaSlider } from '../../components/galeria/GaleriaSlider';
import { ViajesAnteriores } from '../../db/imagenes';
import { Button } from '../../components/buttons/Button';
import WhatsAppLink from '../../components/whatsapp-link/WhatsappLink';
import { Backpack, NotebookText, Clover, Heart } from 'lucide-react';



const AkaalViajes = () => {

  
  const steps = [
    {
      icon: <Backpack strokeWidth={1} size={64}/>,
      title: 'Prepárate',
      description: 'Haz tu maleta, revisa tu pasaporte y déjalo todo listo.',
    },

    {
      icon: <Clover strokeWidth={1} size={64}/>,
      title: 'Comunidad',
      description: 'Conoce a nuevas amistades únicas.',
    },
    {
      icon: <NotebookText strokeWidth={1} size={64}/>,
      title: 'Itinerario',
      description: 'Te explicamos qué vamos a hacer cada día del viaje.',
    },
    {
      icon: <Heart strokeWidth={1} size={64}/>,
      title: '¡A volar!',
      description: 'Nos vamos de aventura, ¡disfruta el camino!',
    },
  ];

  const anteriores = [
    { nombre: 'AZORES', portada: '/img/azores.jpg' }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [showGaleria, setShowGaleria] = useState(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const abrirGaleria = () => {
    console.log('Click en galería!');

    if (ViajesAnteriores && ViajesAnteriores.length > 0 && ViajesAnteriores[0].imagenes) {
      setImagenesSeleccionadas(ViajesAnteriores[0].imagenes);
      setShowGaleria(true);
      console.log('Galería abierta');
    } else {
      console.error('Error: Viajes no tiene el formato esperado');
    }
  };

  const viajeActivo = anteriores[0]?.nombre || "este viaje";

  return (
    <>
      <section className="viajes">
        <ImgContainer>
          <img src="/img/azores.jpg" alt="azores" className="viajes-imagen" />
        </ImgContainer>

        <div className="viajes-intro">
          <h1 className="viajes-nombre">{viajeActivo}</h1>

          <div className="viajes-intro-buttons">
            <Button>VER ITINERARIO</Button>
            <WhatsAppLink message={`¡Hola! Quiero reservar una plaza en el viaje a ${viajeActivo}`}>
              RESERVA TU PLAZA
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="viajes-cards">
        <h1 className="header-viajes">CÓMO NOS ORGANIZAMOS</h1>

        <CardViajes
          icon={steps[currentStep].icon}
          title={steps[currentStep].title}
          description={steps[currentStep].description}
          totalSteps={steps.length}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
          onNextClick={handleNext}
        />
      </section>

      <section className="viajes-anteriores">
        <h1 className="viajes-titulo-seccion">VIAJES ANTERIORES</h1>
        <div className="viajes-galeria">
          {anteriores.map((ant, id) => (
            <ViajesGaleria
              src={ant.portada}
              nombre={ant.nombre}
              alt={ant.nombre}
              key={id}
              onClick={abrirGaleria}
            />
          ))}
        </div>
      </section>

      {showGaleria && (
        <GaleriaSlider
          imagenes={imagenesSeleccionadas}
          onClose={() => setShowGaleria(false)}
        />
      )}
    </>
  );
};

export default AkaalViajes;
