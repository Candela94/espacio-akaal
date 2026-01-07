import './viajesAnteriores.css'
import { ViajesAnteriores } from '../../db/imagenes'
import { ViajesAnterioresContainer } from './viajesAnterioresContainer'
import { useState } from 'react'

export const ViajesAnterioresGallery = () => {
  const [indiceActual, setIndiceActual] = useState(0)

  const handleNext = () => {
    if (indiceActual < ViajesAnteriores.length - 1) {
      setIndiceActual(indiceActual + 1)
    }
  }

  const handlePrev = () => {
    if (indiceActual > 0) {
      setIndiceActual(indiceActual - 1)
    }
  }

  return (
    <div className="gallery">
      <div className="viajes-gallery">
        <ViajesAnterioresContainer
          key={indiceActual}
          nombre={ViajesAnteriores[indiceActual].nombre}
          portada={ViajesAnteriores[indiceActual].portada}
          imagenes={ViajesAnteriores[indiceActual].imagenes}
          numberphotos={ViajesAnteriores[indiceActual].imagenes.length}
        />
      </div>

      <div className="gallery-btn">
        <button
          className="gallery-prev"
          onClick={handlePrev}
          disabled={indiceActual === 0}
        >
          ANT.
        </button>

        <button
          className="gallery-next"
          onClick={handleNext}
          disabled={indiceActual === ViajesAnteriores.length - 1}
        >
          SIG.
        </button>
      </div>
    </div>
  )
}
