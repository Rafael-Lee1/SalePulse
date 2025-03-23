
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/ui/animated-number";

interface VisitorStatsProps {
  avgVisitors: number;
}

export function VisitorStats({ avgVisitors }: VisitorStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/5">
      <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
        <div className="text-[#87888C] text-xs mb-1">Average</div>
        <div className="text-white text-sm font-medium">
          <AnimatedNumber 
            value={avgVisitors} 
            suffix=" visitors" 
            showPulse={true}
          />
        </div>
      </div>
      <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
        <div className="text-[#87888C] text-xs mb-1">Growth</div>
        <div className="text-white text-sm font-medium">
          <AnimatedNumber 
            value={23.4} 
            formatter={(value) => `+${value.toFixed(1)}`} 
            suffix="% YoY" 
            showPulse={true}
          />
        </div>
      </div>
      <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
        <div className="text-[#87888C] text-xs mb-1">Conversion</div>
        <div className="text-white text-sm font-medium">
          <AnimatedNumber 
            value={4.7} 
            formatter={(value) => value.toFixed(1)} 
            suffix="%" 
            showPulse={true}
          />
        </div>
      </div>
    </div>
  );
}
