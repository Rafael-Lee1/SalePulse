
import { useState } from "react";
import { cn } from "@/lib/utils";
import { StatCardIcon } from "./StatCardIcon";
import { StatCardProgress } from "./StatCardProgress";
import { StatCardChangeIndicator } from "./StatCardChangeIndicator";
import { StatCardMiniChart } from "./StatCardMiniChart";
import { AnimatedNumber } from "@/components/ui/animated-number";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: string;
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  const isPositive = change >= 0;
  
  // Extract numeric value from the value string (e.g., "$1,234" -> 1234)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  
  // Extract currency symbol if present
  const currencySymbol = value.match(/^\D+/)?.[0] || '';
  
  return (
    <div 
      className={cn(
        "bg-[#171821] p-3 rounded-[10px] cursor-pointer",
        "transition-all duration-300 transform hover:translate-y-[-2px]",
        `hover:shadow-lg hover:shadow-${isPositive ? "[#A9DFD8]" : "[#F99999]"}/10`,
        isExpanded ? `scale-105 border border-${isPositive ? "[#A9DFD8]" : "[#F99999]"}/30` : ''
      )}
      onClick={toggleExpand}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-white text-[15px] font-semibold">
            {currencySymbol}
            <AnimatedNumber 
              value={numericValue} 
              showPulse={true} 
              pulseColor={isPositive ? "#A9DFD8" : "#F99999"}
            />
          </span>
          <StatCardIcon icon={icon} isPositive={isPositive} />
        </div>
        <span className="text-[#E8E8E8] text-[10px]">{title}</span>
        <div className="flex justify-between items-center">
          <StatCardChangeIndicator change={change} isPositive={isPositive} />
          <StatCardProgress change={change} isPositive={isPositive} />
        </div>
        
        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-2 pt-2 border-t border-[#2B2B36] animate-fade-in">
            <StatCardMiniChart isPositive={isPositive} />
          </div>
        )}
      </div>
    </div>
  );
}
