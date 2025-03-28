
import { motion } from "framer-motion";
import * as React from "react";

export interface ChartAnimationProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  showPulse?: boolean;
}

export const ChartAnimation = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  showPulse = true
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
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {children}
      
      {showPulse && (
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#A9DFD8]"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
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

export const dataPointAnimations = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
  },
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 0 4px rgba(169, 223, 216, 0.7))",
  }
};

export const updateChartData = <T extends Record<string, any>>(
  data: T[], 
  keys: string[],
  minChange: number = 1,
  maxChange: number = 30,
  changeChance: number = 0.5
): T[] => {
  return data.map(item => {
    // Create a shallow copy of the item
    const newItem = { ...item } as T;
    
    // Update specified keys with random changes
    keys.forEach(key => {
      if (Math.random() > changeChance) {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = Math.floor(Math.random() * (maxChange - minChange + 1)) + minChange;
        const currentValue = item[key];
        
        // Only modify if the current value is a number
        if (typeof currentValue === 'number') {
          // Create a new object with the updated value
          // This avoids directly modifying the generic type T
          const updatedValue = Math.max(0, currentValue + direction * change);
          
          // Use type assertion with a Record to safely assign the property
          (newItem as Record<string, any>)[key] = updatedValue;
        }
      }
    });
    
    return newItem;
  });
};
