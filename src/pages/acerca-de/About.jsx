import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Heart, Compass, Flower } from 'lucide-react'
import './About.css'

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const timeline = [
    {
      year: "2013",
      title: "El Comienzo",
      content:
        "Soy María, creadora de Espacio AKAAL. Mi camino comenzó estudiando Educación Social, una etapa que culminó en las Islas Azores durante mi Erasmus, y donde posteriormente me quedé para trabajar por primera vez como Educadora.",
      image: "/img/azores-maria.jpg",
      icon: <MapPin size={24} />
    },
    {
      year: "2014-2016",
      title: "Viaje por Sudamérica",
      content:
        "Para costear mis rutas descubrí el macramé. Me recorrí Sudamérica por tierra durante un año y medio, perfeccionando el arte de tejer nudos y engarzar piedras, mientras entendía que la vida podía vivirse de otra manera.",
      image:
        "/img/sudamerica.jpg",
      icon: <Compass size={24} />
    },
    {
      year: "2016-2017",
      title: "El Yoga como Refugio",
      content:
        "El yoga llegó a mí como un refugio y una guía en un momento interior muy delicado. Me acompañó durante todo mi viaje latinoamericano, recordándome la importancia de la calma y la presencia.",
      image:
        "/img/maria-yoga.png",
      icon: <Flower size={24} />
    },
    {
      year: "2017",
      title: "India: Transformación",
      content:
        "Viajé a la India para formarme como profesora de yoga y aprender orfebrería en plata, usando técnicas rústicas y auténticas, casi sin herramientas pero con una enorme pasión por crear con las manos.",
      image:
        "/img/maria-yoga-2.png",
      icon: <Heart size={24} />
    },
    {
      year: "Hoy",
      title: "Espacio AKAAL",
      content:
        "Tras muchos viajes y crecimiento interior, hoy todo ese camino toma forma en Espacio AKAAL: un proyecto que une viaje, yoga, artesanía y crecimiento personal.",
      image:
        "https://res.cloudinary.com/dhwd1b4be/image/upload/v1767985131/img2_n8gal4.png",
      icon: <Heart size={24} />
    }
  ]

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % timeline.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + timeline.length) % timeline.length)

  return (
    <div className="about-container">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-image">
          <img src="/img/manos.png" alt="Espacio AKAAL" className='image-hero'/>
          <div className="hero-overlay">
            <div className="hero-content">

           <h1 className="titulo-hero">UN VIAJE INTERIOR</h1>
              {/* <span className="hero-date">Desde 2013</span> */}
            
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="timeline-header">
          <h2>Mi Camino</h2>
          <p>Una historia de transformación a través del viaje, el yoga y la artesanía</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="timeline-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="slide-image-container">
                <img
                  src={timeline[currentSlide].image}
                  alt={timeline[currentSlide].title}
                  className="slide-image"
                /></div>
                <div className="slide-content">
                  <div className="slide-text">
                    <div className="slide-header">
                      <div className="slide-icon">
                        {timeline[currentSlide].icon}
                      </div>
                      <div>
                        <span className="slide-year">{timeline[currentSlide].year}</span>
                        <h3 className="slide-title">{timeline[currentSlide].title}</h3>
                      </div>
                    </div>
                    <p className="slide-description">
                      {timeline[currentSlide].content}
                    </p>
                  </div>
                </div>
              </motion.div>

            </AnimatePresence>

            <button className="nav-button prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
            </button>
            <button className="nav-button next" onClick={nextSlide}>
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="timeline-dots">
            {timeline.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="final-section">
        <div className="final-content">
          <h2>Ven a experimentar tu propio viaje interior</h2>
          <p>
            Desde aquí organizo viajes conscientes a la India y a las Islas Azores,
            para explorar el mundo y al mismo tiempo explorarse a uno mismo.
          </p>
          <p>
            Cada propuesta nace de mi historia de vida, del yoga, la naturaleza
            y las culturas locales como camino de vuelta a lo esencial.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
