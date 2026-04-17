import { useLoading } from '../../context/LoadingContext';

export const LoadingSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="spinner-orbit" />
        <div className="spinner-core" />
      </div>
    </div>
  );
};
