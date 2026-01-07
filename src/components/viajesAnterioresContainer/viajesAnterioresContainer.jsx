import './viajesAnteriores.css'
import { Image } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ViajesAnterioresContainer = ({ numberphotos, portada, imagenes, nombre }) => {



  const [overlayOpen, setOverlayOpen] = useState(false);
  const [indiceActual, setIndiceActual] = useState(0);




  const abrirOverlay = () => {
    setIndiceActual(0); // Puedes cambiar a otro índice si prefieres
    setOverlayOpen(true);
  };




  const cerrarOverlay = () => {
    setOverlayOpen(false);
    setIndiceActual(0);
  };

  




  const irIzquierda = () => {
    setIndiceActual((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };




  const irDerecha = () => {
    setIndiceActual((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };



  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') cerrarOverlay();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cerrarOverlay]);

  return (
    <>
      <div className="viaje-container" onClick={abrirOverlay} style={{ cursor: 'pointer' }}>

   

          <div className="viaje-portada">
            <img src={portada} alt='portada' className="viaje-portada-img" />
          </div>

         
     

        <div className="viaje-footer">
          <h2 className="viaje-nombre">{nombre}</h2>
          <div className="viaje-icon-image">
            <Image strokeWidth={1} />
            <p className="viaje-icon-text"> + {numberphotos}</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {overlayOpen && (
        <div className="overlay" onClick={cerrarOverlay}>
          <div
            className="overlay-slider"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: `translateX(-${indiceActual * 100}%)` }}
          >
            {imagenes.map((img, index) => (
              <img key={index} src={img} alt={`img-${index}`} className="overlay-img" />
            ))}
          </div>
          <button className="btn-prev" onClick={(e) => { e.stopPropagation(); irIzquierda(); }}>‹</button>
          <button className="btn-next" onClick={(e) => { e.stopPropagation(); irDerecha(); }}>›</button>
        </div>
      )}
    </>
  );
};
