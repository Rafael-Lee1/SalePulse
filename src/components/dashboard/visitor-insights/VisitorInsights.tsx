
import { useState } from "react";
import { motion } from "framer-motion";
import { VisitorHeader } from "./VisitorHeader";
import { VisitorChart } from "./VisitorChart";
import { VisitorStats } from "./VisitorStats";

export function VisitorInsights() {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
  
  const data = [
    { name: "Jan", visitors: 500 },
    { name: "Feb", visitors: 800 },
    { name: "Mar", visitors: 1200 },
    { name: "Apr", visitors: 900 },
    { name: "May", visitors: 1500 },
    { name: "Jun", visitors: 2000 },
    { name: "Jul", visitors: 1800 },
    { name: "Aug", visitors: 2200 },
    { name: "Sep", visitors: 2600 },
    { name: "Oct", visitors: 2300 },
    { name: "Nov", visitors: 1900 },
    { name: "Dec", visitors: 2100 },
  ];

  // Calculate total and average visitors
  const totalVisitors = data.reduce((sum, item) => sum + item.visitors, 0);
  const avgVisitors = Math.round(totalVisitors / data.length);

  return (
    <motion.div 
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg">
        <VisitorHeader totalVisitors={totalVisitors} />
        <VisitorChart data={data} setHoveredMonth={setHoveredMonth} />
        <VisitorStats avgVisitors={avgVisitors} />
      </div>
    </motion.div>
  );
}
