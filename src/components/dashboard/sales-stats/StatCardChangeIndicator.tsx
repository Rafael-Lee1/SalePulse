
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardChangeIndicatorProps {
  change: number;
  isPositive: boolean;
}

export function StatCardChangeIndicator({ change, isPositive }: StatCardChangeIndicatorProps) {
  const color = isPositive ? "text-[#A9DFD8]" : "text-[#F99999]";
  
  return (
    <motion.span 
      className={`${color} text-[8px] flex items-center`}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
      {Math.abs(change)}%
    </motion.span>
  );
}
