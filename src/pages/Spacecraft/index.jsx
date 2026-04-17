import { useLoaderData } from '@tanstack/react-router';
import { BackButton } from '../../components/BackButton';
import { ShipTitle } from '../../features/ShipHeader';
import { ImageModal } from '../../components/ImageModal';
import { ShipDescription } from '../../features/ShipDescription';
import { ShipSpecs } from '../../features/ShipSpecs';

export const SpacecraftDetail = () => {
  const craft = useLoaderData({ from: '/spacecraft/$id' });

  return (
    <section className="ship-detail">
      <div className="container">
        <BackButton />

        <div className="ship-header">
          <ImageModal src={craft.image} alt={craft.name} />
          <ShipTitle name={craft.name} category={craft.category} tagline={craft.tagline} />
        </div>

        <div className="ship-content">
          <ShipDescription description={craft.description} features={craft.features} />
          <ShipSpecs specs={craft.specs} pricing={craft.pricing} />
        </div>
      </div>
    </section>
  );
};
