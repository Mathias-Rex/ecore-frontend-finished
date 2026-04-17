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
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/illustrations`);
        const data = await res.json();
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
