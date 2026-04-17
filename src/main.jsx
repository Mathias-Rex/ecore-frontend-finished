import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { AuthUnlockProvider } from './context/AuthUnlockContext';
import { LoadingProvider } from './context/LoadingContext';
import { LoadingSpinner } from './components/LoadingSpinner';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthUnlockProvider>
      <LoadingProvider>
        <RouterProvider router={router} />
        <LoadingSpinner />
      </LoadingProvider>
    </AuthUnlockProvider>
  </StrictMode>
);
