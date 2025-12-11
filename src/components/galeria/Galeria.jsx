import './galeria.css';
import { ImgContainer } from '../components/Components';



export const Galeria = ({ imagenes = [], titulo = 'Galería', className = '' }) => {


  return (


    <section className={`galeria ${className}`}>


      <h1 className="galeria-titulo">{titulo}</h1>

      <div className="galeria-grid">
        
        {imagenes.map((url, index) => (
          <ImgContainer key={index}>
            <img src={url} alt={`imagen-${index}`} className="galeria-img" />
          </ImgContainer>
        ))}
      </div>
    </section>
  );
};
