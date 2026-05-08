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

export const JobList = ({ jobs = [] }) => (
  <section style={{ padding: '0 20px 5rem' }}>
    <div className="container">
      <h2 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem' }}>
        Aktuális állásajánlatok
      </h2>
      <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
            Jelenleg nincs nyitott pozíciónk.
          </p>
        )}
      </div>
    </div>
  </section>
);
