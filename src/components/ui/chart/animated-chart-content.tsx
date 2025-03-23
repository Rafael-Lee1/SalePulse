
import { motion } from 'framer-motion';
import * as React from 'react';

interface AnimatedChartContentProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedChartContent({ 
  children, 
  delay = 0 
}: AnimatedChartContentProps) {
  return (
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
  );
}
