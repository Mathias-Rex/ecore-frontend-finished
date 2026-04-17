import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
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
                style={{ opacity: modalLoaded ? 1 : 0 }}
                onLoad={() => setModalLoaded(true)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
