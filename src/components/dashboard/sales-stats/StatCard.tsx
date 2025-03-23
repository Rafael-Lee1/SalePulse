
import { useState } from "react";
import { DollarSign, Target, TrendingUp, TrendingDown, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Map of icon names to components
const IconMap = {
  DollarSign,
  Target,
  TrendingUp,
  TrendingDown
};

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
  const IconComponent = IconMap[icon as keyof typeof IconMap] || TrendingUp;
  
  // Color scheme based on positive/negative change
  const color = isPositive ? "text-[#A9DFD8]" : "text-[#F99999]";
  const bgColor = isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]";
  
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
            {value}
          </span>
          <div className={`p-1 rounded-full ${isPositive ? "bg-[#A9DFD8]/10" : "bg-[#F99999]/10"}`}>
            <IconComponent size={14} className={color} />
          </div>
        </div>
        <span className="text-[#E8E8E8] text-[10px]">{title}</span>
        <div className="flex justify-between items-center">
          <span className={`${color} text-[8px] flex items-center`}>
            {isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
            {Math.abs(change)}%
          </span>
          
          {/* Progress bar */}
          <div className="w-16 h-1 bg-[#2B2B36] rounded-full">
            <div 
              className={`h-1 ${isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]"} rounded-full transition-all duration-500`} 
              style={{ width: `${Math.min(Math.abs(change) * 2, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {/* Expanded content */}
        {isExpanded && (
          <div className="mt-2 pt-2 border-t border-[#2B2B36] animate-fade-in">
            <div className="text-[#A0A0A0] text-[8px] flex justify-between">
              <span>Last Week</span>
              <span>This Week</span>
            </div>
            <div className="h-10 flex items-end gap-1 mt-1">
              {[65, 40, 85, 30, 90, 75, 60].map((height, i) => (
                <div key={i} className="flex-1 bg-[#2B2B36] rounded-sm relative" style={{ height: `${height}%` }}>
                  <div 
                    className={`absolute bottom-0 left-0 right-0 ${isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]"} rounded-sm`}
                    style={{ height: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
