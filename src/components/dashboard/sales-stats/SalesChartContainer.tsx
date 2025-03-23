
import { useEffect, useState } from "react";
import { AnimatedChart } from "@/components/ui/chart/animated-chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

// Types
interface SalesData {
  name: string;
  sales: number;
  target: number;
}

interface SalesChartContainerProps {
  selectedFilter: string;
  data: {
    daily: SalesData[];
    weekly: SalesData[];
    monthly: SalesData[];
    yearly: SalesData[];
  };
}

export function SalesChartContainer({ selectedFilter, data }: SalesChartContainerProps) {
  const [animatedData, setAnimatedData] = useState<SalesData[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Get filtered data based on the current filter
  const getFilteredData = () => data[selectedFilter as keyof typeof data] || [];
  
  // Animate data when changing filter
  useEffect(() => {
    setIsUpdating(true);
    setAnimatedData([]);
    
    // Gradually add data points for animation
    const filteredData = getFilteredData();
    const timer = setTimeout(() => {
      setAnimatedData(filteredData);
      setIsUpdating(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedFilter, data]);

  // Real-time data simulation
  useEffect(() => {
    if (animatedData.length === 0 || isUpdating) return;
    
    const interval = setInterval(() => {
      setAnimatedData(prevData => 
        prevData.map(item => ({
          ...item,
          sales: item.sales + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 30),
          target: item.target + (Math.random() > 0.7 ? 1 : -1) * Math.floor(Math.random() * 15)
        }))
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, [animatedData, isUpdating]);

  return (
    <div className="w-full h-[230px] relative">
      <AnimatedChart isLoading={animatedData.length === 0}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={animatedData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2B2B36" />
            <XAxis 
              dataKey="name" 
              stroke="#87888C" 
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: '#2B2B36' }}
            />
            <YAxis 
              stroke="#87888C" 
              fontSize={10}
              tickLine={false}
              axisLine={{ stroke: '#2B2B36' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#171821', 
                border: 'none', 
                borderRadius: '8px', 
                color: 'white',
                padding: '8px 12px'
              }}
              itemStyle={{ color: '#fff' }}
              formatter={(value) => [`$${value}`, '']}
              cursor={{ fill: 'rgba(169, 223, 216, 0.1)' }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }} 
              formatter={(value) => <span style={{ color: '#87888C', fontSize: '10px' }}>{value}</span>}
            />
            <Bar 
              dataKey="sales" 
              name="Sales" 
              fill="#A9DFD8" 
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationEasing="ease-out"
            />
            <Bar 
              dataKey="target" 
              name="Target" 
              fill="#F2C8ED" 
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </AnimatedChart>
      
      {/* Animated pulse to indicate real-time data */}
      <motion.div
        className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#A9DFD8]"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
