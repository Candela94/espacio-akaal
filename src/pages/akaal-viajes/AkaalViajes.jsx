import './viajes.css';
import { ImgContainer } from '../../components/components/Components';
import { useState } from 'react';
import { CardViajes } from '../../components/cards/Cards';
import { FaSuitcaseRolling, FaMapMarkedAlt, FaPlaneDeparture } from "react-icons/fa";

const AkaalViajes = () => {
  const steps = [
    {
      icon: <FaSuitcaseRolling />,
      title: 'Prepárate',
      description: 'Haz tu maleta, revisa tu pasaporte y déjalo todo listo.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Itinerario',
      description: 'Te explicamos qué vamos a hacer cada día del viaje.',
    },
    {
      icon: <FaPlaneDeparture />,
      title: '¡A volar!',
      description: 'Nos vamos de aventura, ¡disfruta el camino!',
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length); // Cicla los pasos
  };

  return (
    <>
      <section className="viajes">
        <ImgContainer>
          <img src="/img/azores.jpg" alt="azores" className="viajes-imagen" />
        </ImgContainer>

        <div className="viajes-intro">
          <h1 className="viajes-nombre">AZORES</h1>
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
    </>
  );
};

export default AkaalViajes;
