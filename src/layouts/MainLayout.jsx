import { Outlet, useRouterState } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { IllustrationProvider } from '../context/IllustrationContext';
import { PageTransition } from '../components/PageTransition';

export const MainLayout = () => {
  const isLoading = useRouterState({ select: s => s.status === 'pending' });

  return (
    <IllustrationProvider>
      <div className="app" style={{ cursor: isLoading ? 'wait' : undefined }}>
        <Navbar />
        <main>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </IllustrationProvider>
  );
};
