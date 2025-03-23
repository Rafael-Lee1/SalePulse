
import { motion } from 'framer-motion';
import * as React from 'react';

interface ChartLoaderProps {
  size?: number;
  color?: string;
}

export function ChartLoader({ 
  size = 12, 
  color = '#A9DFD8' 
}: ChartLoaderProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{ 
            borderWidth: '4px', 
            borderColor: color, 
            borderTopColor: 'transparent' 
          }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>
    </div>
  );
}
