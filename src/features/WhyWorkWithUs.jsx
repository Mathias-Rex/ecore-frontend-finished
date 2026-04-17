import { useIllustrations } from '../context/IllustrationContext';

const benefits = [
  {
    key: 'innovative-environment',
    title: 'Innovatív környezet',
    desc: 'Dolgozz a legmodernebb űrtechnológiákon és légy részese az emberiség jövőjének.',
  },
  {
    key: 'competitive-income',
    title: 'Versenyképes juttatások',
    desc: 'Kiváló fizetés, cafeteria, magánegészségügy és nyugdíjpénztár.',
  },
  {
    key: 'growth-opportunities',
    title: 'Fejlődési lehetőségek',
    desc: 'Folyamatos képzések, tréningek és előrelépési lehetőségek.',
  },
];

export const WhyWorkWithUs = () => {
  const { images } = useIllustrations();

  return (
    <section className="features" style={{ padding: '4rem 20px' }}>
      <div className="container">
        <h2>Miért dolgozz az E-CORE-nál?</h2>
        <div className="feature-grid">
          {benefits.map((benefit, i) => (
            <div key={i} className="feature-card">
              {images[benefit.key] && <img src={images[benefit.key]} alt={benefit.title} />}
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
