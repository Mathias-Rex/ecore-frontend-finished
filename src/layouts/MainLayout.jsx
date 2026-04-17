import { Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { IllustrationProvider } from '../context/IllustrationContext';
import { PageTransition } from '../components/PageTransition';

export const MainLayout = () => (
  <IllustrationProvider>
    <div className="app">
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
