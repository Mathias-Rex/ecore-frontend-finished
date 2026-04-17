import { ProductCard } from '../components/ProductCard';
import { getImage } from '../utils/getImage';

const getCrew = product => {
  if (!product.specs?.crew) return 'N/A';
  if (typeof product.specs.crew === 'string') return product.specs.crew;
  return (
    product.specs.crew.crew || product.specs.crew.crewCount || product.specs.crew.personnel || 'N/A'
  );
};

export const ProductList = ({ products }) => (
  <section>
    <div className="container">
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            slug={`spacecraft/${product.id}`}
            name={product.name}
            description={product.description?.overview?.substring(0, 150) + '...'}
            specs={[
              `Max. sebesség: ${product.specs?.performance?.maxSpeed || 'N/A'}`,
              `Hatótáv: ${product.specs?.performance?.range || 'N/A'}`,
              `Legénység: ${getCrew(product)}`,
              `Ár: ${product.pricing?.price || 'N/A'}`,
            ]}
            imageUrl={getImage(product.image, 400, 300)}
          />
        ))}
      </div>
    </div>
  </section>
);
