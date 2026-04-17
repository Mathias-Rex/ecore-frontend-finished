import { useIllustrations } from '../context/IllustrationContext';

export const FactoryVideo = () => {
  const { images } = useIllustrations();
  const factoryVideo = images['factory-video'];

  return (
    <section className="video-section">
      <div className="container">
        <h2>Tekintse meg gyártósorunkat működés közben</h2>
        <div className="video-container">
          {factoryVideo ? (
            <video className="factory-video" autoPlay muted loop playsInline>
              <source src={factoryVideo} type="video/mp4" />A böngésző nem támogatja a videó
              lejátszást.
            </video>
          ) : (
            <p>Betöltés...</p>
          )}
        </div>
      </div>
    </section>
  );
};
