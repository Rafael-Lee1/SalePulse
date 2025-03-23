
import { useState, useEffect, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChartLoader } from './chart-loader';
import { AnimatedChartContent } from './animated-chart-content';
export { chartAnimationVariants, dataPulseAnimation, dataPointAnimation } from './animation-variants';

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
        <ChartLoader />
      ) : isVisible ? (
        <AnimatedChartContent delay={delay}>
          {children}
        </AnimatedChartContent>
      ) : null}
    </AnimatePresence>
  );
}
