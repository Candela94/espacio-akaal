import './viajes.css';
import { ImgContainer } from '../../components/components/Components';
import { useState, useEffect, useRef } from 'react';
import { CardViajes } from '../../components/cards/Cards';
import { ViajesGaleria } from '../../components/cards/Cards';
import { ViajesAnteriores } from '../../db/imagenes';
import { Button } from '../../components/buttons/Button';
import WhatsAppLink from '../../components/whatsapp-link/WhatsappLink';
import { MountainSnow, Backpack, Flower, FishSymbol, Sunset, Heart } from 'lucide-react';
import { ViajesAnterioresGallery } from '../../components/viajesAnterioresContainer/viajesAnterioresGallery';
import Masonry from '../../components/masonry/Masonry';

const AkaalViajes = () => {


  const [currentStep, setCurrentStep] = useState(0);
  const [showGaleria, setShowGaleria] = useState(false);
  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);
  const [viajeActivo, setViajeActivo] = useState('AZORES');
  const [diasRestantes, setDiasRestantes] = useState(0);
  const scrollRef = useRef(null);



  const galeriaMasonry = [
    { id: 1, img: '/img/az1.jpg', height: 500 },
    { id: 2, img: '/img/az2.jpg', height: 400 },
    { id: 3, img: '/img/az3.jpg', height: 450 }
   
  ];
  



  const steps = [
    {
      icon: <MountainSnow strokeWidth={1} size={58} />,
      title: 'Conexión con la naturaleza',
      description: 'Lagos volcánicos y termas naturales en el bosque y en el mar.',
    },
    {
      icon: <Flower strokeWidth={1} size={58} />,
      title: 'Yoga',
      description: 'Respira, conecta y empieza el día en calma.',
    },
    {
      icon: <Backpack strokeWidth={1} size={58} />,
      title: 'Senderismo',
      description: 'Rutas sencillas entre cascadas.',
    },
    {
      icon: <FishSymbol strokeWidth={1} size={58} />,
      title: 'Animales emblemáticos',
      description: 'Iremos en busca de ballenas y delfines para verlos vivir en su hábitat natural.',
    },

    {
      icon: <Sunset strokeWidth={1} size={58} />,
      title: 'Momentos mágicos',
      description: 'Disfrutaremos de playas salvajes y las preciosas puestas de sol',
    },
    {
      icon: <Heart strokeWidth={1} size={58} />,
      title: '¿A qué esperas?',
      description: 'Te esperamos para que vivas con nosotrx una experiencia única',
      cta: (
        <WhatsAppLink message={`¡Hola! Quiero reservar una plaza en el viaje a ${viajeActivo}`}>
          RESERVA TU PLAZA
        </WhatsAppLink>
      )
    },
  ];

  const isLastStep = currentStep === steps.length - 1;



  // USEFFECT PARA LA FECHA, QUEDAN X DÍAS. 
  useEffect(() => {
    const fechaViaje = new Date('2026-04-02');   //Actualizar fecha cuando se cambie el viaje 
    const hoy = new Date();
    const diferencia = fechaViaje - hoy;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    setDiasRestantes(dias);
  }, []);





  const handleNext = () => {
    const nextStep = (currentStep + 1) % steps.length;
    setCurrentStep(nextStep);

    // Scroll suave a la siguiente card
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * nextStep,
        behavior: 'smooth'
      });
    }
  };

  // Añade también navegación por scroll
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      if (container) {
        const cardWidth = container.offsetWidth;
        const newStep = Math.round(container.scrollLeft / cardWidth);
        if (newStep !== currentStep && newStep < steps.length) {
          setCurrentStep(newStep);
        }
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [currentStep, steps.length]);


  const abrirGaleria = (viaje) => {
    if (viaje && viaje.imagenes) {
      setImagenesSeleccionadas(viaje.imagenes);
      setShowGaleria(true);
    } else {
      console.error('Error: Viajes no tiene el formato esperado');
    }
  };

  return (
    <>
      <section className="viajes">
        <ImgContainer>
          <img src="/img/azores.jpg" alt="azores" className="viajes-imagen" />
        </ImgContainer>


        <div className="viajes-intro">

          <div className="viajes-intro-nombre">
            <h1 className="viajes-nombre">{viajeActivo}</h1>
            <h2 className="viajes-nombre-dos">SAO MIGUEL</h2>
            <p className="viajes-subtitulo">Practica yoga y conecta con la naturaleza más pura y salvaje</p>

          </div>

          <div className="viajes-contador">

            <p className="viajes-fecha">2-10 ABRIL 2026 </p>
            <p className="contador-texto">Quedan {diasRestantes} días</p>

          </div>


          <div className="viajes-intro-buttons">
            <Button style={{ color: 'var(--background)', textAlign: 'start' }} variant='noOutlined'>VER ITINERARIO</Button>

            <WhatsAppLink message={`¡Hola! Quiero reservar una plaza en el viaje a ${viajeActivo}`}>
              RESERVA TU PLAZA
            </WhatsAppLink>

          </div>



        </div>

      </section>



      <section className="viajes-descripcion">
        <h1 className="descripcion-titulo">UN VIAJE PARA <br /> DESCONECTAR DE LA RUTINA <br /> Y RECONECTAR CONTIGO
        </h1>
        <p className="descripcion-parrafo">Un viaje a São Miguel, en las Azores, para disfrutar de la naturaleza más pura del Atlántico </p>
        <p className="descripcion-parrafo">Yoga, termas naturales, paisajes volcánicos y una pequeña tribu con la que compartir la experiencia.</p>


        <div className="viajes-imag">
          <img src="/img/az2.jpg" alt="viaje" className="viajes-image" />
    

        </div>
      </section>








      <section className="viajes-cards">

        <h1 className="header-viajes">QUÉ VAS<br /> A VIVIR  <br />EN ESTE VIAJE</h1>

        <div className="cards-scroll-container" >

          <div className="cards-container" ref={scrollRef}>
            <CardViajes
              icon={steps[currentStep].icon}
              title={steps[currentStep].title}
              description={steps[currentStep].description}
              totalSteps={steps.length}
              currentStep={currentStep}
              onStepClick={setCurrentStep}
              onNextClick={handleNext}
              cta={
                isLastStep ? (
                  <WhatsAppLink message={`¡Hola! Quiero reservar una plaza en el viaje a ${viajeActivo}`}>
                    RESERVA TU PLAZA
                  </WhatsAppLink>
                ) : null
              }

            />
          </div>
        </div>
      </section>

      <section className="viajes-anteriores">
        <h1 className="anteriores-titulo">VIAJES ANTERIORES</h1>
        <ViajesAnterioresGallery />
      </section>



      {/* boton flotante */}
      {/* {currentStep > 0 && (
        <div className="boton-flotante">
          <WhatsAppLink message={`¡Hola! Quiero reservar una plaza en el viaje a ${viajeActivo}`}>
            RESERVA TU PLAZA
          </WhatsAppLink>
        </div>
      )} */}



    </>
  );
};

export default AkaalViajes;
