
import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedChartProps {
  children: ReactNode;
  isLoading?: boolean;
  delay?: number;
}

export function AnimatedChart({ 
  children, 
  isLoading = false, 
  delay = 0 
}: AnimatedChartProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full flex items-center justify-center"
        >
          <div className="relative w-12 h-12">
            <motion.div 
              className="absolute top-0 left-0 w-full h-full border-4 border-[#A9DFD8] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>
        </motion.div>
      ) : isVisible ? (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: delay / 1000,
            ease: "easeOut"
          }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export const chartAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const dataPulseAnimation = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const dataPointAnimation = {
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 0 4px rgba(169, 223, 216, 0.7))",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};
