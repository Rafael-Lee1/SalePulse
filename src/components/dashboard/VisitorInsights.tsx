
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, Users } from "lucide-react";

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
        
        <div className="relative h-[220px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={data} 
              margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              onMouseMove={(data) => {
                if (data.activeTooltipIndex !== undefined) {
                  setHoveredMonth(data.activePayload?.[0].payload.name);
                } else {
                  setHoveredMonth(null);
                }
              }}
              onMouseLeave={() => setHoveredMonth(null)}
            >
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', fontSize: 10 }}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#87888C', fontSize: 10 }}
                width={30}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171821', 
                  border: 'none', 
                  borderRadius: '12px', 
                  color: 'white',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                  padding: '10px 14px'
                }}
                labelStyle={{ color: '#A9DFD8', fontWeight: 600, marginBottom: 5 }}
                formatter={(value) => [`${value.toLocaleString()} visitors`, '']}
                cursor={{ stroke: '#A9DFD8', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Area 
                type="monotone" 
                dataKey="visitors" 
                stroke="#A9DFD8" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorVisitors)" 
                activeDot={{ 
                  r: 6, 
                  stroke: '#171821', 
                  strokeWidth: 2, 
                  fill: '#A9DFD8'
                }} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/5">
          <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
            <div className="text-[#87888C] text-xs mb-1">Average</div>
            <div className="text-white text-sm font-medium">{avgVisitors.toLocaleString()} visitors</div>
          </div>
          <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
            <div className="text-[#87888C] text-xs mb-1">Growth</div>
            <div className="text-white text-sm font-medium">+23.4% YoY</div>
          </div>
          <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
            <div className="text-[#87888C] text-xs mb-1">Conversion</div>
            <div className="text-white text-sm font-medium">4.7%</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
