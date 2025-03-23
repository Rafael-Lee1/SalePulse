
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  formatter?: (value: number) => string;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  useSpring?: boolean;
  showPulse?: boolean;
  pulseColor?: string;
}

export function AnimatedNumber({
  value,
  formatter = (val) => val.toLocaleString(),
  duration = 0.8,
  className = "",
  prefix = "",
  suffix = "",
  useSpring = true,
  showPulse = false,
  pulseColor = "#A9DFD8"
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValueRef = useRef(value);

  // Update value with animation
  useEffect(() => {
    // Don't animate on initial render
    if (prevValueRef.current === value) return;
    
    let startTime: number;
    let animationFrame: number;
    const startValue = prevValueRef.current;
    const endValue = value;
    const valueChange = endValue - startValue;
    const animationDuration = duration * 1000; // Convert to ms

    // Animation function
    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Apply easing function for smoother animation
      const easedProgress = useSpring
        ? cubicBezier(0.34, 1.56, 0.64, 1)(progress) // Spring-like effect
        : easeOutQuad(progress); // Simple easing
      
      const currentValue = startValue + valueChange * easedProgress;
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValue);
      }
    };

    // Start animation
    animationFrame = requestAnimationFrame(animateValue);
    
    // Update reference for next animation
    prevValueRef.current = value;

    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, useSpring]);

  // Format the display value
  const formattedValue = formatter(displayValue);

  return (
    <span className={`relative inline-block ${className}`}>
      {prefix}{formattedValue}{suffix}
      
      {showPulse && Math.abs(value - prevValueRef.current) > 0 && (
        <motion.span
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: pulseColor }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
    </span>
  );
}

// Animation helper functions
const easeOutQuad = (t: number): number => t * (2 - t);

const cubicBezier = (x1: number, y1: number, x2: number, y2: number) => {
  return (t: number): number => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    
    // Approximation of cubic bezier curve
    const t2 = t * t;
    const t3 = t2 * t;
    return 3 * t * (1 - t) * (1 - t) * y1 + 3 * t2 * (1 - t) * y2 + t3;
  };
};
