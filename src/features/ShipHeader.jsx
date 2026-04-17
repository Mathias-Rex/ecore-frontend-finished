import { useRef } from 'react';
import { SmokeCanvas } from '../components/SmokeCanvas';
import { getImage } from '../utils/getImage';

export const ShipImage = ({ image, name }) => {
  const containerRef = useRef(null);
  const imageSrc = image ? getImage(image, 800, 600) : null;

  return (
    <div className="ship-image-large" ref={containerRef}>
      <SmokeCanvas containerRef={containerRef} />
      {imageSrc && <img src={imageSrc} alt={name} />}
    </div>
  );
};

export const ShipTitle = ({ name, category, tagline }) => (
  <div className="ship-title-section">
    <h1>{name}</h1>
    <p className="ship-category">{category || 'Űrhajó'}</p>
    <p className="ship-tagline">{tagline}</p>
  </div>
);
