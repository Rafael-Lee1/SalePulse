
import { ChevronUp, ChevronDown } from "lucide-react";

interface StatCardChangeIndicatorProps {
  change: number;
  isPositive: boolean;
}

export function StatCardChangeIndicator({ change, isPositive }: StatCardChangeIndicatorProps) {
  const color = isPositive ? "text-[#A9DFD8]" : "text-[#F99999]";
  
  return (
    <span className={`${color} text-[8px] flex items-center`}>
      {isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
      {Math.abs(change)}%
    </span>
  );
}
