
import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface VisitorData {
  name: string;
  visitors: number;
}

interface VisitorChartProps {
  data: VisitorData[];
  setHoveredMonth: (month: string | null) => void;
}

export function VisitorChart({ data, setHoveredMonth }: VisitorChartProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative h-[220px] max-sm:h-[180px] mb-4">
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
            tick={{ fill: 'white', fontSize: isMobile ? 8 : 10 }}
            padding={{ left: 10, right: 10 }}
            // Only show certain ticks on mobile to avoid overcrowding
            tickFormatter={(value, index) => isMobile ? (index % 3 === 0 ? value : '') : value}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#87888C', fontSize: isMobile ? 8 : 10 }}
            width={30}
            // Format large numbers on mobile
            tickFormatter={(value) => isMobile && value > 1000 ? `${Math.floor(value/1000)}k` : value}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#171821', 
              border: 'none', 
              borderRadius: '12px', 
              color: 'white',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
              padding: '10px 14px',
              fontSize: isMobile ? '10px' : '12px'
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
              r: isMobile ? 4 : 6, 
              stroke: '#171821', 
              strokeWidth: 2, 
              fill: '#A9DFD8'
            }} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
