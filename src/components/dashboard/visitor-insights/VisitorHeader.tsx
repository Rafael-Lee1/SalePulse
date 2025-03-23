
import { TrendingUp, Calendar, Users } from "lucide-react";

interface VisitorHeaderProps {
  totalVisitors: number;
}

export function VisitorHeader({ totalVisitors }: VisitorHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <h2 className="text-white text-[17px] font-semibold flex items-center gap-2">
        <TrendingUp size={18} className="text-[#A9DFD8]" />
        Visitor Insights
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Calendar size={14} className="text-[#87888C]" />
          <span className="text-[#87888C] text-xs">2023</span>
        </div>
        <div className="flex items-center gap-1">
          <Users size={14} className="text-[#A9DFD8]" />
          <span className="text-[#A9DFD8] text-xs font-medium">{totalVisitors.toLocaleString()} total</span>
        </div>
      </div>
    </div>
  );
}
