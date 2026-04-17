import { useParams } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { BackButton } from '../../components/BackButton';
import { ShipImage, ShipTitle } from '../../features/ShipHeader';
import { ShipDescription } from '../../features/ShipDescription';
import { ShipSpecs } from '../../features/ShipSpecs';

const useSpacecraft = id => {
  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchSpacecraft = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/spacecrafts/${id}`, {
          credentials: 'omit',
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) {
          if (res.status === 404) {
            setNotFound(true);
          } else {
            throw new Error(`HTTP ${res.status}`);
          }
          return;
        }
        const data = await res.json();
        setCraft(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSpacecraft();
  }, [id]);

  return { craft, loading, error, notFound };
};

export const SpacecraftDetail = () => {
  const { id } = useParams({ from: '/spacecraft/$id' });
  const { craft, loading, error, notFound } = useSpacecraft(id);

  if (loading) return <div className="container">Betöltés...</div>;
  if (error) return <div className="container">Hiba: {error}</div>;
  if (notFound || !craft) {
    return (
      <div className="not-found-page">
        <div className="not-found-content">
          <h1>Űrhajó nem található</h1>
          <p>A keresett űrhajó nem létezik vagy már nem elérhető.</p>
          <a href="/" className="cta-button">
            Vissza a főoldalra
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="ship-detail">
      <div className="container">
        <BackButton type={craft.type} />

        <div className="ship-header">
          <ShipImage image={craft.image} name={craft.name} />
          <ShipTitle name={craft.name} category={craft.category} tagline={craft.tagline} />
        </div>

        <div className="ship-content">
          <ShipDescription description={craft.description} features={craft.features} />
          <ShipSpecs specs={craft.specs} pricing={craft.pricing} />
        </div>
      </div>
    </section>
  );
};
