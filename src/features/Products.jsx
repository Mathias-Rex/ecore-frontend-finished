import { useIllustrations } from '../context/IllustrationContext';
import { getImage } from '../utils/getImage';

const categoryData = [
  {
    key: 'category-commerce',
    slug: 'commercial',
    title: 'Kereskedelmi járművek',
    desc: 'Hatékony szállítási megoldások bolygók és állomások között',
  },
  {
    key: 'category-mining',
    slug: 'mining',
    title: 'Bányászati járművek',
    desc: 'Speciális felszerelések aszteroida és bolygó bányászathoz',
  },
  {
    key: 'category-research',
    slug: 'research',
    title: 'Kutatási járművek',
    desc: 'Fejlett szenzorokkal felszerelt felfedező űrhajók',
  },
  {
    key: 'category-combat',
    slug: 'battleships',
    title: 'Harcászati járművek',
    desc: 'Védelmi és biztonsági célú űrjárművek',
  },
];

export const Products = () => {
  const { images } = useIllustrations();

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Termékkategóriák</h2>
        <div className="product-categories">
          {categoryData.map(cat => (
            <a key={cat.key} href={`/category/${cat.slug}`} className="category-card">
              <div className="product-image-container">
                <canvas className="smoke-canvas"></canvas>
                {images[cat.key] && (
                  <img src={getImage(images[cat.key], 330, 200)} alt={cat.title} />
                )}
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
