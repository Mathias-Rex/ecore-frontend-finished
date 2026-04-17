import { useRef, useState } from 'react';
import { SmokeCanvas } from './SmokeCanvas';
import { getImage } from '../utils/getImage';

export const ProductCard = ({ slug, name, description, specs, imageUrl }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const imageSrc = imageUrl ? getImage(imageUrl, 340, 250) : null;

  return (
    <a href={`/${slug}`} className="product-item">
      <div className="product-image-container" ref={containerRef}>
        {loading && <div className="image-loader"></div>}
        <SmokeCanvas containerRef={containerRef} />
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            onLoad={() => setLoading(false)}
            style={{ opacity: loading ? 0 : 1 }}
          />
        )}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        <ul className="product-specs">
          {specs?.map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};
