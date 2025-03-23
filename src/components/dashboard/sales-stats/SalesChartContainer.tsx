
import { useEffect, useState } from "react";
import { ChartAnimation } from "@/components/ui/chart/chart-animations";
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
  
  // Get filtered data based on the current filter
  const getFilteredData = () => data[selectedFilter as keyof typeof data] || [];
  
  // Animate data when changing filter
  useEffect(() => {
    setAnimatedData([]);
    
    // Gradually add data points for animation
    const filteredData = getFilteredData();
    const timer = setTimeout(() => {
      setAnimatedData(filteredData);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedFilter, data]);

  return (
    <div className="w-full h-[230px]">
      <ChartAnimation>
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
      </ChartAnimation>
    </div>
  );
}
