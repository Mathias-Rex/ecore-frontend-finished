import { useIllustrations } from '../context/IllustrationContext';
import { getImage } from '../utils/getImage';

export const Hero = () => {
  const { images } = useIllustrations();

  return (
    <header className="hero">
      <div id="particles-js"></div>
      <div className="hero-content">
        <h1>E-CORE Űrjárművek</h1>
        <p className="hero-subtitle">A jövő űrtechnológiája, ma</p>
        <p className="hero-description">
          Innovatív megoldások az űr meghódításához. Kereskedelmi, bányászati, kutatási és védelmi
          járművek tervezése és gyártása.
        </p>
        <a href="#products" className="cta-button">
          Fedezze fel járműveinket
        </a>
      </div>
      <div className="hero-image">
        {images['hero-spacecraft'] && (
          <img src={getImage(images['hero-spacecraft'], 556, 556)} alt="E-Core űrjármű" />
        )}
      </div>
    </header>
  );
};
