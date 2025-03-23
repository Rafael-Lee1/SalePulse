
import { useState } from "react";
import { TrendingUp, TrendingDown, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatData {
  title: string;
  amount: string;
  change: string;
  color: string;
  bgColor: string;
  icon: typeof TrendingUp;
  value: number;
  isPositive: boolean;
}

interface StatCardProps {
  stat: StatData;
  isExpanded: boolean;
  toggleExpand: () => void;
}

export function StatCard({ stat, isExpanded, toggleExpand }: StatCardProps) {
  return (
    <div 
      className={cn(
        "bg-[#171821] p-3 rounded-[10px] cursor-pointer",
        "transition-all duration-300 transform hover:translate-y-[-2px]",
        `hover:shadow-lg hover:shadow-${stat.bgColor}/10`,
        isExpanded ? `scale-105 border border-${stat.bgColor}/30` : ''
      )}
      onClick={toggleExpand}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-white text-[15px] font-semibold">
            {stat.amount}
          </span>
          <div className={`p-1 rounded-full ${stat.bgColor}/10`}>
            <stat.icon size={14} className={stat.color} />
          </div>
        </div>
        <span className="text-[#E8E8E8] text-[10px]">{stat.title}</span>
        <div className="flex justify-between items-center">
          <span className={`${stat.color} text-[8px] flex items-center`}>
            {stat.isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
            {stat.change}
          </span>
          
          {/* Progress bar */}
          <div className="w-16 h-1 bg-[#2B2B36] rounded-full">
            <div 
              className={`h-1 ${stat.bgColor} rounded-full transition-all duration-500`} 
              style={{ width: `${stat.value * 10}%` }}
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
                    className={`absolute bottom-0 left-0 right-0 ${stat.bgColor} rounded-sm`}
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
