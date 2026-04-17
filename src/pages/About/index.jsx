import { Link } from '@tanstack/react-router';
import { useIllustrations } from '../../context/IllustrationContext';
import { useRef, useState } from 'react';
import { SmokeCanvas } from '../../components/SmokeCanvas';

const AboutSection = ({ title, paragraphs, imageKey, reverse = false }) => {
  const imageRef = useRef(null);
  const { images, loading: ctxLoading } = useIllustrations();
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageSrc = images[imageKey];
  const showSpinner = ctxLoading || (!imgLoaded && imageSrc);

  return (
    <div className={`about-grid ${reverse ? 'reverse' : ''}`}>
      <div className="about-text">
        <h3>{title}</h3>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="about-image" ref={imageRef}>
        {showSpinner && <div className="image-loader"></div>}
        <SmokeCanvas containerRef={imageRef} />
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            onLoad={() => setImgLoaded(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        )}
      </div>
    </div>
  );
};

const ValueCard = ({ title, description }) => (
  <div className="value-card">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <h4 className="stat-number">{number}</h4>
    <p>{label}</p>
  </div>
);

const stats = [
  { number: '4', label: 'Gyár a Naprendszerben' },
  { number: '12,431', label: 'Munkatárs világszerte' },
  { number: '15,736', label: 'Leszállított jármű' },
  { number: '567', label: 'Szabadalom és innováció' },
];

const values = [
  {
    title: 'Innováció',
    description:
      'Folyamatosan keressük az új megoldásokat és technológiákat, hogy járműveink a legjobbak legyenek az iparágban.',
  },
  {
    title: 'Minőség',
    description:
      'Minden járművünk szigorú minőségellenőrzésen esik át, hogy garantáljuk a megbízhatóságot és a biztonságot.',
  },
  {
    title: 'Fenntarthatóság',
    description:
      'Elkötelezettek vagyunk amellett, hogy minimalizáljuk környezeti lábnyomunkat és felelősségteljesen bánjunk az erőforrásokkal.',
  },
  {
    title: 'Ügyfél fókusz',
    description:
      'Ügyfeleink igényei állnak működésünk középpontjában. Minden járművünk testreszabható az egyedi követelményeknek megfelelően.',
  },
];

export const About = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <AboutSection
          title="Történetünk"
          imageKey="about-factory"
          paragraphs={[
            'Az E-CORE (Extragalactic Combat & Orbital Recon Engine) Űrjárművek 2001-ben alakult meg azzal a vízióval, hogy demokratizálja az űrutazást és elérhetővé tegye a legmodernebb űrtechnológiát minden szervezet és civilizáció számára.',
            'Az elmúlt 25 évben több mint 15,000 űrjárművet gyártottunk, amelyek szállítanak árukat, kutatatják az univerzumot, bányásznak nyersanyagokat és védik az űrállomásokat szerte a galaxisban.',
            'Mérnökeink és tudósaink folyamatosan dolgoznak a következő generációs hajtóművek, védelmi rendszerek és navigációs technológiák kifejlesztésén.',
          ]}
        />

        <AboutSection
          title="Innovációnk"
          imageKey="about-research"
          reverse
          paragraphs={[
            'Kutatási részlegünk évente több milliárd kreditet fektet be új technológiák fejlesztésébe. Legutóbbi áttörésünk a kvantum-hajtómű területén forradalmasította az űrutazást.',
            'Büszkék vagyunk arra, hogy több mint 500 szabadalommal rendelkezünk az űrjármű-technológia területén, és szoros együttműködésben dolgozunk vezető egyetemekkel és kutatóintézetekkel.',
            'Fenntarthatóság iránti elkötelezettségünk vezérel minket: minden járművünk 90%-ban újrahasznosítható anyagokból készül.',
          ]}
        />

        <h2 className="section-title">Értékeink</h2>

        <div className="values-grid">
          {values.map((v, i) => (
            <ValueCard key={i} title={v.title} description={v.description} />
          ))}
        </div>

        <div className="stats-section">
          <h3 className="stats-title">Gyártási létesítményeink</h3>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} number={s.number} label={s.label} />
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h3>Csatlakozz hozzánk!</h3>
          <p>
            Keress minket bizalommal bármilyen kérdéssel kapcsolatban, vagy ha csatlakoznál
            csapatunkhoz.
          </p>
          <Link to="/careers" className="cta-button">
            Karrier lehetőségek
          </Link>
        </div>
      </div>
    </section>
  );
};
