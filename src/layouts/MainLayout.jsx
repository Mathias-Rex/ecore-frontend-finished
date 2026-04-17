import { Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { IllustrationProvider } from '../context/IllustrationContext';

export const MainLayout = () => (
  <IllustrationProvider>
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </IllustrationProvider>
);
