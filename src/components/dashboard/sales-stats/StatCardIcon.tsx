
import { DollarSign, Target, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Map of icon names to components
const IconMap = {
  DollarSign,
  Target,
  TrendingUp,
  TrendingDown
};

interface StatCardIconProps {
  icon: string;
  isPositive: boolean;
}

export function StatCardIcon({ icon, isPositive }: StatCardIconProps) {
  const IconComponent = IconMap[icon as keyof typeof IconMap] || TrendingUp;
  const color = isPositive ? "text-[#A9DFD8]" : "text-[#F99999]";
  
  return (
    <div className={cn(`p-1 rounded-full ${isPositive ? "bg-[#A9DFD8]/10" : "bg-[#F99999]/10"}`)}>
      <IconComponent size={14} className={color} />
    </div>
  );
}
