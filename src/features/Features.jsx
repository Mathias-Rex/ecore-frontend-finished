import { useIllustrations } from '../context/IllustrationContext';
import { getImage } from '../utils/getImage';

const featureData = [
  {
    key: 'icon-innovation',
    title: 'Élvonalbeli technológia',
    desc: 'Legmodernebb hajtóművek és navigációs rendszerek, amelyek újradefiniálják az űrutazást.',
  },
  {
    key: 'innovative-environment',
    title: 'Megbízhatóság',
    desc: 'Több mint 25 év tapasztalat az űriparban, több ezer sikeres küldetéssel.',
  },
  {
    key: 'icon-customization',
    title: 'Testreszabhatóság',
    desc: 'Minden járművünk az Ön egyedi igényeihez igazítható moduláris rendszerrel.',
  },
];

export const Features = () => {
  const { images } = useIllustrations();

  return (
    <section className="features">
      <div className="container">
        <h2>Miért válassza az E-CORE-t?</h2>
        <div className="feature-grid">
          {featureData.map((item, i) => (
            <div key={i} className="feature-card">
              {images[item.key] && (
                <img src={getImage(images[item.key], 160, 160)} alt={`${item.title} ikon`} />
              )}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
