import { useState } from 'react';
import './galeria.css';





export const GaleriaSlider = ({ imagenes = [], onClose }) => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="slider-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="slider-modal" onClick={(e) => e.stopPropagation()}>
        <button className="slider-close" onClick={onClose}>×</button>

        <button className="slider-button slider-button-prev" onClick={handlePrev}>
          ‹
        </button>

        <div className="slider-content">
          <img
            src={imagenes[currentIndex]}
            alt={`imagen-${currentIndex}`}
            className="galeria-slide-img"
          />
        </div>

        <button className="slider-button slider-button-next" onClick={handleNext}>
          ›
        </button>

        <div className="slider-pagination">
          {imagenes.map((_, index) => (
            <span
              key={index}
              className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>




      </div>
    </div>
  );
};