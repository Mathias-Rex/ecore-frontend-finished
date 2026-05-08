/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { API_URL } from '../config';

const IllustrationContext = createContext({});

export const useIllustrations = () => useContext(IllustrationContext);

export const IllustrationProvider = ({ children }) => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIllustrations = async () => {
      // Ha már van globális cache (pl. router loaderből), azonnal használjuk
      if (window.__illustrations) {
        setImages(window.__illustrations);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/illustrations`);
        const data = await res.json();
        
        // Mentjük a globális cache-be is
        window.__illustrations = data;
        
        // Preload all image illustrations (skip video)
        const preloadedImages = window.__preloadedImages || new Set();
        window.__preloadedImages = preloadedImages;

        Object.entries(data).forEach(([key, url]) => {
          if (url.includes('/image/upload/') && !preloadedImages.has(url)) {
            const img = new Image();
            img.onload = () => preloadedImages.add(url);
            img.src = url;
          }
        });

        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchIllustrations();
  }, []);

  return (
    <IllustrationContext.Provider value={{ images, loading, error }}>
      {children}
    </IllustrationContext.Provider>
  );
};
