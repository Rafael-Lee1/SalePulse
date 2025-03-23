
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProgressProps {
  change: number;
  isPositive: boolean;
}

export function StatCardProgress({ change, isPositive }: StatCardProgressProps) {
  const progressValue = Math.min(Math.abs(change) * 2, 100);
  
  return (
    <div className="w-16 h-1 bg-[#2B2B36] rounded-full overflow-hidden">
      <motion.div 
        className={cn(`h-1 ${isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]"} rounded-full`)}
        initial={{ width: 0 }}
        animate={{ width: `${progressValue}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      ></motion.div>
    </div>
  );
}
