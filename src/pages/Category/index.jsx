import { useParams } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { API_URL } from '../../config';
import { CategoryHeader } from '../../features/CategoryHeader';
import { ProductList } from '../../features/ProductList';

const categoryData = {
  commercial: {
    title: 'Kereskedelmi járművek',
    subtitle: 'Hatékony szállítási megoldások bolygók és állomások között',
    type: 'commercial',
  },
  mining: {
    title: 'Bányászati járművek',
    subtitle: 'Speciális felszerelések aszteroida és bolygó bányászathoz',
    type: 'mining',
  },
  research: {
    title: 'Kutatási járművek',
    subtitle: 'Fejlett szenzorokkal felszerelt felfedező űrhajók',
    type: 'research',
  },
  battleships: {
    title: 'Harcászati járművek',
    subtitle: 'Védelmi és biztonsági célú űrjárművek',
    type: 'battleship',
  },
};

export const Category = () => {
  const { category } = useParams({ from: '/category/$category' });
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const data = categoryData[category] || { title: category, subtitle: '', type: category };

  useEffect(() => {
    const fetchSpacecrafts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/spacecrafts/type/${data.type}`, {
          credentials: 'omit',
          headers: { Accept: 'application/json' },
        });
        const jsonData = await res.json();
        setSpacecrafts(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSpacecrafts();
  }, [data.type]);

  if (loading) return <div className="container">Betöltés...</div>;
  if (error) return <div className="container">Hiba: {error}</div>;

  return (
    <>
      <CategoryHeader title={data.title} subtitle={data.subtitle} />
      <ProductList products={spacecrafts} />
    </>
  );
};
