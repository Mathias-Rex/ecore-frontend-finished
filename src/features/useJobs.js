import { useState, useEffect } from 'react';

const JOBS_DATA = [
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

export const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 800));
        setJobs(JOBS_DATA);
      } catch (err) {
        setError(err.message || 'Hiba történt az állások betöltése közben.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return { jobs, loading, error };
};
