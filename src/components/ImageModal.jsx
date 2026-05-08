import { useState, useRef, useEffect } from 'react';
import { getImageUrl } from '../utils/getImage';

export const ImageModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);
  const imageRef = useRef(null);

  if (!src) return null;

  const fullUrl = getImageUrl(src);

  useEffect(() => {
    const img = new Image();
    img.src = fullUrl;
    img.onload = () => setModalLoaded(true);
  }, [fullUrl]);

  return (
    <>
      <div
        className="ship-image-large"
        ref={imageRef}
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        {!thumbLoaded && (
          <div className="image-spinner-overlay">
            <div className="loading-spinner">
              <div className="spinner-orbit" />
              <div className="spinner-core" />
            </div>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          onLoad={() => setThumbLoaded(true)}
          style={{ opacity: thumbLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
        />
      </div>

      {isOpen && (
        <div
          className="image-modal-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="image-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button className="image-modal-close" onClick={() => setIsOpen(false)}>
              ✕
            </button>
            {!modalLoaded && (
              <div className="image-spinner-overlay">
                <div className="loading-spinner">
                  <div className="spinner-orbit" />
                  <div className="spinner-core" />
                </div>
              </div>
            )}
            <img
              src={fullUrl}
              alt={alt}
              style={{ opacity: modalLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
              onLoad={() => setModalLoaded(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};
