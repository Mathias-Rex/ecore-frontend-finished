import { useLocation } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

export const PageTransition = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
