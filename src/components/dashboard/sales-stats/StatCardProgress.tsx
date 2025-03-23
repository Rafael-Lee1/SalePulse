
import { cn } from "@/lib/utils";

interface StatCardProgressProps {
  change: number;
  isPositive: boolean;
}

export function StatCardProgress({ change, isPositive }: StatCardProgressProps) {
  return (
    <div className="w-16 h-1 bg-[#2B2B36] rounded-full">
      <div 
        className={cn(`h-1 ${isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]"} rounded-full transition-all duration-500`)}
        style={{ width: `${Math.min(Math.abs(change) * 2, 100)}%` }}
      ></div>
    </div>
  );
}
