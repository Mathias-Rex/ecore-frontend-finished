import { useParams, useLoaderData } from '@tanstack/react-router';
import { CategoryHeader } from '../../features/CategoryHeader';
import { ProductList } from '../../features/ProductList';

const categoryData = {
  commercial: {
    title: 'Kereskedelmi járművek',
    subtitle: 'Hatékony szállítási megoldások bolygók és állomások között',
  },
  mining: {
    title: 'Bányászati járművek',
    subtitle: 'Speciális felszerelések aszteroida és bolygó bányászathoz',
  },
  research: {
    title: 'Kutatási járművek',
    subtitle: 'Fejlett szenzorokkal felszerelt felfedező űrhajók',
  },
  battleships: {
    title: 'Harcászati járművek',
    subtitle: 'Védelmi és biztonsági célú űrjárművek',
  },
};

export const Category = () => {
  const { category } = useParams({ from: '/category/$category' });
  const spacecrafts = useLoaderData({ from: '/category/$category' });
  const { title, subtitle } = categoryData[category] || { title: category, subtitle: '' };

  return (
    <>
      <CategoryHeader title={title} subtitle={subtitle} />
      <ProductList products={spacecrafts} />
    </>
  );
};
