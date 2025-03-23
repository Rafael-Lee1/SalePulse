
import { motion } from "framer-motion";
import * as React from "react";

export interface ChartAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export const ChartAnimation = ({ 
  children, 
  delay = 0, 
  duration = 0.5 
}: ChartAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration, 
        delay, 
        ease: "easeOut" 
      }}
      style={{ width: "100%", height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

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
