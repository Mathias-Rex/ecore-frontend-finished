const jobs = [
  {
    id: 1,
    title: 'Takarító',
    department: 'Üzemeltetési Osztály',
    count: 270,
    description:
      'Gyártósoraink és irodáink tisztaságának fenntartása. Műszakos munkarend, versenyképes fizetés és cafeteria csomag.',
    requirements: null,
    type: 'Teljes munkaidő',
    location: 'Pécs, Naprendszer',
    salary: null,
    featured: false,
  },
  {
    id: 2,
    title: 'Űrjármű Tervező Mérnök',
    department: 'Kutatás-Fejlesztési Osztály',
    count: 1,
    description:
      'Következő generációs űrjárművek tervezése és fejlesztése. Minimum 5 év tapasztalat űriparban, CAD és szimuláció szoftverek ismerete szükséges.',
    requirements: 'Mérnöki diploma, Űrtechnológiai tapasztalat, Angol nyelvtudás',
    type: 'Teljes munkaidő',
    location: 'Mars Kolónia, Naprendszer',
    salary: 'Fizetés: Kiemelt',
    featured: true,
  },
  {
    id: 3,
    title: 'Programozó (4 órás)',
    department: 'IT Osztály',
    count: 1,
    description:
      'Űrhajó navigációs rendszerek és irányítóprogramok fejlesztése. Napi 4 órás munkavégzés rugalmas időbeosztással, home office lehetőség.',
    requirements: 'Python, C++, JavaScript ismeretek, Verziókezelés (Git)',
    type: 'Részmunkaidő (4 óra/nap)',
    location: 'Távmunka / Pécs',
    salary: null,
    featured: false,
  },
  {
    id: 4,
    title: 'Konyhás néni',
    department: 'Éttermi Szolgáltatások',
    count: 134,
    description:
      'Munkatársaink ellátása finom, tápláló ételekkel a vállalati étkezdében. Tapasztalat előny, de nem feltétel. Családias munkahelyi légkör.',
    requirements: 'Élelmiszeripari tapasztalat, Higiéniai bizonyítvány',
    type: 'Teljes munkaidő',
    location: 'Pécs, Naprendszer',
    salary: null,
    featured: false,
  },
];

const handleApply = jobTitle => {
  alert(
    `Köszönjük érdeklődését a(z) "${jobTitle}" pozíció iránt!\n\nJelentkezését hamarosan feldolgozzuk.`
  );
};

export const JobCard = ({ job }) => (
  <div className={`job-card ${job.featured ? 'job-featured' : ''}`}>
    {job.featured && <div className="featured-badge">Kiemelt pozíció</div>}
    <div className="job-header">
      <div>
        <h3 className="job-title">{job.title}</h3>
        <p className="job-department">{job.department}</p>
      </div>
      <div className="job-count">{job.count} pozíció</div>
    </div>
    <div className="job-details">
      <p className="job-description">{job.description}</p>
      {job.requirements && (
        <div className="job-requirements">
          <strong>Elvárások:</strong> {job.requirements}
        </div>
      )}
      <div className="job-meta">
        <span className="job-type">{job.type}</span>
        <span className="job-location">{job.location}</span>
        {job.salary && <span className="job-salary">{job.salary}</span>}
      </div>
    </div>
    <button className="apply-button" onClick={() => handleApply(job.title)}>
      Jelentkezem
    </button>
  </div>
);

export const JobList = () => (
  <section style={{ padding: '0 20px 5rem' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem' }}>
        Aktuális állásajánlatok
      </h2>
      <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </section>
);
