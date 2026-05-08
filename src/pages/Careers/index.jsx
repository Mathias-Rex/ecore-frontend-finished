import { useLoaderData } from '@tanstack/react-router';
import { CareerHeader } from '../../features/CareerHeader';
import { CareerIntro } from '../../features/CareerIntro';
import { JobList } from '../../features/JobList';
import { WhyWorkWithUs } from '../../features/WhyWorkWithUs';

export const Careers = () => {
  const jobs = useLoaderData({ from: '/careers' });

  return (
    <>
      <CareerHeader />
      <CareerIntro />
      <JobList jobs={jobs} />
      <WhyWorkWithUs />
    </>
  );
};
