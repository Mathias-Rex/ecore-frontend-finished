import { useEffect, useRef } from 'react';

export const SmokeCanvas = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const smokeMachineRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  const intensityRef = useRef(0.75);
  const targetIntensityRef = useRef(0.75);

  useEffect(() => {
    const initSmoke = () => {
      const canvas = canvasRef.current;
      const container = containerRef?.current || canvas?.parentElement;
      if (!canvas || !container) return;

      const img = container.querySelector('img');
      if (!img) return;

      const init = () => {
        canvas.width = img.offsetWidth || 300;
        canvas.height = img.offsetHeight || 200;

        const ctx = canvas.getContext('2d');

        if (typeof window.SmokeMachine === 'function') {
          smokeMachineRef.current = window.SmokeMachine(ctx, [180, 180, 180]);
          smokeMachineRef.current.start();
          intensityRef.current = 0.75;

          const animate = () => {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTimeRef.current;
            lastTimeRef.current = currentTime;

            intensityRef.current += (targetIntensityRef.current - intensityRef.current) * 0.03;

            if (Math.random() < intensityRef.current * 0.12) {
              const x = Math.random() * canvas.width;
              const y = canvas.height - 10;
              smokeMachineRef.current.addsmoke(x, y, 1);
            }

            smokeMachineRef.current.step(deltaTime * 0.3);
            animationRef.current = requestAnimationFrame(animate);
          };

          animate();

          container.addEventListener('mouseenter', () => {
            targetIntensityRef.current = 0.25;
          });

          container.addEventListener('mouseleave', () => {
            targetIntensityRef.current = 0.75;
          });
        }
      };

      if (img.complete) {
        init();
      } else {
        img.addEventListener('load', init);
      }

      const handleResize = () => {
        if (img.offsetWidth && img.offsetHeight) {
          canvas.width = img.offsetWidth;
          canvas.height = img.offsetHeight;
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    };

    const timeoutId = setTimeout(initSmoke, 100);
    return () => clearTimeout(timeoutId);
  }, [containerRef]);

  return <canvas ref={canvasRef} className="smoke-canvas" />;
};
